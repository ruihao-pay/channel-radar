const SESSION_COOKIE = "tdr_session";
const STATE_COOKIE = "tdr_oauth_state";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/auth/login") {
      return startLogin(request, env);
    }

    if (url.pathname === "/auth/callback") {
      return finishLogin(request, env);
    }

    if (url.pathname === "/auth/logout") {
      return logout();
    }

    const session = await readSession(request, env);
    if (!session) {
      return unauthorized(url);
    }

    const response = await env.ASSETS.fetch(request);
    return withSecurityHeaders(response);
  },
};

async function startLogin(request, env) {
  requireEnv(env, ["FEISHU_APP_ID", "FEISHU_REDIRECT_URI", "SESSION_SECRET"]);

  const state = crypto.randomUUID();
  const url = new URL(env.FEISHU_AUTH_BASE);
  url.searchParams.set("client_id", env.FEISHU_APP_ID);
  url.searchParams.set("redirect_uri", env.FEISHU_REDIRECT_URI);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("state", state);
  if (env.FEISHU_SCOPE) {
    url.searchParams.set("scope", env.FEISHU_SCOPE);
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: url.toString(),
      "Set-Cookie": cookie(STATE_COOKIE, state, {
        maxAge: 600,
        httpOnly: true,
        sameSite: "Lax",
      }),
      ...baseHeaders(),
    },
  });
}

async function finishLogin(request, env) {
  requireEnv(env, [
    "FEISHU_APP_ID",
    "FEISHU_APP_SECRET",
    "FEISHU_REDIRECT_URI",
    "SESSION_SECRET",
  ]);

  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const expectedState = getCookie(request, STATE_COOKIE);

  if (!code || !state || !expectedState || state !== expectedState) {
    return deny("登录状态校验失败，请重新登录。");
  }

  const token = await exchangeCodeForToken(code, env);
  const userAccessToken = token.access_token || token.user_access_token;
  if (!userAccessToken) {
    throw new Error("Feishu token response missing user access token");
  }
  const user = await fetchFeishuUser(userAccessToken, env);
  const gate = checkCompanyUser(user, env);

  if (!gate.ok) {
    return deny(gate.reason);
  }

  const ttl = Number(env.SESSION_TTL_SECONDS || 28800);
  const session = {
    sub: user.open_id || user.union_id || user.user_id,
    name: user.name || user.en_name || "",
    email: user.email || user.enterprise_email || "",
    tenant_key: user.tenant_key || "",
    exp: Math.floor(Date.now() / 1000) + ttl,
  };
  const signed = await signSession(session, env);
  const headers = new Headers({
    Location: "/",
    ...baseHeaders(),
  });
  headers.append(
    "Set-Cookie",
    cookie(SESSION_COOKIE, signed, {
      maxAge: ttl,
      httpOnly: true,
      sameSite: "Lax",
    }),
  );
  headers.append(
    "Set-Cookie",
    cookie(STATE_COOKIE, "", {
      maxAge: 0,
      httpOnly: true,
      sameSite: "Lax",
    }),
  );

  return new Response(null, {
    status: 302,
    headers,
  });
}

function unauthorized(url) {
  const login = new URL("/auth/login", url.origin);
  return new Response(
    `<!doctype html><meta charset="utf-8"><title>需要登录</title>
    <style>body{font-family:-apple-system,BlinkMacSystemFont,"PingFang SC",Arial,sans-serif;background:#f9fafb;color:#111827;display:grid;place-items:center;min-height:100vh;margin:0}main{background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:28px;width:min(92vw,460px);box-shadow:0 12px 32px rgba(17,24,39,.08)}a{display:inline-block;margin-top:16px;background:#111827;color:white;text-decoration:none;padding:10px 14px;border-radius:6px}</style>
    <main><h1>需要飞书登录</h1><p>仅允许公司飞书租户内用户访问通道雷达。</p><a href="${escapeHtml(login.pathname)}">使用飞书登录</a></main>`,
    { status: 401, headers: { "Content-Type": "text/html; charset=utf-8", ...baseHeaders() } },
  );
}

function deny(message) {
  return new Response(
    `<!doctype html><meta charset="utf-8"><title>拒绝访问</title>
    <style>body{font-family:-apple-system,BlinkMacSystemFont,"PingFang SC",Arial,sans-serif;background:#f9fafb;color:#111827;display:grid;place-items:center;min-height:100vh;margin:0}main{background:#fff;border:1px solid #fecaca;border-radius:8px;padding:28px;width:min(92vw,460px);box-shadow:0 12px 32px rgba(17,24,39,.08)}a{display:inline-block;margin-top:16px;background:#111827;color:white;text-decoration:none;padding:10px 14px;border-radius:6px}</style>
    <main><h1>拒绝访问</h1><p>${escapeHtml(message)}</p><a href="/auth/login">重新登录</a></main>`,
    { status: 403, headers: { "Content-Type": "text/html; charset=utf-8", ...baseHeaders() } },
  );
}

function logout() {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/",
      "Set-Cookie": cookie(SESSION_COOKIE, "", {
        maxAge: 0,
        httpOnly: true,
        sameSite: "Lax",
      }),
      ...baseHeaders(),
    },
  });
}

async function exchangeCodeForToken(code, env) {
  const response = await fetch(env.FEISHU_TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      grant_type: "authorization_code",
      client_id: env.FEISHU_APP_ID,
      client_secret: env.FEISHU_APP_SECRET,
      code,
      redirect_uri: env.FEISHU_REDIRECT_URI,
    }),
  });
  const payload = await response.json();
  if (!response.ok || payload.code !== 0) {
    throw new Error(`Feishu token exchange failed: ${JSON.stringify(payload)}`);
  }
  return payload.data;
}

async function fetchFeishuUser(userAccessToken, env) {
  const response = await fetch(env.FEISHU_USERINFO_ENDPOINT, {
    headers: { Authorization: `Bearer ${userAccessToken}` },
  });
  const payload = await response.json();
  if (!response.ok || payload.code !== 0) {
    throw new Error(`Feishu userinfo failed: ${JSON.stringify(payload)}`);
  }
  return payload.data;
}

function checkCompanyUser(user, env) {
  if (env.FEISHU_TENANT_KEY && user.tenant_key !== env.FEISHU_TENANT_KEY) {
    return { ok: false, reason: "当前飞书账号不属于允许访问的公司租户。" };
  }

  const email = (user.email || user.enterprise_email || "").toLowerCase();
  const allowedEmails = parseList(env.ALLOWED_EMAILS);
  if (allowedEmails.length && !allowedEmails.includes(email)) {
    return { ok: false, reason: "当前飞书账号不在允许访问名单内。" };
  }

  const allowedDomains = parseList(env.ALLOWED_EMAIL_DOMAINS);
  if (allowedDomains.length) {
    if (!allowedDomains.some((domain) => email.endsWith(`@${domain}`))) {
      return { ok: false, reason: "当前飞书账号邮箱域不在允许范围内。" };
    }
  }

  if (!env.FEISHU_TENANT_KEY && !allowedEmails.length && !allowedDomains.length) {
    return { ok: false, reason: "服务端尚未配置公司租户校验规则。" };
  }

  return { ok: true };
}

async function readSession(request, env) {
  const raw = getCookie(request, SESSION_COOKIE);
  if (!raw) return null;

  const [encoded, sig] = raw.split(".");
  if (!encoded || !sig) return null;

  const expected = await hmac(encoded, env.SESSION_SECRET);
  if (!timingSafeEqual(sig, expected)) return null;

  const session = JSON.parse(textFromBase64Url(encoded));
  if (!session.exp || session.exp < Math.floor(Date.now() / 1000)) return null;
  return session;
}

async function signSession(session, env) {
  const encoded = base64Url(JSON.stringify(session));
  const sig = await hmac(encoded, env.SESSION_SECRET);
  return `${encoded}.${sig}`;
}

async function hmac(value, secret) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value));
  return base64UrlBytes(new Uint8Array(signature));
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i += 1) result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return result === 0;
}

function getCookie(request, name) {
  const header = request.headers.get("Cookie") || "";
  const parts = header.split(";").map((part) => part.trim());
  const found = parts.find((part) => part.startsWith(`${name}=`));
  return found ? decodeURIComponent(found.slice(name.length + 1)) : "";
}

function cookie(name, value, options = {}) {
  const parts = [
    `${name}=${encodeURIComponent(value)}`,
    "Path=/",
    "Secure",
  ];
  if (options.httpOnly) parts.push("HttpOnly");
  if (options.sameSite) parts.push(`SameSite=${options.sameSite}`);
  if (Number.isFinite(options.maxAge)) parts.push(`Max-Age=${options.maxAge}`);
  return parts.join("; ");
}

function withSecurityHeaders(response) {
  const headers = new Headers(response.headers);
  Object.entries(baseHeaders()).forEach(([key, value]) => headers.set(key, value));
  headers.set("Cache-Control", "private, no-store");
  return new Response(response.body, { status: response.status, headers });
}

function baseHeaders() {
  return {
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "no-referrer",
    "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
  };
}

function requireEnv(env, keys) {
  const missing = keys.filter((key) => !env[key]);
  if (missing.length) throw new Error(`Missing required env vars: ${missing.join(", ")}`);
}

function parseList(value) {
  return (value || "")
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

function base64Url(text) {
  return base64UrlBytes(new TextEncoder().encode(text));
}

function base64UrlBytes(bytes) {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function textFromBase64Url(value) {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

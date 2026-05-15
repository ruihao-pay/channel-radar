// 通道雷达数据 - 最后更新 2026-05-15
// 共 112 条 (飞书 Bitable 92 + 美区新增 20)
window.CHANNELS_DATA = [
  // ========== 已锁 Top5 / 主流大牌 ==========
  {name:"Antom",type:"已锁 Top5",gate:"✅ PASS",hk:"✅",rec:"🟢 已锁接入",driver:"L4 业务补全",hq:"新加坡 / 杭州",max_market:"东南亚+全球",coverage:"全球",sub:7,rate:6,market:9,cb:7,multi:8,settle:6,window:0,cost:"中 1.5",diff:"全球聚合基本盘，东南亚5国订阅钱包一签覆盖。直连 AI陪聊禁入+$50K保证金(2026-05-15确认)",biz1:7.35,biz2:7.7,ai:"❌不接"},
  {name:"Antom 非直连",type:"MoR",gate:"⏳ 待评",hk:"⚠️",rec:"观察",driver:"L3 战略窗口",hq:"代理商",max_market:"美区",coverage:"全球",sub:7,rate:6,market:8,cb:7,multi:6,settle:6,window:1,cost:"中 1.5",diff:"通过子商户/聚合商身份接入，可能绕开 AI陪聊禁入。等报价中",biz1:0,biz2:0,ai:"⏳待问"},
  {name:"Stripe",type:"已锁 Top5",gate:"✅ PASS",hk:"✅",rec:"🟢 已锁接入",driver:"L1 客户订单",hq:"US",max_market:"全球",coverage:"全球",sub:9,rate:5,market:8,cb:8,multi:9,settle:7,window:1,cost:"中 1.5",diff:"业务二首客L1+美港台新韩金矿+订阅引擎行业最强。但 AI陪聊类目禁",biz1:7.05,biz2:7.4,ai:"❌不接"},
  {name:"Appota",type:"已锁 Top5",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"🟢 已锁接入",driver:"L1 客户订单",hq:"越南",max_market:"越南",coverage:"VN",sub:6,rate:8,market:5,cb:5,multi:5,settle:6,window:1,cost:"中 1.5",diff:"越南压注+叫闲闲L1+网银费率最低1.1%",biz1:6.45,biz2:5.6,ai:"未知"},
  {name:"Razorpay",type:"已锁 Top5",gate:"✅ PASS",hk:"✅",rec:"🟢 已锁接入",driver:"L2 资方",hq:"印度",max_market:"印度",coverage:"IN",sub:8,rate:7,market:6,cb:7,multi:5,settle:7,window:1,cost:"中 1.5",diff:"印度PSP#1，55%市占，PA-CB牌照HK直签无需印度实体",biz1:7.05,biz2:6.35,ai:"未知"},
  {name:"PagBrasil",type:"拉美本地",gate:"✅ PASS",hk:"✅",rec:"🟢 已锁接入",driver:"L2 资方",hq:"巴西",max_market:"巴西",coverage:"BR",sub:9.5,rate:6,market:5,cb:7,multi:5,settle:7,window:2,cost:"中 1.5",diff:"PagStream订阅能力9.5全候选最高+PIX 1.99%+HK直结",biz1:7.35,biz2:7.38,ai:"未知"},

  // ========== 全球聚合商 ==========
  {name:"Checkout.com",type:"全球聚合商",gate:"✅ PASS",hk:"✅",rec:"观察",driver:"L3 战略窗口",hq:"London, UK",max_market:"UAE / 欧洲",coverage:"全球 150+ 国",sub:8,rate:6.5,market:7.5,cb:7,multi:6,settle:7,window:1,cost:"中 1.5",diff:"CBUAE收单牌照HK直签，UAE降级观察等客户订单激活。闲闲5-3邮件首问7天无回应",biz1:7.25,biz2:7.2,ai:"⏳待问"},
  {name:"Nuvei",type:"全球聚合商",gate:"✅ PASS",hk:"✅",rec:"观察",driver:"L5 观察",hq:"加拿大",max_market:"全球",coverage:"全球",sub:7.5,rate:6.5,market:9,cb:9,multi:8.5,settle:7,window:1,cost:"重 2.5",diff:"业务二综合最高/游戏场景首选/拒付拦截98%，接入成本重",biz1:7.73,biz2:7.95,ai:"未知"},
  {name:"Rapyd",type:"全球聚合商",gate:"✅ PASS",hk:"✅",rec:"备选",driver:"L3 战略窗口",hq:"London",max_market:"LatAm+非洲",coverage:"100+ 国",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:1,cost:"中 1.5",diff:"LatAm+非洲补位，业务二备选，业务一不接",biz1:6.85,biz2:7.35,ai:"未知"},
  {name:"Adyen",type:"全球聚合商",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"荷兰",max_market:"全球",coverage:"全球",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:1,cost:"重 2.5",diff:"与Stripe联动高度重叠+订阅惰性模式有客户风险。闲闲5-6 BD拒",biz1:6.75,biz2:7.55,ai:"❌不接"},
  {name:"dLocal",type:"全球聚合商",gate:"✅ PASS",hk:"✅",rec:"观察",driver:"L5 观察",hq:"乌拉圭",max_market:"新兴市场",coverage:"40+ 国",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:1,cost:"中 1.5",diff:"一签覆盖Antom盲区LatAm+非洲+南亚，业务二新兴市场聚合第一",biz1:7.22,biz2:7.63,ai:"未知"},
  {name:"Worldline",type:"全球聚合商",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"法国",max_market:"欧洲",coverage:"欧洲",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"N/A",diff:"2025/6公司崩盘，主动撤非欧业务，全Gate失败",biz1:4.2,biz2:3.85,ai:"❌不接"},
  {name:"Worldpay/FIS",type:"全球聚合商",gate:"✅ PASS",hk:"✅",rec:"❌ 不接入",driver:"L5 观察",hq:"US",max_market:"全球",coverage:"全球",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"重 2.5",diff:"GP收购整合期+3年合同锁定+订阅平庸，全面被Stripe/Adyen/Nuvei替代",biz1:6.6,biz2:6.9,ai:"❌不接"},
  {name:"PayU Global",type:"全球聚合商",gate:"✅ PASS",hk:"✅",rec:"❌ 不接入",driver:"L5 观察",hq:"荷兰",max_market:"印度/SEA",coverage:"15+ 国",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"中 1.5",diff:"GPO已售出Rapyd，印度/SEA与Razorpay/Antom高度重叠",biz1:6.48,biz2:6.38,ai:"未知"},
  {name:"Unlimit / Unlimint",type:"全球聚合商",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"London + Cyprus",max_market:"高风险跨境",coverage:"90+ 地区",sub:7,rate:6,market:7.5,cb:6.5,multi:6.5,settle:6.5,window:0,cost:"重 2.5",diff:"全球高风险跨境聚合商，已迁出俄罗斯，独占价值近 0",biz1:6.68,biz2:6.75,ai:"未知"},
  {name:"Airwallex",type:"全球聚合商",gate:"⚠️ 部分FAIL",hk:"✅",rec:"备选",driver:"L4 业务补全",hq:"HK / 墨尔本",max_market:"中国出海+全球",coverage:"150+ 国",sub:8,rate:7,market:8,cb:7,multi:6,settle:8,window:1,cost:"中 1.5",diff:"HK 总部直签最顺路径+中国出海客户红利。云汇即此公司",biz1:7.55,biz2:7.35,ai:"未知"},

  // ========== MoR ==========
  {name:"Paddle",type:"MoR",gate:"⚠️ 部分FAIL",hk:"✅",rec:"备选",driver:"L3 战略窗口",hq:"London",max_market:"SaaS",coverage:"全球",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:2,cost:"中 1.5",diff:"FTC 2025/6后主动清退惰性订阅画像/业务二AUP禁聚合，仅作硬门槛国最后备份",biz1:6.65,biz2:6.05,ai:"❌不接"},
  {name:"FastSpring",type:"MoR",gate:"✅ PASS",hk:"✅",rec:"P2 补位",driver:"L3 战略窗口",hq:"US",max_market:"SaaS",coverage:"全球",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:2,cost:"轻 1.0",diff:"SaaS DNA订阅/EU日韩巴西税务长尾市场MoR兜底层",biz1:6.7,biz2:5.9,ai:"❌不接"},
  {name:"Xsolla",type:"MoR",gate:"⚠️ 部分FAIL",hk:"✅",rec:"P2 补位",driver:"L3 战略窗口",hq:"US",max_market:"游戏",coverage:"200+ 国",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:2,cost:"中 1.5",diff:"游戏垂直王者/越南MoR牌照独家/印度UPI重启，等游戏客户L1激活",biz1:0,biz2:7.53,ai:"未知"},
  {name:"LemonSqueezy",type:"MoR",gate:"⚠️ 条件PASS",hk:"✅",rec:"❌ 不接入",driver:"L5 观察",hq:"US",max_market:"SaaS",coverage:"全球",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"轻 1.0",diff:"Stripe收购后产品过渡期，等Stripe Managed Payments",biz1:6.48,biz2:5.95,ai:"❌不接"},
  {name:"Gumroad",type:"MoR",gate:"✅ PASS",hk:"✅",rec:"❌ 不接入",driver:"L5 观察",hq:"US",max_market:"创作者",coverage:"全球",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"轻 1.0",diff:"费率12.9%规模化不经济，业务二结构性淘汰",biz1:5.4,biz2:4.78,ai:"未知"},

  // ========== 拉美本地 ==========
  {name:"Mercado Pago",type:"拉美本地",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"备选",driver:"L2 资方",hq:"阿根廷",max_market:"拉美",coverage:"18 国",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:1,cost:"重 2.5",diff:"拉美最大消费者平台，dLocal已覆盖钱包路由，战略定位错配",biz1:6.93,biz2:7.23,ai:"未知"},
  {name:"StoneCo",type:"拉美本地",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"巴西",max_market:"巴西",coverage:"BR",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"N/A",diff:"Gate FAIL，HK不签仅CNPJ本地",biz1:6.53,biz2:5.45,ai:"未知"},
  {name:"Cielo",type:"拉美本地",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"巴西",max_market:"巴西",coverage:"BR",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"N/A",diff:"Gate FAIL，2025私有化+HK不签",biz1:5.45,biz2:4.85,ai:"未知"},
  {name:"Kushki",type:"拉美本地",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"厄瓜多尔",max_market:"拉美5国",coverage:"5 国",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:1,cost:"中 1.5",diff:"覆盖傅5国缺 BR/AR，与dLocal重叠不签",biz1:6.6,biz2:6.6,ai:"未知"},
  {name:"EBANX",type:"拉美本地",gate:"✅ PASS",hk:"✅",rec:"P2 补位",driver:"L3 战略窗口",hq:"巴西",max_market:"拉美",coverage:"15 国",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:2,cost:"中 1.5",diff:"Pix Automatico+游戏行业独家BR补位，巴西 P2 场景",biz1:7.6,biz2:7.4,ai:"未知"},
  {name:"PagSeguro",type:"拉美本地",gate:"✅ PASS",hk:"✅",rec:"❌ 不接入",driver:"L5 观察",hq:"巴西",max_market:"巴西",coverage:"BR",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:1,cost:"中 1.5",diff:"与PagBrasil功能重叠80%，评分更低不接入",biz1:7.15,biz2:7.13,ai:"未知"},

  // ========== 中东本地 ==========
  {name:"HyperPay",type:"中东本地",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"观察",driver:"L3 战略窗口",hq:"Riyadh, SA",max_market:"沙特",coverage:"SA/UAE/JO/OM/QA/IQ/LB/BH",sub:8.5,rate:6,market:5.5,cb:6.5,multi:5,settle:6,window:1,cost:"重 2.5",diff:"首家打通Mada完整订阅+tokenization，沙特降级观察",biz1:7.6,biz2:7.1,ai:"未知"},
  {name:"Amazon Payment Services",type:"中东本地",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"UAE",max_market:"UAE",coverage:"中东",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:1,cost:"重 2.5",diff:"需UAE本地实体+游戏业务保守",biz1:6.45,biz2:5.85,ai:"未知"},
  {name:"Network International",type:"中东本地",gate:"⚠️ 部分FAIL",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"UAE",max_market:"UAE",coverage:"中东",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"重 2.5",diff:"UAE最大PSP，HK签约阻力大+游戏保守",biz1:5.8,biz2:5.55,ai:"未知"},
  {name:"PayTabs",type:"中东本地",gate:"✅ PASS",hk:"✅",rec:"备选",driver:"L5 观察",hq:"沙特",max_market:"MENA",coverage:"MENA多国",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:1,cost:"中 1.5",diff:"MENA多国扩展P6备选，不HyperPay平替",biz1:6.7,biz2:6.7,ai:"未知"},
  {name:"Tap Payments",type:"中东本地",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"科威特",max_market:"科威特",coverage:"GCC",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:1,cost:"中 1.5",diff:"HK直签受阻+仅Kuwait Knet独家价值",biz1:6.55,biz2:6.41,ai:"未知"},
  {name:"Telr",type:"中东本地",gate:"✅ PASS",hk:"✅",rec:"❌ 不接入",driver:"L5 观察",hq:"UAE",max_market:"UAE",coverage:"中东",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"中 1.5",diff:"规模小+覆盖重叠+游戏禁用",biz1:6.05,biz2:5.68,ai:"未知"},
  {name:"Moyasar",type:"中东本地",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"沙特",max_market:"沙特",coverage:"SA",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"N/A",diff:"Gate FAIL，HK不能签，功能被HyperPay覆盖",biz1:5.2,biz2:6.83,ai:"未知"},
  {name:"Fawry",type:"中东本地",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"埃及",max_market:"埃及",coverage:"EG",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"中 1.5",diff:"需埃及实体不直签，未来Checkout.com APM开通即可覆盖",biz1:6.28,biz2:6.43,ai:"未知"},

  // ========== 东南亚本地 ==========
  {name:"2C2P (Antom)",type:"东南亚本地",gate:"✅ PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"新加坡",max_market:"东南亚",coverage:"TH/SG/MY/ID/PH/VN/MM",sub:7,rate:5.5,market:7,cb:6,multi:7,settle:6.5,window:0,cost:"中 1.5",diff:"2025-10 已 rebrand '2C2P by Antom'，与 Antom 100% 重叠",biz1:6.38,biz2:6.63,ai:"❌不接"},
  {name:"Xendit",type:"东南亚本地",gate:"✅ PASS",hk:"✅",rec:"P2 补位",driver:"L3 战略窗口",hq:"印尼",max_market:"印尼",coverage:"ID/PH",sub:7.5,rate:8,market:7,cb:6,multi:8,settle:8,window:1,cost:"中 1.5",diff:"印尼QRIS 0.7%+T+2结算+全钱包订阅，Antom印尼盲区补位",biz1:7.3,biz2:7.48,ai:"未知"},
  {name:"Omise (Opn Payments)",type:"东南亚本地",gate:"✅ PASS",hk:"✅",rec:"❌ 不接入",driver:"L5 观察",hq:"泰国",max_market:"泰国",coverage:"TH/JP/SG/MY",sub:7,rate:6,market:5,cb:6,multi:6,settle:7,window:0,cost:"中 1.5",diff:"Antom已覆盖泰国全主力支付，Omise费率更贵",biz1:6.25,biz2:6.15,ai:"未知"},
  {name:"DOKU",type:"东南亚本地",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"印尼雅加达",max_market:"印尼",coverage:"ID",sub:6.5,rate:7.5,market:3.5,cb:6.5,multi:7,settle:7,window:0,cost:"中 1.5",diff:"印尼老牌 PSP，与 Antom 100% 重叠，单国覆盖最差档",biz1:6.35,biz2:6.2,ai:"未知"},
  {name:"Midtrans",type:"东南亚本地",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"印尼",max_market:"印尼",coverage:"ID",sub:7.5,rate:7.5,market:3.5,cb:6.5,multi:5.5,settle:4.5,window:0,cost:"重 2.5",diff:"GoTo 旗下 GoPay 原生订阅+Recurring API成熟，但单国 IDR-only 与 Antom 100% 重叠",biz1:6.4,biz2:5.9,ai:"未知"},
  {name:"PayMongo",type:"东南亚本地",gate:"✅ PASS",hk:"✅",rec:"❌ 不接入",driver:"L5 观察",hq:"菲律宾",max_market:"菲律宾",coverage:"PH",sub:7.5,rate:6,market:3.5,cb:7,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"菲律宾 #1 PSP，Subscriptions+Platforms 多商户，与 Antom GCash/Maya 重叠",biz1:6.23,biz2:6.13,ai:"未知"},
  {name:"Maya Business",type:"东南亚本地",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"菲律宾",max_market:"菲律宾",coverage:"PH",sub:6,rate:5.5,market:3,cb:6.5,multi:5.5,settle:5.5,window:0,cost:"重 2.5",diff:"菲律宾#1/#2钱包+银行牌照齐全但HK不能直签",biz1:5.48,biz2:5.23,ai:"未知"},

  // ========== 越南菲律宾 (钱包) ==========
  {name:"GCash",type:"越南菲律宾",gate:"⚠️ 条件PASS",hk:"❌",rec:"❌ 不接入",driver:"L4 业务补全",hq:"菲律宾",max_market:"菲律宾",coverage:"PH",sub:8,rate:7,market:4.5,cb:6.5,multi:5,settle:7,window:0,cost:"N/A",diff:"菲律宾最大电子钱包9400万用户+完整recurring，Antom已覆盖",biz1:5.9,biz2:5.9,ai:"未知"},
  {name:"Maya",type:"越南菲律宾",gate:"✅ PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L4 业务补全",hq:"菲律宾",max_market:"菲律宾",coverage:"PH",sub:8,rate:7,market:4,cb:6.5,multi:5,settle:7,window:0,cost:"N/A",diff:"菲律宾第二大钱包，原生recurring billing，Antom已有Maya接入文档",biz1:6,biz2:5.95,ai:"未知"},
  {name:"ZaloPay",type:"越南菲律宾",gate:"⚠️ 条件PASS",hk:"❌",rec:"❌ 不接入",driver:"L4 业务补全",hq:"越南",max_market:"越南",coverage:"VN",sub:7,rate:7,market:3.5,cb:6,multi:4.5,settle:6.5,window:0,cost:"N/A",diff:"越南第二大电子钱包，Appota已聚合",biz1:5.6,biz2:5.5,ai:"未知"},
  {name:"MoMo (越南)",type:"越南菲律宾",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"越南",max_market:"越南",coverage:"VN",sub:7.5,rate:6.5,market:3.5,cb:7.5,multi:4.5,settle:6,window:0,cost:"重 2.5",diff:"越南#1 wallet 但 HK 直签结构性 FAIL，被 Antom+Appota 双层覆盖",biz1:6.5,biz2:5.8,ai:"未知"},

  // ========== 印度本地 ==========
  {name:"PayU India",type:"印度本地",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"印度",max_market:"印度",coverage:"IN",sub:7,rate:7.5,market:4.5,cb:6.5,multi:6.5,settle:6.5,window:0,cost:"中 1.5",diff:"与 Razorpay 100% 重叠且产品力略弱，无独家价值",biz1:6.6,biz2:6.38,ai:"未知"},
  {name:"Cashfree Payments",type:"印度本地",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"印度",max_market:"印度",coverage:"IN/UAE",sub:7,rate:8,market:4,cb:6.5,multi:6.5,settle:7.5,window:0,cost:"中 1.5",diff:"RBI 首张 PA-CB+Instant Settlement+UPI 0%，但与 Razorpay 100% 重叠",biz1:6.75,biz2:6.45,ai:"未知"},
  {name:"Paytm Payment Gateway",type:"印度本地",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"印度",max_market:"印度",coverage:"IN",sub:6.5,rate:6.5,market:3.5,cb:6,multi:6,settle:6.5,window:0,cost:"中 1.5",diff:"印度四家通道全面最低，集团合规包袱重无独家价值",biz1:5.95,biz2:5.75,ai:"未知"},
  {name:"Juspay",type:"印度本地",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"印度",max_market:"印度",coverage:"IN/AE/SG/US/EU/UK",sub:7.5,rate:5.5,market:7.5,cb:7,multi:7.5,settle:5.5,window:0,cost:"重 2.5",diff:"印度 routing/orchestrator 层，与 Antom 功能 60% 重叠",biz1:6.7,biz2:6.95,ai:"未知"},
  {name:"Instamojo",type:"印度本地",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"印度",max_market:"印度",coverage:"IN",sub:3.5,rate:5.5,market:2,cb:4.5,multi:4,settle:5.5,window:0,cost:"N/A",diff:"印度SMB建站工具，无原生Recurring，非PSP标准玩家",biz1:4.18,biz2:3.9,ai:"未知"},

  // ========== 日本本地 ==========
  {name:"GMO Payment Gateway",type:"日本本地",gate:"⚠️ 条件PASS",hk:"❌",rec:"搁置",driver:"L5 观察",hq:"日本东京",max_market:"日本",coverage:"JP",sub:8,rate:5,market:3,cb:8,multi:7.5,settle:5,window:0,cost:"重 2.5",diff:"日本#1 PSP 22万亿日元/150K商户但HK主体直签必经Citcon中转",biz1:6.2,biz2:6.15,ai:"未知"},
  {name:"KOMOJU",type:"日本本地",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"日本",max_market:"日本",coverage:"JP/KR/CN/SEA/AU/EU",sub:7.5,rate:5.5,market:6,cb:7.5,multi:6.5,settle:5.5,window:0,cost:"中 1.5",diff:"Steam 亚洲落地伙伴+日本 chargeback<0.1%，但 Platform 模型限日本主体",biz1:6.58,biz2:6.5,ai:"未知"},
  {name:"SB Payment Service",type:"日本本地",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"日本",max_market:"日本",coverage:"JP",sub:7.5,rate:5,market:3,cb:8,multi:6.5,settle:5,window:0,cost:"重 2.5",diff:"PayPay 集团内最深整合 + Carrier Billing 三大全",biz1:6.05,biz2:5.83,ai:"未知"},
  {name:"PayPay",type:"日本本地",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"日本",max_market:"日本",coverage:"JP",sub:6,rate:5,market:3,cb:7.5,multi:2.5,settle:5,window:0,cost:"重 2.5",diff:"日本最大 QR 钱包，但海外公司禁直签必经 agency",biz1:5.5,biz2:4.6,ai:"未知"},

  // ========== 韩台本地 ==========
  {name:"Toss Payments",type:"韩台本地",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"首尔",max_market:"韩国",coverage:"KR",sub:7.5,rate:5.5,market:3,cb:7.5,multi:4,settle:6,window:0,cost:"重 2.5",diff:"韩国#4 PG/Viva fintech，HK 不签需韩国法人",biz1:6.18,biz2:5.45,ai:"未知"},
  {name:"KG Inicis",type:"韩台本地",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"韩国",max_market:"韩国",coverage:"KR",sub:7.5,rate:5.5,market:3,cb:7.5,multi:4,settle:5.5,window:0,cost:"重 2.5",diff:"韩国PG #1 40%份额，仅接Korea-issued卡，HK不签",biz1:6.13,biz2:5.4,ai:"未知"},
  {name:"NHN KCP",type:"韩台本地",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"韩国",max_market:"韩国",coverage:"KR",sub:7,rate:5.5,market:3.5,cb:7.5,multi:4,settle:5.5,window:0,cost:"重 2.5",diff:"韩国 PG Top 4 NHN 集团，B2B 强但 HK 主体不可签",biz1:6.05,biz2:5.38,ai:"未知"},
  {name:"TapPay (Cherri Tech)",type:"韩台本地",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"台北",max_market:"台湾",coverage:"TW/HK/SG/MY/JP/TH",sub:7,rate:6,market:4.5,cb:6.5,multi:4,settle:6.5,window:0,cost:"重 2.5",diff:"TW Cards/17收单银行直连+Cherri X AI风控+Tap to Pay",biz1:6.23,biz2:5.65,ai:"未知"},
  {name:"ECPay (绿界)",type:"韩台本地",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"台湾",max_market:"台湾",coverage:"TW",sub:7.5,rate:5,market:3.5,cb:6.5,multi:4,settle:6.5,window:0,cost:"重 2.5",diff:"电子发票+物流+超商一体化，但HK主体不可签",biz1:6,biz2:5.43,ai:"未知"},
  {name:"NewebPay (蓝新金流)",type:"韩台本地",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"台北",max_market:"台湾",coverage:"TW",sub:7.5,rate:5,market:3.5,cb:6.5,multi:4,settle:6.5,window:0,cost:"重 2.5",diff:"NDNP 卡端定期定额+卡号自动更新，与 ECPay 全面对位无独占价值",biz1:5.98,biz2:5.43,ai:"未知"},

  // ========== 土耳其 ==========
  {name:"iyzico",type:"土耳其",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"土耳其伊斯坦布尔",max_market:"土耳其",coverage:"TR",sub:7.5,rate:5.5,market:3.5,cb:7,multi:6.5,settle:6,window:0,cost:"重 2.5",diff:"土耳其#1 PayU旗下30K商户 原生订阅+多币种+Marketplace，HK不能签",biz1:6.15,biz2:6,ai:"未知"},
  {name:"PayTR",type:"土耳其",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"土耳其伊斯坦布尔",max_market:"土耳其",coverage:"TR",sub:7,rate:6,market:3.5,cb:6.5,multi:6,settle:6,window:0,cost:"重 2.5",diff:"土耳其本土独立 PSP 入门费率最优但与 iyzico 100% 重叠",biz1:6.03,biz2:5.8,ai:"未知"},
  {name:"Papara",type:"土耳其",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"Istanbul",max_market:"Turkey",coverage:"TR",sub:6.5,rate:6.5,market:3.5,cb:5,multi:5,settle:5.5,window:0,cost:"重 2.5",diff:"土耳其23M用户钱包，CEO因₺12.9B非法博彩被起诉/牌照受托人管理",biz1:5.65,biz2:5.35,ai:"未知"},
  {name:"Param",type:"土耳其",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"Istanbul + 欧洲",max_market:"Turkey",coverage:"TR/UK/NL/CZ",sub:6.5,rate:6,market:4.5,cb:6.5,multi:6.5,settle:6,window:0,cost:"重 2.5",diff:"土耳其 4 家中唯一具欧洲 5 国 EMI 布局+Discover 全卡牌",biz1:6.03,biz2:5.98,ai:"未知"},

  // ========== 非洲 ==========
  {name:"Paystack",type:"非洲",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"Lagos / SF",max_market:"尼日利亚",coverage:"NG/GH/SA/KE/CI/RW",sub:7.5,rate:5.5,market:4.5,cb:6,multi:5,settle:6,window:0,cost:"重 2.5",diff:"Stripe 子品牌但仅 6 国非洲法人 HK 不可签且无绕道",biz1:6.1,biz2:5.8,ai:"未知"},
  {name:"Flutterwave",type:"非洲",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"SF / Lagos",max_market:"尼日利亚",coverage:"非洲35+ 国",sub:6.5,rate:5.5,market:6.5,cb:6,multi:5.5,settle:6,window:0,cost:"中 1.5",diff:"非洲 35+ 国持牌最多 PSP，HK 不签需 US/UK 绕道",biz1:6.1,biz2:6.05,ai:"未知"},
  {name:"Onafriq",type:"非洲",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"London/南非",max_market:"尼日利亚",coverage:"非洲 41+ 国",sub:5.5,rate:5,market:7,cb:5.5,multi:6,settle:6,window:0,cost:"重 2.5",diff:"泛非 41+ 国最广 B2B 基础设施层 hub 但与 dLocal 重叠定位错配",biz1:5.65,biz2:5.88,ai:"未知"},
  {name:"Cellulant Tingg",type:"非洲",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"肯尼亚",max_market:"NG/KE/GH",coverage:"非洲 15 国",sub:5.5,rate:5,market:7,cb:6,multi:6,settle:5.5,window:0,cost:"重 2.5",diff:"泛非企业级 omnichannel + 4.5M tx/day + Emirates 旗舰",biz1:5.7,biz2:5.88,ai:"未知"},

  // ========== BNPL ==========
  {name:"Klarna",type:"BNPL",gate:"⚠️ 部分FAIL",hk:"✅",rec:"❌ 不接入",driver:"L5 观察",hq:"瑞典",max_market:"欧美",coverage:"45 国",sub:2,rate:3,market:8,cb:7,multi:5,settle:6,window:0,cost:"中 1.5",diff:"BNPL不等于订阅，无自动化monthly扣费，费率5.99%+$0.30极高",biz1:4.8,biz2:4.9,ai:"❌不接"},
  {name:"Afterpay / Clearpay",type:"BNPL",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"美国/澳洲",max_market:"美国+澳洲",coverage:"US/AU/UK/NZ/CA",sub:4.5,rate:4.5,market:6.5,cb:7.5,multi:5,settle:6.5,window:0,cost:"重 2.5",diff:"Block 旗下 BNPL 8 国，HK 不在列+三重红线封订阅/数字/成人",biz1:5.6,biz2:5.5,ai:"❌不接"},
  {name:"Tabby",type:"BNPL",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"沙特/迪拜",max_market:"沙特",coverage:"AE/SA",sub:5,rate:4.5,market:3,cb:7,multi:4.5,settle:6,window:0,cost:"重 2.5",diff:"MENA #1 BNPL，HK 不可签 + 与订阅类别错配",biz1:5.08,biz2:4.73,ai:"❌不接"},
  {name:"Tamara",type:"BNPL",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"沙特",max_market:"沙特",coverage:"SA/AE/KW/BH",sub:5,rate:4.5,market:4,cb:7,multi:4.5,settle:6,window:0,cost:"重 2.5",diff:"GCC #2 BNPL Sharia 4 国略胜 Tabby 但类别错配",biz1:5.23,biz2:4.93,ai:"❌不接"},
  {name:"Affirm",type:"BNPL",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"美国",max_market:"美国",coverage:"US/CA/UK",sub:4,rate:4.5,market:5,cb:7.5,multi:4.5,settle:6.5,window:0,cost:"重 2.5",diff:"US BNPL #1 但仅 US/CA/UK 三国+三重红线+非订阅 rail",biz1:5.23,biz2:4.98,ai:"❌不接"},
  {name:"Zip Co",type:"BNPL",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"悉尼",max_market:"澳洲+美国",coverage:"AU/NZ/US",sub:4.5,rate:5,market:5,cb:7,multi:4.5,settle:6,window:0,cost:"重 2.5",diff:"BNPL 撤至 AU/NZ/US 3 国，与 Stripe Zip APM 重叠",biz1:5.35,biz2:5.08,ai:"❌不接"},

  // ========== CIS/俄罗斯 ==========
  {name:"YooKassa",type:"CIS/俄罗斯",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"莫斯科",max_market:"俄罗斯",coverage:"RU/CIS",sub:6.5,rate:3.5,market:1.5,cb:5,multi:3.5,settle:2,window:0,cost:"重 2.5",diff:"Sberbank系俄#1 PSP，OFAC+SWIFT双制裁HK签不了",biz1:4.25,biz2:3.85,ai:"❌不接"},
  {name:"Tinkoff / T-Pay",type:"CIS/俄罗斯",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"莫斯科",max_market:"俄罗斯",coverage:"RU/CIS",sub:6.5,rate:3.5,market:1.5,cb:5,multi:3.5,settle:2,window:0,cost:"重 2.5",diff:"T-Bank OFAC SDN+SWIFT 阻断，与 YooKassa 同档双 Gate FAIL 永久排除",biz1:4.25,biz2:3.85,ai:"❌不接"},

  // ========== 跨境/加密 ==========
  {name:"Triple-A",type:"跨境/加密",gate:"✅ PASS",hk:"✅",rec:"搁置",driver:"L5 观察",hq:"新加坡",max_market:"APAC",coverage:"全球主流国家",sub:5,rate:7.5,market:6.5,cb:9.5,multi:5,settle:8.5,window:0,cost:"轻 1.0",diff:"MAS监管加密收款，零拒付+T+1法币结算，但主流消费者不用加密支付+订阅recurring局限",biz1:7,biz2:6.8,ai:"未知"},
  {name:"BitPay",type:"跨境/加密",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"亚特兰大",max_market:"US",coverage:"加密200+ / 法币37国",sub:4,rate:7,market:5.5,cb:9,multi:4,settle:7.5,window:1,cost:"中 1.5",diff:"0 chargeback+1%头部费率，但订阅 auto-debit 永不可能",biz1:6.33,biz2:5.6,ai:"未知"},
  {name:"Coinbase Commerce",type:"跨境/加密",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"旧金山",max_market:"美国",coverage:"US/SG",sub:3.5,rate:7.5,market:5,cb:9,multi:3.5,settle:7,window:0,cost:"重 2.5",diff:"2026-03-31 已关停非美/非新加坡商户，HK 不可签",biz1:6.18,biz2:5.3,ai:"❌不接"},

  // ========== 美区新增 - 中国系 ISO/MoR (5 条) ==========
  {name:"领航",type:"MoR",gate:"✅ PASS",hk:"✅",rec:"🏆 强推",driver:"L1 客户订单",hq:"中国深圳",max_market:"美区成人/AI 陪聊",coverage:"US",sub:8,rate:7,market:5,cb:8,multi:5,settle:8,window:2,cost:"中 1.5",diff:"美区成人 MoR，5-12 实地考察 GO，链路 Esquire/Humboldt→US ISO→领航，T+3，无 CB fee，主体寿命 6-12 月",biz1:7.5,biz2:6.5,ai:"✅可接"},
  {name:"Waffo",type:"MoR",gate:"⚠️ 条件PASS",hk:"✅",rec:"备选",driver:"L5 观察",hq:"欧洲",max_market:"美区+全球",coverage:"全球",sub:7,rate:4,market:7,cb:6,multi:5,settle:5,window:1,cost:"中 1.5",diff:"10%+€0.30 实际成本 23%，T+10，€10K最低提现，10-15% 保证金锁120天。锐浩 2026-04-29 主动暂停",biz1:5.5,biz2:5,ai:"✅可接"},
  {name:"AnstPay",type:"MoR",gate:"❌ FAIL",hk:"⚠️",rec:"❌ 不接入",driver:"Gate失败",hq:"中国",max_market:"美区",coverage:"US",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"N/A",diff:"2026-05-06 dead：原方案 APP 尺度太大美国 PP 跑不了；替代方案强制代结算合规复杂",biz1:0,biz2:0,ai:"✅可接"},
  {name:"Asiabill",type:"MoR",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"中国",max_market:"美区",coverage:"US",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"N/A",diff:"2026-05-06 电话明确拒 AI 类目",biz1:0,biz2:0,ai:"❌不接"},
  {name:"Pyvio",type:"MoR",gate:"⏳ 待评",hk:"⚠️",rec:"观察",driver:"L5 观察",hq:"未知",max_market:"美区",coverage:"US",sub:6,rate:6,market:5,cb:6,multi:5,settle:6,window:1,cost:"中 1.5",diff:"P3 等回复，可信度待验证",biz1:0,biz2:0,ai:"⏳待问"},

  // ========== 美区新增 - 高风险专精 (7 条) ==========
  {name:"CCBill",type:"MoR",gate:"✅ PASS",hk:"⚠️",rec:"🏆 强推",driver:"L3 战略窗口",hq:"美国凤凰城",max_market:"美区成人订阅",coverage:"全球",sub:9,rate:5,market:8,cb:8,multi:7,settle:7,window:2,cost:"中 1.5",diff:"1998 老牌成人订阅 MoR，PSP 历史悠久，标准接入。闲闲首选备份候选。HK 直签待验证",biz1:7,biz2:6.5,ai:"✅可接"},
  {name:"Segpay",type:"MoR",gate:"✅ PASS",hk:"⚠️",rec:"🏆 强推",driver:"L3 战略窗口",hq:"美国佛州",max_market:"约会/AI 陪聊",coverage:"全球",sub:9,rate:5,market:7,cb:8,multi:7,settle:7,window:2,cost:"中 1.5",diff:"2005 约会/AI/订阅类专精，5-6 因英文搁置但现在没退路必须重启。HK 直签待验证",biz1:7,biz2:6.5,ai:"✅可接"},
  {name:"Epoch",type:"MoR",gate:"✅ PASS",hk:"⚠️",rec:"🏆 强推",driver:"L3 战略窗口",hq:"美国洛杉矶",max_market:"成人订阅",coverage:"全球",sub:9,rate:5,market:7,cb:8,multi:7,settle:7,window:2,cost:"中 1.5",diff:"1996 老牌成人订阅，行业元老级。5-6 因英文搁置需重启。HK 直签待验证",biz1:7,biz2:6.5,ai:"✅可接"},
  {name:"Vendo",type:"MoR",gate:"✅ PASS",hk:"⚠️",rec:"P2 补位",driver:"L3 战略窗口",hq:"美国",max_market:"约会",coverage:"全球",sub:8,rate:5,market:6,cb:7,multi:6,settle:6,window:1,cost:"中 1.5",diff:"约会垂直专精 MoR，HK 直签待验证",biz1:6.5,biz2:6,ai:"✅可接"},
  {name:"Verotel",type:"MoR",gate:"✅ PASS",hk:"⚠️",rec:"P2 补位",driver:"L3 战略窗口",hq:"荷兰",max_market:"欧洲成人",coverage:"全球",sub:8,rate:5,market:7,cb:7,multi:6,settle:6,window:1,cost:"中 1.5",diff:"欧洲成人订阅老牌，覆盖美区，HK 直签待验证",biz1:6.5,biz2:6,ai:"✅可接"},
  {name:"Rocketgate",type:"全球聚合商",gate:"✅ PASS",hk:"⚠️",rec:"P2 补位",driver:"L5 观察",hq:"美国",max_market:"高风险订阅",coverage:"全球",sub:8,rate:6,market:6,cb:8,multi:6,settle:6,window:1,cost:"中 1.5",diff:"high-risk gateway/MoR，可配合 acquirer，订阅功能强",biz1:6.5,biz2:6,ai:"✅可接"},
  {name:"NetBilling",type:"MoR",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"备选",driver:"L5 观察",hq:"美国",max_market:"成人 recurring",coverage:"美国+欧洲",sub:8,rate:5,market:5,cb:7,multi:5,settle:6,window:0,cost:"中 1.5",diff:"成人订阅老 MoR，需查 HK 直签",biz1:6,biz2:5.5,ai:"✅可接"},

  // ========== 美区新增 - 高风险通用 (3 条) ==========
  {name:"PaymentCloud",type:"全球聚合商",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"备选",driver:"L5 观察",hq:"美国",max_market:"高风险",coverage:"US",sub:6,rate:6,market:5,cb:7,multi:7,settle:6,window:0,cost:"中 1.5",diff:"high-risk specialist broker，帮匹配 underlying acquirer",biz1:6,biz2:5.5,ai:"✅可接"},
  {name:"EasyPayDirect",type:"全球聚合商",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"备选",driver:"L5 观察",hq:"美国",max_market:"高风险",coverage:"US",sub:6,rate:6,market:5,cb:6,multi:6,settle:6,window:0,cost:"中 1.5",diff:"high-risk MoR/broker",biz1:5.5,biz2:5,ai:"✅可接"},
  {name:"Soar Payments",type:"全球聚合商",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"备选",driver:"L5 观察",hq:"美国",max_market:"高风险",coverage:"US",sub:6,rate:6,market:5,cb:6,multi:6,settle:6,window:0,cost:"中 1.5",diff:"high-risk broker，匹配 acquirer",biz1:5.5,biz2:5,ai:"✅可接"},

  // ========== 美区新增 - 加密 (3 条) ==========
  {name:"NOWPayments",type:"跨境/加密",gate:"✅ PASS",hk:"✅",rec:"P2 补位",driver:"L3 战略窗口",hq:"塞舌尔",max_market:"全球",coverage:"全球",sub:7,rate:8,market:7,cb:9.5,multi:6,settle:8,window:1,cost:"轻 1.0",diff:"支持 USDT 等订阅，0.5% 费率最低之一。可作辅助通道接 5-10% 流量",biz1:7,biz2:6.5,ai:"✅可接"},
  {name:"NetCents",type:"跨境/加密",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"备选",driver:"L5 观察",hq:"加拿大",max_market:"加密",coverage:"全球",sub:5,rate:7,market:5,cb:9,multi:5,settle:7,window:0,cost:"中 1.5",diff:"加密 PSP，订阅能力一般",biz1:5.5,biz2:5,ai:"✅可接"},
  {name:"CoinPayments",type:"跨境/加密",gate:"✅ PASS",hk:"✅",rec:"P2 补位",driver:"L5 观察",hq:"加拿大",max_market:"全球",coverage:"全球",sub:6,rate:8,market:6,cb:9.5,multi:5,settle:8,window:1,cost:"轻 1.0",diff:"多币种加密 PSP",biz1:6,biz2:5.5,ai:"✅可接"},

  // ========== 美区新增 - 跨境聚合 (1 条) ==========
  {name:"2Checkout / Verifone",type:"MoR",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"备选",driver:"L5 观察",hq:"美国",max_market:"全球",coverage:"全球",sub:7,rate:5,market:7,cb:6,multi:6,settle:6,window:0,cost:"中 1.5",diff:"主流 MoR 中风险接受度相对高，需问类目",biz1:6,biz2:5.5,ai:"⏳待问"}
];

// 计算闲闲适配标签
window.computeXianxianFit = function(c) {
  if (c.ai === "✅可接" && c.hk === "✅" && c.gate.startsWith("✅") && c.sub >= 5) return "🏆 适配";
  if (c.ai === "✅可接" && c.hk !== "❌") return "⚠️ 部分适配";
  if (c.ai === "⏳待问" || c.ai === "未知") return "⏳ 待评估";
  return "❌ 不适配";
};

// 元数据
window.META = {
  lastUpdated: "2026-05-15",
  totalCount: 99,
  feishuUrl: "https://gcn9eq0plpq9.feishu.cn/base/QLySbEoyVae0pZsDjqucUGHKnGe?table=tblxC8TQmax7De1s&view=vewCBixMon"
};

// 通道雷达数据 - 最后更新 2026-06-09 v4
// 共 136 条 (104 + Antom子方式32:东南亚11+东亚3+韩国3+欧洲7+拉美6+全球卡2，入库完成)
// schema: 新增 region(地区) + role(角色) 两个维度，替代原单一 type
// role 新增"支付辅助服务"类目(跨拒通拒付管理 / 反欺诈 / 风控类)
window.CHANNELS_DATA = [
  // ========== 已锁 Top5 / 主流大牌 ==========
  {name:"Antom",region:"全球",role:"全球聚合商",gate:"✅ PASS",hk:"✅",rec:"🟢 已锁接入",driver:"L4 业务补全",hq:"新加坡 / 杭州",max_market:"东南亚+全球",coverage:"全球",sub:7,rate:6,market:9,cb:7,multi:8,settle:6,window:0,cost:"中 1.5",diff:"全球聚合基本盘，东南亚5国订阅钱包一签覆盖。直连特殊类目受限，且有保证金要求",biz1:7.35,biz2:7.7,ai:"❌不接"},
  {name:"Antom 非直连",region:"美区",role:"MoR",gate:"⏳ 待评",hk:"⚠️",rec:"观察",driver:"L3 战略窗口",hq:"代理商",max_market:"美区",coverage:"全球",sub:7,rate:6,market:8,cb:7,multi:6,settle:6,window:1,cost:"中 1.5",diff:"通过子商户/聚合商身份接入，可能覆盖部分直连受限场景；等报价中",biz1:0,biz2:0,ai:"⏳待问"},
  {name:"Stripe",region:"全球",role:"全球聚合商",gate:"✅ PASS",hk:"✅",rec:"🟢 已锁接入",driver:"L1 客户订单",hq:"US",max_market:"全球",coverage:"全球",sub:9,rate:5,market:8,cb:8,multi:9,settle:7,window:1,cost:"中 1.5",diff:"订阅引擎和全球卡能力强，但特殊类目限制严格",biz1:7.05,biz2:7.4,ai:"❌不接"},
  {name:"Appota",region:"越南菲律宾",role:"本地 PSP",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"🟢 已锁接入",driver:"L1 客户订单",hq:"越南",max_market:"越南",coverage:"VN",sub:6,rate:8,market:5,cb:5,multi:5,settle:6,window:1,cost:"中 1.5",diff:"越南本地支付重点候选，网银费率最低约1.1%，适合越南启动场景",biz1:6.45,biz2:5.6,ai:"未知"},
  {name:"Razorpay",region:"印度",role:"本地 PSP",gate:"✅ PASS",hk:"✅",rec:"🟢 已锁接入",driver:"L2 资方",hq:"印度",max_market:"印度",coverage:"IN",sub:8,rate:7,market:6,cb:7,multi:5,settle:7,window:1,cost:"中 1.5",diff:"印度PSP#1，55%市占，PA-CB牌照HK直签无需印度实体",biz1:7.05,biz2:6.35,ai:"未知"},
  {name:"PagBrasil",region:"拉美",role:"本地 PSP",gate:"✅ PASS",hk:"✅",rec:"🟢 已锁接入",driver:"L2 资方",hq:"巴西",max_market:"巴西",coverage:"BR",sub:9.5,rate:6,market:5,cb:7,multi:5,settle:7,window:2,cost:"中 1.5",diff:"PagStream订阅能力9.5全候选最高+PIX 1.99%+HK直结",biz1:7.35,biz2:7.38,ai:"未知"},

  // ========== 全球聚合商 ==========
  {name:"Checkout.com",region:"全球",role:"全球聚合商",gate:"✅ PASS",hk:"✅",rec:"观察",driver:"L3 战略窗口",hq:"London, UK",max_market:"UAE / 欧洲",coverage:"全球 150+ 国",sub:8,rate:6.5,market:7.5,cb:7,multi:6,settle:7,window:1,cost:"中 1.5",diff:"CBUAE收单牌照，HK直签路径清晰；UAE/欧洲场景降级观察，等明确订单激活",biz1:7.25,biz2:7.2,ai:"⏳待问"},
  {name:"Nuvei",region:"全球",role:"全球聚合商",gate:"✅ PASS",hk:"✅",rec:"观察",driver:"L5 观察",hq:"加拿大",max_market:"全球",coverage:"全球",sub:7.5,rate:6.5,market:9,cb:9,multi:8.5,settle:7,window:1,cost:"重 2.5",diff:"业务二综合最高/游戏场景首选/拒付拦截98%，接入成本重",biz1:7.73,biz2:7.95,ai:"未知"},
  {name:"Rapyd",region:"全球",role:"全球聚合商",gate:"✅ PASS",hk:"✅",rec:"备选",driver:"L3 战略窗口",hq:"London",max_market:"LatAm+非洲",coverage:"100+ 国",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:1,cost:"中 1.5",diff:"LatAm+非洲补位，业务二备选，业务一不接",biz1:6.85,biz2:7.35,ai:"未知"},
  {name:"Adyen",region:"全球",role:"全球聚合商",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"荷兰",max_market:"全球",coverage:"全球",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:1,cost:"重 2.5",diff:"与Stripe定位高度重叠，订阅画像审核保守；高风险/擦边场景不作为当前接入对象",biz1:6.75,biz2:7.55,ai:"❌不接"},
  {name:"dLocal",region:"全球",role:"全球聚合商",gate:"✅ PASS",hk:"✅",rec:"观察",driver:"L5 观察",hq:"乌拉圭",max_market:"新兴市场",coverage:"40+ 国",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:1,cost:"中 1.5",diff:"一签覆盖Antom盲区LatAm+非洲+南亚，业务二新兴市场聚合第一",biz1:7.22,biz2:7.63,ai:"未知"},
  {name:"Worldline",region:"全球",role:"全球聚合商",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"法国",max_market:"欧洲",coverage:"欧洲",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"N/A",diff:"2025/6公司崩盘，主动撤非欧业务，全Gate失败",biz1:4.2,biz2:3.85,ai:"❌不接"},
  {name:"Worldpay/FIS",region:"全球",role:"全球聚合商",gate:"✅ PASS",hk:"✅",rec:"❌ 不接入",driver:"L5 观察",hq:"US",max_market:"全球",coverage:"全球",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"重 2.5",diff:"GP收购整合期+3年合同锁定+订阅平庸，全面被Stripe/Adyen/Nuvei替代",biz1:6.6,biz2:6.9,ai:"❌不接"},
  {name:"PayU Global",region:"全球",role:"全球聚合商",gate:"✅ PASS",hk:"✅",rec:"❌ 不接入",driver:"L5 观察",hq:"荷兰",max_market:"印度/SEA",coverage:"15+ 国",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"中 1.5",diff:"GPO已售出Rapyd，印度/SEA与Razorpay/Antom高度重叠",biz1:6.48,biz2:6.38,ai:"未知"},
  {name:"Unlimit / Unlimint",region:"全球",role:"全球聚合商",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"London + Cyprus",max_market:"高风险跨境",coverage:"90+ 地区",sub:7,rate:6,market:7.5,cb:6.5,multi:6.5,settle:6.5,window:0,cost:"重 2.5",diff:"全球高风险跨境聚合商，已迁出俄罗斯，独占价值近 0",biz1:6.68,biz2:6.75,ai:"未知"},
  {name:"Airwallex",region:"全球",role:"全球聚合商",gate:"⚠️ 部分FAIL",hk:"✅",rec:"备选",driver:"L4 业务补全",hq:"HK / 墨尔本",max_market:"中国出海+全球",coverage:"150+ 国",sub:8,rate:7,market:8,cb:7,multi:6,settle:8,window:1,cost:"中 1.5",diff:"HK 总部直签最顺路径+中国出海客户红利。云汇即此公司",biz1:7.55,biz2:7.35,ai:"未知"},
  {name:"VailPay",region:"全球",role:"全球聚合商",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"备选",driver:"L5 观察",hq:"亚洲",max_market:"中国出海+东南亚",coverage:"40+ 国",sub:6,rate:6,market:7,cb:6,multi:6,settle:6,window:1,cost:"中 1.5",diff:"中国出海支付服务商,覆盖中港韩泰马印菲越新美英欧 40+ 国,100+ 支付方式。服务跨境电商/游戏/海外直播/数字商品/旅游,2024.12 刊例。HK 直签待验证",biz1:6,biz2:5.8,ai:"⏳待问"},
  {name:"PayerMax",region:"全球",role:"全球聚合商",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"备选",driver:"L5 观察",hq:"新加坡",max_market:"东南亚+新兴市场",coverage:"150+ 国",sub:7,rate:6,market:8.5,cb:6.5,multi:8,settle:5.5,window:1,cost:"中 1.5",diff:"新加坡 MAS 全牌照(SHAREit/茄子科技旗下),收单+收款+正式 ISV 模式适合中间商。东南亚全钱包+巴西 PIX/Boleto+MENA,150 国 600+ 支付方式,覆盖最强项。订阅/社交直播打赏强。费率未公开需个案报价,T+2 周账期偏慢。特殊类目接受度待 BD 报备。Trustpilot 1.9 有兑现落差投诉。2026-05-20 调研",biz1:6.73,biz2:7.15,ai:"⏳待问"},
  {name:"Oceanpayment",region:"全球",role:"全球聚合商",gate:"✅ PASS",hk:"✅",rec:"备选",driver:"L5 观察",hq:"中国香港",max_market:"跨境电商/游戏出海",coverage:"200+ 国",sub:7,rate:6,market:8,cb:6.5,multi:6,settle:5.5,window:1,cost:"中 1.5",diff:"老牌正规跨境收单 PSP(2014,香港总部,PCI DSS L1+新加坡 MPI 牌照,海闻教授顾问)。全卡组直连(Visa/MC/Amex/Discover/银联/JCB),500+支付产品,200+国家,140+货币。HK 直签顺路。风控严，特殊类目大概率拒签，更适合正规游戏/订阅/电商。费率约 3-3.8%+$0.30 跨境卡,账期/reserve 未公开需问商务。2026-05-20 调研",biz1:6.65,biz2:6.65,ai:"❌不接"},

  // ========== MoR ==========
  {name:"Paddle",region:"全球",role:"MoR",gate:"⚠️ 部分FAIL",hk:"✅",rec:"备选",driver:"L3 战略窗口",hq:"London",max_market:"SaaS",coverage:"全球",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:2,cost:"中 1.5",diff:"FTC 2025/6后主动清退惰性订阅画像/业务二AUP禁聚合，仅作硬门槛国最后备份",biz1:6.65,biz2:6.05,ai:"❌不接"},
  {name:"FastSpring",region:"全球",role:"MoR",gate:"✅ PASS",hk:"✅",rec:"P2 补位",driver:"L3 战略窗口",hq:"US",max_market:"SaaS",coverage:"全球",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:2,cost:"轻 1.0",diff:"SaaS DNA订阅/EU日韩巴西税务长尾市场MoR兜底层",biz1:6.7,biz2:5.9,ai:"❌不接"},
  {name:"Xsolla",region:"全球",role:"MoR",gate:"⚠️ 部分FAIL",hk:"✅",rec:"P2 补位",driver:"L3 战略窗口",hq:"US",max_market:"游戏",coverage:"200+ 国",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:2,cost:"中 1.5",diff:"游戏垂直王者/越南MoR牌照独家/印度UPI重启，等游戏客户L1激活",biz1:0,biz2:7.53,ai:"未知"},
  {name:"LemonSqueezy",region:"全球",role:"MoR",gate:"⚠️ 条件PASS",hk:"✅",rec:"❌ 不接入",driver:"L5 观察",hq:"US",max_market:"SaaS",coverage:"全球",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"轻 1.0",diff:"Stripe收购后产品过渡期，等Stripe Managed Payments",biz1:6.48,biz2:5.95,ai:"❌不接"},
  {name:"Gumroad",region:"全球",role:"MoR",gate:"✅ PASS",hk:"✅",rec:"❌ 不接入",driver:"L5 观察",hq:"US",max_market:"创作者",coverage:"全球",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"轻 1.0",diff:"费率12.9%规模化不经济，业务二结构性淘汰",biz1:5.4,biz2:4.78,ai:"未知"},

  // ========== 拉美本地 ==========
  {name:"Mercado Pago",region:"拉美",role:"本地 PSP",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"备选",driver:"L2 资方",hq:"阿根廷",max_market:"拉美",coverage:"18 国",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:1,cost:"重 2.5",diff:"拉美最大消费者平台，dLocal已覆盖钱包路由，战略定位错配",biz1:6.93,biz2:7.23,ai:"未知"},
  {name:"StoneCo",region:"拉美",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"巴西",max_market:"巴西",coverage:"BR",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"N/A",diff:"Gate FAIL，HK不签仅CNPJ本地",biz1:6.53,biz2:5.45,ai:"未知"},
  {name:"Cielo",region:"拉美",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"巴西",max_market:"巴西",coverage:"BR",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"N/A",diff:"Gate FAIL，2025私有化+HK不签",biz1:5.45,biz2:4.85,ai:"未知"},
  {name:"Kushki",region:"拉美",role:"本地 PSP",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"厄瓜多尔",max_market:"拉美5国",coverage:"5 国",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:1,cost:"中 1.5",diff:"覆盖傅5国缺 BR/AR，与dLocal重叠不签",biz1:6.6,biz2:6.6,ai:"未知"},
  {name:"EBANX",region:"拉美",role:"本地 PSP",gate:"✅ PASS",hk:"✅",rec:"P2 补位",driver:"L3 战略窗口",hq:"巴西",max_market:"拉美",coverage:"15 国",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:2,cost:"中 1.5",diff:"Pix Automatico+游戏行业独家BR补位，巴西 P2 场景",biz1:7.6,biz2:7.4,ai:"未知"},
  {name:"PagSeguro",region:"拉美",role:"本地 PSP",gate:"✅ PASS",hk:"✅",rec:"❌ 不接入",driver:"L5 观察",hq:"巴西",max_market:"巴西",coverage:"BR",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:1,cost:"中 1.5",diff:"与PagBrasil功能重叠80%，评分更低不接入",biz1:7.15,biz2:7.13,ai:"未知"},

  // ========== 中东本地 ==========
  {name:"HyperPay",region:"中东",role:"本地 PSP",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"观察",driver:"L3 战略窗口",hq:"Riyadh, SA",max_market:"沙特",coverage:"SA/UAE/JO/OM/QA/IQ/LB/BH",sub:8.5,rate:6,market:5.5,cb:6.5,multi:5,settle:6,window:1,cost:"重 2.5",diff:"首家打通Mada完整订阅+tokenization，沙特降级观察",biz1:7.6,biz2:7.1,ai:"未知"},
  {name:"Amazon Payment Services",region:"中东",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"UAE",max_market:"UAE",coverage:"中东",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:1,cost:"重 2.5",diff:"需UAE本地实体+游戏业务保守",biz1:6.45,biz2:5.85,ai:"未知"},
  {name:"Network International",region:"中东",role:"本地 PSP",gate:"⚠️ 部分FAIL",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"UAE",max_market:"UAE",coverage:"中东",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"重 2.5",diff:"UAE最大PSP，HK签约阻力大+游戏保守",biz1:5.8,biz2:5.55,ai:"未知"},
  {name:"PayTabs",region:"中东",role:"本地 PSP",gate:"✅ PASS",hk:"✅",rec:"备选",driver:"L5 观察",hq:"沙特",max_market:"MENA",coverage:"MENA多国",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:1,cost:"中 1.5",diff:"MENA多国扩展P6备选，不HyperPay平替",biz1:6.7,biz2:6.7,ai:"未知"},
  {name:"Tap Payments",region:"中东",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"科威特",max_market:"科威特",coverage:"GCC",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:1,cost:"中 1.5",diff:"HK直签受阻+仅Kuwait Knet独家价值",biz1:6.55,biz2:6.41,ai:"未知"},
  {name:"Telr",region:"中东",role:"本地 PSP",gate:"✅ PASS",hk:"✅",rec:"❌ 不接入",driver:"L5 观察",hq:"UAE",max_market:"UAE",coverage:"中东",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"中 1.5",diff:"规模小+覆盖重叠+游戏禁用",biz1:6.05,biz2:5.68,ai:"未知"},
  {name:"Moyasar",region:"中东",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"沙特",max_market:"沙特",coverage:"SA",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"N/A",diff:"Gate FAIL，HK不能签，功能被HyperPay覆盖",biz1:5.2,biz2:6.83,ai:"未知"},
  {name:"Fawry",region:"中东",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"埃及",max_market:"埃及",coverage:"EG",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"中 1.5",diff:"需埃及实体不直签，未来Checkout.com APM开通即可覆盖",biz1:6.28,biz2:6.43,ai:"未知"},

  // ========== 东南亚本地 ==========
  {name:"2C2P (Antom)",region:"东南亚",role:"本地 PSP",gate:"✅ PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"新加坡",max_market:"东南亚",coverage:"TH/SG/MY/ID/PH/VN/MM",sub:7,rate:5.5,market:7,cb:6,multi:7,settle:6.5,window:0,cost:"中 1.5",diff:"2025-10 已 rebrand '2C2P by Antom'，与 Antom 100% 重叠",biz1:6.38,biz2:6.63,ai:"❌不接"},
  {name:"Xendit",region:"东南亚",role:"本地 PSP",gate:"✅ PASS",hk:"✅",rec:"P2 补位",driver:"L3 战略窗口",hq:"印尼",max_market:"印尼",coverage:"ID/PH",sub:7.5,rate:8,market:7,cb:6,multi:8,settle:8,window:1,cost:"中 1.5",diff:"印尼QRIS 0.7%+T+2结算+全钱包订阅，Antom印尼盲区补位",biz1:7.3,biz2:7.48,ai:"未知"},
  {name:"Omise (Opn Payments)",region:"东南亚",role:"本地 PSP",gate:"✅ PASS",hk:"✅",rec:"❌ 不接入",driver:"L5 观察",hq:"泰国",max_market:"泰国",coverage:"TH/JP/SG/MY",sub:7,rate:6,market:5,cb:6,multi:6,settle:7,window:0,cost:"中 1.5",diff:"Antom已覆盖泰国全主力支付，Omise费率更贵",biz1:6.25,biz2:6.15,ai:"未知"},
  {name:"DOKU",region:"东南亚",role:"本地 PSP",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"印尼雅加达",max_market:"印尼",coverage:"ID",sub:6.5,rate:7.5,market:3.5,cb:6.5,multi:7,settle:7,window:0,cost:"中 1.5",diff:"印尼老牌 PSP，与 Antom 100% 重叠，单国覆盖最差档",biz1:6.35,biz2:6.2,ai:"未知"},
  {name:"Midtrans",region:"东南亚",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"印尼",max_market:"印尼",coverage:"ID",sub:7.5,rate:7.5,market:3.5,cb:6.5,multi:5.5,settle:4.5,window:0,cost:"重 2.5",diff:"GoTo 旗下 GoPay 原生订阅+Recurring API成熟，但单国 IDR-only 与 Antom 100% 重叠",biz1:6.4,biz2:5.9,ai:"未知"},
  {name:"PayMongo",region:"东南亚",role:"本地 PSP",gate:"✅ PASS",hk:"✅",rec:"❌ 不接入",driver:"L5 观察",hq:"菲律宾",max_market:"菲律宾",coverage:"PH",sub:7.5,rate:6,market:3.5,cb:7,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"菲律宾 #1 PSP，Subscriptions+Platforms 多商户，与 Antom GCash/Maya 重叠",biz1:6.23,biz2:6.13,ai:"未知"},
  {name:"Maya Business",region:"东南亚",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"菲律宾",max_market:"菲律宾",coverage:"PH",sub:6,rate:5.5,market:3,cb:6.5,multi:5.5,settle:5.5,window:0,cost:"重 2.5",diff:"菲律宾#1/#2钱包+银行牌照齐全但HK不能直签",biz1:5.48,biz2:5.23,ai:"未知"},

  // ========== 越南菲律宾 (钱包) ==========
  {name:"GCash",region:"越南菲律宾",role:"钱包",gate:"⚠️ 条件PASS",hk:"❌",rec:"❌ 不接入",driver:"L4 业务补全",hq:"菲律宾",max_market:"菲律宾",coverage:"PH",sub:8,rate:7,market:4.5,cb:6.5,multi:5,settle:7,window:0,cost:"N/A",diff:"菲律宾最大电子钱包9400万用户+完整recurring，Antom已覆盖",biz1:5.9,biz2:5.9,ai:"未知"},
  {name:"Maya",region:"越南菲律宾",role:"钱包",gate:"✅ PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L4 业务补全",hq:"菲律宾",max_market:"菲律宾",coverage:"PH",sub:8,rate:7,market:4,cb:6.5,multi:5,settle:7,window:0,cost:"N/A",diff:"菲律宾第二大钱包，原生recurring billing，Antom已有Maya接入文档",biz1:6,biz2:5.95,ai:"未知"},
  {name:"ZaloPay",region:"越南菲律宾",role:"钱包",gate:"⚠️ 条件PASS",hk:"❌",rec:"❌ 不接入",driver:"L4 业务补全",hq:"越南",max_market:"越南",coverage:"VN",sub:7,rate:7,market:3.5,cb:6,multi:4.5,settle:6.5,window:0,cost:"N/A",diff:"越南第二大电子钱包，Appota已聚合",biz1:5.6,biz2:5.5,ai:"未知"},
  {name:"MoMo (越南)",region:"越南菲律宾",role:"钱包",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"越南",max_market:"越南",coverage:"VN",sub:7.5,rate:6.5,market:3.5,cb:7.5,multi:4.5,settle:6,window:0,cost:"重 2.5",diff:"越南#1 wallet 但 HK 直签结构性 FAIL，被 Antom+Appota 双层覆盖",biz1:6.5,biz2:5.8,ai:"未知"},

  // ========== 印度本地 ==========
  {name:"PayU India",region:"印度",role:"本地 PSP",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"印度",max_market:"印度",coverage:"IN",sub:7,rate:7.5,market:4.5,cb:6.5,multi:6.5,settle:6.5,window:0,cost:"中 1.5",diff:"与 Razorpay 100% 重叠且产品力略弱，无独家价值",biz1:6.6,biz2:6.38,ai:"未知"},
  {name:"Cashfree Payments",region:"印度",role:"本地 PSP",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"印度",max_market:"印度",coverage:"IN/UAE",sub:7,rate:8,market:4,cb:6.5,multi:6.5,settle:7.5,window:0,cost:"中 1.5",diff:"RBI 首张 PA-CB+Instant Settlement+UPI 0%，但与 Razorpay 100% 重叠",biz1:6.75,biz2:6.45,ai:"未知"},
  {name:"Paytm Payment Gateway",region:"印度",role:"本地 PSP",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"印度",max_market:"印度",coverage:"IN",sub:6.5,rate:6.5,market:3.5,cb:6,multi:6,settle:6.5,window:0,cost:"中 1.5",diff:"印度四家通道全面最低，集团合规包袱重无独家价值",biz1:5.95,biz2:5.75,ai:"未知"},
  {name:"Juspay",region:"印度",role:"本地 PSP",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"印度",max_market:"印度",coverage:"IN/AE/SG/US/EU/UK",sub:7.5,rate:5.5,market:7.5,cb:7,multi:7.5,settle:5.5,window:0,cost:"重 2.5",diff:"印度 routing/orchestrator 层，与 Antom 功能 60% 重叠",biz1:6.7,biz2:6.95,ai:"未知"},
  {name:"Instamojo",region:"印度",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"印度",max_market:"印度",coverage:"IN",sub:3.5,rate:5.5,market:2,cb:4.5,multi:4,settle:5.5,window:0,cost:"N/A",diff:"印度SMB建站工具，无原生Recurring，非PSP标准玩家",biz1:4.18,biz2:3.9,ai:"未知"},

  // ========== 日本本地 ==========
  {name:"GMO Payment Gateway",region:"日本",role:"本地 PSP",gate:"⚠️ 条件PASS",hk:"❌",rec:"搁置",driver:"L5 观察",hq:"日本东京",max_market:"日本",coverage:"JP",sub:8,rate:5,market:3,cb:8,multi:7.5,settle:5,window:0,cost:"重 2.5",diff:"日本#1 PSP 22万亿日元/150K商户但HK主体直签必经Citcon中转",biz1:6.2,biz2:6.15,ai:"未知"},
  {name:"KOMOJU",region:"日本",role:"本地 PSP",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"日本",max_market:"日本",coverage:"JP/KR/CN/SEA/AU/EU",sub:7.5,rate:5.5,market:6,cb:7.5,multi:6.5,settle:5.5,window:0,cost:"中 1.5",diff:"Steam 亚洲落地伙伴+日本 chargeback<0.1%，但 Platform 模型限日本主体",biz1:6.58,biz2:6.5,ai:"未知"},
  {name:"SB Payment Service",region:"日本",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"日本",max_market:"日本",coverage:"JP",sub:7.5,rate:5,market:3,cb:8,multi:6.5,settle:5,window:0,cost:"重 2.5",diff:"PayPay 集团内最深整合 + Carrier Billing 三大全",biz1:6.05,biz2:5.83,ai:"未知"},
  {name:"PayPay",region:"日本",role:"钱包",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"日本",max_market:"日本",coverage:"JP",sub:6,rate:5,market:3,cb:7.5,multi:2.5,settle:5,window:0,cost:"重 2.5",diff:"日本最大 QR 钱包，但海外公司禁直签必经 agency",biz1:5.5,biz2:4.6,ai:"未知"},

  // ========== 韩台本地 ==========
  {name:"Toss Payments",region:"韩台",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"首尔",max_market:"韩国",coverage:"KR",sub:7.5,rate:5.5,market:3,cb:7.5,multi:4,settle:6,window:0,cost:"重 2.5",diff:"韩国#4 PG/Viva fintech，HK 不签需韩国法人",biz1:6.18,biz2:5.45,ai:"未知"},
  {name:"KG Inicis",region:"韩台",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"韩国",max_market:"韩国",coverage:"KR",sub:7.5,rate:5.5,market:3,cb:7.5,multi:4,settle:5.5,window:0,cost:"重 2.5",diff:"韩国PG #1 40%份额，仅接Korea-issued卡，HK不签",biz1:6.13,biz2:5.4,ai:"未知"},
  {name:"NHN KCP",region:"韩台",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"韩国",max_market:"韩国",coverage:"KR",sub:7,rate:5.5,market:3.5,cb:7.5,multi:4,settle:5.5,window:0,cost:"重 2.5",diff:"韩国 PG Top 4 NHN 集团，B2B 强但 HK 主体不可签",biz1:6.05,biz2:5.38,ai:"未知"},
  {name:"TapPay (Cherri Tech)",region:"韩台",role:"本地 PSP",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"台北",max_market:"台湾",coverage:"TW/HK/SG/MY/JP/TH",sub:7,rate:6,market:4.5,cb:6.5,multi:4,settle:6.5,window:0,cost:"重 2.5",diff:"TW Cards/17收单银行直连+Cherri X AI风控+Tap to Pay",biz1:6.23,biz2:5.65,ai:"未知"},
  {name:"ECPay (绿界)",region:"韩台",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"台湾",max_market:"台湾",coverage:"TW",sub:7.5,rate:5,market:3.5,cb:6.5,multi:4,settle:6.5,window:0,cost:"重 2.5",diff:"电子发票+物流+超商一体化，但HK主体不可签",biz1:6,biz2:5.43,ai:"未知"},
  {name:"NewebPay (蓝新金流)",region:"韩台",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"台北",max_market:"台湾",coverage:"TW",sub:7.5,rate:5,market:3.5,cb:6.5,multi:4,settle:6.5,window:0,cost:"重 2.5",diff:"NDNP 卡端定期定额+卡号自动更新，与 ECPay 全面对位无独占价值",biz1:5.98,biz2:5.43,ai:"未知"},

  // ========== 土耳其 ==========
  {name:"iyzico",region:"土耳其",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"土耳其伊斯坦布尔",max_market:"土耳其",coverage:"TR",sub:7.5,rate:5.5,market:3.5,cb:7,multi:6.5,settle:6,window:0,cost:"重 2.5",diff:"土耳其#1 PayU旗下30K商户 原生订阅+多币种+Marketplace，HK不能签",biz1:6.15,biz2:6,ai:"未知"},
  {name:"PayTR",region:"土耳其",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"土耳其伊斯坦布尔",max_market:"土耳其",coverage:"TR",sub:7,rate:6,market:3.5,cb:6.5,multi:6,settle:6,window:0,cost:"重 2.5",diff:"土耳其本土独立 PSP 入门费率最优但与 iyzico 100% 重叠",biz1:6.03,biz2:5.8,ai:"未知"},
  {name:"Papara",region:"土耳其",role:"钱包",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"Istanbul",max_market:"Turkey",coverage:"TR",sub:6.5,rate:6.5,market:3.5,cb:5,multi:5,settle:5.5,window:0,cost:"重 2.5",diff:"土耳其23M用户钱包，CEO因₺12.9B非法博彩被起诉/牌照受托人管理",biz1:5.65,biz2:5.35,ai:"未知"},
  {name:"Param",region:"土耳其",role:"本地 PSP",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"Istanbul + 欧洲",max_market:"Turkey",coverage:"TR/UK/NL/CZ",sub:6.5,rate:6,market:4.5,cb:6.5,multi:6.5,settle:6,window:0,cost:"重 2.5",diff:"土耳其 4 家中唯一具欧洲 5 国 EMI 布局+Discover 全卡牌",biz1:6.03,biz2:5.98,ai:"未知"},

  // ========== 非洲 ==========
  {name:"Paystack",region:"非洲",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"Lagos / SF",max_market:"尼日利亚",coverage:"NG/GH/SA/KE/CI/RW",sub:7.5,rate:5.5,market:4.5,cb:6,multi:5,settle:6,window:0,cost:"重 2.5",diff:"Stripe 子品牌但仅 6 国非洲法人 HK 不可签且无绕道",biz1:6.1,biz2:5.8,ai:"未知"},
  {name:"Flutterwave",region:"非洲",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"SF / Lagos",max_market:"尼日利亚",coverage:"非洲35+ 国",sub:6.5,rate:5.5,market:6.5,cb:6,multi:5.5,settle:6,window:0,cost:"中 1.5",diff:"非洲 35+ 国持牌最多 PSP，HK 不签需 US/UK 绕道",biz1:6.1,biz2:6.05,ai:"未知"},
  {name:"Onafriq",region:"非洲",role:"本地 PSP",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"London/南非",max_market:"尼日利亚",coverage:"非洲 41+ 国",sub:5.5,rate:5,market:7,cb:5.5,multi:6,settle:6,window:0,cost:"重 2.5",diff:"泛非 41+ 国最广 B2B 基础设施层 hub 但与 dLocal 重叠定位错配",biz1:5.65,biz2:5.88,ai:"未知"},
  {name:"Cellulant Tingg",region:"非洲",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"肯尼亚",max_market:"NG/KE/GH",coverage:"非洲 15 国",sub:5.5,rate:5,market:7,cb:6,multi:6,settle:5.5,window:0,cost:"重 2.5",diff:"泛非企业级 omnichannel + 4.5M tx/day + Emirates 旗舰",biz1:5.7,biz2:5.88,ai:"未知"},

  // ========== BNPL ==========
  {name:"Klarna",region:"全球",role:"BNPL",gate:"⚠️ 部分FAIL",hk:"✅",rec:"❌ 不接入",driver:"L5 观察",hq:"瑞典",max_market:"欧美",coverage:"45 国",sub:2,rate:3,market:8,cb:7,multi:5,settle:6,window:0,cost:"中 1.5",diff:"BNPL不等于订阅，无自动化monthly扣费，费率5.99%+$0.30极高",biz1:4.8,biz2:4.9,ai:"❌不接"},
  {name:"Afterpay / Clearpay",region:"澳洲",role:"BNPL",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"美国/澳洲",max_market:"美国+澳洲",coverage:"US/AU/UK/NZ/CA",sub:4.5,rate:4.5,market:6.5,cb:7.5,multi:5,settle:6.5,window:0,cost:"重 2.5",diff:"Block 旗下 BNPL 8 国，HK 不在列，且订阅/数字内容/特殊类目限制较多",biz1:5.6,biz2:5.5,ai:"❌不接"},
  {name:"Tabby",region:"中东",role:"BNPL",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"沙特/迪拜",max_market:"沙特",coverage:"AE/SA",sub:5,rate:4.5,market:3,cb:7,multi:4.5,settle:6,window:0,cost:"重 2.5",diff:"MENA #1 BNPL，HK 不可签 + 与订阅类别错配",biz1:5.08,biz2:4.73,ai:"❌不接"},
  {name:"Tamara",region:"中东",role:"BNPL",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"沙特",max_market:"沙特",coverage:"SA/AE/KW/BH",sub:5,rate:4.5,market:4,cb:7,multi:4.5,settle:6,window:0,cost:"重 2.5",diff:"GCC #2 BNPL Sharia 4 国略胜 Tabby 但类别错配",biz1:5.23,biz2:4.93,ai:"❌不接"},
  {name:"Affirm",region:"美区",role:"BNPL",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"美国",max_market:"美国",coverage:"US/CA/UK",sub:4,rate:4.5,market:5,cb:7.5,multi:4.5,settle:6.5,window:0,cost:"重 2.5",diff:"US BNPL #1 但仅 US/CA/UK 三国+三重红线+非订阅 rail",biz1:5.23,biz2:4.98,ai:"❌不接"},
  {name:"Zip Co",region:"澳洲",role:"BNPL",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"悉尼",max_market:"澳洲+美国",coverage:"AU/NZ/US",sub:4.5,rate:5,market:5,cb:7,multi:4.5,settle:6,window:0,cost:"重 2.5",diff:"BNPL 撤至 AU/NZ/US 3 国，与 Stripe Zip APM 重叠",biz1:5.35,biz2:5.08,ai:"❌不接"},

  // ========== CIS/俄罗斯 ==========
  {name:"YooKassa",region:"CIS",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"莫斯科",max_market:"俄罗斯",coverage:"RU/CIS",sub:6.5,rate:3.5,market:1.5,cb:5,multi:3.5,settle:2,window:0,cost:"重 2.5",diff:"Sberbank系俄#1 PSP，OFAC+SWIFT双制裁HK签不了",biz1:4.25,biz2:3.85,ai:"❌不接"},
  {name:"Tinkoff / T-Pay",region:"CIS",role:"本地 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"L5 观察",hq:"莫斯科",max_market:"俄罗斯",coverage:"RU/CIS",sub:6.5,rate:3.5,market:1.5,cb:5,multi:3.5,settle:2,window:0,cost:"重 2.5",diff:"T-Bank OFAC SDN+SWIFT 阻断，与 YooKassa 同档双 Gate FAIL 永久排除",biz1:4.25,biz2:3.85,ai:"❌不接"},

  // ========== 加密 ==========
  {name:"Triple-A",region:"加密链",role:"加密 PSP",gate:"✅ PASS",hk:"✅",rec:"搁置",driver:"L5 观察",hq:"新加坡",max_market:"APAC",coverage:"全球主流国家",sub:5,rate:7.5,market:6.5,cb:9.5,multi:5,settle:8.5,window:0,cost:"轻 1.0",diff:"MAS监管加密收款，零拒付+T+1法币结算，但主流消费者不用加密支付+订阅recurring局限",biz1:7,biz2:6.8,ai:"未知"},
  {name:"StablePay (稳定支付)",region:"加密链",role:"加密 PSP",gate:"✅ PASS",hk:"✅",rec:"P2 补位",driver:"L3 战略窗口",hq:"亚洲",max_market:"中国出海",coverage:"全球",sub:6,rate:7,market:6,cb:9,multi:5,settle:8,window:1,cost:"轻 1.0",diff:"稳定币支付基础设施，适合稳定币收款、支付链接和小额批量付款场景；卡收单能力需另行配置",biz1:6.5,biz2:6,ai:"⏳待问"},
  {name:"BitPay",region:"加密链",role:"加密 PSP",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"❌ 不接入",driver:"L5 观察",hq:"亚特兰大",max_market:"US",coverage:"加密200+ / 法币37国",sub:4,rate:7,market:5.5,cb:9,multi:4,settle:7.5,window:1,cost:"中 1.5",diff:"0 chargeback+1%头部费率，但订阅 auto-debit 永不可能",biz1:6.33,biz2:5.6,ai:"未知"},
  {name:"Coinbase Commerce",region:"加密链",role:"加密 PSP",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"旧金山",max_market:"美国",coverage:"US/SG",sub:3.5,rate:7.5,market:5,cb:9,multi:3.5,settle:7,window:0,cost:"重 2.5",diff:"2026-03-31 已关停非美/非新加坡商户，HK 不可签",biz1:6.18,biz2:5.3,ai:"❌不接"},

  // ========== 美区新增 - 中国系 ISO/MoR ==========
  {name:"美区高风险卡通道 A",region:"美区",role:"MoR",gate:"✅ PASS",hk:"✅",rec:"🏆 强推",driver:"L1 客户订单",hq:"中国",max_market:"美区高风险订阅",coverage:"US",sub:8,rate:7,market:5,cb:8,multi:5,settle:8,window:2,cost:"中 1.5",diff:"美区高风险订阅 MoR，已完成基础尽调；T+3 结算，拒付成本结构较友好，需持续监控主体稳定性",biz1:7.5,biz2:6.5,ai:"✅可接"},
  {name:"Waffo",region:"全球",role:"MoR",gate:"⚠️ 条件PASS",hk:"✅",rec:"备选",driver:"L5 观察",hq:"欧洲",max_market:"美区+全球",coverage:"全球",sub:7,rate:4,market:7,cb:6,multi:5,settle:5,window:1,cost:"中 1.5",diff:"10%+€0.30 实际成本偏高，T+10，€10K最低提现，10-15% 保证金锁120天；当前暂停推进",biz1:5.5,biz2:5,ai:"✅可接"},
  {name:"AnstPay",region:"美区",role:"MoR",gate:"❌ FAIL",hk:"⚠️",rec:"❌ 不接入",driver:"Gate失败",hq:"中国",max_market:"美区",coverage:"US",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"N/A",diff:"原方案类目适配度不足；替代方案涉及代结算，合规复杂，当前不接入",biz1:0,biz2:0,ai:"✅可接"},
  {name:"Asiabill",region:"美区",role:"MoR",gate:"❌ FAIL",hk:"❌",rec:"❌ 不接入",driver:"Gate失败",hq:"中国",max_market:"美区",coverage:"US",sub:0,rate:0,market:0,cb:0,multi:0,settle:0,window:0,cost:"N/A",diff:"特殊类目接受度不足，当前不接入",biz1:0,biz2:0,ai:"❌不接"},
  {name:"Pyvio",region:"美区",role:"MoR",gate:"⏳ 待评",hk:"⚠️",rec:"观察",driver:"L5 观察",hq:"未知",max_market:"美区",coverage:"US",sub:6,rate:6,market:5,cb:6,multi:5,settle:6,window:1,cost:"中 1.5",diff:"P3 等回复，可信度待验证",biz1:0,biz2:0,ai:"⏳待问"},

  // ========== 美区新增 - 高风险专精 ==========
  {name:"CCBill",region:"美区",role:"MoR",gate:"✅ PASS",hk:"⚠️",rec:"🏆 强推",driver:"L3 战略窗口",hq:"美国凤凰城",max_market:"美区高风险订阅",coverage:"全球",sub:9,rate:5,market:8,cb:8,multi:7,settle:7,window:2,cost:"中 1.5",diff:"1998 老牌高风险订阅 MoR，PSP 历史悠久，适合作为美区订阅备选；HK 直签待验证",biz1:7,biz2:6.5,ai:"✅可接"},
  {name:"Segpay",region:"美区",role:"MoR",gate:"✅ PASS",hk:"⚠️",rec:"🏆 强推",driver:"L3 战略窗口",hq:"美国佛州",max_market:"约会/互动订阅",coverage:"全球",sub:9,rate:5,market:7,cb:8,multi:7,settle:7,window:2,cost:"中 1.5",diff:"约会/互动订阅类专精，可作为美区高风险订阅备选；HK 直签待验证",biz1:7,biz2:6.5,ai:"✅可接"},
  {name:"Epoch",region:"美区",role:"MoR",gate:"✅ PASS",hk:"⚠️",rec:"🏆 强推",driver:"L3 战略窗口",hq:"美国洛杉矶",max_market:"高风险订阅",coverage:"全球",sub:9,rate:5,market:7,cb:8,multi:7,settle:7,window:2,cost:"中 1.5",diff:"老牌高风险订阅 MoR，适合作为美区订阅备选；HK 直签待验证",biz1:7,biz2:6.5,ai:"✅可接"},
  {name:"Vendo",region:"美区",role:"MoR",gate:"✅ PASS",hk:"⚠️",rec:"P2 补位",driver:"L3 战略窗口",hq:"美国",max_market:"约会",coverage:"全球",sub:8,rate:5,market:6,cb:7,multi:6,settle:6,window:1,cost:"中 1.5",diff:"约会垂直专精 MoR，HK 直签待验证",biz1:6.5,biz2:6,ai:"✅可接"},
  {name:"Verotel",region:"欧洲",role:"MoR",gate:"✅ PASS",hk:"⚠️",rec:"P2 补位",driver:"L3 战略窗口",hq:"荷兰",max_market:"欧洲高风险订阅",coverage:"全球",sub:8,rate:5,market:7,cb:7,multi:6,settle:6,window:1,cost:"中 1.5",diff:"欧洲高风险订阅老牌，覆盖美区，HK 直签待验证",biz1:6.5,biz2:6,ai:"✅可接"},
  {name:"Rocketgate",region:"美区",role:"全球聚合商",gate:"✅ PASS",hk:"⚠️",rec:"P2 补位",driver:"L5 观察",hq:"美国",max_market:"高风险订阅",coverage:"全球",sub:8,rate:6,market:6,cb:8,multi:6,settle:6,window:1,cost:"中 1.5",diff:"high-risk gateway/MoR，可配合 acquirer，订阅功能强",biz1:6.5,biz2:6,ai:"✅可接"},
  {name:"NetBilling",region:"美区",role:"MoR",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"备选",driver:"L5 观察",hq:"美国",max_market:"高风险 recurring",coverage:"美国+欧洲",sub:8,rate:5,market:5,cb:7,multi:5,settle:6,window:0,cost:"中 1.5",diff:"高风险订阅老 MoR，需查 HK 直签",biz1:6,biz2:5.5,ai:"✅可接"},

  // ========== 美区新增 - 高风险通用 ==========
  {name:"PaymentCloud",region:"美区",role:"全球聚合商",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"备选",driver:"L5 观察",hq:"美国",max_market:"高风险",coverage:"US",sub:6,rate:6,market:5,cb:7,multi:7,settle:6,window:0,cost:"中 1.5",diff:"high-risk specialist broker，帮匹配 underlying acquirer",biz1:6,biz2:5.5,ai:"✅可接"},
  {name:"EasyPayDirect",region:"美区",role:"全球聚合商",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"备选",driver:"L5 观察",hq:"美国",max_market:"高风险",coverage:"US",sub:6,rate:6,market:5,cb:6,multi:6,settle:6,window:0,cost:"中 1.5",diff:"high-risk MoR/broker",biz1:5.5,biz2:5,ai:"✅可接"},
  {name:"Soar Payments",region:"美区",role:"全球聚合商",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"备选",driver:"L5 观察",hq:"美国",max_market:"高风险",coverage:"US",sub:6,rate:6,market:5,cb:6,multi:6,settle:6,window:0,cost:"中 1.5",diff:"high-risk broker，匹配 acquirer",biz1:5.5,biz2:5,ai:"✅可接"},

  // ========== 美区新增 - 加密 ==========
  {name:"NOWPayments",region:"加密链",role:"加密 PSP",gate:"✅ PASS",hk:"✅",rec:"P2 补位",driver:"L3 战略窗口",hq:"塞舌尔",max_market:"全球",coverage:"全球",sub:7,rate:8,market:7,cb:9.5,multi:6,settle:8,window:1,cost:"轻 1.0",diff:"支持 USDT 等订阅，0.5% 费率最低之一。可作辅助通道接 5-10% 流量",biz1:7,biz2:6.5,ai:"✅可接"},
  {name:"NetCents",region:"加密链",role:"加密 PSP",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"备选",driver:"L5 观察",hq:"加拿大",max_market:"加密",coverage:"全球",sub:5,rate:7,market:5,cb:9,multi:5,settle:7,window:0,cost:"中 1.5",diff:"加密 PSP，订阅能力一般",biz1:5.5,biz2:5,ai:"✅可接"},
  {name:"CoinPayments",region:"加密链",role:"加密 PSP",gate:"✅ PASS",hk:"✅",rec:"P2 补位",driver:"L5 观察",hq:"加拿大",max_market:"全球",coverage:"全球",sub:6,rate:8,market:6,cb:9.5,multi:5,settle:8,window:1,cost:"轻 1.0",diff:"多币种加密 PSP",biz1:6,biz2:5.5,ai:"✅可接"},

  // ========== 美区新增 - 跨境聚合 ==========
  {name:"2Checkout / Verifone",region:"全球",role:"MoR",gate:"⚠️ 条件PASS",hk:"⚠️",rec:"备选",driver:"L5 观察",hq:"美国",max_market:"全球",coverage:"全球",sub:7,rate:5,market:7,cb:6,multi:6,settle:6,window:0,cost:"中 1.5",diff:"主流 MoR 中风险接受度相对高，需问类目",biz1:6,biz2:5.5,ai:"⏳待问"},

  // ========== 支付辅助服务 (拒付管理 / 反欺诈 / 风控) ==========
  {name:"拒付管理服务 A",region:"全球",role:"支付辅助服务",gate:"✅ PASS",hk:"✅",rec:"🟢 已锁接入",driver:"L1 客户订单",hq:"中国",max_market:"跨境拒付管理",coverage:"全球",sub:0,rate:0,market:0,cb:9.5,multi:0,settle:0,window:0,cost:"轻 1.0",diff:"信用卡拒付管理服务，覆盖反欺诈、预警、抗辩和包赔等模块；适合与高风险卡收单组合使用",biz1:0,biz2:0,ai:"✅可接"},

  // ========== Antom 子方式 (聚合旗下具体支付方式·判直连必要性) ==========
  // 东南亚(11)
  {name:"TNG eWallet (Antom·马)",region:"马来",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"马来西亚",max_market:"马来西亚",coverage:"MY",sub:6,rate:8,market:7,cb:8.5,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"本地1.6%/跨2.5%。费率已极低,直连省不了钱→留Antom聚合最优",biz1:7.10,biz2:6.90,ai:"❌随Antom"},
  {name:"GCash (Antom·菲)",region:"菲律宾",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"菲律宾",max_market:"菲律宾",coverage:"PH",sub:6,rate:7,market:7.5,cb:8,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"2.5%。菲国民钱包,但强制本地实体签不上→直连必要性中低",biz1:6.83,biz2:6.80,ai:"❌随Antom"},
  {name:"PromptPay (Antom·泰)",region:"泰国",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"泰国",max_market:"泰国",coverage:"TH",sub:4,rate:8.5,market:8,cb:8.5,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"央行QR 1.6%。泰国D&E运营杠杆点:引导用户走此替代LINEPay8%/TrueMoney7%,省6pp+",biz1:6.78,biz2:6.67,ai:"❌随Antom"},
  {name:"PayNow (Antom·新)",region:"新加坡",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"新加坡",max_market:"新加坡",coverage:"SG",sub:4,rate:9.5,market:6.5,cb:8.5,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"A2A 1.0%。费率全场最低之一,直连无收益→留Antom",biz1:6.80,biz2:6.52,ai:"❌随Antom"},
  {name:"Boost (Antom·马)",region:"马来",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"马来西亚",max_market:"马来西亚",coverage:"MY",sub:5.5,rate:7,market:6.5,cb:8,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"2.5%。马来次级钱包,直连必要性低",biz1:6.52,biz2:6.47,ai:"❌随Antom"},
  {name:"BPI (Antom·菲)",region:"菲律宾",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"菲律宾",max_market:"菲律宾",coverage:"PH",sub:5,rate:7,market:6.5,cb:8,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"2.5%银行。菲银行渠道,直连必要性低",biz1:6.37,biz2:6.35,ai:"❌随Antom"},
  {name:"TrueMoney (Antom·泰)",region:"泰国",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"泰国",max_market:"泰国",coverage:"TH",sub:6,rate:4,market:7,cb:8,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"D&E翻倍7%太贵+签不上,运营上引导走PromptPay替代→直连必要性中",biz1:6.00,biz2:6.25,ai:"❌随Antom"},
  {name:"泰国6家网银 (Antom·泰)",region:"泰国",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"泰国",max_market:"泰国",coverage:"TH",sub:5,rate:5.5,market:6.5,cb:8,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"3.75%网银直连。一签覆盖泰6行,直连必要性低",biz1:6.00,biz2:6.12,ai:"❌随Antom"},
  {name:"Kredivo (Antom·印尼)",region:"印尼",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"印尼",max_market:"印尼",coverage:"ID",sub:4,rate:7,market:6.5,cb:7,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"2.5% BNPL。印尼先买后付,直连必要性低",biz1:5.88,biz2:6.00,ai:"❌随Antom"},
  {name:"LINEPay (Antom·泰)",region:"泰国",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"泰国",max_market:"泰国",coverage:"TH",sub:6,rate:3.5,market:6.5,cb:8,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"D&E翻倍8%最贵+签不上,运营上引导走PromptPay替代→直连必要性中",biz1:5.80,biz2:6.08,ai:"❌随Antom"},
  {name:"BillEase (Antom·菲)",region:"菲律宾",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"菲律宾",max_market:"菲律宾",coverage:"PH",sub:4,rate:6.5,market:6,cb:7,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"2.9% BNPL。菲先买后付,直连必要性低",biz1:5.67,biz2:5.83,ai:"❌随Antom"},
  // 东亚(3)
  {name:"Alipay HK (Antom·港)",region:"香港",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"香港",max_market:"香港",coverage:"HK",sub:6,rate:7.5,market:5.5,cb:8.5,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"2.2%。蚂蚁系HK钱包,费率低直连无收益→留Antom",biz1:6.75,biz2:6.52,ai:"❌随Antom"},
  {name:"Alipay CN (Antom·华)",region:"中国",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"中国",max_market:"中国",coverage:"CN",sub:6,rate:7.5,market:5,cb:8.5,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"2.0%。蚂蚁系本家,直连必要性低",biz1:6.67,biz2:6.42,ai:"❌随Antom"},
  {name:"JkoPay (Antom·台)",region:"台湾",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"台湾",max_market:"台湾",coverage:"TW",sub:5.5,rate:4,market:7,cb:8,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"D&E翻倍7%/其他2.5%。台湾国民钱包但D&E贵+签不上→直连必要性中",biz1:5.85,biz2:6.12,ai:"❌随Antom"},
  // 韩国(3)
  {name:"KakaoPay (Antom·韩)",region:"韩国",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🔵 可评直连",driver:"L3 战略窗口",hq:"韩国",max_market:"韩国",coverage:"KR",sub:6.5,rate:6,market:7.5,cb:8,multi:7,settle:5.5,window:1,cost:"中 1.5",diff:"3.0%韩国国民钱包。金矿市场+国民级覆盖→直连必要性中,值得单独评估",biz1:6.73,biz2:6.78,ai:"❌随Antom"},
  {name:"NAVER Pay (Antom·韩)",region:"韩国",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"韩国",max_market:"韩国",coverage:"KR",sub:6,rate:5.5,market:7,cb:8,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"3.3%。韩国次级钱包,直连必要性中低",biz1:6.38,biz2:6.48,ai:"❌随Antom"},
  {name:"Toss Pay (Antom·韩)",region:"韩国",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"韩国",max_market:"韩国",coverage:"KR",sub:6,rate:5.5,market:6.5,cb:8,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"3.3%。韩国次级钱包,直连必要性中低",biz1:6.30,biz2:6.38,ai:"❌随Antom"},
  // 欧洲(7)
  {name:"PayU (Antom·波)",region:"波兰",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"波兰",max_market:"波兰/中东欧",coverage:"PL",sub:6,rate:8,market:6,cb:8,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"1.9%网关。中东欧网关,与独立 PayU Global 区分,直连必要性中低",biz1:6.85,biz2:6.65,ai:"❌随Antom"},
  {name:"BLIK (Antom·波)",region:"波兰",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"波兰",max_market:"波兰",coverage:"PL",sub:4.5,rate:8.5,market:6.5,cb:8.5,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"1.6%国民支付。费率低直连无收益→留Antom",biz1:6.70,biz2:6.50,ai:"❌随Antom"},
  {name:"BANCOMAT Pay (Antom·意)",region:"意大利",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"意大利",max_market:"意大利",coverage:"IT",sub:4,rate:9.5,market:5,cb:8.5,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"A2A 1.0%。费率全场最低之一,直连必要性低",biz1:6.58,biz2:6.23,ai:"❌随Antom"},
  {name:"Przelewy24 (Antom·波)",region:"波兰",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"波兰",max_market:"波兰",coverage:"PL",sub:4.5,rate:8,market:6,cb:8,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"A2A 1.9%。波兰转账聚合,直连必要性低",biz1:6.40,biz2:6.28,ai:"❌随Antom"},
  {name:"EPS (Antom·奥)",region:"奥地利",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"奥地利",max_market:"奥地利",coverage:"AT",sub:4,rate:8.5,market:4.5,cb:8.5,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"A2A 1.5%。奥地利网银,直连必要性低",biz1:6.25,biz2:5.97,ai:"❌随Antom"},
  {name:"iDEAL (Antom·荷)",region:"荷兰",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"荷兰",max_market:"荷兰",coverage:"NL",sub:4,rate:7,market:6,cb:8.5,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"EUR0.20固定/笔。荷兰国民A2A,直连必要性低",biz1:6.10,biz2:6.05,ai:"❌随Antom"},
  {name:"Bancontact (Antom·比)",region:"比利时",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"比利时",max_market:"比利时",coverage:"BE",sub:4,rate:7,market:5,cb:8.5,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"EUR0.25固定/笔。比利时国民卡,直连必要性低",biz1:5.95,biz2:5.85,ai:"❌随Antom"},
  // 拉美(6)
  {name:"PIX (Antom·巴西)",region:"巴西",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🔵 可评直连",driver:"L3 战略窗口",hq:"巴西",max_market:"巴西",coverage:"BR",sub:4,rate:9.5,market:8,cb:8.5,multi:7,settle:5.5,window:1,cost:"中 1.5",diff:"央行即时0.9%超低。金矿市场+已有 PagBrasil 候选→直连必要性中,值得单独评估",biz1:7.03,biz2:6.83,ai:"❌随Antom"},
  {name:"Mercado Pago (Antom·巴西)",region:"巴西",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"阿根廷",max_market:"巴西",coverage:"BR",sub:6,rate:5,market:6.5,cb:7,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"3.8%。拉美本地大钱包,与独立 Mercado Pago 区分,直连必要性中",biz1:5.97,biz2:6.20,ai:"❌随Antom"},
  {name:"Mercado Pago (Antom·智利)",region:"智利",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"阿根廷",max_market:"智利",coverage:"CL",sub:6,rate:5.5,market:5.5,cb:7,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"3.5%。智利站点,直连必要性中低",biz1:5.95,biz2:6.08,ai:"❌随Antom"},
  {name:"Mercado Pago (Antom·墨西哥)",region:"墨西哥",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"阿根廷",max_market:"墨西哥",coverage:"MX",sub:6,rate:5,market:6,cb:7,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"3.6%。墨西哥站点,直连必要性中低",biz1:5.90,biz2:6.10,ai:"❌随Antom"},
  {name:"Pagaleve (Antom·巴西)",region:"巴西",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"巴西",max_market:"巴西",coverage:"BR",sub:4,rate:6,market:5.5,cb:7,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"3.2% BNPL。巴西先买后付,直连必要性低",biz1:5.48,biz2:5.65,ai:"❌随Antom"},
  {name:"Mercado Pago (Antom·秘鲁)",region:"秘鲁",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🟡 留Antom",driver:"L5 观察",hq:"阿根廷",max_market:"秘鲁",coverage:"PE",sub:6,rate:4,market:4.5,cb:7,multi:7,settle:5.5,window:0,cost:"中 1.5",diff:"4.8%偏贵。秘鲁站点,直连必要性中",biz1:5.42,biz2:5.65,ai:"❌随Antom"},
  // 全球卡(2)
  {name:"Visa (Antom·全球卡)",region:"全球",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🔴 已在直连",driver:"L1 客户订单",hq:"美国",max_market:"全球",coverage:"全球",sub:7,rate:5,market:9,cb:5,multi:7,settle:5.5,window:1,cost:"中 1.5",diff:"本地3.2%/跨境3.9%偏贵，全球覆盖强；直连必要性高，归入全球卡直连课题",biz1:6.25,biz2:6.75,ai:"❌随Antom"},
  {name:"Mastercard (Antom·全球卡)",region:"全球",role:"Antom子方式",gate:"✅ PASS",hk:"✅",rec:"🔴 已在直连",driver:"L1 客户订单",hq:"美国",max_market:"全球",coverage:"全球",sub:7,rate:5,market:9,cb:5,multi:7,settle:5.5,window:1,cost:"中 1.5",diff:"本地3.2%/跨境3.9%偏贵，全球覆盖强；直连必要性高，归入全球卡直连课题",biz1:6.25,biz2:6.75,ai:"❌随Antom"}
];

// 业务定义（可扩展）
// matchScore 用于在线页按通用业务场景排序,不改动原始通道评分。
window.BUSINESSES = [
  {id:"us_high_risk", name:"美区高风险订阅卡收单", short:"美区高风险订阅", category:"业务二·转售订阅",
   priority:"面向美区互动/高风险订阅场景，优先筛选可接该类目、拒付能力强、结算可控的 MoR/卡通道。",
   nextStep:"优先看 T1/T2：确认类目接受度、HK 直签、reserve、拒付阈值和结算周期。",
   gates:["可接高风险订阅", "美区/全球覆盖", "Gate PASS", "订阅或拒付能力 ≥ 7"],
   check: (c) => ({
     g1: c.ai === '✅可接',
     g2: /美区|全球|欧洲/.test(c.region + c.max_market + c.coverage),
     g3: c.gate.startsWith('✅'),
     g4: Math.max(c.sub||0, c.cb||0) >= 7
   }),
   matchScore: (c) => (c.biz2||0) + (c.ai==='✅可接'?2.2:0) + (/美区|高风险|互动|订阅/.test(c.region + c.max_market + c.diff)?1.4:0) + ((c.rec||'').includes('🏆')?1.2:0) + ((c.role||'').includes('MoR')?0.8:0) + ((c.hk||'')==='✅'?0.3:0)},

  {id:"apac_ai_tool", name:"日韩港澳台正规 AI 工具", short:"日韩港澳台 AI 工具", category:"业务一·正规化订阅",
   priority:"面向正规 AI 工具/数字内容场景，优先找可过审、覆盖强、钱包/卡聚合能力强的通道。",
   nextStep:"先看全球聚合底座；若保证金、内容测试或报备卡住，再比较正规盘备选。",
   gates:["正规盘可接", "日韩港澳台/全球覆盖", "HK 直签", "市场或多支付 ≥ 7"],
   check: (c) => ({
     g1: c.ai !== '✅可接',
     g2: /全球|韩国|日本|香港|台湾|东亚|东南亚/.test(c.region + c.max_market + c.coverage + c.diff),
     g3: c.hk === '✅',
     g4: Math.max(c.market||0, c.multi||0) >= 7
   }),
   matchScore: (c) => (c.biz1||0) + ((c.hk||'')==='✅'?1.2:0) + (/全球|日韩|韩国|日本|香港|台湾|东南亚/.test(c.region + c.max_market + c.coverage + c.diff)?1.4:0) + ((c.role||'').includes('全球聚合商')?0.8:0) - (c.ai==='✅可接'?0.6:0)},

  {id:"stablecoin_payout", name:"稳定币收款/批量付款", short:"稳定币收付", category:"业务一·稳定币收款",
   priority:"面向稳定币收款、支付链接和小额批量付款场景，核心看加密 PSP、低费率、结算快、拒付不可逆。",
   nextStep:"优先确认稳定币收款、批量付款、出入金成本、结算周期和商户审核边界。",
   gates:["加密/稳定币通道", "Gate PASS", "HK 直签", "费率或账期 ≥ 7"],
   check: (c) => ({
     g1: c.role === '加密 PSP' || c.region === '加密链' || /稳定币|USDT|crypto|加密/i.test(c.diff||''),
     g2: c.gate.startsWith('✅'),
     g3: c.hk === '✅',
     g4: Math.max(c.rate||0, c.settle||0) >= 7
   }),
   matchScore: (c) => (c.biz1||0) + ((c.role==='加密 PSP'||c.region==='加密链')?2.6:0) + (/StablePay|稳定币|USDT/i.test(c.name + c.diff)?1.6:0) + ((c.rate||0)+(c.settle||0))/10},

  {id:"vietnam_local", name:"越南本地支付启动", short:"越南本地支付", category:"业务一·越南本地支付",
   priority:"面向越南市场启动场景，优先压本地转化率和费率，不追求全球覆盖。",
   nextStep:"优先确认网银/钱包覆盖、费率、结算币种、HK 签约路径和本地合规边界。",
   gates:["越南覆盖", "Gate 可推进", "费率 ≥ 7", "本地 PSP/钱包"],
   check: (c) => ({
     g1: /越南|VN/.test(c.region + c.max_market + c.coverage + c.diff),
     g2: !c.gate.startsWith('❌'),
     g3: (c.rate||0) >= 7,
     g4: /本地 PSP|钱包|Antom子方式/.test(c.role||'')
   }),
   matchScore: (c) => (c.biz1||0) + (/越南|VN/.test(c.region + c.max_market + c.coverage + c.diff)?2.4:0) + ((c.rate||0)/4) + ((c.name||'').includes('Appota')?2:0)},

  {id:"us_card_backup", name:"美区卡通道备份池", short:"美区卡备份", category:"战略·通道备份",
   priority:"目标是降低单点依赖，筛选可谈直连、代理或高风险 MoR 的美区卡通道。",
   nextStep:"优先补齐 HK 直签、reserve、拒付阈值、结算周期和主体稳定性信息。",
   gates:["美区或全球卡", "可接高风险", "拒付能力 ≥ 7", "非 Gate FAIL"],
   check: (c) => ({
     g1: /美区|全球卡|US|美国/.test(c.region + c.max_market + c.coverage + c.diff),
     g2: c.ai === '✅可接' || /高风险|互动|订阅/.test(c.max_market + c.diff),
     g3: (c.cb||0) >= 7,
     g4: !c.gate.startsWith('❌')
   }),
   matchScore: (c) => (c.biz2||0) + (/美区|US|美国|全球卡/.test(c.region + c.max_market + c.coverage + c.diff)?1.8:0) + (c.ai==='✅可接'?1.4:0) + ((c.cb||0)/4) + ((c.rec||'').includes('🏆')?1:0)}
];

// 业务一/业务二 简称（用于综合分显示）
window.BIZ_LABELS = {
  biz1: "业务一·自营订阅",
  biz2: "业务二·转售订阅"
};

// 元数据
window.META = {
  lastUpdated: "2026-06-09",
  totalCount: 136,
  feishuUrl: "https://gcn9eq0plpq9.feishu.cn/base/QLySbEoyVae0pZsDjqucUGHKnGe?table=tblxC8TQmax7De1s&view=vewCBixMon"
};

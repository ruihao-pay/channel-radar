// 通道雷达数据 - 最后更新 2026-07-01 v8
// 共 143 条 (104 + Antom子方式32 + AI PowerPay + GlodraPay/Global Acquire + 国内支付编排/出海机构5条，入库完成)
// schema: 新增 region(地区) + role(角色) 两个维度，替代原单一 type
// role 新增"支付辅助服务"类目(跨拒通拒付管理 / 反欺诈 / 风控类)
window.CHANNELS_DATA = [
  // ========== 已锁 Top5 / 主流大牌 ==========
  {name:"Antom",region:"全球",role:"全球聚合商",gate:"✅ PASS",hk:"✅",rec:"🟢 已锁接入",driver:"L4 业务补全",hq:"新加坡 / 杭州",max_market:"东南亚+全球",coverage:"全球",sub:7,rate:6,market:9,cb:7,multi:8,settle:6,window:0,cost:"中 1.5",diff:"全球聚合基本盘，东南亚5国订阅钱包一签覆盖。直连特殊类目受限，且有保证金要求",biz1:7.35,biz2:7.7,ai:"❌不接"},
  {name:"Antom 非直连",region:"美区",role:"MoR",gate:"⏳ 待评",hk:"⚠️",rec:"观察",driver:"L3 战略窗口",hq:"代理商",max_market:"美区",coverage:"全球",sub:7,rate:6,market:8,cb:7,multi:6,settle:6,window:1,cost:"中 1.5",diff:"通过子商户/聚合商身份接入，可能覆盖部分直连受限场景；等报价中",biz1:0,biz2:0,ai:"⏳待问"},
  {name:"Stripe",region:"全球",role:"全球聚合商",gate:"✅ PASS",hk:"✅",rec:"🟢 已锁接入",driver:"L1 客户订单",hq:"US",max_market:"全球",coverage:"全球",sub:9,rate:5,market:8,cb:8,multi:9,settle:7,window:1,cost:"中 1.5",diff:"订阅引擎和全球卡能力强，但特殊类目限制严格",biz1:7.05,biz2:7.4,ai:"❌不接"},
  {name:"Appota",region:"越南菲律宾",role:"本地 PSP",gate:"⚠️ 暂停",hk:"⚠️",rec:"备选",driver:"L1 客户订单",hq:"越南",max_market:"越南",coverage:"VN",sub:6,rate:8,market:5,cb:5,multi:5,settle:6,window:1,cost:"中 1.5",diff:"越南本地支付重点候选，网银费率最低约1.1%，但 2026-06 已因缺越南资质/从业许可直连接入暂停；保留成本基准和本地钱包覆盖参考",biz1:6.05,biz2:5.35,ai:"未知"},
  {name:"GlodraPay / Global Acquire",region:"越南菲律宾",role:"本地 PSP/聚合商",gate:"⏳ 待评",hk:"⚠️",rec:"观察",driver:"L1 客户订单",hq:"待确认",max_market:"越南",coverage:"VN 本地支付/订阅待确认",sub:7,rate:6,market:5.5,cb:5.5,multi:5.5,settle:5.5,window:1,cost:"中 1.5",diff:"李总越南订阅支付新路径。2026-06-26 锐浩确认对方有越南订阅支付能力，当前等待申请门槛、主体要求、费率账期、钱包/网银覆盖和是否可替代 Appota 直连",biz1:0,biz2:6.1,ai:"⏳待问"},
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
  {name:"AI PowerPay",region:"待确认",role:"电子钱包/全球聚合商",gate:"⏳ 待评",hk:"⚠️",rec:"观察",driver:"L1 客户订单",hq:"待确认",max_market:"AI陪聊/高风险订阅",coverage:"CASH电子钱包覆盖待确认",sub:5.5,rate:4,market:5.5,cb:4.5,multi:5,settle:5,window:1,cost:"重 2.5",diff:"Jerry 口头确认 AI 陪聊可接,CASH 16 个点,无保证金,拒付率没要求。2026-06-22 锐浩确认 CASH 为电子钱包,不是信用卡/卡收单；因不支持订阅卡收单，暂不能作为美区订阅支付主备线，只保留二次反馈和钱包覆盖核实",biz1:0,biz2:5.8,ai:"✅可接"},
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
  {name:"Kevin 美区高风险卡通道",region:"美区",role:"MoR/代理收单",gate:"⚠️ 条件PASS",hk:"✅",rec:"观察",driver:"L1 客户订单",hq:"中国/上游待确认",max_market:"美区 AI 视频/AI 陪聊/短剧订阅",coverage:"US Visa/Mastercard",sub:8,rate:5.5,market:6,cb:7,multi:5,settle:7,window:1,cost:"重 2.5",diff:"2026-06-23/30 Kevin 方案:基础 8.5%+$0.30,我方对客 10.5%+$0.30;拒付$25,退款$1,RDR$20,Ethoca$25,提现$30/笔,T+7日结;固保$50K+循保10%/180天，若连续6个月无问题且循保累计$300K可退固保。宝龙不接受前置固保，愿改 15% 循保，需继续谈释放、扣款触发和罚金责任边界",biz1:6.7,biz2:6.2,ai:"✅可接"},
  {name:"Waffo",region:"全球",role:"MoR",gate:"⚠️ 条件PASS",hk:"✅",rec:"备选",driver:"L3 战略窗口",hq:"欧洲",max_market:"亚太+全球卡",coverage:"印尼/菲律宾/越南/新马泰/港陆/台湾/日韩/全球卡",sub:7,rate:6,market:8,cb:7,multi:5,settle:5,window:1,cost:"中 1.5",diff:"2026-06-16 深圳泰济绿色业务报价:全球卡3.40%+$0.50,国际卡+1%;RDR$13/Ethoca$19;本地支付覆盖亚太多市场;T+10,提现1%最低$20。旧成人/高风险10%+€0.30报价已停用",biz1:6.65,biz2:6.25,ai:"✅可接"},
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

  // ========== 国内支付编排 / 出海支付机构 (InsidePay/Payinsider 类调研 2026-07-01) ==========
  {name:"Payinsider",region:"全球",role:"支付辅助服务",gate:"✅ PASS",hk:"✅",rec:"P1 合作观察",driver:"L3 战略窗口",hq:"香港 / 深圳",max_market:"正规 AI/SaaS 订阅",coverage:"200+ 国家连接能力",sub:9,rate:5.5,market:7.5,cb:6,multi:8.5,settle:6,window:2,cost:"重 2.5",diff:"国内最接近 InsidePay/支付编排的机构。官网定位为 subscription payment orchestration,提供 Connections、Hosted Checkout、Smart Transaction Routing、Smart Reconciliation、Subscription Management、Reporting 等;可连接 Stripe/Xendit/Adyen/PayPal/Checkout.com/Worldpay/dLocal/KCP 等。核心价值是智能路由、失败重试、订阅生命周期和对账;不承接资金,不解决高风险类目准入。已线下拜访,基础费约 $2,500/月,小客户不经济",biz1:7.2,biz2:7.1,ai:"❌不接"},
  {name:"PhotonPay / 光子",region:"全球",role:"全球聚合商/支付编排",gate:"⚠️ 条件PASS",hk:"✅",rec:"P1 重点询价",driver:"L3 战略窗口",hq:"香港",max_market:"稳定币+全球订阅",coverage:"200+ 国家 / 100+ 支付方式",sub:8.5,rate:7,market:7.5,cb:7,multi:7.5,settle:8,window:2,cost:"中 1.5",diff:"光子/PhotonPay 官网已上 Billing、Checkout、Wallet、Movement、Cards 等产品;Billing 支持多币种订阅、固定/用量/阶梯计费、AI dunning、智能重试和 revenue recovery analytics;Checkout 支持 fiat+stablecoin、100+ 支付方式、API/Hosted Checkout/插件/Payment Link。更像稳定币原生支付操作系统+订阅计费,不是纯编排层;需确认卡收单/本地方式覆盖、AI/SaaS 与高风险边界、费率、RDR/Ethoca 和是否能做客户只接一次",biz1:7.25,biz2:7.05,ai:"⏳待问"},
  {name:"SUNRATE",region:"全球",role:"全球聚合商",gate:"⚠️ 条件PASS",hk:"✅",rec:"P2 观察询价",driver:"L5 观察",hq:"新加坡",max_market:"B2B/平台/旅游/电商",coverage:"190+ 国家 / 130+ 付款币种",sub:5.5,rate:6.5,market:7.5,cb:6,multi:7,settle:7.5,window:1,cost:"中 1.5",diff:"Global payment & treasury management platform,覆盖 International Payments、Commercial Cards、Global Collection、Global Acquiring、TreasuryOS 等。Global Acquiring 覆盖 payment acceptance、reconciliation/settlement、cross-border fund management、localised payouts;案例提到 smart routing 降成本。更偏企业收付和资金管理,不是订阅编排专家;可作为正规 B2B/平台客户支付+财资候选",biz1:6.25,biz2:6.55,ai:"❌不接"},
  {name:"LianLian Global / 连连国际",region:"全球",role:"全球聚合商",gate:"⚠️ 条件PASS",hk:"✅",rec:"P2 观察询价",driver:"L5 观察",hq:"杭州 / 香港",max_market:"跨境电商/数娱出海/平台",coverage:"100+ 国家",sub:5.5,rate:6.5,market:7.5,cb:6.5,multi:7.5,settle:7.5,window:1,cost:"中 1.5",diff:"连连全球提供全球收款账户、全球付款、全球收单、汇兑、连连卡及 API 文档;官网披露 68+ 支付牌照及资质、100+ 国家地区、1040万+客户、2025 TPV 4524亿元。数娱出海和 API/账户体系适合正规客户资金收付;但未看到订阅恢复/智能重试/vault 等 Payinsider 式能力,高风险/擦边边界需单独问",biz1:6.5,biz2:6.65,ai:"❌不接"},
  {name:"iPayLinks / 艾贝盈",region:"全球",role:"全球聚合商",gate:"⚠️ 条件PASS",hk:"✅",rec:"P2 观察询价",driver:"L5 观察",hq:"上海 / 香港",max_market:"跨境电商/外贸/数字娱乐",coverage:"150+ 国家和地区",sub:5.5,rate:6.5,market:7,cb:6.5,multi:7,settle:7,window:1,cost:"中 1.5",diff:"一站式跨境支付平台,产品含外贸收款、平台收款、全球收单、全球付款、货币汇兑、资金对账、风险管理;官网称业务覆盖 150+ 国家地区、全球收单支持一站式接入全球支付方式,并披露新加坡 MPI、香港 MSO、英国 API、美国 MSB 等资质。更偏跨境收单/账户/结算,不是订阅编排;可用于正规数字娱乐/电商备选询价",biz1:6.35,biz2:6.45,ai:"❌不接"},

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

window.CONNECTED_CHANNELS = [
  {
    name: "StablePay",
    category: "稳定币收单 / 代发",
    directStatus: "代理接入中",
    stage: "火花投资已确认收款+发薪一起接,预计 2026-06 月底接完",
    fee: "底价:收款/支付链接 0.85%;订阅 1.11%;代发 0.085% + 3 USDT/批次;出入金 0.3%",
    settlement: "代理返佣月结:次月 5 日前出账单,确认后 5 日内支付;商户结算/批次规则接入中确认",
    fit: "稳定币收款、B2C 支付链接、土耳其/泛娱乐/游戏类收款、小额批量发薪",
    limit: "链上/币值/监管风险需客户接受;代发固定批次费要按批合并,否则小额场景成本偏高",
    source: "StablePay费率详情 / 火花投资客户档案"
  },
  {
    name: "跨拒通",
    category: "拒付预警 / 抗辩 / 反欺诈",
    group: "auxiliary",
    directStatus: "已签约落地",
    stage: "2026-05-13 合作落地;月底卡通道接入后正式申请",
    fee: "反欺诈 $0.05/笔;RDR $12/笔;Ethoca $18/笔;抗辩胜诉金额 9%;包赔需历史数据评估",
    settlement: "非收单通道,不承接商户资金;按服务用量结算",
    fit: "美区信用卡、高拒付风险业务、AI 陪聊/AI 视频等需要 RDR/Ethoca 和抗辩的场景",
    limit: "低客单价 $5-10 订阅不宜重用预警,优先抗辩+选择性退款;需要配合收单通道使用",
    source: "跨拒通 / 跨拒通价目表"
  },
  {
    name: "领航",
    category: "美区信用卡 / PP 上游转接",
    directStatus: "已接触暂停",
    stage: "已接触但当前暂停推进;已签约路径,合同 v0.6 仍在最终评审;成人信用卡通道尚需持续确认可用性",
    fee: "信用卡 12%→10%→8%→7%→6%;PP 10.4%→8%→6%→4.4%;美主体资料费 $2,000/套",
    settlement: "账期待合同最终确认;延迟结算 >15 日赔偿条款仍在协商",
    fit: "美区成人/AI 陪聊/高风险卡支付,尤其是 Stripe/Antom 明确禁入的业务",
    limit: "不是我方直连上游,资金经领航中转;主体寿命 6-12 月;必须配跨拒通",
    source: "渠道BD跟进/领航"
  },
  {
    name: "Antom 直连",
    category: "全球卡 + 钱包聚合",
    directStatus: "已签约落地",
    stage: "Arcane Brilliance 香港主体已签约落地;SparkLab/Lunote 等具体客户和类目仍需按 Antom 审核流程逐案评估",
    fee: "全球卡:本地 3.20% / 跨境 3.90% + USD 0.30;争议 USD 20;SEA 钱包约 1.0%-8.0% + USD 0.10",
    settlement: "统一 T+5",
    fit: "正规 AI 工具、SaaS、日韩港澳台/东南亚钱包、全球卡收单",
    limit: "AI 陪聊/成人/短剧等禁入或高风险;美区卡需 $50K 保证金;无 RDR/Ethoca,需配跨拒通",
    source: "Antom费率基准 / Antom美区接入要求"
  },
  {
    name: "Antom 内部合作",
    category: "Antom 内部账户 / 阿里内部合作",
    directStatus: "内部合作已开通",
    stage: "通过阿里内部人员开通 Antom 内部账户;区别于 Arcane Brilliance 主体直连账户,适合作为内部资源协同和特殊客户推进通道",
    fee: "费率按具体内部账户报价/客户方案确认;可参考 Antom 直连基准:全球卡本地 3.20% / 跨境 3.90% + USD 0.30,SEA 钱包约 1.0%-8.0% + USD 0.10",
    settlement: "账期和结算主体按内部账户实际配置确认;不能默认等同 Arcane Brilliance 直连账户 T+5",
    fit: "需要 Antom 资源协同、内部推动审核、正规 AI 工具/SaaS、日韩港澳台/东南亚钱包和全球卡收单的客户",
    limit: "必须区分账户主体、结算归属、KYC 责任和客户类目审核;内部合作不等于所有高风险类目可过审",
    source: "锐浩确认:通过阿里内部人员开通 Antom 内部账户"
  },
  {
    name: "Waffo",
    category: "绿色业务 MoR / 亚太本地支付 / 全球卡",
    directStatus: "重新评估",
    stage: "2026-06-16 收到深圳泰济绿色业务新版报价;旧成人/高风险报价已停用。当前可作为正规 SaaS / 亚太本地支付备选,用于宝龙 Lunote 并行评估",
    fee: "全球卡/Apple Pay/Google Pay:3.40% + USD 0.50,国际卡 +1.00%;退款 USD 1;拒付 USD 25;RDR USD 13;Ethoca USD 19。本地支付:PayNow 1.9%,PromptPay 1.4% min THB15,港陆钱包2.2%,韩国钱包/本地卡3.3%,日本PayPay10.5%,台湾JKOPay7.5%,越南2.9%",
    settlement: "USD 结算;提现 1% 最低 USD 20;提现门槛 USD 2,000;东南亚/港陆/台湾/韩国/全球卡 T+10;日本按方式分批或下下月结算;保证金按商户资质合同确认",
    fit: "正规 AI 工具/SaaS 的全球卡备选;东南亚/日韩港澳台本地支付补位;Stripe/Antom 审核或覆盖不足时的 Plan B",
    limit: "仅代表绿色业务报价,不能外推成人/高风险类目;全球卡固定费 $0.50 对低客单价订阅仍重;提现 1% 抬高总成本;T+10 慢于 Antom/部分 Stripe;订阅生态和品牌认知弱于 Stripe;越南游戏需 G1 License",
    source: "Waffo quotation sheet to 深圳泰济-V1-2026-06-16.pdf / 渠道BD跟进/Waffo"
  },
  {
    name: "AIPowerPay",
    category: "一站式跨境支付 / CASH 电子钱包",
    directStatus: "观察待二次反馈",
    stage: "2026-06-19 Jerry 口头确认 AI 陪聊可接;CASH 16 个点;无保证金;拒付率没要求。2026-06-22 锐浩确认 CASH 为电子钱包。2026-06-26 确认当前不能作为美区订阅卡主备线,只等对方二次反馈是否存在可行订阅方案",
    fee: "口头报价:CASH 电子钱包 16%。待确认覆盖哪些钱包/地区/币种、是否 all-in;需补退款费、争议/拒付费、RDR/Ethoca、提现费、账期和结算币种",
    settlement: "口头称无保证金;账期、滚动准备金、提现门槛、结算主体和资金流责任待确认",
    fit: "AI 陪聊/高风险产品的电子钱包线索;可作为卡收单之外的补充询价对象",
    limit: "不是已确认的 Visa/Mastercard 订阅卡收单;不能直接对外承诺可上线。必须确认 CASH 定义、支持地区/币种、16% 是否全包、拒付率无要求的真实边界和资金安全条款",
    source: "Jerry 微信口头报价 2026-06-19 / AIPowerPay：一站式跨境支付解决方案 (4).pdf"
  },
  {
    name: "Kevin 美区高风险卡通道",
    category: "美区 Visa/Mastercard / AI 高风险订阅",
    directStatus: "保证金谈判中",
    stage: "方案已发给 SparkLab/宝龙,暂未发闲闲。Kevin 解释固保主要覆盖 AI 视频版权/肖像侵权导致的卡组或通道罚金和商户逃单风险;宝龙不接受上线前 $50K 固保,愿把循保提高到 15%",
    fee: "底层报价 8.5% + USD 0.30/笔;我方对客口径 10.5% + USD 0.30/笔;退款 USD 1;拒付 USD 25;RDR USD 20;Ethoca USD 25;提现 USD 30/笔",
    settlement: "T+7 日结;固保 USD 50,000 + 循保 10% 锁 180 天。当前上游口径:连续 6 个月无问题且循保累计 USD 300,000 后可退固保;宝龙提出 0 固保 + 15% 循保替代结构",
    fit: "AI 视频、AI 陪聊、短剧等美区高风险 H5 订阅卡收单,尤其是 Stripe/Antom 直连难过审的场景",
    limit: "现金占用重,拒付红线和内容违规罚金责任必须合同化;固保释放、扣款触发、商户补款顺序和主体/资金路径未确认前不能当成已成交方案",
    source: "2026-06-23/24 Kevin 报价 + 2026-06-30 Kevin/宝龙沟通"
  },
  {
    name: "Segpay / Epoch",
    category: "成人 / 高风险老牌收单",
    directStatus: "搁置可重启",
    stage: "2026-05 已接触后搁置;作为高风险/成人类目兜底备选,若 Antom/Waffo/领航路径失败可重启",
    fee: "待补:历史预估约 13%-15% 区间,正式报价需重新向商务确认",
    settlement: "待补",
    fit: "成人内容、AI 陪聊、高风险订阅、欧美卡收单兜底",
    limit: "纯英文沟通和合规材料成本较高;费率通常不低;重启前需确认类目、reserve、拒付红线、账期和主体要求",
    source: "渠道BD跟进/已淘汰渠道 / 闲闲美区通道全清单"
  },
  {
    name: "AnstPay",
    category: "美区 MoR / 高风险卡支付",
    directStatus: "已接触暂停",
    stage: "2026-05-06 原方案因 APP 尺度太大、美国 PP 跑不了被拒;替代方案经济性较好,但因强制代结算到锐浩账户,合规/税/外汇复杂度高,锐浩主动搁置",
    fee: "替代方案口径:15% all-in;Setup $3,000;无保证金;拒付红线 2%",
    settlement: "T+3;但要求代结算到锐浩账户,银行/退款场景可能要求通道方控制资金",
    fit: "理论上适合美区 AI 陪聊/高风险卡支付兜底,尤其是需要低费率、短账期、无保证金的客户",
    limit: "当前不建议对外承诺可落地;代结算会把客户资金、税务、外汇和退款责任压到我方账户;若重启必须先做实地尽调和资金责任边界确认",
    source: "闲闲客户档案 / 闲闲通道横评 / 通道雷达 AnstPay 记录"
  },
  {
    name: "Appota",
    category: "越南本地支付聚合",
    directStatus: "阶段性暂停",
    stage: "已建联并拿正式报价;2026-06 因缺越南资质/从业许可,直连接入暂停。当前作为越南成本基准和备选 MoR 路径保留",
    fee: "ATM 卡 0.8% + 550 VND;Appota 钱包 0.8%;ZaloPay/ShopeePay/VNPT 1.5%;QR 0.5% 最低 2,200 VND",
    settlement: "T+1 working day;≤$10,000 结算费 0.22% + $27.5;>$10,000 免结算费",
    fit: "越南本地游戏/数字内容/工具类,需要 MoMo/ZaloPay/银行/QR 的本地化收款",
    limit: "需要越南本地从业资格/经营许可;当前不能作为对客户可落地报价,只保留成本基准",
    source: "渠道BD跟进/Appota"
  },
  {
    name: "GlodraPay / Global Acquire",
    category: "越南本地支付 / 订阅支付线索",
    directStatus: "等申请门槛",
    stage: "李总越南支付主线从 Appota 直连切换到 GlodraPay/Global Acquire 路径;对方有越南订阅支付能力,正在等申请门槛和接入要求",
    fee: "待补:需确认本地钱包/网银/卡费率、退款/拒付费、开户费、保证金和最低流水",
    settlement: "待补:需确认结算周期、结算币种、提现费、主体/资金路径和是否需要越南本地主体",
    fit: "李总越南订阅支付、腾讯会员权益越南测试、越南本地钱包/VM 卡/H5 订阅接入",
    limit: "尚未拿到正式门槛和报价;未确认 HK/新加坡/越南主体签约路径前不能对客户承诺落地",
    source: "当前进行中 2026-06-26 李总/越南支付更新"
  },
  {
    name: "Airwallex / 云汇",
    category: "资金归集 / 全球账户",
    group: "auxiliary",
    directStatus: "辅助账户",
    stage: "用于 USD 虚拟账户和出入金链路评估;不是高风险收单主通道",
    fee: "收款入账固定 0.3%;SWIFT 外币出金约 $3-25/笔",
    settlement: "虚拟账户收 USD、付 USD;不自动结汇,需自行找银行换 CNY",
    fit: "正规业务资金归集、USD/HKD/SGD 全球账户、低风险 SaaS/工具类结算",
    limit: "AUP 明确禁成人/擦边;不适合归集闲闲等成人/高风险资金",
    source: "闲闲资金归集合规风险 / 当前进行中"
  },
  {
    name: "光子",
    category: "收款机构线索 / 辅助收款资源",
    group: "auxiliary",
    directStatus: "前期接触中",
    stage: "前期接触中;具体主体、能力边界和适配客户待补",
    fee: "待补",
    settlement: "待补",
    fit: "待补",
    limit: "当前信息较少,不能作为可报价渠道;后续补公司主体、牌照/合规背景、可接类目、费率账期和资金责任边界",
    source: "项目/光子/客户档案"
  },
  {
    name: "Payinsider",
    category: "支付编排 / 智能路由 / 顾问服务",
    group: "auxiliary",
    directStatus: "已拜访暂缓",
    stage: "2026-05-28 已线下拜访王玲并看产品演示;当前因 $2,500/月固定费更适合大客户,锐浩小体量客户暂缓直接采用",
    fee: "基础费约 $2,500/月;含包量和超量单价按 Payinsider 报价复核",
    settlement: "不承接商户资金;自身不做收单结算,用于多通道路由、失败重试和支付顾问",
    fit: "月流水较大的正规 AI/SaaS、多通道编排、续费失败重试、支付数据诊断、客户已有多个 MID 的场景",
    limit: "不是收单主通道;不解决高风险类目准入;不做拒付预警/RDR/Ethoca/反欺诈;小客户固定费不经济",
    source: "Payinsider拜访纪要-2026-05-28"
  }
];

// ========== 通道雷达 v2: 业务类型 / 客户 / 历史方案 / 推荐请求 ==========
window.BUSINESS_CATEGORIES = [
  {
    id: "ai_tool_us_card",
    name: "AI 工具 / AI 笔记美区卡",
    parent: "AI 订阅",
    status: "可复用",
    fit_customers: ["AI 笔记", "AI 文档", "AI 办公", "普通 AI 工具订阅"],
    unfit_customers: ["AI 成人", "AI 陪聊", "明星/版权高风险视频", "真钱/博彩"],
    markets: ["美国"],
    main_path: "Waffo 美区卡收单",
    backup_path: "Wintopay / Kevin 美区卡",
    auxiliary: ["跨拒通 RDR/Ethoca", "拒付监控"],
    related_cases: ["case_sparklab_lunote_waffo"],
    risks: ["类目审核", "版权风险", "拒付率", "保证金", "账期"],
    reuse_conditions: ["同类 AI 工具", "非成人", "版权风险可控", "有主体", "ARPU 足够"],
    required_gates: ["类目可接", "成本可算", "资金路径清楚", "风险责任清楚"]
  },
  {
    id: "ai_high_risk_us_card",
    name: "AI 高风险订阅美区卡",
    parent: "AI 订阅",
    status: "条件推荐",
    fit_customers: ["AI 视频", "AI 陪聊", "AI 短剧", "擦边内容订阅"],
    unfit_customers: ["真金博彩", "明确违法内容", "无法承担保证金的客户"],
    markets: ["美国"],
    main_path: "Kevin / Wintopay 美区卡",
    backup_path: "Segpay / Epoch / AnstPay 兜底询价",
    auxiliary: ["跨拒通 RDR/Ethoca", "内容风控审核", "备用结算路径"],
    related_cases: ["case_hk_baojin_wintopay"],
    risks: ["版权/肖像侵权", "卡组罚金", "固保现金占用", "拒付红线", "主体寿命"],
    reuse_conditions: ["客户接受保证金或高循保", "内容边界可解释", "拒付率可控"],
    required_gates: ["类目可接", "保证金可接受", "拒付红线明确", "罚金责任明确"]
  },
  {
    id: "vietnam_local_subscription",
    name: "越南本地订阅支付",
    parent: "本地支付",
    status: "待核验",
    fit_customers: ["越南会员订阅", "越南本地钱包收款", "越南工具/内容产品"],
    unfit_customers: ["无越南资质且不接受替代主体", "只需要美区卡的客户"],
    markets: ["越南"],
    main_path: "GlodraPay / Global Acquire 待确认",
    backup_path: "Appota 成本基准 / MoR 路径",
    auxiliary: ["越南主体/MoR 评估", "VND 结算路径"],
    related_cases: ["case_lizong_vietnam"],
    risks: ["本地主体资质", "recurring 能力", "结算币种", "申请门槛"],
    reuse_conditions: ["越南本地支付需求明确", "可补本地资质或接受 MoR 路径"],
    required_gates: ["覆盖越南", "支持订阅/代扣", "主体路径明确", "费率账期可算"]
  },
  {
    id: "stablecoin_collection",
    name: "稳定币收款 / 结算",
    parent: "稳定币",
    status: "可复用",
    fit_customers: ["稳定币收款", "B2C 支付链接", "小额批量发薪", "跨境结算"],
    unfit_customers: ["强依赖卡 token 的订阅客户", "不能接受链上/KYT 风险的客户"],
    markets: ["全球", "土耳其"],
    main_path: "StablePay",
    backup_path: "NOWPayments / CoinPayments 观察",
    auxiliary: ["KYT/AML", "出入金路径", "批量付款成本核算"],
    related_cases: ["case_stablepay_huohua"],
    risks: ["链上风险", "冻结/KYT", "出入金成本", "批次费"],
    reuse_conditions: ["客户接受 USDT/USDC", "资金用途清楚", "出入金路径可解释"],
    required_gates: ["币种支持", "资金路径清楚", "KYT/AML 边界", "到账和出款成本可算"]
  },
  {
    id: "game_iap_sea",
    name: "游戏出海 / 东南亚本地支付",
    parent: "游戏出海",
    status: "可用",
    fit_customers: ["手游 IAP", "虚拟道具", "东南亚游戏充值"],
    unfit_customers: ["真钱/博彩", "印度真金游戏", "无游戏资质高风险产品"],
    markets: ["泰国", "越南", "菲律宾", "印尼"],
    main_path: "Antom / Appota / Xendit",
    backup_path: "PayerMax / Oceanpayment 观察",
    auxiliary: ["本地钱包覆盖", "游戏类目审核"],
    related_cases: [],
    risks: ["本地监管", "应用商店外支付", "游戏资质", "退款/拒付"],
    reuse_conditions: ["标准手游 IAP", "非真金", "目标市场明确"],
    required_gates: ["游戏类目可接", "覆盖目标市场", "本地支付方式有效", "费率可算"]
  }
];

window.CUSTOMERS = [
  {
    id: "cust_sparklab",
    name: "SparkLab / Lunote",
    status: "方案中",
    categories: ["ai_tool_us_card"],
    markets: ["美国"],
    risk_tags: ["普通 AI 工具", "版权风险待控", "订阅"],
    payment_needs: ["美区卡收单", "拒付预警"],
    current_solution: "case_sparklab_lunote_waffo",
    blockers: ["Waffo AI 类目确认", "最新报价/保证金核验"],
    next_step: "向 Waffo 确认 AI 笔记类目、报价、账期和 reserve",
    updated_at: "2026-07-02"
  },
  {
    id: "cust_xianxian",
    name: "闲闲 / Voice Friend",
    status: "暂停/搁置",
    categories: ["ai_high_risk_us_card"],
    markets: ["美国", "泰国", "越南"],
    risk_tags: ["AI 陪聊", "成人/擦边", "高拒付"],
    payment_needs: ["美区卡收单", "拒付预警", "备用通道"],
    current_solution: "",
    blockers: ["领航停止合作", "新美区通道保证金重", "客户侧接受度待确认"],
    next_step: "等待客户或新通道条件变化后重启",
    updated_at: "2026-06-24"
  },
  {
    id: "cust_lizong_vietnam",
    name: "李总 / 越南支付",
    status: "沟通中",
    categories: ["vietnam_local_subscription"],
    markets: ["越南"],
    risk_tags: ["订阅", "本地主体/资质待确认"],
    payment_needs: ["越南本地支付", "订阅代扣"],
    current_solution: "case_lizong_vietnam",
    blockers: ["GlodraPay 申请门槛待回", "Appota 直连因资质暂停"],
    next_step: "等 GlodraPay/Global Acquire 发申请门槛",
    updated_at: "2026-06-26"
  },
  {
    id: "cust_hk_baojin",
    name: "香港爆金 / AI 短剧",
    status: "方案中",
    categories: ["ai_high_risk_us_card"],
    markets: ["美国"],
    risk_tags: ["AI 视频", "版权/肖像风险", "保证金敏感"],
    payment_needs: ["美区卡收单", "拒付预警"],
    current_solution: "case_hk_baojin_wintopay",
    blockers: ["客户不接受 $50K 固保", "只接受更高循保"],
    next_step: "与 Kevin 确认 0 固保 + 15% 循保是否可行",
    updated_at: "2026-06-30"
  },
  {
    id: "cust_payinsider",
    name: "Payinsider",
    status: "已合作/拜访",
    categories: ["ai_tool_us_card"],
    markets: ["全球"],
    risk_tags: ["同行学习", "编排层", "正规 SaaS"],
    payment_needs: ["支付编排", "订阅恢复", "智能路由"],
    current_solution: "",
    blockers: ["固定费对小客户不经济", "不解决高风险准入"],
    next_step: "作为编排层对照样本和潜在合作方保留",
    updated_at: "2026-05-28"
  }
];

window.SOLUTION_CASES = [
  {
    id: "case_sparklab_lunote_waffo",
    name: "SparkLab / Lunote Waffo 方案",
    customer_id: "cust_sparklab",
    category_id: "ai_tool_us_card",
    status: "已输出 / 待按最新口径核验",
    market: "美国",
    roles: {main_acquirer:"Waffo", backup_acquirer:"Wintopay / Kevin", risk_control:"跨拒通 RDR/Ethoca", fund_flow:"待确认"},
    upstream_cost_internal: "Waffo 绿色业务报价:全球卡/Apple Pay/Google Pay 3.40% + USD 0.50,国际卡 +1.00%;退款 USD 1;拒付 USD 25;RDR USD 13;Ethoca USD 19;提现 1% 最低 USD 20;T+10。",
    our_fee_internal: "待按客户最终报价测算;内部可见。",
    client_pricing_public: "客户最终报价待按最新 Waffo 类目和成本重算。",
    settlement_terms_public: "账期/保证金需按最新合同口径确认。",
    reuse_conditions: ["AI 笔记/AI 工具", "非成人", "版权风险可控", "ARPU 足够覆盖固定费"],
    unfit_conditions: ["AI 成人/陪聊", "明星/版权高风险视频", "极高拒付", "客户无法接受账期/保证金"],
    files: ["待补飞书方案链接", "Waffo quotation sheet to 深圳泰济-V1-2026-06-16.pdf"],
    visibility: "internal"
  },
  {
    id: "case_hk_baojin_wintopay",
    name: "香港爆金 / AI 短剧 Wintopay 美区卡方案",
    customer_id: "cust_hk_baojin",
    category_id: "ai_high_risk_us_card",
    status: "已输出 / 保证金谈判中",
    market: "美国",
    roles: {main_acquirer:"Wintopay / Kevin 美区卡", backup_acquirer:"Waffo 待类目确认", risk_control:"RDR/Ethoca", fund_flow:"客户主体资料 + 通道结算路径待确认"},
    upstream_cost_internal: "底层报价 8.5% + USD 0.30/笔;退款 USD 1;拒付 USD 25;RDR USD 20;Ethoca USD 25;提现 USD 30/笔;固保 USD 50,000 + 循保 10%。",
    our_fee_internal: "对客口径 10.5% + USD 0.30/笔,退款/拒付/预警/提现/保证金实报实销。",
    client_pricing_public: "10.5% + USD 0.30/笔,退款/拒付/预警/提现/保证金按客户侧规则承担。",
    settlement_terms_public: "T+7 日结;固保和循保释放条件待合同确认。",
    reuse_conditions: ["AI 视频/短剧", "客户可接受固保或高循保", "内容版权风险可解释"],
    unfit_conditions: ["客户完全不接受保证金", "明显侵权内容", "拒付率不可控"],
    files: ["深圳泰济科技有限公司-集团AI产品美区卡支付报价图-v2-2026-06-25.png"],
    visibility: "internal"
  },
  {
    id: "case_lizong_vietnam",
    name: "李总越南订阅支付方案",
    customer_id: "cust_lizong_vietnam",
    category_id: "vietnam_local_subscription",
    status: "待申请门槛",
    market: "越南",
    roles: {main_acquirer:"GlodraPay / Global Acquire 待确认", backup_acquirer:"Appota 成本基准", risk_control:"待定", fund_flow:"越南主体/MoR 路径待确认"},
    upstream_cost_internal: "GlodraPay 费率和门槛待补;Appota 成本基准:ATM 0.8% + 550 VND,钱包 0.8%-1.5%,QR 0.5% min 2,200 VND。",
    our_fee_internal: "待按门槛和客户体量测算。",
    client_pricing_public: "待确认申请门槛后输出。",
    settlement_terms_public: "VND/结算周期/主体路径待确认。",
    reuse_conditions: ["越南本地订阅支付", "客户可提供或接受本地主体/MoR 路径"],
    unfit_conditions: ["只做美区卡", "不能满足越南资质要求"],
    files: ["待补"],
    visibility: "internal"
  },
  {
    id: "case_stablepay_huohua",
    name: "火花投资 StablePay 稳定币收付方案",
    customer_id: "",
    category_id: "stablecoin_collection",
    status: "已输出 / 排期中",
    market: "全球 / 土耳其",
    roles: {main_acquirer:"StablePay", backup_acquirer:"NOWPayments 观察", risk_control:"KYT/AML", fund_flow:"USDT 收款/代发"},
    upstream_cost_internal: "代理底价:收款/支付链接 0.85%;订阅 1.11%;代发 0.085% + 3 USDT/批次;出入金 0.3%。",
    our_fee_internal: "代理返佣月结,按 StablePay 代理协议确认。",
    client_pricing_public: "按客户业务场景另出。",
    settlement_terms_public: "链上/批次规则按接入确认。",
    reuse_conditions: ["客户接受 USDT/USDC", "收款/发薪用途清楚", "可接受链上风险"],
    unfit_conditions: ["必须卡 token 续费", "无法接受 KYT/AML"],
    files: ["StablePay费率详情", "火花投资客户档案"],
    visibility: "internal"
  }
];

window.RECOMMENDATION_REQUESTS = [];

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
  lastUpdated: "2026-07-01",
  totalCount: 143,
  feishuUrl: "https://gcn9eq0plpq9.feishu.cn/base/QLySbEoyVae0pZsDjqucUGHKnGe?table=tblxC8TQmax7De1s&view=vewCBixMon"
};

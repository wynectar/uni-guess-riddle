import { Riddle } from './types'
// 生活常识类灯谜 (80条)
const commonSenseRiddles: Riddle[] = [
    {
        id: 1201,
        question: "正常情况下，水的沸点是多少度？",
        answer: "C",
        options: {
            A: "90℃",
            B: "95℃",
            C: "100℃",
            D: "105℃"
        },
        hint: "标准大气压下",
        difficulty: 1,
        category: "生活常识"
    },
    {
        id: 1202,
        question: "哪种维生素可以通过晒太阳获得？",
        answer: "D",
        options: {
            A: "维生素A",
            B: "维生素B",
            C: "维生素C",
            D: "维生素D"
        },
        hint: "促进钙吸收",
        difficulty: 2,
        category: "生活常识"
    },
    {
        id: 1203,
        question: "中国国家标准时间采用哪个时区？",
        answer: "B",
        options: {
            A: "东七区",
            B: "东八区",
            C: "东九区",
            D: "东六区"
        },
        hint: "北京时间",
        difficulty: 2,
        category: "生活常识"
    },
    {
        id: 1204,
        question: "下列哪种食物不能生吃？",
        answer: "D",
        options: {
            A: "西红柿",
            B: "黄瓜",
            C: "生菜",
            D: "四季豆"
        },
        hint: "含有天然毒素",
        difficulty: 2,
        category: "生活常识",
        explanation: "四季豆含有皂苷和植物血凝素，需要充分加热破坏毒素"
    },
    {
        id: 1205,
        question: "正常情况下，人的正常呼吸频率是每分钟多少次？",
        answer: "B",
        options: {
            A: "10-15次",
            B: "12-20次",
            C: "20-30次",
            D: "30-40次"
        },
        hint: "安静状态下",
        difficulty: 2,
        category: "生活常识",
        explanation: "成人安静状态下正常呼吸频率为12-20次/分钟"
    },
    {
        id: 1206,
        question: "下列哪种方法不能有效去除蔬菜农药残留？",
        answer: "C",
        options: {
            A: "流水冲洗",
            B: "浸泡",
            C: "热水烫一下",
            D: "去皮"
        },
        hint: "可能使农药渗入",
        difficulty: 2,
        category: "生活常识",
        explanation: "热水烫可能使部分农药渗入蔬菜内部，更好的方法是流水冲洗和浸泡"
    },
    {
        id: 1207,
        question: "紧急医疗求助电话是？",
        answer: "A",
        options: {
            A: "120",
            B: "110",
            C: "119",
            D: "122"
        },
        hint: "医疗急救",
        difficulty: 1,
        category: "生活常识",
        explanation: "120是中国大陆的医疗急救电话"
    },
    {
        id: 1208,
        question: "下列哪种食物不宜空腹食用？",
        answer: "D",
        options: {
            A: "面包",
            B: "牛奶",
            C: "香蕉",
            D: "柿子"
        },
        hint: "可能形成胃结石",
        difficulty: 2,
        category: "生活常识",
        explanation: "空腹吃柿子可能导致胃柿石症"
    },
    {
        id: 1209,
        question: "地震发生时，下列哪种做法是错误的？",
        answer: "C",
        options: {
            A: "躲在坚固家具下",
            B: "远离窗户",
            C: "乘坐电梯逃生",
            D: "保护头部"
        },
        hint: "可能被困",
        difficulty: 1,
        category: "生活常识",
        explanation: "地震时不能使用电梯，可能停电或损坏导致被困"
    },
    {
        id: 1210,
        question: "下列哪种不是有效的消毒方法？",
        answer: "B",
        options: {
            A: "煮沸消毒",
            B: "冷水浸泡",
            C: "酒精消毒",
            D: "紫外线消毒"
        },
        hint: "需要物理或化学作用",
        difficulty: 2,
        category: "生活常识",
        explanation: "冷水浸泡不能有效杀灭微生物"
    },
    {
        id: 1211,
        question: "正常成年人每天需要摄入多少克食盐？",
        answer: "D",
        options: {
            A: "3克",
            B: "10克",
            C: "15克",
            D: "5-6克"
        },
        hint: "世界卫生组织建议",
        difficulty: 2,
        category: "生活常识",
        explanation: "世界卫生组织建议成人每天食盐摄入量不超过5克"
    },
    {
        id: 1212,
        question: "下列哪种火灾不能用水扑灭？",
        answer: "A",
        options: {
            A: "油锅着火",
            B: "纸张着火",
            C: "木材着火",
            D: "布料着火"
        },
        hint: "可能使火势扩大",
        difficulty: 2,
        category: "生活常识",
        explanation: "油锅着火用水扑灭会导致油溅出扩大火势，应使用锅盖盖灭"
    },
    {
        id: 1213,
        question: "食物在冰箱冷冻室的保存时间一般是？",
        answer: "C",
        options: {
            A: "1个月",
            B: "3个月",
            C: "3-6个月",
            D: "1年"
        },
        hint: "不同类型食物不同",
        difficulty: 2,
        category: "生活常识",
        explanation: "大多数食物在冰箱冷冻室可保存3-6个月，但具体时间因食物类型而异"
    },
    {
        id: 1214,
        question: "下列哪种不是有效的解酒方法？",
        answer: "B",
        options: {
            A: "多喝水",
            B: "喝浓茶",
            C: "吃水果",
            D: "休息"
        },
        hint: "可能加重负担",
        difficulty: 2,
        category: "生活常识",
        explanation: "浓茶不能解酒，还可能加重心脏和肾脏负担"
    },
    {
        id: 1215,
        question: "正常成年人每天需要多少小时的睡眠？",
        answer: "D",
        options: {
            A: "5-6小时",
            B: "6-7小时",
            C: "8-9小时",
            D: "7-9小时"
        },
        hint: "健康推荐",
        difficulty: 1,
        category: "生活常识",
        explanation: "正常成年人每天需要7-9小时的睡眠"
    },
    {
        id: 1216,
        question: "下列哪种食物不宜与海鲜同食？",
        answer: "A",
        options: {
            A: "富含维生素C的水果",
            B: "米饭",
            C: "蔬菜",
            D: "面包"
        },
        hint: "可能产生有毒物质",
        difficulty: 2,
        category: "生活常识",
        explanation: "海鲜与大量维生素C同食可能产生砷化合物，但一般食用量下问题不大"
    },
    {
        id: 1217,
        question: "火警电话是？",
        answer: "B",
        options: {
            A: "110",
            B: "119",
            C: "120",
            D: "122"
        },
        hint: "火灾报警",
        difficulty: 1,
        category: "生活常识",
        explanation: "119是中国大陆的火警电话"
    },
    {
        id: 1218,
        question: "下列哪种不是保存大米的方法？",
        answer: "C",
        options: {
            A: "干燥保存",
            B: "密封保存",
            C: "潮湿保存",
            D: "低温保存"
        },
        hint: "容易发霉",
        difficulty: 1,
        category: "生活常识",
        explanation: "潮湿环境会导致大米发霉变质"
    },
    {
        id: 1219,
        question: "正常体温的范围是？",
        answer: "D",
        options: {
            A: "35-36℃",
            B: "36-37℃",
            C: "37-38℃",
            D: "36-37℃"
        },
        hint: "口腔温度",
        difficulty: 1,
        category: "生活常识",
        explanation: "正常人体口腔温度约为36.3-37.2℃"
    },
    {
        id: 1220,
        question: "下列哪种不是节能做法？",
        answer: "A",
        options: {
            A: "长期待机",
            B: "使用节能灯",
            C: "随手关灯",
            D: "合理使用空调"
        },
        hint: "浪费电能",
        difficulty: 1,
        category: "生活常识",
        explanation: "电器长期待机会消耗电能，应彻底关闭电源"
    },
    {
        id: 1221,
        question: "食物中毒后错误的做法是？",
        answer: "B",
        options: {
            A: "保留可疑食物",
            B: "立即催吐",
            C: "及时就医",
            D: "补充水分"
        },
        hint: "可能加重伤害",
        difficulty: 2,
        category: "生活常识",
        explanation: "某些情况下催吐可能加重伤害，最好先咨询医生"
    },
    {
        id: 1222,
        question: "正常成年人每天应进行多少分钟中等强度运动？",
        answer: "C",
        options: {
            A: "15分钟",
            B: "20分钟",
            C: "30分钟",
            D: "60分钟"
        },
        hint: "健康指南",
        difficulty: 2,
        category: "生活常识",
        explanation: "世界卫生组织建议成人每周至少150分钟中等强度运动"
    },
    {
        id: 1223,
        question: "下列哪种不是安全的食品保存方法？",
        answer: "D",
        options: {
            A: "冷藏",
            B: "腌制",
            C: "真空包装",
            D: "常温长时间放置"
        },
        hint: "容易腐败",
        difficulty: 1,
        category: "生活常识",
        explanation: "大多数食物在常温下长时间放置容易腐败"
    },
    {
        id: 1224,
        question: "发生触电时，错误的做法是？",
        answer: "A",
        options: {
            A: "直接用手拉人",
            B: "切断电源",
            C: "用干燥木棒挑开电线",
            D: "呼叫急救"
        },
        hint: "可能连带触电",
        difficulty: 2,
        category: "生活常识",
        explanation: "直接用手拉触电者可能导致施救者连带触电"
    },
    {
        id: 1225,
        question: "下列哪种水不能直接饮用？",
        answer: "B",
        options: {
            A: "烧开的自来水",
            B: "生水",
            C: "瓶装纯净水",
            D: "过滤后的水"
        },
        hint: "可能含有病原体",
        difficulty: 1,
        category: "生活常识",
        explanation: "生水可能含有细菌、病毒等病原体，应煮沸后饮用"
    },
    {
        id: 1226,
        question: "正常成年人每天需要多少膳食纤维？",
        answer: "D",
        options: {
            A: "5-10克",
            B: "10-15克",
            C: "15-20克",
            D: "25-30克"
        },
        hint: "促进消化",
        difficulty: 2,
        category: "生活常识",
        explanation: "成人每天需要25-30克膳食纤维"
    },
    {
        id: 1227,
        question: "下列哪种不是处理伤口的方法？",
        answer: "C",
        options: {
            A: "清洗消毒",
            B: "包扎",
            C: "用口水消毒",
            D: "止血"
        },
        hint: "可能感染",
        difficulty: 1,
        category: "生活常识",
        explanation: "口水中含有细菌，可能加重伤口感染"
    },
    {
        id: 1228,
        question: "炒菜时油烟产生的主要原因是？",
        answer: "A",
        options: {
            A: "油温过高",
            B: "油的质量差",
            C: "食材不新鲜",
            D: "锅具问题"
        },
        hint: "加热过程",
        difficulty: 2,
        category: "生活常识",
        explanation: "油温过高时，油脂分解产生油烟"
    },
    {
        id: 1229,
        question: "报警电话是？",
        answer: "B",
        options: {
            A: "119",
            B: "110",
            C: "120",
            D: "122"
        },
        hint: "治安报警",
        difficulty: 1,
        category: "生活常识",
        explanation: "110是中国大陆的报警电话"
    },
    {
        id: 1230,
        question: "下列哪种不是预防感冒的方法？",
        answer: "D",
        options: {
            A: "勤洗手",
            B: "保持室内通风",
            C: "适当锻炼",
            D: "多穿衣服"
        },
        hint: "过度保暖可能不利",
        difficulty: 2,
        category: "生活常识",
        explanation: "过度穿衣可能导致出汗后着凉，适当保暖即可"
    },
    {
        id: 1231,
        question: "大米的最佳保存温度是？",
        answer: "C",
        options: {
            A: "0-5℃",
            B: "5-10℃",
            C: "15℃以下",
            D: "20℃以上"
        },
        hint: "防止生虫",
        difficulty: 2,
        category: "生活常识",
        explanation: "大米在15℃以下不易生虫"
    },
    {
        id: 1232,
        question: "下列哪种情况不适合进行体育锻炼？",
        answer: "A",
        options: {
            A: "感冒发烧时",
            B: "饭后1小时",
            C: "清晨",
            D: "下午"
        },
        hint: "可能加重病情",
        difficulty: 2,
        category: "生活常识",
        explanation: "感冒发烧时应休息，避免剧烈运动加重病情"
    },
    {
        id: 1233,
        question: "交通事故报警电话是？",
        answer: "D",
        options: {
            A: "110",
            B: "119",
            C: "120",
            D: "122"
        },
        hint: "交通报警",
        difficulty: 1,
        category: "生活常识",
        explanation: "122是中国大陆的交通事故报警电话"
    },
    {
        id: 1234,
        question: "下列哪种不是健康饮食习惯？",
        answer: "B",
        options: {
            A: "定时定量",
            B: "暴饮暴食",
            C: "细嚼慢咽",
            D: "多样化饮食"
        },
        hint: "对消化系统有害",
        difficulty: 1,
        category: "生活常识",
        explanation: "暴饮暴食会增加胃肠负担，损害健康"
    },
    {
        id: 1235,
        question: "冰箱冷藏室的温度应该是？",
        answer: "C",
        options: {
            A: "0℃以下",
            B: "0-4℃",
            C: "4-8℃",
            D: "8-12℃"
        },
        hint: "保鲜温度",
        difficulty: 2,
        category: "生活常识",
        explanation: "冰箱冷藏室温度一般应设置在4-8℃"
    },
    {
        id: 1236,
        question: "下列哪种不是防暑降温的正确方法？",
        answer: "A",
        options: {
            A: "大量喝冰水",
            B: "适当补充淡盐水",
            C: "避免烈日下活动",
            D: "使用防晒用品"
        },
        hint: "可能刺激胃肠",
        difficulty: 2,
        category: "生活常识",
        explanation: "大量喝冰水可能刺激胃肠，温水或凉开水更好"
    },
    {
        id: 1237,
        question: "水果的最佳食用时间是？",
        answer: "B",
        options: {
            A: "饭前",
            B: "两餐之间",
            C: "饭后立即",
            D: "睡前"
        },
        hint: "利于吸收",
        difficulty: 2,
        category: "生活常识",
        explanation: "两餐之间食用水果利于营养吸收"
    },
    {
        id: 1238,
        question: "下列哪种不是家庭常备急救物品？",
        answer: "D",
        options: {
            A: "创可贴",
            B: "消毒药水",
            C: "体温计",
            D: "手术刀"
        },
        hint: "专业医疗工具",
        difficulty: 1,
        category: "生活常识",
        explanation: "手术刀不是家庭常备物品，应由专业人员使用"
    },
    {
        id: 1239,
        question: "炒菜时先放盐还是后放盐？",
        answer: "C",
        options: {
            A: "先放",
            B: "中间放",
            C: "后放",
            D: "随意"
        },
        hint: "保留碘元素",
        difficulty: 2,
        category: "生活常识",
        explanation: "后放盐可以减少碘的损失，也更健康"
    },
    {
        id: 1240,
        question: "下列哪种不是正确的服药方法？",
        answer: "A",
        options: {
            A: "用饮料服药",
            B: "用温水送服",
            C: "按时服药",
            D: "按剂量服药"
        },
        hint: "可能影响药效",
        difficulty: 2,
        category: "生活常识",
        explanation: "某些饮料可能与药物发生反应，应用温水送服"
    },
    {
        id: 1241,
        question: "鸡蛋在冰箱可以保存多久？",
        answer: "D",
        options: {
            A: "1周",
            B: "2周",
            C: "3周",
            D: "4-5周"
        },
        hint: "冷藏保存",
        difficulty: 2,
        category: "生活常识",
        explanation: "鸡蛋在冰箱冷藏室可保存4-5周"
    },
    {
        id: 1242,
        question: "下列哪种不是节约用水的做法？",
        answer: "B",
        options: {
            A: "一水多用",
            B: "长流水洗脸",
            C: "使用节水器具",
            D: "及时修理漏水"
        },
        hint: "浪费水资源",
        difficulty: 1,
        category: "生活常识",
        explanation: "长流水洗脸浪费大量水资源"
    },
    {
        id: 1243,
        question: "隔夜菜可以吃吗？",
        answer: "C",
        options: {
            A: "完全不能吃",
            B: "随便吃",
            C: "保存得当可以吃",
            D: "只有肉类可以吃"
        },
        hint: "保存条件重要",
        difficulty: 2,
        category: "生活常识",
        explanation: "隔夜菜如果保存得当（冷藏密封），充分加热后可以食用，但不宜经常吃"
    },
    {
        id: 1244,
        question: "下列哪种不是正确的垃圾分类？",
        answer: "A",
        options: {
            A: "所有塑料都放一起",
            B: "厨余垃圾单独放",
            C: "有害垃圾特殊处理",
            D: "可回收物分类投放"
        },
        hint: "塑料种类多",
        difficulty: 2,
        category: "生活常识",
        explanation: "不同塑料制品可能属于不同类别，需要根据具体情况分类"
    },
    {
        id: 1245,
        question: "牛奶的最佳保存温度是？",
        answer: "B",
        options: {
            A: "室温",
            B: "2-6℃",
            C: "10-15℃",
            D: "0℃以下"
        },
        hint: "冷藏保鲜",
        difficulty: 2,
        category: "生活常识",
        explanation: "鲜牛奶应在2-6℃冷藏保存"
    },
    {
        id: 1246,
        question: "下列哪种不是预防近视的方法？",
        answer: "D",
        options: {
            A: "保持正确读写姿势",
            B: "适当户外活动",
            C: "控制用眼时间",
            D: "在昏暗光线下阅读"
        },
        hint: "伤害眼睛",
        difficulty: 1,
        category: "生活常识",
        explanation: "昏暗光线下阅读会加重眼睛负担"
    },
    {
        id: 1247,
        question: "炒菜时油温多少度最合适？",
        answer: "C",
        options: {
            A: "100-120℃",
            B: "120-150℃",
            C: "150-180℃",
            D: "200℃以上"
        },
        hint: "避免过高温度",
        difficulty: 3,
        category: "生活常识",
        explanation: "炒菜油温控制在150-180℃最佳，过高会产生有害物质"
    },
    {
        id: 1248,
        question: "下列哪种不是节能家电的标识？",
        answer: "A",
        options: {
            A: "CCC认证",
            B: "能效标识",
            C: "节能认证",
            D: "能源之星"
        },
        hint: "安全认证",
        difficulty: 2,
        category: "生活常识",
        explanation: "CCC认证是强制性产品认证，不是节能标识"
    },
    {
        id: 1249,
        question: "饭后多久可以洗澡？",
        answer: "D",
        options: {
            A: "立即",
            B: "15分钟",
            C: "30分钟",
            D: "1小时"
        },
        hint: "避免影响消化",
        difficulty: 2,
        category: "生活常识",
        explanation: "饭后1小时再洗澡，避免影响消化"
    },
    {
        id: 1250,
        question: "下列哪种不是正确的电器使用习惯？",
        answer: "B",
        options: {
            A: "人走断电",
            B: "电器长期待机",
            C: "定期清洁",
            D: "不超负荷使用"
        },
        hint: "浪费电能",
        difficulty: 1,
        category: "生活常识",
        explanation: "电器长期待机会浪费电能，存在安全隐患"
    },
    {
        id: 1251,
        question: "室内空气污染的主要来源不包括？",
        answer: "C",
        options: {
            A: "装修材料",
            B: "家具",
            C: "绿植",
            D: "烹饪油烟"
        },
        hint: "净化空气",
        difficulty: 2,
        category: "生活常识",
        explanation: "绿植通常有助于净化空气，不是污染源"
    },
    {
        id: 1252,
        question: "下列哪种不是正确的火灾逃生方法？",
        answer: "A",
        options: {
            A: "乘坐电梯",
            B: "用湿毛巾捂口鼻",
            C: "低姿前进",
            D: "走楼梯"
        },
        hint: "火灾时禁用",
        difficulty: 1,
        category: "生活常识",
        explanation: "火灾时不能使用电梯"
    },
    {
        id: 1253,
        question: "每天应该喝多少水？",
        answer: "B",
        options: {
            A: "500毫升",
            B: "1500-2000毫升",
            C: "3000毫升",
            D: "越多越好"
        },
        hint: "正常成年人",
        difficulty: 2,
        category: "生活常识",
        explanation: "成人每天需要1500-2000毫升水"
    },
    {
        id: 1254,
        question: "下列哪种食物不宜微波炉加热？",
        answer: "D",
        options: {
            A: "米饭",
            B: "蔬菜",
            C: "肉类",
            D: "带壳鸡蛋"
        },
        hint: "可能爆炸",
        difficulty: 2,
        category: "生活常识",
        explanation: "带壳鸡蛋微波加热可能爆炸，应去壳或刺破"
    },
    {
        id: 1255,
        question: "正常成年人每天摄入的食用油应该是多少？",
        answer: "C",
        options: {
            A: "10克",
            B: "20克",
            C: "25-30克",
            D: "50克"
        },
        hint: "健康推荐",
        difficulty: 2,
        category: "生活常识",
        explanation: "成人每天食用油摄入量应为25-30克"
    },
    {
        id: 1256,
        question: "下列哪种不是家庭防火措施？",
        answer: "A",
        options: {
            A: "堆放易燃物品",
            B: "安装烟雾报警器",
            C: "配备灭火器",
            D: "定期检查电路"
        },
        hint: "增加火灾风险",
        difficulty: 1,
        category: "生活常识",
        explanation: "堆放易燃物品会增加火灾风险"
    },
    {
        id: 1257,
        question: "新鲜蔬菜在室温下可以保存多久？",
        answer: "B",
        options: {
            A: "1天",
            B: "1-3天",
            C: "一周",
            D: "半个月"
        },
        hint: "因蔬菜种类而异",
        difficulty: 2,
        category: "生活常识",
        explanation: "大多数新鲜蔬菜在室温下可保存1-3天，叶菜类更短"
    },
    {
        id: 1258,
        question: "下列哪种不是正确的用药原则？",
        answer: "D",
        options: {
            A: "遵医嘱",
            B: "看说明书",
            C: "不滥用",
            D: "随意增减剂量"
        },
        hint: "可能危害健康",
        difficulty: 1,
        category: "生活常识",
        explanation: "随意增减药物剂量可能影响疗效或造成危害"
    },
    {
        id: 1259,
        question: "空调的最佳设定温度是？",
        answer: "C",
        options: {
            A: "18℃",
            B: "22℃",
            C: "26℃",
            D: "30℃"
        },
        hint: "节能舒适",
        difficulty: 2,
        category: "生活常识",
        explanation: "夏季空调设定26℃既舒适又节能"
    },
    {
        id: 1260,
        question: "下列哪种不是正确的交通安全行为？",
        answer: "A",
        options: {
            A: "闯红灯",
            B: "系安全带",
            C: "不酒后驾车",
            D: "礼让行人"
        },
        hint: "违法行为",
        difficulty: 1,
        category: "生活常识",
        explanation: "闯红灯是危险的交通违法行为"
    },
    {
        id: 1261,
        question: "剩饭在冰箱可以保存多久？",
        answer: "D",
        options: {
            A: "1天",
            B: "2天",
            C: "3天",
            D: "不超过2天"
        },
        hint: "尽快食用",
        difficulty: 2,
        category: "生活常识",
        explanation: "剩饭在冰箱冷藏不宜超过2天，食用前需充分加热"
    },
    {
        id: 1262,
        question: "下列哪种不是正确的家庭用电安全措施？",
        answer: "B",
        options: {
            A: "使用合格电器",
            B: "电线裸露使用",
            C: "安装漏电保护器",
            D: "不超负荷用电"
        },
        hint: "触电危险",
        difficulty: 1,
        category: "生活常识",
        explanation: "电线裸露使用存在触电和火灾隐患"
    },
    {
        id: 1263,
        question: "正常成年人每天需要多少蛋白质？",
        answer: "C",
        options: {
            A: "20克",
            B: "40克",
            C: "60-80克",
            D: "100克以上"
        },
        hint: "体重相关",
        difficulty: 2,
        category: "生活常识",
        explanation: "成人每天蛋白质需要量约为每公斤体重0.8-1克"
    },
    {
        id: 1264,
        question: "下列哪种不是预防食物中毒的方法？",
        answer: "D",
        options: {
            A: "生熟分开",
            B: "充分加热",
            C: "保持清洁",
            D: "吃变味食物"
        },
        hint: "危险行为",
        difficulty: 1,
        category: "生活常识",
        explanation: "变味食物可能已变质，不应食用"
    },
    {
        id: 1265,
        question: "手机充电时错误的做法是？",
        answer: "A",
        options: {
            A: "边充边玩大型游戏",
            B: "使用原装充电器",
            C: "不放在易燃物上",
            D: "不长时间充电"
        },
        hint: "可能过热",
        difficulty: 2,
        category: "生活常识",
        explanation: "边充边玩大型游戏可能导致手机过热，存在安全隐患"
    },
    {
        id: 1266,
        question: "下列哪种不是健康的生活方式？",
        answer: "B",
        options: {
            A: "规律作息",
            B: "熬夜",
            C: "适量运动",
            D: "均衡饮食"
        },
        hint: "损害健康",
        difficulty: 1,
        category: "生活常识",
        explanation: "熬夜会损害健康"
    },
    {
        id: 1267,
        question: "开水的最佳饮用温度是？",
        answer: "C",
        options: {
            A: "100℃",
            B: "80℃",
            C: "40-50℃",
            D: "20℃"
        },
        hint: "不烫嘴",
        difficulty: 2,
        category: "生活常识",
        explanation: "40-50℃的水最适宜饮用，不烫嘴也保留了水质"
    },
    {
        id: 1268,
        question: "下列哪种不是节约用电的方法？",
        answer: "D",
        options: {
            A: "使用节能灯",
            B: "随手关灯",
            C: "合理使用空调",
            D: "电器长期待机"
        },
        hint: "浪费电能",
        difficulty: 1,
        category: "生活常识",
        explanation: "电器长期待机会浪费电能"
    },
    {
        id: 1269,
        question: "水果和蔬菜每天应该吃多少？",
        answer: "B",
        options: {
            A: "100克",
            B: "500克以上",
            C: "200克",
            D: "300克"
        },
        hint: "健康推荐",
        difficulty: 2,
        category: "生活常识",
        explanation: "中国居民膳食指南建议每天摄入300-500克蔬菜，200-350克水果"
    },
    {
        id: 1270,
        question: "下列哪种不是正确的急救原则？",
        answer: "A",
        options: {
            A: "随意搬动伤员",
            B: "先救命后治伤",
            C: "及时呼救",
            D: "保护现场"
        },
        hint: "可能加重伤害",
        difficulty: 2,
        category: "生活常识",
        explanation: "不确定伤情时不要随意搬动伤员，可能加重伤害"
    },
    {
        id: 1271,
        question: "洗衣机的最佳使用温度是？",
        answer: "C",
        options: {
            A: "90℃",
            B: "60℃",
            C: "30-40℃",
            D: "冷水"
        },
        hint: "兼顾清洁和节能",
        difficulty: 2,
        category: "生活常识",
        explanation: "30-40℃水温既能有效清洁，又节能且保护衣物"
    },
    {
        id: 1272,
        question: "下列哪种不是正确的环保行为？",
        answer: "B",
        options: {
            A: "使用环保袋",
            B: "乱扔垃圾",
            C: "节约用水",
            D: "垃圾分类"
        },
        hint: "污染环境",
        difficulty: 1,
        category: "生活常识",
        explanation: "乱扔垃圾会污染环境"
    },
    {
        id: 1273,
        question: "煮鸡蛋需要几分钟？",
        answer: "D",
        options: {
            A: "2分钟",
            B: "5分钟",
            C: "8分钟",
            D: "8-10分钟"
        },
        hint: "完全煮熟",
        difficulty: 2,
        category: "生活常识",
        explanation: "鸡蛋煮沸后继续煮8-10分钟可完全煮熟"
    },
    {
        id: 1274,
        question: "下列哪种不是预防流感的方法？",
        answer: "C",
        options: {
            A: "接种疫苗",
            B: "勤洗手",
            C: "紧闭门窗",
            D: "避免人群密集"
        },
        hint: "需要通风",
        difficulty: 2,
        category: "生活常识",
        explanation: "紧闭门窗不利于空气流通，可能增加感染风险"
    },
    {
        id: 1275,
        question: "正常成年人每天的糖摄入量应不超过多少克？",
        answer: "B",
        options: {
            A: "20克",
            B: "50克",
            C: "100克",
            D: "150克"
        },
        hint: "世界卫生组织建议",
        difficulty: 2,
        category: "生活常识",
        explanation: "世界卫生组织建议成人每天添加糖摄入量不超过50克"
    },
    {
        id: 1276,
        question: "下列哪种不是家庭常备药品？",
        answer: "D",
        options: {
            A: "感冒药",
            B: "创可贴",
            C: "肠胃药",
            D: "抗生素"
        },
        hint: "处方药",
        difficulty: 2,
        category: "生活常识",
        explanation: "抗生素是处方药，应在医生指导下使用"
    },
    {
        id: 1277,
        question: "洗碗时最佳水温是？",
        answer: "C",
        options: {
            A: "冷水",
            B: "40℃",
            C: "45-50℃",
            D: "70℃以上"
        },
        hint: "去油效果好",
        difficulty: 2,
        category: "生活常识",
        explanation: "45-50℃水温既能有效去油，又不烫手"
    },
    {
        id: 1278,
        question: "下列哪种不是正确的食品安全习惯？",
        answer: "A",
        options: {
            A: "用抹布擦餐具",
            B: "生熟分开",
            C: "及时冷藏",
            D: "充分加热"
        },
        hint: "可能污染餐具",
        difficulty: 2,
        category: "生活常识",
        explanation: "不洁的抹布可能污染餐具"
    },
    {
        id: 1279,
        question: "正常人每天应该排便几次？",
        answer: "D",
        options: {
            A: "0-1次",
            B: "1次",
            C: "1-2次",
            D: "1-3次"
        },
        hint: "个体差异",
        difficulty: 2,
        category: "生活常识",
        explanation: "正常人每天排便1-3次或每2-3天排便1次都属正常范围"
    },
    {
        id: 1280,
        question: "下列哪种不是正确的家居清洁方法？",
        answer: "B",
        options: {
            A: "定期清洁",
            B: "清洁剂混用",
            C: "通风换气",
            D: "分类清洁"
        },
        hint: "可能产生有毒气体",
        difficulty: 2,
        category: "生活常识",
        explanation: "某些清洁剂混用可能产生有毒气体，应避免混用"
    },
]

export default commonSenseRiddles
import { Riddle } from './types'
// 汉字谜语类灯谜 (120条)
const chineseCharRiddles: Riddle[] = [
    {
        id: 701,
        question: "一口咬掉牛尾巴（打一字）",
        answer: "A",
        options: {
            A: "告",
            B: "午",
            C: "生",
            D: "件"
        },
        hint: "牛字去尾巴加口",
        difficulty: 2,
        category: "汉字谜语"
    },
    {
        id: 702,
        question: "一人一张口，口下长只手（打一字）",
        answer: "B",
        options: {
            A: "拿",
            B: "拿",
            C: "合",
            D: "哈"
        },
        hint: "人+一+口+手",
        difficulty: 2,
        category: "汉字谜语"
    },
    {
        id: 703,
        question: "七十二小时（打一字）",
        answer: "C",
        options: {
            A: "天",
            B: "日",
            C: "晶",
            D: "明"
        },
        hint: "三天时间",
        difficulty: 2,
        category: "汉字谜语"
    },
    {
        id: 704,
        question: "一半儿（打一字）",
        answer: "D",
        options: {
            A: "伴",
            B: "胖",
            C: "半",
            D: "臼"
        },
        hint: "儿字的一半",
        difficulty: 3,
        category: "汉字谜语"
    },
    {
        id: 705,
        question: "一加一（打一字）",
        answer: "A",
        options: {
            A: "王",
            B: "二",
            C: "三",
            D: "丰"
        },
        hint: "一+加号+一",
        difficulty: 2,
        category: "汉字谜语"
    },
    {
        id: 706,
        question: "九十九（打一字）",
        answer: "B",
        options: {
            A: "杂",
            B: "白",
            C: "百",
            D: "缺"
        },
        hint: "100减1",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "九十九即一百少一，'百'减去'一'是'白'"
    },
    {
        id: 707,
        question: "格外大方（打一字）",
        answer: "A",
        options: {
            A: "回",
            B: "园",
            C: "因",
            D: "囚"
        },
        hint: "格字外面是大方",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'格'字的外面（去掉木）加上'大方'组成'回'字"
    },
    {
        id: 708,
        question: "刀出鞘（打一字）",
        answer: "B",
        options: {
            A: "刀",
            B: "力",
            C: "刃",
            D: "剑"
        },
        hint: "鞘是装刀的外壳",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "刀出鞘即刀离开了鞘，'刀'字去掉外壳（象形）变成'力'"
    },
    {
        id: 709,
        question: "水上工程（打一字）",
        answer: "C",
        options: {
            A: "江",
            B: "河",
            C: "汞",
            D: "泵"
        },
        hint: "水上为工",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'水'上边加'工'是'汞'"
    },
    {
        id: 710,
        question: "半部春秋（打一字）",
        answer: "D",
        options: {
            A: "秦",
            B: "季",
            C: "年",
            D: "香"
        },
        hint: "各取一半",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'春'的上半部分和'秋'的左半部分组合成'香'"
    },
    {
        id: 711,
        question: "点心（打一字）",
        answer: "A",
        options: {
            A: "口",
            B: "心",
            C: "丶",
            D: "小"
        },
        hint: "点字的心",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'点'字的中心部分是'口'"
    },
    {
        id: 712,
        question: "日落香残，洗却凡心一点（打一字）",
        answer: "B",
        options: {
            A: "旮",
            B: "秃",
            C: "禾",
            D: "香"
        },
        hint: "香字去掉日和点",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'香'字去掉'日'和'丶'（一点），剩下'禾'，'凡'字去掉一点是'几'，组合成'秃'"
    },
    {
        id: 713,
        question: "四面都是山，山山都相连（打一字）",
        answer: "C",
        options: {
            A: "由",
            B: "十",
            C: "田",
            D: "申"
        },
        hint: "像四座山相连",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'田'字的四周都像'山'字相连"
    },
    {
        id: 714,
        question: "旭日东升（打一字）",
        answer: "D",
        options: {
            A: "早",
            B: "日",
            C: "升",
            D: "九"
        },
        hint: "九日在东边升起",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'旭'字的'日'升到东边（左边），剩下'九'"
    },
    {
        id: 715,
        question: "两点水（打一字）",
        answer: "A",
        options: {
            A: "冰",
            B: "水",
            C: "冫",
            D: "冻"
        },
        hint: "两点加上水",
        difficulty: 1,
        category: "汉字谜语",
        explanation: "'两点'（冫）加上'水'是'冰'"
    },
    {
        id: 716,
        question: "半青半紫（打一字）",
        answer: "B",
        options: {
            A: "靛",
            B: "素",
            C: "紫",
            D: "青"
        },
        hint: "各取一半",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'青'的上半部分和'紫'的下半部分组合成'素'"
    },
    {
        id: 717,
        question: "守门员（打一字）",
        answer: "C",
        options: {
            A: "闷",
            B: "闩",
            C: "闪",
            D: "们"
        },
        hint: "门里有人",
        difficulty: 1,
        category: "汉字谜语",
        explanation: "守门员即守在门里的人，'门'中有'人'是'闪'"
    },
    {
        id: 718,
        question: "千里姻缘一线牵（打一字）",
        answer: "D",
        options: {
            A: "情",
            B: "里",
            C: "缘",
            D: "重"
        },
        hint: "千里结合",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'千'和'里'结合成'重'"
    },
    {
        id: 719,
        question: "弄璋之喜（打一字）",
        answer: "A",
        options: {
            A: "甥",
            B: "男",
            C: "子",
            D: "好"
        },
        hint: "生男孩",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "弄璋指生男孩，'生'和'男'组合成'甥'"
    },
    {
        id: 720,
        question: "二小姐（打一字）",
        answer: "B",
        options: {
            A: "次",
            B: "姿",
            C: "女",
            D: "妹"
        },
        hint: "二、小、姐",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'二'、'小'和'姐'（女）组合成'姿'"
    },
    {
        id: 721,
        question: "打断念头（打一字）",
        answer: "C",
        options: {
            A: "念",
            B: "今",
            C: "心",
            D: "思"
        },
        hint: "念字断开",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'念'字打断（去掉）'今'，剩下'心'"
    },
    {
        id: 722,
        question: "顶破天（打一字）",
        answer: "D",
        options: {
            A: "大",
            B: "一",
            C: "工",
            D: "夫"
        },
        hint: "天字上面出头",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'天'字上面出头是'夫'"
    },
    {
        id: 723,
        question: "三张纸（打一字）",
        answer: "A",
        options: {
            A: "顺",
            B: "川",
            C: "三",
            D: "纸"
        },
        hint: "三个'三'像三张纸",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'顺'字的右半部分可以看作三张纸（三个竖）"
    },
    {
        id: 724,
        question: "十五天（打一字）",
        answer: "B",
        options: {
            A: "月",
            B: "胖",
            C: "望",
            D: "半"
        },
        hint: "半个月",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "十五天是半个月，'半'和'月'组合成'胖'"
    },
    {
        id: 725,
        question: "十个哥哥（打一字）",
        answer: "C",
        options: {
            A: "十",
            B: "兄",
            C: "克",
            D: "哥"
        },
        hint: "哥哥即兄",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "十个哥哥即十个'兄'，'十'和'兄'组合成'克'"
    },
    {
        id: 726,
        question: "上下难分（打一字）",
        answer: "D",
        options: {
            A: "上",
            B: "下",
            C: "卞",
            D: "卡"
        },
        hint: "上下一体",
        difficulty: 1,
        category: "汉字谜语",
        explanation: "'卡'字是'上'和'下'的组合，难分上下"
    },
    {
        id: 727,
        question: "半推半就（打一字）",
        answer: "A",
        options: {
            A: "掠",
            B: "推",
            C: "就",
            D: "扰"
        },
        hint: "各取一半",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'推'的右半部分和'就'的右半部分组合成'掠'"
    },
    {
        id: 728,
        question: "兄有债（打一字）",
        answer: "B",
        options: {
            A: "欠",
            B: "歌",
            C: "债",
            D: "欢"
        },
        hint: "哥哥欠债",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "兄即哥，有债即欠，'哥'和'欠'组合成'歌'"
    },
    {
        id: 729,
        question: "有心得志（打一字）",
        answer: "C",
        options: {
            A: "志",
            B: "思",
            C: "士",
            D: "心"
        },
        hint: "志字有心",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'志'字有'心'，去掉'心'剩下'士'"
    },
    {
        id: 730,
        question: "手提包（打一字）",
        answer: "D",
        options: {
            A: "拎",
            B: "提",
            C: "包",
            D: "抱"
        },
        hint: "手和包结合",
        difficulty: 1,
        category: "汉字谜语",
        explanation: "'手'和'包'组合成'抱'"
    },
    {
        id: 731,
        question: "二八佳人（打一字）",
        answer: "A",
        options: {
            A: "妙",
            B: "女",
            C: "好",
            D: "娘"
        },
        hint: "二、八、女",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'二'、'八'和'佳人'（女）组合成'妙'"
    },
    {
        id: 732,
        question: "点心（打一字）",
        answer: "A",
        options: {
            A: "口",
            B: "心",
            C: "丶",
            D: "小"
        },
        hint: "点字的心",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'点'字的中心部分是'口'"
    },
    {
        id: 733,
        question: "半耕半读（打一字）",
        answer: "B",
        options: {
            A: "耕",
            B: "讲",
            C: "读",
            D: "话"
        },
        hint: "各取一半",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'耕'的左半部分和'读'的右半部分组合成'讲'"
    },
    {
        id: 734,
        question: "重逢（打一字）",
        answer: "C",
        options: {
            A: "见",
            B: "又",
            C: "观",
            D: "再"
        },
        hint: "又见",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "重逢即又见面，'又'和'见'组合成'观'"
    },
    {
        id: 735,
        question: "推开又来（打一字）",
        answer: "D",
        options: {
            A: "推",
            B: "又",
            C: "开",
            D: "摊"
        },
        hint: "推字分开加又",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'推'字分开，'扌'加上'又'是'摊'"
    },
    {
        id: 736,
        question: "四边残缺（打一字）",
        answer: "A",
        options: {
            A: "匹",
            B: "四",
            C: "不",
            D: "区"
        },
        hint: "四字残缺",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'四'字四边残缺变成'匹'"
    },
    {
        id: 737,
        question: "半真半假（打一字）",
        answer: "B",
        options: {
            A: "真",
            B: "值",
            C: "假",
            D: "什"
        },
        hint: "各取一半",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'真'的上半部分和'假'的右半部分组合成'值'"
    },
    {
        id: 738,
        question: "上下一体（打一字）",
        answer: "C",
        options: {
            A: "上",
            B: "下",
            C: "卡",
            D: "一"
        },
        hint: "上下一体",
        difficulty: 1,
        category: "汉字谜语",
        explanation: "'卡'字是'上'和'下'的结合"
    },
    {
        id: 739,
        question: "一字十三点，难在如何点（打一字）",
        answer: "A",
        options: {
            A: "汁",
            B: "汗",
            C: "海",
            D: "河"
        },
        hint: "十三点加起来是汁",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'十'、'三'和'点'（丶）组合成'汁'"
    },
    {
        id: 740,
        question: "一人在内（打一字）",
        answer: "A",
        options: {
            A: "肉",
            B: "内",
            C: "人",
            D: "大"
        },
        hint: "人字在肉里",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'人'在'内'里面是'肉'"
    },
    {
        id: 741,
        question: "一箭穿心（打一字）",
        answer: "A",
        options: {
            A: "必",
            B: "痛",
            C: "心",
            D: "中"
        },
        hint: "心字中间一撇",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'心'字中间穿一箭（一撇）是'必'"
    },
    {
        id: 742,
        question: "一大二小（打一字）",
        answer: "C",
        options: {
            A: "大",
            B: "二",
            C: "奈",
            D: "示"
        },
        hint: "一、大、二、小组合",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'一'、'大'、'二'、'小'组合成'奈'"
    },
    {
        id: 743,
        question: "一夜又一夜（打一字）",
        answer: "B",
        options: {
            A: "夜",
            B: "多",
            C: "夕",
            D: "朋"
        },
        hint: "夜即夕",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "夜即'夕'，一夜又一夜即两个'夕'，是'多'"
    },
    {
        id: 744,
        question: "一人在外（打一字）",
        answer: "A",
        options: {
            A: "外",
            B: "内",
            C: "人",
            D: "大"
        },
        hint: "人在外",
        difficulty: 1,
        category: "汉字谜语",
        explanation: "这个比较简单，一人在外就是'外'"
    },
    {
        id: 745,
        question: "一个礼拜（打一字）",
        answer: "B",
        options: {
            A: "周",
            B: "旨",
            C: "七",
            D: "天"
        },
        hint: "七天",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "一个礼拜是七天，'七'和'天'组合成'旨'"
    },
    {
        id: 746,
        question: "半价出售（打一字）",
        answer: "C",
        options: {
            A: "售",
            B: "价",
            C: "催",
            D: "卖"
        },
        hint: "半价即催",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'价'的一半和'出'的一半组合成'催'"
    },
    {
        id: 747,
        question: "十月十日（打一字）",
        answer: "D",
        options: {
            A: "十",
            B: "日",
            C: "早",
            D: "朝"
        },
        hint: "十、月、十、日组合",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'十'、'月'、'十'、'日'组合成'朝'"
    },
    {
        id: 748,
        question: "人有他则变大（打一字）",
        answer: "A",
        options: {
            A: "一",
            B: "大",
            C: "人",
            D: "他"
        },
        hint: "人加一变大",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'人'加上'一'变成'大'"
    },
    {
        id: 749,
        question: "人我不分（打一字）",
        answer: "B",
        options: {
            A: "我",
            B: "俄",
            C: "人",
            D: "你"
        },
        hint: "人和我结合",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'人'和'我'组合成'俄'"
    },
    {
        id: 750,
        question: "人要一直上进（打一字）",
        answer: "C",
        options: {
            A: "上",
            B: "进",
            C: "倡",
            D: "优"
        },
        hint: "人、一、直组合",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'人'、'一'、'直'组合成'倡'"
    },
    {
        id: 751,
        question: "二山在一道，猜出便错了（打一字）",
        answer: "D",
        options: {
            A: "山",
            B: "二",
            C: "出",
            D: "击"
        },
        hint: "两座山在一起",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "两个'山'在一起是'击'"
    },
    {
        id: 752,
        question: "十二点（打一字）",
        answer: "A",
        options: {
            A: "斗",
            B: "十",
            C: "点",
            D: "半"
        },
        hint: "十和两个点",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'十'加上两个点（丶）是'斗'"
    },
    {
        id: 753,
        question: "十字对十字，太阳对月亮（打一字）",
        answer: "B",
        options: {
            A: "早",
            B: "朝",
            C: "明",
            D: "萌"
        },
        hint: "十日十月",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'十'对'十'是'艹'，太阳（日）对月亮（月）组合成'朝'"
    },
    {
        id: 754,
        question: "七人八只眼（打一字）",
        answer: "C",
        options: {
            A: "众",
            B: "目",
            C: "货",
            D: "看"
        },
        hint: "七人即化，八只眼即贝",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'七人'是'化'，'八只眼'是'贝'（贝字像两只眼睛），组合成'货'"
    },
    {
        id: 755,
        question: "七十二小时（打一字）",
        answer: "D",
        options: {
            A: "天",
            B: "日",
            C: "昊",
            D: "晶"
        },
        hint: "三天",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "七十二小时是三天，三个'日'是'晶'"
    },
    {
        id: 756,
        question: "七人头上长了草（打一字）",
        answer: "A",
        options: {
            A: "花",
            B: "草",
            C: "化",
            D: "华"
        },
        hint: "七人即化，加草字头",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'七人'是'化'，加上草字头是'花'"
    },
    {
        id: 757,
        question: "九号（打一字）",
        answer: "B",
        options: {
            A: "九",
            B: "旭",
            C: "日",
            D: "号"
        },
        hint: "九日",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'九'和'日'（号表示日）组合成'旭'"
    },
    {
        id: 758,
        question: "九辆车（打一字）",
        answer: "C",
        options: {
            A: "车",
            B: "九",
            C: "轨",
            D: "辆"
        },
        hint: "九和车结合",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'九'和'车'组合成'轨'"
    },
    {
        id: 759,
        question: "九点（打一字）",
        answer: "D",
        options: {
            A: "丸",
            B: "丶",
            C: "点",
            D: "丸"
        },
        hint: "九加一点",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'九'加上一点（丶）是'丸'"
    },
    {
        id: 760,
        question: "刀枪并排（打一字）",
        answer: "A",
        options: {
            A: "划",
            B: "刀",
            C: "枪",
            D: "刂"
        },
        hint: "刀和枪的一部分",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'刀'和'枪'的右半部分（刂）组合成'划'"
    },
    {
        id: 761,
        question: "十三点（打一字）",
        answer: "B",
        options: {
            A: "汁",
            B: "汁",
            C: "十",
            D: "点"
        },
        hint: "十、三、点",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'十'、'三'和'点'（丶）组合成'汁'"
    },
    {
        id: 762,
        question: "十五人（打一字）",
        answer: "C",
        options: {
            A: "什",
            B: "伍",
            C: "伞",
            D: "众"
        },
        hint: "十五个人像伞形",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'十'加'五'再加'人'组成'伞'的形状"
    },
    {
        id: 763,
        question: "十月又相逢（打一字）",
        answer: "D",
        options: {
            A: "月",
            B: "又",
            C: "友",
            D: "有"
        },
        hint: "十月又组合",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'十'、'月'、'又'组合成'有'"
    },
    {
        id: 764,
        question: "十个哥哥力量大，一切困难都不怕（打一字）",
        answer: "A",
        options: {
            A: "克",
            B: "兄",
            C: "十",
            D: "哥"
        },
        hint: "十个兄",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "哥哥即兄，十个兄是'克'"
    },
    {
        id: 765,
        question: "三人两口一匹马（打一字）",
        answer: "B",
        options: {
            A: "众",
            B: "验",
            C: "骑",
            D: "驮"
        },
        hint: "人、人、人、口、口、马",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'人'、'人'、'人'、'口'、'口'、'马'组合成'验'"
    },
    {
        id: 766,
        question: "三口重叠，莫把品字猜（打一字）",
        answer: "C",
        options: {
            A: "品",
            B: "目",
            C: "目",
            D: "晶"
        },
        hint: "三个口重叠不是品",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "三个'口'重叠，但不要猜'品'，而是'目'（三个口竖着排）"
    },
    {
        id: 767,
        question: "三张纸（打一字）",
        answer: "D",
        options: {
            A: "纸",
            B: "三",
            C: "川",
            D: "顺"
        },
        hint: "三张纸并排",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'顺'字的右半部分像三张纸（三个竖）"
    },
    {
        id: 768,
        question: "上下串通（打一字）",
        answer: "A",
        options: {
            A: "卡",
            B: "串",
            C: "上",
            D: "下"
        },
        hint: "上下一体",
        difficulty: 1,
        category: "汉字谜语",
        explanation: "'上'和'下'串通成'卡'"
    },
    {
        id: 769,
        question: "上下难分（打一字）",
        answer: "B",
        options: {
            A: "上",
            B: "卡",
            C: "下",
            D: "中"
        },
        hint: "上下一体难分",
        difficulty: 1,
        category: "汉字谜语",
        explanation: "'卡'字既像上又像下，难分上下"
    },
    {
        id: 770,
        question: "久雷不雨（打一字）",
        answer: "C",
        options: {
            A: "雷",
            B: "雨",
            C: "田",
            D: "电"
        },
        hint: "雷字去掉雨",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'雷'字去掉'雨'剩下'田'"
    },
    {
        id: 771,
        question: "千言万语（打一字）",
        answer: "D",
        options: {
            A: "话",
            B: "多",
            C: "语",
            D: "够"
        },
        hint: "句多",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "千言万语即句子多，'句'和'多'组合成'够'"
    },
    {
        id: 772,
        question: "千里姻缘一线牵（打一字）",
        answer: "A",
        options: {
            A: "重",
            B: "千",
            C: "里",
            D: "缘"
        },
        hint: "千里结合",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'千'和'里'结合成'重'"
    },
    {
        id: 773,
        question: "土上有竹林，土下一寸金（打一字）",
        answer: "B",
        options: {
            A: "等",
            B: "等",
            C: "竹",
            D: "金"
        },
        hint: "竹、土、寸",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'竹'在'土'上，'寸'在'土'下，组合成'等'"
    },
    {
        id: 774,
        question: "大丈夫不得出头（打一字）",
        answer: "C",
        options: {
            A: "大",
            B: "夫",
            C: "天",
            D: "一"
        },
        hint: "夫字不出头",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'夫'字不出头（去掉上面一横）是'天'"
    },
    {
        id: 775,
        question: "大有头，中无心，小全身（打一字）",
        answer: "D",
        options: {
            A: "大",
            B: "就",
            C: "小",
            D: "京"
        },
        hint: "取各部分",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'大'的头（一横），'中'无心（去掉中间的竖），'小'全身组合成'京'"
    },
    {
        id: 776,
        question: "大雨落在横山上（打一字）",
        answer: "A",
        options: {
            A: "雪",
            B: "雨",
            C: "山",
            D: "雷"
        },
        hint: "雨在山上",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'雨'落在'横山'（彐）上是'雪'"
    },
    {
        id: 777,
        question: "小姑娘（打一字）",
        answer: "B",
        options: {
            A: "女",
            B: "妙",
            C: "姑",
            D: "娘"
        },
        hint: "少女",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "小姑娘即少女，'少'和'女'组合成'妙'"
    },
    {
        id: 778,
        question: "山上还有山（打一字）",
        answer: "C",
        options: {
            A: "山",
            B: "峄",
            C: "出",
            D: "岳"
        },
        hint: "两个山",
        difficulty: 1,
        category: "汉字谜语",
        explanation: "两个'山'上下重叠是'出'"
    },
    {
        id: 779,
        question: "不要讲话（打一字）",
        answer: "D",
        options: {
            A: "话",
            B: "说",
            C: "言",
            D: "吻"
        },
        hint: "勿言",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "不要讲话即'勿言'，'勿'和'言'组合成'吻'"
    },
    {
        id: 780,
        question: "中心一点口不见（打一字）",
        answer: "A",
        options: {
            A: "卜",
            B: "中",
            C: "口",
            D: "点"
        },
        hint: "中字中心去掉口",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'中'字的中心'口'不见了，剩下'卜'"
    },
    {
        id: 781,
        question: "五十对耳朵（打一字）",
        answer: "B",
        options: {
            A: "耳",
            B: "陌",
            C: "百",
            D: "五"
        },
        hint: "五十只耳朵",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'五'、'十'和'耳朵'（阝）组合成'陌'"
    },
    {
        id: 782,
        question: "五口之家，外种一树（打一字）",
        answer: "C",
        options: {
            A: "家",
            B: "树",
            C: "梧",
            D: "林"
        },
        hint: "五口加上木",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'五'、'口'和'树'（木）组合成'梧'"
    },
    {
        id: 783,
        question: "六十不足，八十有余（打一字）",
        answer: "D",
        options: {
            A: "六",
            B: "八",
            C: "十",
            D: "平"
        },
        hint: "在六十和八十之间",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'平'字拆开是'八十'，但比八十少一点，比六十多一点"
    },
    {
        id: 784,
        question: "公而忘私（打一字）",
        answer: "A",
        options: {
            A: "八",
            B: "公",
            C: "私",
            D: "么"
        },
        hint: "公字去掉私的部分",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'公'字忘掉'私'（厶），剩下'八'"
    },
    {
        id: 785,
        question: "反比（打一字）",
        answer: "B",
        options: {
            A: "比",
            B: "北",
            C: "反",
            D: "匕"
        },
        hint: "比字反过来",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'比'字反过来是'北'"
    },
    {
        id: 786,
        question: "天上无二，合去一口，家家都有（打一字）",
        answer: "C",
        options: {
            A: "天",
            B: "合",
            C: "人",
            D: "家"
        },
        hint: "天字去掉二和一口",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'天'无'二'（去掉两横），合去'一'和'口'，剩下'人'"
    },
    {
        id: 787,
        question: "天天（打一字）",
        answer: "D",
        options: {
            A: "日",
            B: "天",
            C: "二",
            D: "晦"
        },
        hint: "每日",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "天天即每日，'每'和'日'组合成'晦'"
    },
    {
        id: 788,
        question: "夫人何处去（打一字）",
        answer: "A",
        options: {
            A: "二",
            B: "夫",
            C: "人",
            D: "去"
        },
        hint: "夫字去掉人",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'夫'字的人（捺）去掉了，剩下'二'"
    },
    {
        id: 789,
        question: "太阳西边下，月儿东边挂（打一字）",
        answer: "B",
        options: {
            A: "昍",
            B: "明",
            C: "阳",
            D: "阴"
        },
        hint: "日西月东",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "太阳（日）在西边，月亮（月）在东边，组合成'明'"
    },
    {
        id: 790,
        question: "心如刀刺（打一字）",
        answer: "C",
        options: {
            A: "心",
            B: "刀",
            C: "必",
            D: "刺"
        },
        hint: "心字中间一刀",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'心'字中间刺一刀（一撇）是'必'"
    },
    {
        id: 791,
        question: "手提包（打一字）",
        answer: "D",
        options: {
            A: "提",
            B: "包",
            C: "手",
            D: "抱"
        },
        hint: "手和包",
        difficulty: 1,
        category: "汉字谜语",
        explanation: "'手'和'包'组合成'抱'"
    },
    {
        id: 792,
        question: "文武两全（打一字）",
        answer: "A",
        options: {
            A: "斌",
            B: "全",
            C: "文",
            D: "武"
        },
        hint: "文和武结合",
        difficulty: 1,
        category: "汉字谜语",
        explanation: "'文'和'武'组合成'斌'"
    },
    {
        id: 793,
        question: "日复一日（打一字）",
        answer: "B",
        options: {
            A: "日",
            B: "昌",
            C: "晶",
            D: "多"
        },
        hint: "两个日",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "日复一日即两个日，'日'和'日'组合成'昌'"
    },
    {
        id: 794,
        question: "水上工程（打一字）",
        answer: "C",
        options: {
            A: "江",
            B: "河",
            C: "汞",
            D: "工"
        },
        hint: "水上面加工",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'水'（氵）上面加'工'是'汞'"
    },
    {
        id: 795,
        question: "付出爱心（打一字）",
        answer: "D",
        options: {
            A: "付",
            B: "爱",
            C: "心",
            D: "受"
        },
        hint: "爱字付出心",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'爱'字付出'心'（去掉心字底），加上'付'的一部分是'受'"
    },
    {
        id: 796,
        question: "兄有债（打一字）",
        answer: "A",
        options: {
            A: "歌",
            B: "兄",
            C: "债",
            D: "欠"
        },
        hint: "哥哥欠债",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "兄即哥，有债即欠，'哥'和'欠'组合成'歌'"
    },
    {
        id: 797,
        question: "半个人（打一字）",
        answer: "B",
        options: {
            A: "人",
            B: "伴",
            C: "半",
            D: "个"
        },
        hint: "半字加人字",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'半'和'人'组合成'伴'"
    },
    {
        id: 798,
        question: "半个月亮（打一字）",
        answer: "C",
        options: {
            A: "月",
            B: "半",
            C: "胖",
            D: "有"
        },
        hint: "半和月",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'半'和'月'组合成'胖'"
    },
    {
        id: 799,
        question: "半真半假（打一字）",
        answer: "D",
        options: {
            A: "真",
            B: "假",
            C: "半",
            D: "值"
        },
        hint: "各取一半",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'真'的上半部分和'假'的右半部分组合成'值'"
    },
    {
        id: 800,
        question: "古时候的月亮（打一字）",
        answer: "A",
        options: {
            A: "胡",
            B: "古",
            C: "月",
            D: "明"
        },
        hint: "古月",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'古'时候的'月'亮是'胡'"
    },
    {
        id: 801,
        question: "左有十八，右有十八，二四得八，一八得八（打一字）",
        answer: "B",
        options: {
            A: "林",
            B: "樊",
            C: "森",
            D: "梦"
        },
        hint: "复杂的组合",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "这是一个复杂的谜语，最终组合成'樊'字"
    },
    {
        id: 802,
        question: "打断念头（打一字）",
        answer: "C",
        options: {
            A: "念",
            B: "头",
            C: "心",
            D: "思"
        },
        hint: "念字打断",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'念'字打断（去掉'今'），剩下'心'"
    },
    {
        id: 803,
        question: "石头旁边有块皮（打一字）",
        answer: "C",
        options: {
            A: "石",
            B: "皮",
            C: "破",
            D: "坡"
        },
        hint: "石加皮",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'石'和'皮'组合成'破'"
    },
    {
        id: 804,
        question: "只是近黄昏（打一字）",
        answer: "A",
        options: {
            A: "酱",
            B: "黄",
            C: "昏",
            D: "夕"
        },
        hint: "将近日落",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "黄昏即将到来，'将'和'日'组合成'酱'"
    },
    {
        id: 805,
        question: "目中无人（打一字）",
        answer: "B",
        options: {
            A: "目",
            B: "口",
            C: "人",
            D: "自"
        },
        hint: "目字去掉人",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'目'字中无'人'（去掉中间的两个人形笔画），剩下'口'"
    },
    {
        id: 806,
        question: "中央一条狗，上下四个口（打一字）",
        answer: "C",
        options: {
            A: "嘼",
            B: "哭",
            C: "器",
            D: "犬"
        },
        hint: "犬在中间，四个口在四周",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'犬'在中央，上下左右各一个'口'，是'器'"
    },
    {
        id: 807,
        question: "四面都是山，山山都相连（打一字）",
        answer: "D",
        options: {
            A: "山",
            B: "出",
            C: "岳",
            D: "田"
        },
        hint: "像四座山相连",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'田'字的四周都像'山'字相连"
    },
    {
        id: 808,
        question: "四撇一弯钩，虫在肚中留（打一字）",
        answer: "A",
        options: {
            A: "蜀",
            B: "虫",
            C: "弯",
            D: "弓"
        },
        hint: "蜀字的构成",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "这是对'蜀'字结构的描述"
    },
    {
        id: 809,
        question: "四面密不透风，中间常刮北风（打一字）",
        answer: "B",
        options: {
            A: "风",
            B: "图",
            C: "园",
            D: "围"
        },
        hint: "口字框里有冬",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'口'字框四面密不透风，中间'冬'表示北风，组合成'图'"
    },
    {
        id: 810,
        question: "四个晚上（打一字）",
        answer: "C",
        options: {
            A: "晚",
            B: "四",
            C: "罗",
            D: "夕"
        },
        hint: "夕表示晚上",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "四个晚上即四个'夕'，'四'和'夕'组合成'罗'"
    },
    {
        id: 811,
        question: "说它小，下边大，说它大，上边小（打一字）",
        answer: "D",
        options: {
            A: "大",
            B: "小",
            C: "夵",
            D: "尖"
        },
        hint: "上面小下面大",
        difficulty: 1,
        category: "汉字谜语",
        explanation: "'尖'字上面是'小'，下面是'大'"
    },
    {
        id: 812,
        question: "日长月短左右战，一正一反两边排（打一字）",
        answer: "A",
        options: {
            A: "门",
            B: "日",
            C: "月",
            D: "战"
        },
        hint: "门字的结构",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "这是对'门'字结构的形象描述"
    },
    {
        id: 813,
        question: "日复一日（打一字）",
        answer: "B",
        options: {
            A: "日",
            B: "昌",
            C: "晶",
            D: "多"
        },
        hint: "两个日",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'日'复'一日'是两个'日'，组合成'昌'"
    },
    {
        id: 814,
        question: "日落香残，洗凡心一点（打一字）",
        answer: "C",
        options: {
            A: "香",
            B: "禾",
            C: "秃",
            D: "几"
        },
        hint: "香字去掉日和点",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'香'去掉'日'和'丶'（一点），'凡'去掉一点，组合成'秃'"
    },
    {
        id: 815,
        question: "日落相残洗却凡心一点（打一字）",
        answer: "D",
        options: {
            A: "旺",
            B: "明",
            C: "盲",
            D: "秃"
        },
        hint: "香字去掉日和点",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'香'去掉'日'和'丶'（一点），'凡'去掉一点，组合成'秃'"
    },
    {
        id: 816,
        question: "月光照进门（打一字）",
        answer: "A",
        options: {
            A: "闲",
            B: "门",
            C: "月",
            D: "明"
        },
        hint: "门中有月",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'门'中有'月'是'闲'"
    },
    {
        id: 817,
        question: "木字多一撇（打一字）",
        answer: "B",
        options: {
            A: "木",
            B: "移",
            C: "禾",
            D: "朱"
        },
        hint: "不是'禾'",
        difficulty: 3,
        category: "汉字谜语",
        explanation: "'木'字多一撇不是'禾'，而是'移'（多一撇在左边）"
    },
    {
        id: 818,
        question: "水上人家（打一字）",
        answer: "C",
        options: {
            A: "家",
            B: "水",
            C: "沪",
            D: "户"
        },
        hint: "水上的门户",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'水'（氵）和'户'组合成'沪'"
    },
    {
        id: 819,
        question: "太阳王（打一字）",
        answer: "D",
        options: {
            A: "日",
            B: "王",
            C: "呈",
            D: "旺"
        },
        hint: "日和王",
        difficulty: 1,
        category: "汉字谜语",
        explanation: "'日'和'王'组合成'旺'"
    },
    {
        id: 820,
        question: "太阳挂在树顶上（打一字）",
        answer: "A",
        options: {
            A: "果",
            B: "日",
            C: "木",
            D: "杲"
        },
        hint: "日在木上",
        difficulty: 2,
        category: "汉字谜语",
        explanation: "'日'在'木'上面是'果'"
    }
]

export default chineseCharRiddles
import { Riddle } from './types'
// 体育健康类灯谜 (60条)
const sportsHealthRiddles: Riddle[] = [
    {
        id: 1001,
        question: "奥运会起源于哪个国家？",
        answer: "C",
        options: {
            A: "罗马",
            B: "埃及",
            C: "希腊",
            D: "英国"
        },
        hint: "古代奥林匹克",
        difficulty: 1,
        category: "体育健康"
    },
    {
        id: 1002,
        question: "篮球运动起源于哪个国家？",
        answer: "D",
        options: {
            A: "英国",
            B: "法国",
            C: "德国",
            D: "美国"
        },
        hint: "1891年发明",
        difficulty: 2,
        category: "体育健康"
    },
    {
        id: 1003,
        question: "人体最大的器官是？",
        answer: "A",
        options: {
            A: "皮肤",
            B: "肝脏",
            C: "肺",
            D: "心脏"
        },
        hint: "覆盖全身",
        difficulty: 2,
        category: "体育健康"
    },
    {
        id: 1004,
        question: "正常成年人有多少颗牙齿？",
        answer: "B",
        options: {
            A: "28颗",
            B: "32颗",
            C: "30颗",
            D: "36颗"
        },
        hint: "包括智齿",
        difficulty: 2,
        category: "体育健康"
    },
    {
        id: 1005,
        question: "足球比赛中，每队上场球员人数是？",
        answer: "A",
        options: {
            A: "11人",
            B: "10人",
            C: "12人",
            D: "9人"
        },
        hint: "包括守门员",
        difficulty: 1,
        category: "体育健康",
        explanation: "足球比赛中每队上场球员为11人，包括1名守门员和10名场上球员"
    },
    {
        id: 1006,
        question: "下列哪种不是球类运动？",
        answer: "D",
        options: {
            A: "排球",
            B: "网球",
            C: "乒乓球",
            D: "击剑"
        },
        hint: "持器械对抗",
        difficulty: 1,
        category: "体育健康",
        explanation: "击剑是持器械对抗的运动，不是球类运动"
    },
    {
        id: 1007,
        question: "马拉松比赛的距离是多少公里？",
        answer: "B",
        options: {
            A: "40公里",
            B: "42.195公里",
            C: "45公里",
            D: "38公里"
        },
        hint: "约42公里",
        difficulty: 1,
        category: "体育健康",
        explanation: "马拉松标准距离为42.195公里"
    },
    {
        id: 1008,
        question: "下列哪种维生素有助于预防坏血病？",
        answer: "C",
        options: {
            A: "维生素A",
            B: "维生素D",
            C: "维生素C",
            D: "维生素B"
        },
        hint: "缺乏会导致牙龈出血",
        difficulty: 2,
        category: "体育健康",
        explanation: "维生素C（抗坏血酸）缺乏会导致坏血病"
    },
    {
        id: 1009,
        question: "田径比赛中，短跑不包括哪个项目？",
        answer: "D",
        options: {
            A: "100米",
            B: "200米",
            C: "400米",
            D: "800米"
        },
        hint: "中长跑项目",
        difficulty: 2,
        category: "体育健康",
        explanation: "800米属于中长跑项目，短跑一般指400米及以下的距离"
    },
    {
        id: 1010,
        question: "人体最大的消化腺是？",
        answer: "A",
        options: {
            A: "肝脏",
            B: "胰腺",
            C: "胃",
            D: "小肠"
        },
        hint: "分泌胆汁",
        difficulty: 2,
        category: "体育健康",
        explanation: "肝脏是人体最大的消化腺，也是最大的内脏器官"
    },
    {
        id: 1011,
        question: "现代奥运会每几年举办一次？",
        answer: "B",
        options: {
            A: "2年",
            B: "4年",
            C: "3年",
            D: "5年"
        },
        hint: "夏季奥运会",
        difficulty: 1,
        category: "体育健康",
        explanation: "现代夏季奥运会每4年举办一次"
    },
    {
        id: 1012,
        question: "下列哪种不是人体必需的营养素？",
        answer: "C",
        options: {
            A: "蛋白质",
            B: "脂肪",
            C: "酒精",
            D: "碳水化合物"
        },
        hint: "对人体有害",
        difficulty: 1,
        category: "体育健康",
        explanation: "酒精不是人体必需的营养素，过量有害健康"
    },
    {
        id: 1013,
        question: "篮球比赛中，三分线的距离大约是？",
        answer: "D",
        options: {
            A: "5米",
            B: "6米",
            C: "6.5米",
            D: "6.75米"
        },
        hint: "国际标准",
        difficulty: 2,
        category: "体育健康",
        explanation: "国际篮联标准三分线距离为6.75米"
    },
    {
        id: 1014,
        question: "人体有多少对肋骨？",
        answer: "A",
        options: {
            A: "12对",
            B: "10对",
            C: "11对",
            D: "13对"
        },
        hint: "保护胸腔器官",
        difficulty: 2,
        category: "体育健康",
        explanation: "正常人体有12对肋骨"
    },
    {
        id: 1015,
        question: "游泳比赛中不包括哪个泳姿？",
        answer: "B",
        options: {
            A: "自由泳",
            B: "狗刨式",
            C: "蛙泳",
            D: "蝶泳"
        },
        hint: "非正式比赛泳姿",
        difficulty: 1,
        category: "体育健康",
        explanation: "狗刨式不是正式比赛的泳姿"
    },
    {
        id: 1016,
        question: "缺乏哪种矿物质会导致贫血？",
        answer: "C",
        options: {
            A: "钙",
            B: "锌",
            C: "铁",
            D: "碘"
        },
        hint: "血红蛋白的组成元素",
        difficulty: 2,
        category: "体育健康",
        explanation: "铁是血红蛋白的重要成分，缺铁会导致贫血"
    },
    {
        id: 1017,
        question: "乒乓球起源于哪个国家？",
        answer: "D",
        options: {
            A: "中国",
            B: "日本",
            C: "韩国",
            D: "英国"
        },
        hint: "19世纪末",
        difficulty: 2,
        category: "体育健康",
        explanation: "乒乓球起源于19世纪末的英国"
    },
    {
        id: 1018,
        question: "人体最小的骨头在哪个部位？",
        answer: "A",
        options: {
            A: "耳朵",
            B: "手指",
            C: "脚趾",
            D: "鼻子"
        },
        hint: "听小骨",
        difficulty: 2,
        category: "体育健康",
        explanation: "人体最小的骨头是耳朵里的镫骨，长约3-4毫米"
    },
    {
        id: 1019,
        question: "下列哪种不是田径田赛项目？",
        answer: "B",
        options: {
            A: "跳高",
            B: "跨栏",
            C: "铅球",
            D: "标枪"
        },
        hint: "径赛项目",
        difficulty: 2,
        category: "体育健康",
        explanation: "跨栏属于径赛项目，田赛主要指跳跃和投掷项目"
    },
    {
        id: 1020,
        question: "人体正常心跳每分钟大约多少次？",
        answer: "C",
        options: {
            A: "40-60次",
            B: "60-80次",
            C: "60-100次",
            D: "100-120次"
        },
        hint: "安静状态",
        difficulty: 1,
        category: "体育健康",
        explanation: "成年人安静状态下正常心率为60-100次/分钟"
    },
    {
        id: 1021,
        question: "羽毛球比赛每局多少分？",
        answer: "D",
        options: {
            A: "15分",
            B: "20分",
            C: "25分",
            D: "21分"
        },
        hint: "现行规则",
        difficulty: 2,
        category: "体育健康",
        explanation: "羽毛球比赛现行规则每局21分制"
    },
    {
        id: 1022,
        question: "下列哪种不是人体消化器官？",
        answer: "A",
        options: {
            A: "肺",
            B: "胃",
            C: "小肠",
            D: "大肠"
        },
        hint: "呼吸器官",
        difficulty: 1,
        category: "体育健康",
        explanation: "肺属于呼吸系统，不是消化器官"
    },
    {
        id: 1023,
        question: "体操比赛中不包括哪个项目？",
        answer: "B",
        options: {
            A: "跳马",
            B: "举重",
            C: "平衡木",
            D: "单杠"
        },
        hint: "力量项目",
        difficulty: 1,
        category: "体育健康",
        explanation: "举重是力量项目，不是体操项目"
    },
    {
        id: 1024,
        question: "人体最大的关节是？",
        answer: "C",
        options: {
            A: "肩关节",
            B: "肘关节",
            C: "膝关节",
            D: "髋关节"
        },
        hint: "腿部关节",
        difficulty: 2,
        category: "体育健康",
        explanation: "膝关节是人体最大、最复杂的关节"
    },
    {
        id: 1025,
        question: "网球比赛中，'love'表示多少分？",
        answer: "D",
        options: {
            A: "1分",
            B: "2分",
            C: "3分",
            D: "0分"
        },
        hint: "法语词源",
        difficulty: 2,
        category: "体育健康",
        explanation: "网球比赛中'love'表示0分，源于法语'l'oeuf'（蛋）"
    },
    {
        id: 1026,
        question: "下列哪种维生素有助于钙的吸收？",
        answer: "A",
        options: {
            A: "维生素D",
            B: "维生素A",
            C: "维生素C",
            D: "维生素B"
        },
        hint: "阳光维生素",
        difficulty: 2,
        category: "体育健康",
        explanation: "维生素D促进钙的吸收，有助于骨骼健康"
    },
    {
        id: 1027,
        question: "排球比赛中每队最多可以触球几次？",
        answer: "B",
        options: {
            A: "2次",
            B: "3次",
            C: "4次",
            D: "5次"
        },
        hint: "不包括拦网",
        difficulty: 1,
        category: "体育健康",
        explanation: "排球比赛中每队最多可以触球3次（拦网不算在内）"
    },
    {
        id: 1028,
        question: "人体有多少块骨骼？",
        answer: "C",
        options: {
            A: "186块",
            B: "200块",
            C: "206块",
            D: "210块"
        },
        hint: "成人数量",
        difficulty: 2,
        category: "体育健康",
        explanation: "成人骨骼共206块"
    },
    {
        id: 1029,
        question: "高尔夫比赛中，标准杆数通常是？",
        answer: "D",
        options: {
            A: "68杆",
            B: "70杆",
            C: "71杆",
            D: "72杆"
        },
        hint: "18洞",
        difficulty: 3,
        category: "体育健康",
        explanation: "高尔夫18洞标准杆通常是72杆"
    },
    {
        id: 1030,
        question: "下列哪种不是人体免疫器官？",
        answer: "A",
        options: {
            A: "肾脏",
            B: "脾脏",
            C: "淋巴结",
            D: "胸腺"
        },
        hint: "泌尿器官",
        difficulty: 2,
        category: "体育健康",
        explanation: "肾脏是泌尿器官，不是免疫器官"
    },
    {
        id: 1031,
        question: "乒乓球比赛中，每局多少分？",
        answer: "B",
        options: {
            A: "15分",
            B: "11分",
            C: "21分",
            D: "25分"
        },
        hint: "现行规则",
        difficulty: 1,
        category: "体育健康",
        explanation: "乒乓球比赛现行规则每局11分制"
    },
    {
        id: 1032,
        question: "人体最大的肌肉是？",
        answer: "C",
        options: {
            A: "胸肌",
            B: "背阔肌",
            C: "臀大肌",
            D: "股四头肌"
        },
        hint: "臀部肌肉",
        difficulty: 2,
        category: "体育健康",
        explanation: "臀大肌是人体最大、最厚的肌肉"
    },
    {
        id: 1033,
        question: "棒球比赛中，每队上场球员人数是？",
        answer: "D",
        options: {
            A: "8人",
            B: "9人",
            C: "10人",
            D: "9人"
        },
        hint: "防守时",
        difficulty: 2,
        category: "体育健康",
        explanation: "棒球比赛每队上场球员为9人"
    },
    {
        id: 1034,
        question: "下列哪种疾病不是传染病？",
        answer: "A",
        options: {
            A: "糖尿病",
            B: "流感",
            C: "肺结核",
            D: "艾滋病"
        },
        hint: "代谢性疾病",
        difficulty: 2,
        category: "体育健康",
        explanation: "糖尿病是代谢性疾病，不是传染病"
    },
    {
        id: 1035,
        question: "跳水比赛中，跳台高度不包括？",
        answer: "B",
        options: {
            A: "5米",
            B: "15米",
            C: "10米",
            D: "7.5米"
        },
        hint: "常见高度",
        difficulty: 2,
        category: "体育健康",
        explanation: "跳水比赛中常见的跳台高度是10米、7.5米、5米等"
    },
    {
        id: 1036,
        question: "人体最重要的解毒器官是？",
        answer: "C",
        options: {
            A: "肾脏",
            B: "肺",
            C: "肝脏",
            D: "皮肤"
        },
        hint: "最大的内脏器官",
        difficulty: 2,
        category: "体育健康",
        explanation: "肝脏是人体最重要的解毒器官"
    },
    {
        id: 1037,
        question: "田径十项全能不包括哪个项目？",
        answer: "D",
        options: {
            A: "100米",
            B: "跳高",
            C: "标枪",
            D: "马拉松"
        },
        hint: "耐力项目",
        difficulty: 2,
        category: "体育健康",
        explanation: "马拉松是单独的比赛项目，不包括在十项全能中"
    },
    {
        id: 1038,
        question: "正常成年人每天需要多少小时的睡眠？",
        answer: "A",
        options: {
            A: "7-9小时",
            B: "5-6小时",
            C: "9-10小时",
            D: "10-12小时"
        },
        hint: "健康推荐",
        difficulty: 1,
        category: "体育健康",
        explanation: "正常成年人每天需要7-9小时的睡眠"
    },
    {
        id: 1039,
        question: "拳击比赛中，一个回合几分钟？",
        answer: "B",
        options: {
            A: "2分钟",
            B: "3分钟",
            C: "4分钟",
            D: "5分钟"
        },
        hint: "职业拳击",
        difficulty: 2,
        category: "体育健康",
        explanation: "职业拳击比赛每个回合3分钟"
    },
    {
        id: 1040,
        question: "下列哪种不是人体必需的氨基酸？",
        answer: "C",
        options: {
            A: "赖氨酸",
            B: "色氨酸",
            C: "丙氨酸",
            D: "苯丙氨酸"
        },
        hint: "人体可以合成",
        difficulty: 3,
        category: "体育健康",
        explanation: "丙氨酸是非必需氨基酸，人体可以合成"
    },
    {
        id: 1041,
        question: "冰壶运动起源于哪个国家？",
        answer: "D",
        options: {
            A: "加拿大",
            B: "美国",
            C: "挪威",
            D: "苏格兰"
        },
        hint: "16世纪",
        difficulty: 3,
        category: "体育健康",
        explanation: "冰壶运动起源于16世纪的苏格兰"
    },
    {
        id: 1042,
        question: "人体最大的内分泌腺是？",
        answer: "A",
        options: {
            A: "甲状腺",
            B: "胰腺",
            C: "肾上腺",
            D: "垂体"
        },
        hint: "颈部",
        difficulty: 2,
        category: "体育健康",
        explanation: "甲状腺是人体最大的内分泌腺"
    },
    {
        id: 1043,
        question: "游泳比赛中，个人混合泳的顺序是？",
        answer: "B",
        options: {
            A: "蝶泳-仰泳-蛙泳-自由泳",
            B: "蝶泳-仰泳-蛙泳-自由泳",
            C: "仰泳-蝶泳-蛙泳-自由泳",
            D: "蛙泳-仰泳-蝶泳-自由泳"
        },
        hint: "蝶泳开始",
        difficulty: 2,
        category: "体育健康",
        explanation: "个人混合泳顺序是蝶泳、仰泳、蛙泳、自由泳"
    },
    {
        id: 1044,
        question: "正常血压的范围大约是？",
        answer: "C",
        options: {
            A: "80/120 mmHg",
            B: "90/140 mmHg",
            C: "120/80 mmHg",
            D: "140/90 mmHg"
        },
        hint: "收缩压/舒张压",
        difficulty: 2,
        category: "体育健康",
        explanation: "正常血压约为120/80 mmHg"
    },
    {
        id: 1045,
        question: "滑雪运动中，高山滑雪不包括？",
        answer: "D",
        options: {
            A: "滑降",
            B: "回转",
            C: "大回转",
            D: "越野滑雪"
        },
        hint: "滑雪分类",
        difficulty: 2,
        category: "体育健康",
        explanation: "越野滑雪是北欧滑雪项目，不是高山滑雪"
    },
    {
        id: 1046,
        question: "人体最重要的能量来源是？",
        answer: "A",
        options: {
            A: "碳水化合物",
            B: "蛋白质",
            C: "脂肪",
            D: "维生素"
        },
        hint: "主要供能物质",
        difficulty: 2,
        category: "体育健康",
        explanation: "碳水化合物是人体最重要的能量来源"
    },
    {
        id: 1047,
        question: "击剑比赛中不包括哪种剑？",
        answer: "B",
        options: {
            A: "花剑",
            B: "长剑",
            C: "重剑",
            D: "佩剑"
        },
        hint: "现代击剑",
        difficulty: 2,
        category: "体育健康",
        explanation: "现代击剑比赛使用花剑、重剑和佩剑"
    },
    {
        id: 1048,
        question: "人体有多少块肌肉？",
        answer: "C",
        options: {
            A: "400多块",
            B: "500多块",
            C: "600多块",
            D: "700多块"
        },
        hint: "约600多块",
        difficulty: 2,
        category: "体育健康",
        explanation: "人体有600多块肌肉"
    },
    {
        id: 1049,
        question: "举重比赛中，'抓举'和'挺举'的区别主要在于？",
        answer: "D",
        options: {
            A: "重量不同",
            B: "次数不同",
            C: "姿势不同",
            D: "技术动作不同"
        },
        hint: "一次性动作",
        difficulty: 2,
        category: "体育健康",
        explanation: "抓举是一次性将杠铃举过头顶，挺举是先提至肩部再推举"
    },
    {
        id: 1050,
        question: "下列哪种不是预防近视的方法？",
        answer: "A",
        options: {
            A: "多看电视",
            B: "保持正确读写姿势",
            C: "适当户外活动",
            D: "控制用眼时间"
        },
        hint: "对眼睛有害",
        difficulty: 1,
        category: "体育健康",
        explanation: "多看电视会增加眼睛负担，不利于预防近视"
    },
    {
        id: 1051,
        question: "柔道比赛中，'一本'表示什么？",
        answer: "B",
        options: {
            A: "平局",
            B: "绝对胜利",
            C: "犯规",
            D: "警告"
        },
        hint: "最高得分",
        difficulty: 2,
        category: "体育健康",
        explanation: "柔道比赛中'一本'表示绝对胜利，比赛立即结束"
    },
    {
        id: 1052,
        question: "人体每天需要多少毫升水？",
        answer: "C",
        options: {
            A: "500ml",
            B: "1000ml",
            C: "1500-2000ml",
            D: "3000ml以上"
        },
        hint: "正常成年人",
        difficulty: 2,
        category: "体育健康",
        explanation: "正常成年人每天需要1500-2000毫升水"
    },
    {
        id: 1053,
        question: "花样滑冰比赛中，不包括哪个项目？",
        answer: "D",
        options: {
            A: "男子单人滑",
            B: "女子单人滑",
            C: "双人滑",
            D: "冰上舞蹈团体"
        },
        hint: "正式比赛项目",
        difficulty: 2,
        category: "体育健康",
        explanation: "花样滑冰正式比赛项目包括男单、女单、双人滑和冰舞"
    },
    {
        id: 1054,
        question: "缺乏哪种维生素会导致夜盲症？",
        answer: "A",
        options: {
            A: "维生素A",
            B: "维生素B",
            C: "维生素C",
            D: "维生素D"
        },
        hint: "影响视力",
        difficulty: 2,
        category: "体育健康",
        explanation: "维生素A缺乏会导致夜盲症和干眼症"
    },
    {
        id: 1055,
        question: "射箭比赛中，靶心是什么颜色？",
        answer: "B",
        options: {
            A: "红色",
            B: "黄色",
            C: "蓝色",
            D: "白色"
        },
        hint: "最高分区域",
        difficulty: 2,
        category: "体育健康",
        explanation: "射箭靶心是黄色，为10分区域"
    },
    {
        id: 1056,
        question: "人体最重要的造血器官是？",
        answer: "C",
        options: {
            A: "肝脏",
            B: "脾脏",
            C: "骨髓",
            D: "淋巴结"
        },
        hint: "骨骼内部",
        difficulty: 2,
        category: "体育健康",
        explanation: "骨髓是人体最重要的造血器官"
    },
    {
        id: 1057,
        question: "跆拳道比赛中，击打哪个部位得分最高？",
        answer: "D",
        options: {
            A: "手臂",
            B: "腿部",
            C: "躯干",
            D: "头部"
        },
        hint: "难度较大",
        difficulty: 2,
        category: "体育健康",
        explanation: "跆拳道比赛中击打头部得分最高"
    },
    {
        id: 1058,
        question: "正常成年人的肺活量大约是？",
        answer: "A",
        options: {
            A: "3000-4000毫升",
            B: "2000-3000毫升",
            C: "4000-5000毫升",
            D: "5000毫升以上"
        },
        hint: "男性平均值",
        difficulty: 2,
        category: "体育健康",
        explanation: "正常成年男性肺活量约3500毫升，女性约2500毫升"
    },
    {
        id: 1059,
        question: "赛艇比赛中，不包括哪种艇？",
        answer: "B",
        options: {
            A: "单人双桨",
            B: "三人艇",
            C: "双人双桨",
            D: "八人单桨"
        },
        hint: "常见类型",
        difficulty: 3,
        category: "体育健康",
        explanation: "赛艇比赛常见的有单人、双人、四人和八人艇"
    },
    {
        id: 1060,
        question: "下列哪种不是健康的生活方式？",
        answer: "C",
        options: {
            A: "均衡饮食",
            B: "适量运动",
            C: "熬夜工作",
            D: "戒烟限酒"
        },
        hint: "影响健康",
        difficulty: 1,
        category: "体育健康",
        explanation: "熬夜工作会损害健康，不是健康的生活方式"
    },
]

export default sportsHealthRiddles
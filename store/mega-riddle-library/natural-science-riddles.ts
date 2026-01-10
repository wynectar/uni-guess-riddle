import { Riddle } from './types'
// 自然科学类灯谜 (100条)
const naturalScienceRiddles: Riddle[] = [
    {
        id: 601,
        question: "水的化学式是？",
        answer: "A",
        options: {
            A: "H₂O",
            B: "CO₂",
            C: "O₂",
            D: "H₂"
        },
        hint: "两个氢一个氧",
        difficulty: 1,
        category: "自然科学"
    },
    {
        id: 602,
        question: "光合作用的产物不包括？",
        answer: "D",
        options: {
            A: "氧气",
            B: "葡萄糖",
            C: "水",
            D: "二氧化碳"
        },
        hint: "光合作用需要二氧化碳",
        difficulty: 2,
        category: "自然科学"
    },
    {
        id: 603,
        question: "声音在哪种介质中传播最快？",
        answer: "C",
        options: {
            A: "空气",
            B: "水",
            C: "固体",
            D: "真空"
        },
        hint: "分子排列最紧密",
        difficulty: 2,
        category: "自然科学"
    },
    {
        id: 604,
        question: "人体的正常体温大约是？",
        answer: "B",
        options: {
            A: "35℃",
            B: "37℃",
            C: "38℃",
            D: "39℃"
        },
        hint: "摄氏温度",
        difficulty: 1,
        category: "自然科学"
    },
    {
        id: 605,
        question: "光的传播速度是？",
        answer: "C",
        options: {
            A: "3×10⁵米/秒",
            B: "3×10⁷米/秒",
            C: "3×10⁸米/秒",
            D: "3×10⁹米/秒"
        },
        hint: "约每秒30万公里",
        difficulty: 2,
        category: "自然科学"
    },
    {
        id: 606,
        question: "地球的自转方向是？",
        answer: "A",
        options: {
            A: "自西向东",
            B: "自东向西",
            C: "自南向北",
            D: "自北向南"
        },
        hint: "太阳东升西落",
        difficulty: 1,
        category: "自然科学",
        explanation: "地球绕地轴自西向东自转，导致我们看到太阳东升西落"
    },
    {
        id: 607,
        question: "下列哪种气体占大气比例最大？",
        answer: "B",
        options: {
            A: "氧气",
            B: "氮气",
            C: "二氧化碳",
            D: "氢气"
        },
        hint: "约占78%",
        difficulty: 1,
        category: "自然科学",
        explanation: "氮气约占大气体积的78%，氧气约占21%"
    },
    {
        id: 608,
        question: "物质的三种基本状态不包括？",
        answer: "D",
        options: {
            A: "固态",
            B: "液态",
            C: "气态",
            D: "等离子态"
        },
        hint: "基础状态",
        difficulty: 1,
        category: "自然科学",
        explanation: "物质的基本三态是固态、液态、气态，等离子态是物质的第四态"
    },
    {
        id: 609,
        question: "植物进行光合作用需要哪种光？",
        answer: "C",
        options: {
            A: "红光",
            B: "蓝光",
            C: "可见光",
            D: "紫外线"
        },
        hint: "叶绿素吸收特定波长",
        difficulty: 2,
        category: "自然科学",
        explanation: "植物主要吸收红蓝光进行光合作用，但需要可见光范围内的光"
    },
    {
        id: 610,
        question: "下列哪个不是力的三要素？",
        answer: "D",
        options: {
            A: "大小",
            B: "方向",
            C: "作用点",
            D: "时间"
        },
        hint: "描述力特征的三个要素",
        difficulty: 1,
        category: "自然科学",
        explanation: "力的三要素是大小、方向和作用点，时间不是力的要素"
    },
    {
        id: 611,
        question: "电流的单位是？",
        answer: "A",
        options: {
            A: "安培",
            B: "伏特",
            C: "欧姆",
            D: "瓦特"
        },
        hint: "简称'安'",
        difficulty: 1,
        category: "自然科学",
        explanation: "电流的国际单位是安培，符号A"
    },
    {
        id: 612,
        question: "下列哪种动物是哺乳动物？",
        answer: "B",
        options: {
            A: "企鹅",
            B: "鲸鱼",
            C: "蛇",
            D: "青蛙"
        },
        hint: "海洋中的哺乳动物",
        difficulty: 1,
        category: "自然科学",
        explanation: "鲸鱼是哺乳动物，用肺呼吸，胎生，哺乳"
    },
    {
        id: 613,
        question: "地球的天然卫星是？",
        answer: "C",
        options: {
            A: "火星",
            B: "金星",
            C: "月球",
            D: "太阳"
        },
        hint: "晚上能看到",
        difficulty: 1,
        category: "自然科学",
        explanation: "月球是地球唯一的天然卫星"
    },
    {
        id: 614,
        question: "下列哪个不是金属的通性？",
        answer: "D",
        options: {
            A: "导电性",
            B: "导热性",
            C: "延展性",
            D: "透明性"
        },
        hint: "金属通常不透明",
        difficulty: 1,
        category: "自然科学",
        explanation: "金属一般具有金属光泽、导电性、导热性和延展性，但不透明"
    },
    {
        id: 615,
        question: "DNA的全称是？",
        answer: "A",
        options: {
            A: "脱氧核糖核酸",
            B: "核糖核酸",
            C: "脱氧核糖核苷酸",
            D: "核糖核苷酸"
        },
        hint: "遗传物质",
        difficulty: 2,
        category: "自然科学",
        explanation: "DNA是DeoxyriboNucleic Acid的缩写，中文名脱氧核糖核酸"
    },
    {
        id: 616,
        question: "下列哪个不是化学变化？",
        answer: "D",
        options: {
            A: "铁生锈",
            B: "食物腐败",
            C: "木材燃烧",
            D: "水结冰"
        },
        hint: "物理状态变化",
        difficulty: 1,
        category: "自然科学",
        explanation: "水结冰是物理变化，分子结构没有改变"
    },
    {
        id: 617,
        question: "人类有多少对染色体？",
        answer: "B",
        options: {
            A: "22对",
            B: "23对",
            C: "24对",
            D: "25对"
        },
        hint: "正常体细胞",
        difficulty: 2,
        category: "自然科学",
        explanation: "正常人体细胞有23对染色体，包括22对常染色体和1对性染色体"
    },
    {
        id: 618,
        question: "下列哪个不是可再生能源？",
        answer: "C",
        options: {
            A: "太阳能",
            B: "风能",
            C: "煤炭",
            D: "水能"
        },
        hint: "化石燃料",
        difficulty: 1,
        category: "自然科学",
        explanation: "煤炭是不可再生能源，需要数百万年才能形成"
    },
    {
        id: 619,
        question: "温度的单位是？",
        answer: "A",
        options: {
            A: "摄氏度",
            B: "毫升",
            C: "千克",
            D: "米"
        },
        hint: "温标",
        difficulty: 1,
        category: "自然科学",
        explanation: "温度的国际单位是开尔文，但常用单位是摄氏度"
    },
    {
        id: 620,
        question: "下列哪个不是脊椎动物？",
        answer: "D",
        options: {
            A: "鱼类",
            B: "鸟类",
            C: "哺乳类",
            D: "昆虫"
        },
        hint: "无脊椎动物",
        difficulty: 1,
        category: "自然科学",
        explanation: "昆虫是无脊椎动物，属于节肢动物门"
    },
    {
        id: 621,
        question: "酸雨的pH值通常小于？",
        answer: "B",
        options: {
            A: "6",
            B: "5.6",
            C: "7",
            D: "8"
        },
        hint: "略低于正常雨水",
        difficulty: 2,
        category: "自然科学",
        explanation: "正常雨水pH约5.6，酸雨pH小于5.6"
    },
    {
        id: 622,
        question: "下列哪个不是生物的基本特征？",
        answer: "D",
        options: {
            A: "新陈代谢",
            B: "生长发育",
            C: "繁殖后代",
            D: "永不变化"
        },
        hint: "生物会变化",
        difficulty: 1,
        category: "自然科学",
        explanation: "生物的基本特征包括新陈代谢、生长发育、繁殖、遗传变异等"
    },
    {
        id: 623,
        question: "地球内部结构由外到内依次是？",
        answer: "C",
        options: {
            A: "地幔、地核、地壳",
            B: "地核、地幔、地壳",
            C: "地壳、地幔、地核",
            D: "地壳、地核、地幔"
        },
        hint: "像煮鸡蛋",
        difficulty: 1,
        category: "自然科学",
        explanation: "地球内部结构从外到内依次是地壳、地幔、地核"
    },
    {
        id: 624,
        question: "下列哪种现象是光的折射？",
        answer: "A",
        options: {
            A: "筷子在水中看起来弯曲",
            B: "镜子成像",
            C: "影子形成",
            D: "小孔成像"
        },
        hint: "光在介质中偏折",
        difficulty: 2,
        category: "自然科学",
        explanation: "筷子在水中看起来弯曲是光从水进入空气时发生折射造成的"
    },
    {
        id: 625,
        question: "细胞的基本结构不包括？",
        answer: "D",
        options: {
            A: "细胞膜",
            B: "细胞质",
            C: "细胞核",
            D: "细胞壁"
        },
        hint: "动物细胞没有",
        difficulty: 1,
        category: "自然科学",
        explanation: "细胞的基本结构是细胞膜、细胞质和细胞核，细胞壁是植物细胞特有"
    },
    {
        id: 626,
        question: "下列哪个不是金属元素？",
        answer: "C",
        options: {
            A: "铁",
            B: "铜",
            C: "硫",
            D: "铝"
        },
        hint: "非金属元素",
        difficulty: 1,
        category: "自然科学",
        explanation: "硫是非金属元素，位于元素周期表第16族"
    },
    {
        id: 627,
        question: "月相变化周期大约是？",
        answer: "B",
        options: {
            A: "27天",
            B: "29.5天",
            C: "30天",
            D: "31天"
        },
        hint: "农历一个月",
        difficulty: 2,
        category: "自然科学",
        explanation: "月相变化周期（朔望月）平均为29.53天"
    },
    {
        id: 628,
        question: "下列哪个不是生态系统组成部分？",
        answer: "D",
        options: {
            A: "生产者",
            B: "消费者",
            C: "分解者",
            D: "破坏者"
        },
        hint: "生态功能角色",
        difficulty: 1,
        category: "自然科学",
        explanation: "生态系统包括生产者、消费者、分解者和非生物环境"
    },
    {
        id: 629,
        question: "水的密度在多少度时最大？",
        answer: "C",
        options: {
            A: "0℃",
            B: "10℃",
            C: "4℃",
            D: "100℃"
        },
        hint: "略高于冰点",
        difficulty: 2,
        category: "自然科学",
        explanation: "水在4℃时密度最大，为1g/cm³"
    },
    {
        id: 630,
        question: "下列哪个不是能量形式？",
        answer: "D",
        options: {
            A: "动能",
            B: "势能",
            C: "热能",
            D: "重力"
        },
        hint: "力不是能量",
        difficulty: 2,
        category: "自然科学",
        explanation: "重力是力，不是能量形式。能量形式包括动能、势能、热能、电能等"
    },
    {
        id: 631,
        question: "人体的消化系统不包括？",
        answer: "D",
        options: {
            A: "胃",
            B: "肠",
            C: "肝",
            D: "肺"
        },
        hint: "呼吸器官",
        difficulty: 1,
        category: "自然科学",
        explanation: "肺属于呼吸系统，不属于消化系统"
    },
    {
        id: 632,
        question: "下列哪个不是化学反应基本类型？",
        answer: "C",
        options: {
            A: "化合反应",
            B: "分解反应",
            C: "电离反应",
            D: "置换反应"
        },
        hint: "四大基本类型",
        difficulty: 2,
        category: "自然科学",
        explanation: "化学反应四大基本类型：化合、分解、置换、复分解"
    },
    {
        id: 633,
        question: "银河系属于哪种星系？",
        answer: "A",
        options: {
            A: "旋涡星系",
            B: "椭圆星系",
            C: "不规则星系",
            D: "棒旋星系"
        },
        hint: "有旋臂",
        difficulty: 2,
        category: "自然科学",
        explanation: "银河系是一个旋涡星系，有数条旋臂"
    },
    {
        id: 634,
        question: "下列哪个不是植物必需的营养元素？",
        answer: "D",
        options: {
            A: "氮",
            B: "磷",
            C: "钾",
            D: "钠"
        },
        hint: "主要元素",
        difficulty: 2,
        category: "自然科学",
        explanation: "植物必需的三大营养元素是氮、磷、钾，钠不是必需元素"
    },
    {
        id: 635,
        question: "声音不能在什么中传播？",
        answer: "C",
        options: {
            A: "空气",
            B: "水",
            C: "真空",
            D: "金属"
        },
        hint: "没有介质",
        difficulty: 1,
        category: "自然科学",
        explanation: "声音传播需要介质，真空中没有介质，声音不能传播"
    },
    {
        id: 636,
        question: "下列哪个不是光学仪器？",
        answer: "D",
        options: {
            A: "显微镜",
            B: "望远镜",
            C: "眼镜",
            D: "温度计"
        },
        hint: "测量温度",
        difficulty: 1,
        category: "自然科学",
        explanation: "温度计是测温仪器，不是光学仪器"
    },
    {
        id: 637,
        question: "人体的最大器官是？",
        answer: "B",
        options: {
            A: "肝脏",
            B: "皮肤",
            C: "肺",
            D: "大脑"
        },
        hint: "覆盖全身",
        difficulty: 1,
        category: "自然科学",
        explanation: "皮肤是人体最大的器官，面积约1.5-2平方米"
    },
    {
        id: 638,
        question: "下列哪个不是温室气体？",
        answer: "D",
        options: {
            A: "二氧化碳",
            B: "甲烷",
            C: "水蒸气",
            D: "氧气"
        },
        hint: "维持生命的气体",
        difficulty: 1,
        category: "自然科学",
        explanation: "温室气体包括二氧化碳、甲烷、水蒸气、臭氧等，氧气不是温室气体"
    },
    {
        id: 639,
        question: "地球的年龄大约是？",
        answer: "C",
        options: {
            A: "10亿年",
            B: "35亿年",
            C: "46亿年",
            D: "60亿年"
        },
        hint: "数十亿年",
        difficulty: 2,
        category: "自然科学",
        explanation: "地球形成于约46亿年前"
    },
    {
        id: 640,
        question: "下列哪个不是力学单位？",
        answer: "D",
        options: {
            A: "牛顿",
            B: "焦耳",
            C: "瓦特",
            D: "伏特"
        },
        hint: "电学单位",
        difficulty: 1,
        category: "自然科学",
        explanation: "伏特是电压单位，属于电学单位"
    },
    {
        id: 641,
        question: "植物的蒸腾作用主要通过哪个器官？",
        answer: "A",
        options: {
            A: "叶片",
            B: "根",
            C: "茎",
            D: "花"
        },
        hint: "有气孔",
        difficulty: 1,
        category: "自然科学",
        explanation: "蒸腾作用主要通过叶片的气孔进行"
    },
    {
        id: 642,
        question: "下列哪个不是动物分类等级？",
        answer: "D",
        options: {
            A: "界",
            B: "门",
            C: "纲",
            D: "类"
        },
        hint: "七个主要等级",
        difficulty: 1,
        category: "自然科学",
        explanation: "生物分类的七个主要等级：界、门、纲、目、科、属、种"
    },
    {
        id: 643,
        question: "地震震级每增加一级，能量增加约多少倍？",
        answer: "C",
        options: {
            A: "10倍",
            B: "20倍",
            C: "32倍",
            D: "100倍"
        },
        hint: "约30倍",
        difficulty: 2,
        category: "自然科学",
        explanation: "地震震级每增加一级，能量释放增加约32倍"
    },
    {
        id: 644,
        question: "下列哪个不是遗传病？",
        answer: "D",
        options: {
            A: "色盲",
            B: "血友病",
            C: "白化病",
            D: "感冒"
        },
        hint: "传染病",
        difficulty: 1,
        category: "自然科学",
        explanation: "感冒是传染病，不是遗传病"
    },
    {
        id: 645,
        question: "光的颜色由什么决定？",
        answer: "B",
        options: {
            A: "振幅",
            B: "波长",
            C: "频率",
            D: "速度"
        },
        hint: "光谱特性",
        difficulty: 2,
        category: "自然科学",
        explanation: "光的颜色由波长或频率决定，不同波长对应不同颜色"
    },
    {
        id: 646,
        question: "下列哪个不是矿物质？",
        answer: "D",
        options: {
            A: "钙",
            B: "铁",
            C: "锌",
            D: "维生素C"
        },
        hint: "有机化合物",
        difficulty: 1,
        category: "自然科学",
        explanation: "维生素C是有机化合物，不是矿物质"
    },
    {
        id: 647,
        question: "人体血液的pH值大约是多少？",
        answer: "A",
        options: {
            A: "7.35-7.45",
            B: "6.8-7.0",
            C: "7.8-8.0",
            D: "6.0-6.5"
        },
        hint: "弱碱性",
        difficulty: 2,
        category: "自然科学",
        explanation: "人体血液正常pH值为7.35-7.45，呈弱碱性"
    },
    {
        id: 648,
        question: "下列哪个不是物理变化？",
        answer: "C",
        options: {
            A: "水蒸发",
            B: "铁磁化",
            C: "煤燃烧",
            D: "糖溶解"
        },
        hint: "化学变化",
        difficulty: 1,
        category: "自然科学",
        explanation: "煤燃烧是化学变化，有新物质生成"
    },
    {
        id: 649,
        question: "地球公转周期是？",
        answer: "B",
        options: {
            A: "24小时",
            B: "365.25天",
            C: "27.3天",
            D: "29.5天"
        },
        hint: "一年时间",
        difficulty: 1,
        category: "自然科学",
        explanation: "地球绕太阳公转一周约365.25天，即一年"
    },
    {
        id: 650,
        question: "下列哪个不是昆虫的特征？",
        answer: "D",
        options: {
            A: "三对足",
            B: "两对翅",
            C: "身体分节",
            D: "有脊椎"
        },
        hint: "无脊椎动物",
        difficulty: 1,
        category: "自然科学",
        explanation: "昆虫是无脊椎动物，没有脊椎"
    },
    {
        id: 651,
        question: "下列哪种元素在地壳中含量最多？",
        answer: "A",
        options: {
            A: "氧",
            B: "硅",
            C: "铝",
            D: "铁"
        },
        hint: "约占一半",
        difficulty: 2,
        category: "自然科学",
        explanation: "氧是地壳中含量最多的元素，约占地壳总质量的46.6%"
    },
    {
        id: 652,
        question: "下列哪个不是力的单位？",
        answer: "C",
        options: {
            A: "牛顿",
            B: "达因",
            C: "焦耳",
            D: "千克力"
        },
        hint: "能量单位",
        difficulty: 2,
        category: "自然科学",
        explanation: "焦耳是能量单位，不是力的单位"
    },
    {
        id: 653,
        question: "植物细胞特有的结构是？",
        answer: "D",
        options: {
            A: "细胞核",
            B: "细胞膜",
            C: "线粒体",
            D: "叶绿体"
        },
        hint: "进行光合作用",
        difficulty: 1,
        category: "自然科学",
        explanation: "叶绿体是植物细胞特有的细胞器，动物细胞没有"
    },
    {
        id: 654,
        question: "下列哪个不是星座？",
        answer: "B",
        options: {
            A: "大熊座",
            B: "银河座",
            C: "猎户座",
            D: "天琴座"
        },
        hint: "不是星座名",
        difficulty: 1,
        category: "自然科学",
        explanation: "国际天文学联合会正式划分的88个星座中没有'银河座'"
    },
    {
        id: 655,
        question: "水的比热容是？",
        answer: "C",
        options: {
            A: "1 J/(g·℃)",
            B: "2.1 J/(g·℃)",
            C: "4.2 J/(g·℃)",
            D: "0.9 J/(g·℃)"
        },
        hint: "常见物质的较大值",
        difficulty: 3,
        category: "自然科学",
        explanation: "水的比热容为4.2×10³ J/(kg·℃) 或 4.2 J/(g·℃)"
    },
    {
        id: 656,
        question: "下列哪个不是电的良导体？",
        answer: "D",
        options: {
            A: "铜",
            B: "铝",
            C: "银",
            D: "橡胶"
        },
        hint: "绝缘材料",
        difficulty: 1,
        category: "自然科学",
        explanation: "橡胶是绝缘体，不导电"
    },
    {
        id: 657,
        question: "人的红细胞主要功能是？",
        answer: "A",
        options: {
            A: "运输氧气",
            B: "免疫防御",
            C: "凝血",
            D: "运输养分"
        },
        hint: "含有血红蛋白",
        difficulty: 1,
        category: "自然科学",
        explanation: "红细胞含有血红蛋白，主要功能是运输氧气"
    },
    {
        id: 658,
        question: "下列哪个不是牛顿运动定律？",
        answer: "D",
        options: {
            A: "惯性定律",
            B: "加速度定律",
            C: "作用力与反作用力定律",
            D: "万有引力定律"
        },
        hint: "三大运动定律",
        difficulty: 2,
        category: "自然科学",
        explanation: "牛顿三大运动定律不包括万有引力定律，万有引力是另一条定律"
    },
    {
        id: 659,
        question: "光合作用的化学方程式正确的是？",
        answer: "B",
        options: {
            A: "CO₂ + H₂O → 葡萄糖 + O₂",
            B: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
            C: "葡萄糖 + O₂ → CO₂ + H₂O",
            D: "CO₂ + H₂O → 淀粉 + O₂"
        },
        hint: "需要光照和叶绿素",
        difficulty: 3,
        category: "自然科学",
        explanation: "光合作用总反应式：6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂"
    },
    {
        id: 660,
        question: "下列哪个不是科学方法步骤？",
        answer: "D",
        options: {
            A: "观察",
            B: "提出假设",
            C: "实验验证",
            D: "主观判断"
        },
        hint: "需要客观证据",
        difficulty: 2,
        category: "自然科学",
        explanation: "科学方法强调客观证据，不是主观判断"
    },
    {
        id: 661,
        question: "下列哪个不是火山喷发物？",
        answer: "D",
        options: {
            A: "岩浆",
            B: "火山灰",
            C: "火山气体",
            D: "冰川"
        },
        hint: "火山产物",
        difficulty: 1,
        category: "自然科学",
        explanation: "冰川不是火山喷发物，是冰雪堆积形成的"
    },
    {
        id: 662,
        question: "下列哪种生物是生产者？",
        answer: "A",
        options: {
            A: "绿色植物",
            B: "草食动物",
            C: "肉食动物",
            D: "真菌"
        },
        hint: "能制造有机物",
        difficulty: 1,
        category: "自然科学",
        explanation: "绿色植物能通过光合作用制造有机物，是生产者"
    },
    {
        id: 663,
        question: "下列哪个不是天气要素？",
        answer: "D",
        options: {
            A: "温度",
            B: "湿度",
            C: "气压",
            D: "地震"
        },
        hint: "气象要素",
        difficulty: 1,
        category: "自然科学",
        explanation: "天气要素包括温度、湿度、气压、降水、风等，地震不是天气要素"
    },
    {
        id: 664,
        question: "下列哪个不是盐？",
        answer: "C",
        options: {
            A: "氯化钠",
            B: "碳酸钙",
            C: "葡萄糖",
            D: "硫酸铜"
        },
        hint: "有机物",
        difficulty: 2,
        category: "自然科学",
        explanation: "葡萄糖是有机物，不是盐类"
    },
    {
        id: 665,
        question: "人体最小的骨头在哪个部位？",
        answer: "B",
        options: {
            A: "手指",
            B: "耳朵",
            C: "脚趾",
            D: "鼻子"
        },
        hint: "听小骨",
        difficulty: 2,
        category: "自然科学",
        explanation: "人体最小的骨头是耳朵里的镫骨，长约3-4毫米"
    },
    {
        id: 666,
        question: "下列哪个不是电磁波？",
        answer: "D",
        options: {
            A: "无线电波",
            B: "可见光",
            C: "X射线",
            D: "声波"
        },
        hint: "机械波",
        difficulty: 1,
        category: "自然科学",
        explanation: "声波是机械波，不是电磁波"
    },
    {
        id: 667,
        question: "下列哪个不是细胞器？",
        answer: "D",
        options: {
            A: "线粒体",
            B: "叶绿体",
            C: "核糖体",
            D: "细胞核"
        },
        hint: "更大结构",
        difficulty: 2,
        category: "自然科学",
        explanation: "细胞核是真核细胞的核心结构，不是细胞器（广义上也可算）"
    },
    {
        id: 668,
        question: "下列哪个不是岩石类型？",
        answer: "D",
        options: {
            A: "岩浆岩",
            B: "沉积岩",
            C: "变质岩",
            D: "金属岩"
        },
        hint: "三大岩类",
        difficulty: 1,
        category: "自然科学",
        explanation: "岩石分为岩浆岩、沉积岩和变质岩三大类"
    },
    {
        id: 669,
        question: "下列哪个不是人体感觉器官？",
        answer: "D",
        options: {
            A: "眼",
            B: "耳",
            C: "皮肤",
            D: "心脏"
        },
        hint: "内脏器官",
        difficulty: 1,
        category: "自然科学",
        explanation: "心脏是循环器官，不是感觉器官"
    },
    {
        id: 670,
        question: "下列哪个不是能量守恒定律的例子？",
        answer: "D",
        options: {
            A: "永动机不可能",
            B: "摩擦生热",
            C: "光合作用",
            D: "创造能量"
        },
        hint: "违反基本定律",
        difficulty: 2,
        category: "自然科学",
        explanation: "能量既不能创造也不能消灭，只能转化或转移"
    },
    {
        id: 671,
        question: "下列哪个不是植物激素？",
        answer: "D",
        options: {
            A: "生长素",
            B: "赤霉素",
            C: "乙烯",
            D: "胰岛素"
        },
        hint: "动物激素",
        difficulty: 2,
        category: "自然科学",
        explanation: "胰岛素是动物激素，不是植物激素"
    },
    {
        id: 672,
        question: "下列哪个不是水循环环节？",
        answer: "D",
        options: {
            A: "蒸发",
            B: "降水",
            C: "径流",
            D: "光合作用"
        },
        hint: "水在大气、地表、地下的循环",
        difficulty: 1,
        category: "自然科学",
        explanation: "光合作用是生物过程，不是水循环环节"
    },
    {
        id: 673,
        question: "下列哪个不是动物行为？",
        answer: "D",
        options: {
            A: "觅食",
            B: "繁殖",
            C: "迁徙",
            D: "光合作用"
        },
        hint: "植物过程",
        difficulty: 1,
        category: "自然科学",
        explanation: "光合作用是植物特有的生理过程"
    },
    {
        id: 674,
        question: "下列哪个不是热传递方式？",
        answer: "D",
        options: {
            A: "传导",
            B: "对流",
            C: "辐射",
            D: "蒸发"
        },
        hint: "热量转移方式",
        difficulty: 1,
        category: "自然科学",
        explanation: "热传递的三种基本方式是传导、对流和辐射"
    },
    {
        id: 675,
        question: "下列哪个不是生物多样性层次？",
        answer: "D",
        options: {
            A: "遗传多样性",
            B: "物种多样性",
            C: "生态系统多样性",
            D: "个体多样性"
        },
        hint: "三个主要层次",
        difficulty: 2,
        category: "自然科学",
        explanation: "生物多样性包括遗传、物种和生态系统多样性三个层次"
    },
    {
        id: 676,
        question: "下列哪个不是地震波类型？",
        answer: "D",
        options: {
            A: "纵波",
            B: "横波",
            C: "面波",
            D: "声波"
        },
        hint: "地震产生的波",
        difficulty: 2,
        category: "自然科学",
        explanation: "地震波主要类型是纵波（P波）、横波（S波）和面波"
    },
    {
        id: 677,
        question: "下列哪个不是矿产资源？",
        answer: "D",
        options: {
            A: "煤炭",
            B: "石油",
            C: "铁矿",
            D: "森林"
        },
        hint: "可再生资源",
        difficulty: 1,
        category: "自然科学",
        explanation: "森林是可再生资源，不是矿产资源"
    },
    {
        id: 678,
        question: "下列哪个不是植物的营养器官？",
        answer: "D",
        options: {
            A: "根",
            B: "茎",
            C: "叶",
            D: "花"
        },
        hint: "繁殖器官",
        difficulty: 1,
        category: "自然科学",
        explanation: "植物的营养器官是根、茎、叶，花是繁殖器官"
    },
    {
        id: 679,
        question: "下列哪个不是能量单位？",
        answer: "D",
        options: {
            A: "焦耳",
            B: "卡路里",
            C: "千瓦时",
            D: "牛顿"
        },
        hint: "力的单位",
        difficulty: 1,
        category: "自然科学",
        explanation: "牛顿是力的单位，不是能量单位"
    },
    {
        id: 680,
        question: "下列哪个不是生态系统服务？",
        answer: "D",
        options: {
            A: "净化空气",
            B: "保持水土",
            C: "授粉",
            D: "污染环境"
        },
        hint: "对人类有益",
        difficulty: 2,
        category: "自然科学",
        explanation: "生态系统服务是对人类有益的自然过程"
    },
    {
        id: 681,
        question: "下列哪个不是化学元素周期表中的元素？",
        answer: "D",
        options: {
            A: "氢",
            B: "氧",
            C: "碳",
            D: "以太"
        },
        hint: "历史上的假想物质",
        difficulty: 2,
        category: "自然科学",
        explanation: "以太是历史上的假想物质，不是现代化学元素"
    },
    {
        id: 682,
        question: "下列哪个不是科学假说的特征？",
        answer: "D",
        options: {
            A: "可检验性",
            B: "解释性",
            C: "预测性",
            D: "绝对正确"
        },
        hint: "科学是发展的",
        difficulty: 2,
        category: "自然科学",
        explanation: "科学假说需要被验证，不一定是绝对正确的"
    },
    {
        id: 683,
        question: "下列哪个不是环境污染类型？",
        answer: "D",
        options: {
            A: "水污染",
            B: "空气污染",
            C: "土壤污染",
            D: "心灵污染"
        },
        hint: "物理环境",
        difficulty: 1,
        category: "自然科学",
        explanation: "环境污染主要针对物理环境"
    },
    {
        id: 684,
        question: "下列哪个不是植物传播种子的方式？",
        answer: "D",
        options: {
            A: "风力传播",
            B: "动物传播",
            C: "水力传播",
            D: "电话传播"
        },
        hint: "自然方式",
        difficulty: 1,
        category: "自然科学",
        explanation: "植物种子通过自然方式传播"
    },
    {
        id: 685,
        question: "下列哪个不是生物分类学之父？",
        answer: "D",
        options: {
            A: "林奈",
            B: "亚里士多德",
            C: "达尔文",
            D: "牛顿"
        },
        hint: "物理学家",
        difficulty: 2,
        category: "自然科学",
        explanation: "牛顿是物理学家，不是生物分类学家"
    },
    {
        id: 686,
        question: "下列哪个不是科学发现的特点？",
        answer: "D",
        options: {
            A: "可重复性",
            B: "客观性",
            C: "系统性",
            D: "主观性"
        },
        hint: "科学强调客观",
        difficulty: 2,
        category: "自然科学",
        explanation: "科学发现需要客观证据支持"
    },
    {
        id: 687,
        question: "下列哪个不是光合作用的条件？",
        answer: "D",
        options: {
            A: "光照",
            B: "二氧化碳",
            C: "水",
            D: "氧气"
        },
        hint: "光合作用产生氧气",
        difficulty: 1,
        category: "自然科学",
        explanation: "光合作用需要光照、二氧化碳和水，产生氧气"
    },
    {
        id: 688,
        question: "下列哪个不是常见酸？",
        answer: "D",
        options: {
            A: "盐酸",
            B: "硫酸",
            C: "醋酸",
            D: "食盐"
        },
        hint: "盐类",
        difficulty: 1,
        category: "自然科学",
        explanation: "食盐（氯化钠）是盐，不是酸"
    },
    {
        id: 689,
        question: "下列哪个不是动物适应环境的例子？",
        answer: "D",
        options: {
            A: "骆驼驼峰储水",
            B: "企鹅脂肪保暖",
            C: "变色龙变色",
            D: "植物向光生长"
        },
        hint: "植物行为",
        difficulty: 1,
        category: "自然科学",
        explanation: "植物向光生长是植物行为，不是动物适应"
    },
    {
        id: 690,
        question: "下列哪个不是生物学研究层次？",
        answer: "D",
        options: {
            A: "分子水平",
            B: "细胞水平",
            C: "个体水平",
            D: "宇宙水平"
        },
        hint: "生物尺度",
        difficulty: 1,
        category: "自然科学",
        explanation: "生物学研究主要在分子、细胞、组织、器官、个体、种群、群落、生态系统等层次"
    },
    {
        id: 691,
        question: "下列哪个不是化学键类型？",
        answer: "D",
        options: {
            A: "离子键",
            B: "共价键",
            C: "金属键",
            D: "磁力键"
        },
        hint: "基本化学键",
        difficulty: 2,
        category: "自然科学",
        explanation: "化学键主要类型是离子键、共价键和金属键"
    },
    {
        id: 692,
        question: "下列哪个不是科学态度？",
        answer: "D",
        options: {
            A: "好奇心",
            B: "严谨性",
            C: "批判性思维",
            D: "迷信"
        },
        hint: "非科学态度",
        difficulty: 1,
        category: "自然科学",
        explanation: "科学强调证据和理性，不是迷信"
    },
    {
        id: 693,
        question: "下列哪个不是生态系统中的生物因素？",
        answer: "D",
        options: {
            A: "植物",
            B: "动物",
            C: "微生物",
            D: "阳光"
        },
        hint: "非生物因素",
        difficulty: 1,
        category: "自然科学",
        explanation: "阳光是非生物因素，生物因素包括植物、动物、微生物"
    },
    {
        id: 694,
        question: "下列哪个不是天文学研究对象？",
        answer: "D",
        options: {
            A: "恒星",
            B: "行星",
            C: "星系",
            D: "原子"
        },
        hint: "微观世界",
        difficulty: 1,
        category: "自然科学",
        explanation: "原子是物理学和化学的研究对象，天文学研究天体"
    },
    {
        id: 695,
        question: "下列哪个不是物理量？",
        answer: "D",
        options: {
            A: "长度",
            B: "质量",
            C: "时间",
            D: "快乐"
        },
        hint: "可测量",
        difficulty: 1,
        category: "自然科学",
        explanation: "物理量是可测量的量，快乐是主观感受"
    },
    {
        id: 696,
        question: "下列哪个不是生物学中的'界'？",
        answer: "D",
        options: {
            A: "动物界",
            B: "植物界",
            C: "真菌界",
            D: "矿物界"
        },
        hint: "生物分类",
        difficulty: 2,
        category: "自然科学",
        explanation: "生物学分类中不包括矿物界，矿物是非生物"
    },
    {
        id: 697,
        question: "下列哪个不是水的特性？",
        answer: "D",
        options: {
            A: "高比热容",
            B: "反常膨胀",
            C: "良好溶剂",
            D: "易燃"
        },
        hint: "水能灭火",
        difficulty: 1,
        category: "自然科学",
        explanation: "水不可燃，能灭火"
    },
    {
        id: 698,
        question: "下列哪个不是科学研究步骤？",
        answer: "D",
        options: {
            A: "提出问题",
            B: "设计实验",
            C: "分析数据",
            D: "随意猜测"
        },
        hint: "需要系统方法",
        difficulty: 1,
        category: "自然科学",
        explanation: "科学研究需要系统的方法，不是随意猜测"
    },
    {
        id: 699,
        question: "下列哪个不是地球运动？",
        answer: "D",
        options: {
            A: "自转",
            B: "公转",
            C: "进动",
            D: "跳跃"
        },
        hint: "规则运动",
        difficulty: 1,
        category: "自然科学",
        explanation: "地球的主要运动是自转和公转"
    },
    {
        id: 700,
        question: "下列哪个不是科学家的工作？",
        answer: "D",
        options: {
            A: "观察现象",
            B: "提出理论",
            C: "验证假说",
            D: "编造数据"
        },
        hint: "科学伦理",
        difficulty: 2,
        category: "自然科学",
        explanation: "科学家需要遵守科学伦理，不能编造数据"
    },
]

export default naturalScienceRiddles
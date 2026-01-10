import { Riddle } from './types'
// 水果蔬菜类灯谜 (80条)
const fruitsVegetablesRiddles: Riddle[] = [
    {
        id: 501,
        question: "被称为'水果之王'的是？",
        answer: "C",
        options: {
            A: "苹果",
            B: "香蕉",
            C: "榴莲",
            D: "芒果"
        },
        hint: "有特殊气味",
        difficulty: 2,
        category: "水果蔬菜"
    },
    {
        id: 502,
        question: "哪种水果被称为'记忆之果'？",
        answer: "B",
        options: {
            A: "香蕉",
            B: "核桃",
            C: "蓝莓",
            D: "苹果"
        },
        hint: "形状像大脑",
        difficulty: 2,
        category: "水果蔬菜"
    },
    {
        id: 503,
        question: "西红柿属于哪一类？",
        answer: "D",
        options: {
            A: "水果",
            B: "蔬菜",
            C: "谷物",
            D: "果实类蔬菜"
        },
        hint: "既是水果也是蔬菜",
        difficulty: 2,
        category: "水果蔬菜"
    },
    {
        id: 504,
        question: "哪种蔬菜被称为'小人参'？",
        answer: "A",
        options: {
            A: "胡萝卜",
            B: "白萝卜",
            C: "山药",
            D: "土豆"
        },
        hint: "富含胡萝卜素",
        difficulty: 2,
        category: "水果蔬菜"
    },
    {
        id: 505,
        question: "香蕉是长在什么上的？",
        answer: "B",
        options: {
            A: "树",
            B: "草本植物",
            C: "灌木",
            D: "藤本植物"
        },
        hint: "香蕉树不是真正的树",
        difficulty: 3,
        category: "水果蔬菜"
    },
    {
        id: 506,
        question: "哪种水果被称为'果中皇后'？",
        answer: "B",
        options: {
            A: "苹果",
            B: "山竹",
            C: "荔枝",
            D: "草莓"
        },
        hint: "外壳紫红色，果肉洁白",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "山竹因其独特风味和营养丰富被称为'果中皇后'，常与'水果之王'榴莲搭配食用"
    },
    {
        id: 507,
        question: "土豆在植物学上属于哪一类？",
        answer: "C",
        options: {
            A: "根茎类",
            B: "叶菜类",
            C: "块茎类",
            D: "果实类"
        },
        hint: "可发芽繁殖",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "土豆是茄科植物的块茎，属于块茎类蔬菜"
    },
    {
        id: 508,
        question: "下列哪种水果的原产地是中国？",
        answer: "D",
        options: {
            A: "香蕉",
            B: "芒果",
            C: "木瓜",
            D: "猕猴桃"
        },
        hint: "又名奇异果",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "猕猴桃原产于中国，后传入新西兰并被培育改良"
    },
    {
        id: 509,
        question: "哪种蔬菜有'地下苹果'之称？",
        answer: "A",
        options: {
            A: "土豆",
            B: "红薯",
            C: "萝卜",
            D: "山药"
        },
        hint: "富含淀粉",
        difficulty: 1,
        category: "水果蔬菜",
        explanation: "土豆因营养丰富、可替代主食，被称为'地下苹果'"
    },
    {
        id: 510,
        question: "香蕉属于哪种类型的水果？",
        answer: "B",
        options: {
            A: "核果",
            B: "浆果",
            C: "仁果",
            D: "柑果"
        },
        hint: "植物学分类",
        difficulty: 3,
        category: "水果蔬菜",
        explanation: "在植物学上，香蕉属于浆果类，尽管它的外形不像传统浆果"
    },
    {
        id: 511,
        question: "哪种水果被称为'维生素C之王'？",
        answer: "C",
        options: {
            A: "橙子",
            B: "柠檬",
            C: "刺梨",
            D: "草莓"
        },
        hint: "野生果实",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "刺梨的维生素C含量极高，每100克含2000毫克以上"
    },
    {
        id: 512,
        question: "洋葱的辛辣味主要来自哪种物质？",
        answer: "D",
        options: {
            A: "辣椒素",
            B: "大蒜素",
            C: "柠檬酸",
            D: "硫化丙烯"
        },
        hint: "刺激眼睛流泪",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "洋葱切开时释放的硫化丙烯会刺激眼睛流泪"
    },
    {
        id: 513,
        question: "下列哪种不是柑橘类水果？",
        answer: "A",
        options: {
            A: "苹果",
            B: "橙子",
            C: "柚子",
            D: "柠檬"
        },
        hint: "完全不同的科属",
        difficulty: 1,
        category: "水果蔬菜",
        explanation: "苹果属于蔷薇科，柑橘类水果都属于芸香科"
    },
    {
        id: 514,
        question: "哪种蔬菜被称为'蔬菜皇冠'？",
        answer: "B",
        options: {
            A: "白菜",
            B: "西兰花",
            C: "菠菜",
            D: "生菜"
        },
        hint: "形状像花",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "西兰花营养全面丰富，被誉为'蔬菜皇冠'"
    },
    {
        id: 515,
        question: "草莓表面像'芝麻'的小颗粒实际上是？",
        answer: "C",
        options: {
            A: "种子",
            B: "花粉",
            C: "果实",
            D: "花萼"
        },
        hint: "真正的果实很小",
        difficulty: 3,
        category: "水果蔬菜",
        explanation: "草莓表面每个小颗粒都是一个单独的果实，我们吃的红色部分是花托"
    },
    {
        id: 516,
        question: "下列哪种蔬菜是十字花科植物？",
        answer: "D",
        options: {
            A: "西红柿",
            B: "黄瓜",
            C: "胡萝卜",
            D: "卷心菜"
        },
        hint: "花有四瓣",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "卷心菜属于十字花科，这个科的植物花朵通常有四个花瓣呈十字形"
    },
    {
        id: 517,
        question: "哪种水果通常被称为'热带果王'？",
        answer: "A",
        options: {
            A: "芒果",
            B: "菠萝",
            C: "椰子",
            D: "木瓜"
        },
        hint: "有独特的香味",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "芒果因其独特风味和丰富营养被称为'热带果王'"
    },
    {
        id: 518,
        question: "下列哪种蔬菜需要经过霜打后才更甜？",
        answer: "B",
        options: {
            A: "黄瓜",
            B: "白菜",
            C: "西红柿",
            D: "青椒"
        },
        hint: "冬季蔬菜",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "白菜经过霜打后，部分淀粉会转化为糖分，口感更甜"
    },
    {
        id: 519,
        question: "菠萝在吃之前为什么要用盐水泡？",
        answer: "C",
        options: {
            A: "消毒杀菌",
            B: "保持颜色",
            C: "分解蛋白酶",
            D: "增加甜味"
        },
        hint: "防止过敏反应",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "盐水可以分解菠萝中的菠萝蛋白酶，减少对口腔黏膜的刺激"
    },
    {
        id: 520,
        question: "哪种水果的英文名'apple'在历史上曾是所有水果的统称？",
        answer: "D",
        options: {
            A: "香蕉",
            B: "葡萄",
            C: "桃子",
            D: "苹果"
        },
        hint: "很常见的水果",
        difficulty: 3,
        category: "水果蔬菜",
        explanation: "在古代英语中，'apple'一词泛指所有水果，后来才特指苹果"
    },
    {
        id: 521,
        question: "下列哪种不是浆果类水果？",
        answer: "A",
        options: {
            A: "樱桃",
            B: "葡萄",
            C: "蓝莓",
            D: "猕猴桃"
        },
        hint: "有硬核",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "樱桃是核果，不是浆果。浆果的特点是果肉多汁，种子小而多"
    },
    {
        id: 522,
        question: "胡萝卜的橙色主要来自哪种物质？",
        answer: "B",
        options: {
            A: "叶绿素",
            B: "胡萝卜素",
            C: "花青素",
            D: "番茄红素"
        },
        hint: "可在体内转化为维生素A",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "胡萝卜的颜色主要来自β-胡萝卜素，是维生素A的前体"
    },
    {
        id: 523,
        question: "哪种水果被称为'智慧之果'？",
        answer: "C",
        options: {
            A: "葡萄",
            B: "桃子",
            C: "香蕉",
            D: "梨"
        },
        hint: "猴子爱吃",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "香蕉富含钾和维生素B6，有助于大脑发育和神经功能"
    },
    {
        id: 524,
        question: "下列哪种蔬菜是块根类？",
        answer: "D",
        options: {
            A: "生菜",
            B: "西兰花",
            C: "西红柿",
            D: "红薯"
        },
        hint: "长在地下",
        difficulty: 1,
        category: "水果蔬菜",
        explanation: "红薯属于块根类蔬菜，我们吃的是它膨大的根部"
    },
    {
        id: 525,
        question: "葡萄上的'白霜'是什么？",
        answer: "A",
        options: {
            A: "果粉",
            B: "农药",
            C: "灰尘",
            D: "霉菌"
        },
        hint: "自然形成的保护层",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "葡萄表面的白霜是天然形成的果粉，有保护作用，对人体无害"
    },
    {
        id: 526,
        question: "哪种水果的含铁量很高，有助于补血？",
        answer: "B",
        options: {
            A: "苹果",
            B: "樱桃",
            C: "香蕉",
            D: "橙子"
        },
        hint: "红色水果",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "樱桃含铁量较高，有助于血红蛋白合成"
    },
    {
        id: 527,
        question: "下列哪种不是瓜类蔬菜？",
        answer: "C",
        options: {
            A: "黄瓜",
            B: "冬瓜",
            C: "茄子",
            D: "南瓜"
        },
        hint: "茄科植物",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "茄子属于茄科，不是葫芦科的瓜类蔬菜"
    },
    {
        id: 528,
        question: "哪种水果被称为'百果之宗'？",
        answer: "D",
        options: {
            A: "桃子",
            B: "李子",
            C: "杏子",
            D: "梨"
        },
        hint: "汁多味甜",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "梨在中国古代被称为'百果之宗'，历史悠久，品种繁多"
    },
    {
        id: 529,
        question: "大蒜的抗菌作用主要来自哪种成分？",
        answer: "A",
        options: {
            A: "大蒜素",
            B: "硫化物",
            C: "维生素C",
            D: "胡萝卜素"
        },
        hint: "有特殊气味",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "大蒜素是大蒜的主要活性成分，具有很强的抗菌作用"
    },
    {
        id: 530,
        question: "下列哪种水果通常不是鲜食而是加工食用？",
        answer: "B",
        options: {
            A: "苹果",
            B: "山楂",
            C: "葡萄",
            D: "草莓"
        },
        hint: "很酸，多制成果脯",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "山楂因酸味较重，通常加工成冰糖葫芦、山楂片等食用"
    },
    {
        id: 531,
        question: "哪种蔬菜有'金笋'之称？",
        answer: "C",
        options: {
            A: "南瓜",
            B: "玉米",
            C: "胡萝卜",
            D: "红薯"
        },
        hint: "橙色根茎",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "胡萝卜因颜色金黄、形状似笋，被称为'金笋'"
    },
    {
        id: 532,
        question: "柿子不能和什么一起吃？",
        answer: "D",
        options: {
            A: "苹果",
            B: "香蕉",
            C: "梨",
            D: "螃蟹"
        },
        hint: "可能引起肠胃不适",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "柿子中的鞣酸与螃蟹中的蛋白质结合可能形成难以消化的物质"
    },
    {
        id: 533,
        question: "下列哪种水果成熟后不会继续变甜？",
        answer: "A",
        options: {
            A: "草莓",
            B: "香蕉",
            C: "猕猴桃",
            D: "芒果"
        },
        hint: "采摘后基本不变甜",
        difficulty: 3,
        category: "水果蔬菜",
        explanation: "草莓采摘后基本不会继续变甜，品质在采摘时已基本确定"
    },
    {
        id: 534,
        question: "哪种蔬菜是芹菜的'亲戚'？",
        answer: "B",
        options: {
            A: "生菜",
            B: "香菜",
            C: "菠菜",
            D: "油麦菜"
        },
        hint: "伞形科植物",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "香菜和芹菜都属于伞形科植物，有亲缘关系"
    },
    {
        id: 535,
        question: "西瓜的原产地是？",
        answer: "C",
        options: {
            A: "中国",
            B: "印度",
            C: "非洲",
            D: "南美洲"
        },
        hint: "热带地区",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "西瓜原产于非洲，后传入中亚、印度等地"
    },
    {
        id: 536,
        question: "哪种水果有'水果之王'和'水果皇后'两种称呼？",
        answer: "D",
        options: {
            A: "荔枝",
            B: "芒果",
            C: "榴莲",
            D: "山竹"
        },
        hint: "常与榴莲搭配食用",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "山竹既被称为'果中皇后'，也被一些地区称为'水果之王'"
    },
    {
        id: 537,
        question: "下列哪种不是豆类蔬菜？",
        answer: "A",
        options: {
            A: "土豆",
            B: "豌豆",
            C: "扁豆",
            D: "四季豆"
        },
        hint: "不是豆科植物",
        difficulty: 1,
        category: "水果蔬菜",
        explanation: "土豆是茄科植物，不是豆科植物"
    },
    {
        id: 538,
        question: "苹果切开后为什么会变色？",
        answer: "B",
        options: {
            A: "氧化反应",
            B: "酶促褐变",
            C: "脱水",
            D: "光照"
        },
        hint: "与空气接触有关",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "苹果中的酚类物质在多酚氧化酶作用下氧化形成褐色物质"
    },
    {
        id: 539,
        question: "哪种水果的维生素C含量最高？",
        answer: "C",
        options: {
            A: "橙子",
            B: "草莓",
            C: "鲜枣",
            D: "猕猴桃"
        },
        hint: "每100克含数百毫克",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "鲜枣的维生素C含量非常高，每100克可达200-500毫克"
    },
    {
        id: 540,
        question: "下列哪种蔬菜是两年生植物？",
        answer: "D",
        options: {
            A: "西红柿",
            B: "黄瓜",
            C: "辣椒",
            D: "胡萝卜"
        },
        hint: "第一年长根，第二年开花",
        difficulty: 3,
        category: "水果蔬菜",
        explanation: "胡萝卜是两年生植物，第一年长肉质根，第二年开花结籽"
    },
    {
        id: 541,
        question: "香蕉树实际上是？",
        answer: "A",
        options: {
            A: "草本植物",
            B: "木本植物",
            C: "藤本植物",
            D: "蕨类植物"
        },
        hint: "没有木质部",
        difficulty: 3,
        category: "水果蔬菜",
        explanation: "香蕉树是大型草本植物，不是真正的树木"
    },
    {
        id: 542,
        question: "哪种水果的种子在果肉外面？",
        answer: "B",
        options: {
            A: "苹果",
            B: "草莓",
            C: "桃子",
            D: "西瓜"
        },
        hint: "表面有芝麻状颗粒",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "草莓的种子（瘦果）附着在膨大的花托表面"
    },
    {
        id: 543,
        question: "下列哪种蔬菜可以生吃？",
        answer: "D",
        options: {
            A: "豆角",
            B: "土豆",
            C: "鲜黄花菜",
            D: "生菜"
        },
        hint: "常用于沙拉",
        difficulty: 1,
        category: "水果蔬菜",
        explanation: "生菜可以生吃，但豆角、土豆和鲜黄花菜需要烹饪后食用"
    },
    {
        id: 544,
        question: "石榴的食用部分是？",
        answer: "C",
        options: {
            A: "果皮",
            B: "种子",
            C: "种皮外种皮",
            D: "花托"
        },
        hint: "多汁的颗粒",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "我们吃的是石榴种子的外种皮，肉质多汁"
    },
    {
        id: 545,
        question: "哪种水果被称为'记忆之果'？",
        answer: "A",
        options: {
            A: "蓝莓",
            B: "核桃",
            C: "香蕉",
            D: "苹果"
        },
        hint: "富含抗氧化剂",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "蓝莓富含花青素等抗氧化物质，有助于改善记忆力"
    },
    {
        id: 546,
        question: "下列哪种蔬菜含有天然毒素，需充分加热？",
        answer: "B",
        options: {
            A: "西红柿",
            B: "四季豆",
            C: "胡萝卜",
            D: "西兰花"
        },
        hint: "含有皂苷和植物血凝素",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "四季豆含有皂苷和植物血凝素，需要充分加热破坏毒素"
    },
    {
        id: 547,
        question: "菠萝蜜是长在树的什么部位？",
        answer: "D",
        options: {
            A: "枝头",
            B: "叶腋",
            C: "根部",
            D: "树干"
        },
        hint: "直接长在主干上",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "菠萝蜜是茎花植物，果实直接生长在树干上"
    },
    {
        id: 548,
        question: "哪种水果的热量相对较高？",
        answer: "C",
        options: {
            A: "西瓜",
            B: "草莓",
            C: "榴莲",
            D: "橙子"
        },
        hint: "被称为'水果之王'",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "榴莲热量较高，每100克约147千卡"
    },
    {
        id: 549,
        question: "下列哪种蔬菜属于葱蒜类？",
        answer: "A",
        options: {
            A: "韭菜",
            B: "芹菜",
            C: "菠菜",
            D: "生菜"
        },
        hint: "有特殊气味",
        difficulty: 1,
        category: "水果蔬菜",
        explanation: "韭菜属于葱蒜类蔬菜，与大蒜、洋葱同科"
    },
    {
        id: 550,
        question: "无花果真的没有花吗？",
        answer: "B",
        options: {
            A: "是的，没有花",
            B: "有花，但看不见",
            C: "有花，在果实外面",
            D: "有时有花"
        },
        hint: "隐头花序",
        difficulty: 3,
        category: "水果蔬菜",
        explanation: "无花果有花，但花序隐藏在膨大的花托内，从外面看不见"
    },
    {
        id: 551,
        question: "哪种水果可以帮助缓解便秘？",
        answer: "D",
        options: {
            A: "苹果",
            B: "香蕉",
            C: "梨",
            D: "西梅"
        },
        hint: "含有天然泻药成分",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "西梅含有山梨糖醇和膳食纤维，有助于缓解便秘"
    },
    {
        id: 552,
        question: "下列哪种蔬菜是多年生植物？",
        answer: "C",
        options: {
            A: "白菜",
            B: "萝卜",
            C: "芦笋",
            D: "生菜"
        },
        hint: "可连续采收多年",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "芦笋是多年生植物，种植一次可连续采收10-15年"
    },
    {
        id: 553,
        question: "哈密瓜的原产地是？",
        answer: "A",
        options: {
            A: "新疆",
            B: "甘肃",
            C: "内蒙古",
            D: "宁夏"
        },
        hint: "以地名命名",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "哈密瓜因清代哈密王进贡而得名，原产于新疆哈密地区"
    },
    {
        id: 554,
        question: "哪种水果的含钾量特别高？",
        answer: "B",
        options: {
            A: "苹果",
            B: "香蕉",
            C: "橙子",
            D: "草莓"
        },
        hint: "有助于维持电解质平衡",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "香蕉是含钾量较高的水果，有助于维持正常的血压和心脏功能"
    },
    {
        id: 555,
        question: "下列哪种不是叶菜类蔬菜？",
        answer: "D",
        options: {
            A: "菠菜",
            B: "生菜",
            C: "油菜",
            D: "菜花"
        },
        hint: "吃的是花蕾",
        difficulty: 1,
        category: "水果蔬菜",
        explanation: "菜花属于花菜类，我们吃的是它的花蕾部分"
    },
    {
        id: 556,
        question: "柠檬的主要酸味来自？",
        answer: "A",
        options: {
            A: "柠檬酸",
            B: "苹果酸",
            C: "酒石酸",
            D: "醋酸"
        },
        hint: "以水果命名",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "柠檬的酸味主要来自柠檬酸，占总酸量的60%-70%"
    },
    {
        id: 557,
        question: "哪种水果的糖分主要是果糖？",
        answer: "C",
        options: {
            A: "香蕉",
            B: "苹果",
            C: "葡萄",
            D: "橙子"
        },
        hint: "很甜的水果",
        difficulty: 3,
        category: "水果蔬菜",
        explanation: "葡萄中的糖分主要是葡萄糖和果糖，果糖比例较高"
    },
    {
        id: 558,
        question: "下列哪种蔬菜富含β-胡萝卜素？",
        answer: "B",
        options: {
            A: "白菜",
            B: "南瓜",
            C: "黄瓜",
            D: "冬瓜"
        },
        hint: "橙色蔬菜",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "南瓜富含β-胡萝卜素，可在体内转化为维生素A"
    },
    {
        id: 559,
        question: "杨梅属于哪类水果？",
        answer: "D",
        options: {
            A: "核果",
            B: "浆果",
            C: "仁果",
            D: "聚合果"
        },
        hint: "由许多小核果组成",
        difficulty: 3,
        category: "水果蔬菜",
        explanation: "杨梅属于聚合果，由许多小核果聚生在同一花托上形成"
    },
    {
        id: 560,
        question: "哪种蔬菜有'起阳草'之称？",
        answer: "A",
        options: {
            A: "韭菜",
            B: "大蒜",
            C: "洋葱",
            D: "大葱"
        },
        hint: "中医认为有温补作用",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "韭菜在中医中被称为'起阳草'，认为有温肾助阳的功效"
    },
    {
        id: 561,
        question: "下列哪种水果成熟时不会变软？",
        answer: "C",
        options: {
            A: "香蕉",
            B: "猕猴桃",
            C: "苹果",
            D: "芒果"
        },
        hint: "保持脆爽口感",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "苹果成熟后仍保持较硬的质地，不会像香蕉那样明显变软"
    },
    {
        id: 562,
        question: "青椒的辣味来自哪种物质？",
        answer: "B",
        options: {
            A: "辣椒素",
            B: "基本无辣味",
            C: "大蒜素",
            D: "胡椒碱"
        },
        hint: "甜椒品种",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "青椒（彩椒）是甜椒品种，基本不含或含有极少的辣椒素"
    },
    {
        id: 563,
        question: "哪种水果被称为'水果中的红宝石'？",
        answer: "D",
        options: {
            A: "苹果",
            B: "草莓",
            C: "樱桃",
            D: "石榴"
        },
        hint: "颗粒晶莹剔透",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "石榴因其晶莹剔透的红色籽粒，被称为'水果中的红宝石'"
    },
    {
        id: 564,
        question: "下列哪种蔬菜属于水生蔬菜？",
        answer: "A",
        options: {
            A: "莲藕",
            B: "萝卜",
            C: "土豆",
            D: "山药"
        },
        hint: "长在水里",
        difficulty: 1,
        category: "水果蔬菜",
        explanation: "莲藕是水生蔬菜，生长在池塘、湖泊中"
    },
    {
        id: 565,
        question: "火龙果是仙人掌科植物的？",
        answer: "C",
        options: {
            A: "根",
            B: "茎",
            C: "果实",
            D: "花"
        },
        hint: "热带水果",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "火龙果是仙人掌科植物量天尺的果实"
    },
    {
        id: 566,
        question: "哪种水果需要授粉树才能结果？",
        answer: "B",
        options: {
            A: "香蕉",
            B: "猕猴桃",
            C: "菠萝",
            D: "无花果"
        },
        hint: "雌雄异株",
        difficulty: 3,
        category: "水果蔬菜",
        explanation: "猕猴桃是雌雄异株植物，需要种植授粉树才能结果"
    },
    {
        id: 567,
        question: "下列哪种蔬菜含有天然褪黑素？",
        answer: "D",
        options: {
            A: "生菜",
            B: "菠菜",
            C: "胡萝卜",
            D: "樱桃番茄"
        },
        hint: "小西红柿",
        difficulty: 3,
        category: "水果蔬菜",
        explanation: "樱桃番茄含有褪黑素，有助于调节睡眠"
    },
    {
        id: 568,
        question: "蓝莓表面的白霜是什么？",
        answer: "A",
        options: {
            A: "果粉",
            B: "农药残留",
            C: "霉菌",
            D: "灰尘"
        },
        hint: "天然保护层",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "蓝莓表面的白霜是天然果粉，有保护作用，不必刻意洗掉"
    },
    {
        id: 569,
        question: "哪种水果的维生素C含量比橙子还高？",
        answer: "C",
        options: {
            A: "苹果",
            B: "香蕉",
            C: "奇异果",
            D: "梨"
        },
        hint: "又名猕猴桃",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "奇异果（猕猴桃）的维生素C含量比橙子高，每100克含约90毫克"
    },
    {
        id: 570,
        question: "下列哪种蔬菜是芥菜的变种？",
        answer: "B",
        options: {
            A: "白菜",
            B: "榨菜",
            C: "生菜",
            D: "菠菜"
        },
        hint: "腌制食品原料",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "榨菜是用芥菜的变种茎瘤芥的瘤状茎加工制成的"
    },
    {
        id: 571,
        question: "枇杷叶在中医中常用于治疗？",
        answer: "D",
        options: {
            A: "消化不良",
            B: "失眠",
            C: "头痛",
            D: "咳嗽"
        },
        hint: "呼吸系统",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "枇杷叶在中医中常用于治疗肺热咳嗽"
    },
    {
        id: 572,
        question: "哪种水果被称为'天然漱口水'？",
        answer: "A",
        options: {
            A: "菠萝",
            B: "柠檬",
            C: "苹果",
            D: "草莓"
        },
        hint: "含有菠萝蛋白酶",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "菠萝中的菠萝蛋白酶有助于分解口腔中的蛋白质，清洁牙齿"
    },
    {
        id: 573,
        question: "下列哪种蔬菜的含钙量较高？",
        answer: "C",
        options: {
            A: "黄瓜",
            B: "西红柿",
            C: "芥菜",
            D: "青椒"
        },
        hint: "绿叶蔬菜",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "芥菜等深绿色叶菜含钙量较高"
    },
    {
        id: 574,
        question: "杏子不能和什么一起吃？",
        answer: "B",
        options: {
            A: "苹果",
            B: "小米",
            C: "香蕉",
            D: "橙子"
        },
        hint: "可能影响消化",
        difficulty: 3,
        category: "水果蔬菜",
        explanation: "杏子和小米同食可能影响消化吸收"
    },
    {
        id: 575,
        question: "哪种水果可以用来制作醋？",
        answer: "D",
        options: {
            A: "香蕉",
            B: "西瓜",
            C: "草莓",
            D: "苹果"
        },
        hint: "可发酵",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "苹果可以用来制作苹果醋，富含果酸和有益物质"
    },
    {
        id: 576,
        question: "下列哪种蔬菜属于香料类？",
        answer: "A",
        options: {
            A: "罗勒",
            B: "生菜",
            C: "菠菜",
            D: "白菜"
        },
        hint: "用于调味",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "罗勒是常见的香料蔬菜，用于增加食物风味"
    },
    {
        id: 577,
        question: "荔枝吃多了容易引起？",
        answer: "C",
        options: {
            A: "腹泻",
            B: "便秘",
            C: "低血糖",
            D: "高血压"
        },
        hint: "'荔枝病'",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "荔枝含有的次甘氨酸A可能抑制葡萄糖合成，导致低血糖"
    },
    {
        id: 578,
        question: "哪种水果的果核有毒？",
        answer: "B",
        options: {
            A: "苹果",
            B: "樱桃",
            C: "葡萄",
            D: "草莓"
        },
        hint: "核果类",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "樱桃核含有氰苷，在体内可能转化为有毒物质，但需要大量摄入"
    },
    {
        id: 579,
        question: "下列哪种蔬菜是菊科植物？",
        answer: "D",
        options: {
            A: "菠菜",
            B: "白菜",
            C: "芹菜",
            D: "生菜"
        },
        hint: "花序像菊花",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "生菜属于菊科，与菊花有亲缘关系"
    },
    {
        id: 580,
        question: "椰子水的主要成分是？",
        answer: "A",
        options: {
            A: "电解质溶液",
            B: "脂肪",
            C: "蛋白质",
            D: "淀粉"
        },
        hint: "天然运动饮料",
        difficulty: 2,
        category: "水果蔬菜",
        explanation: "椰子水富含钾、钠等电解质，被称为'天然运动饮料'"
    },
]

export default fruitsVegetablesRiddles
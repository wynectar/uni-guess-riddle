import { Riddle } from './types'
// 动植物类灯谜 (100条)
const animalsPlantsRiddles: Riddle[] = [
    {
        id: 801,
        question: "哪种动物被称为'沙漠之舟'？",
        answer: "C",
        options: {
            A: "马",
            B: "驴",
            C: "骆驼",
            D: "羚羊"
        },
        hint: "有驼峰",
        difficulty: 1,
        category: "动植物"
    },
    {
        id: 802,
        question: "哪种植物被称为'活化石'？",
        answer: "A",
        options: {
            A: "银杏",
            B: "松树",
            C: "竹子",
            D: "榕树"
        },
        hint: "叶子像扇子",
        difficulty: 2,
        category: "动植物"
    },
    {
        id: 803,
        question: "世界上最大的动物是？",
        answer: "B",
        options: {
            A: "非洲象",
            B: "蓝鲸",
            C: "长颈鹿",
            D: "抹香鲸"
        },
        hint: "海洋哺乳动物",
        difficulty: 1,
        category: "动植物"
    },
    {
        id: 804,
        question: "哪种花被称为'花中皇后'？",
        answer: "C",
        options: {
            A: "牡丹",
            B: "菊花",
            C: "月季",
            D: "玫瑰"
        },
        hint: "四季开花",
        difficulty: 2,
        category: "动植物"
    },
    {
        id: 805,
        question: "竹子是？",
        answer: "A",
        options: {
            A: "草本植物",
            B: "木本植物",
            C: "藤本植物",
            D: "蕨类植物"
        },
        hint: "生长迅速",
        difficulty: 2,
        category: "动植物"
    },
    {
        id: 806,
        question: "哪种鸟不会飞，但是游泳技术很好？",
        answer: "C",
        options: {
            A: "鸵鸟",
            B: "企鹅",
            C: "企鹅",
            D: "信天翁"
        },
        hint: "生活在南极",
        difficulty: 1,
        category: "动植物",
        explanation: "企鹅是鸟但不会飞，擅长游泳和潜水"
    },
    {
        id: 807,
        question: "下列哪种动物是恒温动物？",
        answer: "B",
        options: {
            A: "蛇",
            B: "鸟类",
            C: "青蛙",
            D: "乌龟"
        },
        hint: "体温恒定",
        difficulty: 2,
        category: "动植物",
        explanation: "鸟类和哺乳动物是恒温动物，体温相对恒定"
    },
    {
        id: 808,
        question: "哪种植物被称为'沙漠英雄'？",
        answer: "D",
        options: {
            A: "仙人掌",
            B: "胡杨",
            C: "梭梭树",
            D: "胡杨"
        },
        hint: "能忍受干旱和盐碱",
        difficulty: 2,
        category: "动植物",
        explanation: "胡杨能在极端干旱和盐碱环境中生长，被称为'沙漠英雄'"
    },
    {
        id: 809,
        question: "下列哪种不是昆虫？",
        answer: "A",
        options: {
            A: "蜘蛛",
            B: "蚂蚁",
            C: "蜜蜂",
            D: "蝴蝶"
        },
        hint: "八条腿",
        difficulty: 1,
        category: "动植物",
        explanation: "蜘蛛有八条腿，属于蛛形纲，不是昆虫（昆虫有六条腿）"
    },
    {
        id: 810,
        question: "海马属于哪类动物？",
        answer: "C",
        options: {
            A: "哺乳动物",
            B: "节肢动物",
            C: "鱼类",
            D: "爬行动物"
        },
        hint: "生活在水里",
        difficulty: 2,
        category: "动植物",
        explanation: "海马属于海龙科，是一种特殊的鱼类"
    },
    {
        id: 811,
        question: "哪种植物的叶子可以吸收空气中的有害物质？",
        answer: "B",
        options: {
            A: "仙人掌",
            B: "吊兰",
            C: "玫瑰",
            D: "牡丹"
        },
        hint: "常见的室内植物",
        difficulty: 2,
        category: "动植物",
        explanation: "吊兰有'空气净化器'之称，能吸收甲醛等有害物质"
    },
    {
        id: 812,
        question: "下列哪种动物会冬眠？",
        answer: "D",
        options: {
            A: "大象",
            B: "狮子",
            C: "老虎",
            D: "熊"
        },
        hint: "大型哺乳动物",
        difficulty: 1,
        category: "动植物",
        explanation: "熊在冬季会进入冬眠状态，减少能量消耗"
    },
    {
        id: 813,
        question: "竹子是草还是树？",
        answer: "A",
        options: {
            A: "草",
            B: "树",
            C: "灌木",
            D: "藤本植物"
        },
        hint: "禾本科植物",
        difficulty: 2,
        category: "动植物",
        explanation: "竹子属于禾本科，是多年生草本植物，不是木本植物"
    },
    {
        id: 814,
        question: "下列哪种不是鸟类特征？",
        answer: "C",
        options: {
            A: "有羽毛",
            B: "卵生",
            C: "有牙齿",
            D: "前肢特化为翼"
        },
        hint: "鸟类没有这个",
        difficulty: 2,
        category: "动植物",
        explanation: "现代鸟类没有牙齿，用喙取食"
    },
    {
        id: 815,
        question: "哪种动物被称为'国宝'？",
        answer: "B",
        options: {
            A: "金丝猴",
            B: "大熊猫",
            C: "东北虎",
            D: "藏羚羊"
        },
        hint: "黑白相间",
        difficulty: 1,
        category: "动植物",
        explanation: "大熊猫是中国特有的珍稀动物，被誉为'国宝'"
    },
    {
        id: 816,
        question: "下列哪种植物是先开花后长叶？",
        answer: "D",
        options: {
            A: "桃树",
            B: "杏树",
            C: "梨树",
            D: "玉兰"
        },
        hint: "早春开花",
        difficulty: 2,
        category: "动植物",
        explanation: "玉兰等一些植物在早春时节先开花，后长叶子"
    },
    {
        id: 817,
        question: "珊瑚是植物还是动物？",
        answer: "A",
        options: {
            A: "动物",
            B: "植物",
            C: "矿物质",
            D: "真菌"
        },
        hint: "海洋生物",
        difficulty: 2,
        category: "动植物",
        explanation: "珊瑚是珊瑚虫的分泌物形成的，珊瑚虫是动物"
    },
    {
        id: 818,
        question: "下列哪种动物不是有袋类？",
        answer: "C",
        options: {
            A: "袋鼠",
            B: "考拉",
            C: "鸭嘴兽",
            D: "袋熊"
        },
        hint: "卵生哺乳动物",
        difficulty: 3,
        category: "动植物",
        explanation: "鸭嘴兽是单孔目哺乳动物，不是有袋类"
    },
    {
        id: 819,
        question: "银杏的叶子是什么形状？",
        answer: "B",
        options: {
            A: "圆形",
            B: "扇形",
            C: "针形",
            D: "掌形"
        },
        hint: "像扇子",
        difficulty: 1,
        category: "动植物",
        explanation: "银杏叶子呈扇形，有细长的叶柄"
    },
    {
        id: 820,
        question: "下列哪种不是猫科动物？",
        answer: "D",
        options: {
            A: "狮子",
            B: "老虎",
            C: "豹",
            D: "狼"
        },
        hint: "犬科动物",
        difficulty: 1,
        category: "动植物",
        explanation: "狼属于犬科，不是猫科动物"
    },
    {
        id: 821,
        question: "哪种植物有'植物中的大熊猫'之称？",
        answer: "A",
        options: {
            A: "珙桐",
            B: "银杏",
            C: "红豆杉",
            D: "银杉"
        },
        hint: "中国特有珍稀植物",
        difficulty: 3,
        category: "动植物",
        explanation: "珙桐是中国特有的珍稀植物，被称为'植物中的大熊猫'"
    },
    {
        id: 822,
        question: "蝴蝶是完全变态昆虫，它的发育过程不包括？",
        answer: "C",
        options: {
            A: "卵",
            B: "幼虫",
            C: "若虫",
            D: "蛹"
        },
        hint: "若虫是不完全变态昆虫的幼体",
        difficulty: 2,
        category: "动植物",
        explanation: "蝴蝶的完全变态过程是：卵→幼虫→蛹→成虫"
    },
    {
        id: 823,
        question: "下列哪种是食肉植物？",
        answer: "B",
        options: {
            A: "含羞草",
            B: "猪笼草",
            C: "捕蝇草",
            D: "捕蝇草"
        },
        hint: "能捕食昆虫",
        difficulty: 2,
        category: "动植物",
        explanation: "猪笼草和捕蝇草都是食肉植物，能捕食昆虫补充营养"
    },
    {
        id: 824,
        question: "鸟类的龙骨突位于哪个部位？",
        answer: "D",
        options: {
            A: "头部",
            B: "腿部",
            C: "翅膀",
            D: "胸部"
        },
        hint: "飞行肌肉附着处",
        difficulty: 3,
        category: "动植物",
        explanation: "龙骨突是鸟类胸骨上的突起，飞行肌肉附着于此"
    },
    {
        id: 825,
        question: "下列哪种不是裸子植物？",
        answer: "A",
        options: {
            A: "苹果树",
            B: "松树",
            C: "柏树",
            D: "银杏"
        },
        hint: "被子植物",
        difficulty: 2,
        category: "动植物",
        explanation: "苹果树是被子植物，松树、柏树、银杏是裸子植物"
    },
    {
        id: 826,
        question: "哪种动物是世界上跑得最快的陆地动物？",
        answer: "C",
        options: {
            A: "狮子",
            B: "豹",
            C: "猎豹",
            D: "羚羊"
        },
        hint: "短跑冠军",
        difficulty: 1,
        category: "动植物",
        explanation: "猎豹是陆地动物中奔跑速度最快的，时速可达110公里"
    },
    {
        id: 827,
        question: "下列哪种不是蕨类植物？",
        answer: "B",
        options: {
            A: "铁线蕨",
            B: "苔藓",
            C: "肾蕨",
            D: "凤尾蕨"
        },
        hint: "更原始的植物",
        difficulty: 2,
        category: "动植物",
        explanation: "苔藓是苔藓植物，不是蕨类植物"
    },
    {
        id: 828,
        question: "蜂鸟以什么为食？",
        answer: "D",
        options: {
            A: "花蜜和昆虫",
            B: "花蜜",
            C: "昆虫",
            D: "花蜜和昆虫"
        },
        hint: "主要食物",
        difficulty: 2,
        category: "动植物",
        explanation: "蜂鸟主要吸食花蜜，也吃小昆虫补充蛋白质"
    },
    {
        id: 829,
        question: "下列哪种植物不是靠风传播种子？",
        answer: "A",
        options: {
            A: "苍耳",
            B: "蒲公英",
            C: "柳树",
            D: "枫树"
        },
        hint: "靠动物传播",
        difficulty: 2,
        category: "动植物",
        explanation: "苍耳种子有钩刺，靠动物皮毛传播"
    },
    {
        id: 830,
        question: "哪种动物是最大的陆地动物？",
        answer: "B",
        options: {
            A: "河马",
            B: "非洲象",
            C: "长颈鹿",
            D: "犀牛"
        },
        hint: "非洲草原",
        difficulty: 1,
        category: "动植物",
        explanation: "非洲象是现存最大的陆地动物"
    },
    {
        id: 831,
        question: "下列哪种不是豆科植物？",
        answer: "C",
        options: {
            A: "大豆",
            B: "花生",
            C: "小麦",
            D: "豌豆"
        },
        hint: "粮食作物",
        difficulty: 1,
        category: "动植物",
        explanation: "小麦是禾本科植物，不是豆科"
    },
    {
        id: 832,
        question: "蝴蝶的触角是什么形状？",
        answer: "D",
        options: {
            A: "丝状",
            B: "羽毛状",
            C: "念珠状",
            D: "棍棒状"
        },
        hint: "末端膨大",
        difficulty: 2,
        category: "动植物",
        explanation: "蝴蝶的触角末端膨大呈棍棒状"
    },
    {
        id: 833,
        question: "下列哪种动物不是灵长类？",
        answer: "A",
        options: {
            A: "蝙蝠",
            B: "猴子",
            C: "猩猩",
            D: "人类"
        },
        hint: "会飞",
        difficulty: 2,
        category: "动植物",
        explanation: "蝙蝠是哺乳动物中的翼手目，不是灵长类"
    },
    {
        id: 834,
        question: "哪种植物有'药王'之称？",
        answer: "B",
        options: {
            A: "人参",
            B: "人参",
            C: "灵芝",
            D: "冬虫夏草"
        },
        hint: "珍贵药材",
        difficulty: 2,
        category: "动植物",
        explanation: "人参在中药中有'百草之王'、'药王'之称"
    },
    {
        id: 835,
        question: "下列哪种鸟类不会筑巢？",
        answer: "C",
        options: {
            A: "燕子",
            B: "喜鹊",
            C: "杜鹃",
            D: "麻雀"
        },
        hint: "寄生繁殖",
        difficulty: 2,
        category: "动植物",
        explanation: "杜鹃不会筑巢，常将卵产在其他鸟类的巢中"
    },
    {
        id: 836,
        question: "含羞草受到触碰会闭合，这是一种什么现象？",
        answer: "D",
        options: {
            A: "光合作用",
            B: "呼吸作用",
            C: "蒸腾作用",
            D: "感应运动"
        },
        hint: "植物的运动",
        difficulty: 2,
        category: "动植物",
        explanation: "含羞草的闭合是植物的感应运动，属于应激性"
    },
    {
        id: 837,
        question: "下列哪种是爬行动物？",
        answer: "A",
        options: {
            A: "鳄鱼",
            B: "青蛙",
            C: "娃娃鱼",
            D: "蝾螈"
        },
        hint: "水陆两栖",
        difficulty: 1,
        category: "动植物",
        explanation: "鳄鱼是爬行动物，其他都是两栖动物"
    },
    {
        id: 838,
        question: "哪种植物被称为'岁寒三友'之一？",
        answer: "B",
        options: {
            A: "菊花",
            B: "松树",
            C: "荷花",
            D: "牡丹"
        },
        hint: "与竹、梅并称",
        difficulty: 1,
        category: "动植物",
        explanation: "岁寒三友指松、竹、梅，象征坚韧不拔"
    },
    {
        id: 839,
        question: "下列哪种不是鱼类特征？",
        answer: "C",
        options: {
            A: "用鳃呼吸",
            B: "生活在水中",
            C: "恒温",
            D: "有鳍"
        },
        hint: "体温随环境变化",
        difficulty: 1,
        category: "动植物",
        explanation: "鱼类是变温动物，体温随环境变化"
    },
    {
        id: 840,
        question: "哪种动物被称为'百兽之王'？",
        answer: "D",
        options: {
            A: "老虎",
            B: "熊",
            C: "大象",
            D: "狮子"
        },
        hint: "草原之王",
        difficulty: 1,
        category: "动植物",
        explanation: "狮子因其威武的形象被称为'百兽之王'"
    },
    {
        id: 841,
        question: "下列哪种植物不是多肉植物？",
        answer: "A",
        options: {
            A: "芦荟",
            B: "仙人掌",
            C: "生石花",
            D: "景天"
        },
        hint: "分类有争议，但通常不被归为多肉植物",
        difficulty: 2,
        category: "动植物",
        explanation: "芦荟属于芦荟科，虽然叶肉肥厚，但通常不被归类为多肉植物"
    },
    {
        id: 842,
        question: "蚂蚁属于哪种社会性昆虫？",
        answer: "B",
        options: {
            A: "独居",
            B: "群居",
            C: "半群居",
            D: "季节性群居"
        },
        hint: "有明确分工",
        difficulty: 1,
        category: "动植物",
        explanation: "蚂蚁是社会性昆虫，群体中有明确的分工"
    },
    {
        id: 843,
        question: "下列哪种不是哺乳动物特征？",
        answer: "C",
        options: {
            A: "胎生",
            B: "哺乳",
            C: "卵生",
            D: "有毛发"
        },
        hint: "单孔目例外",
        difficulty: 2,
        category: "动植物",
        explanation: "大多数哺乳动物胎生，但单孔目（如鸭嘴兽）卵生"
    },
    {
        id: 844,
        question: "哪种花被称为'花中西施'？",
        answer: "D",
        options: {
            A: "牡丹",
            B: "菊花",
            C: "荷花",
            D: "杜鹃"
        },
        hint: "春季开花",
        difficulty: 2,
        category: "动植物",
        explanation: "杜鹃花因其美丽被称为'花中西施'"
    },
    {
        id: 845,
        question: "下列哪种动物不是有蹄类？",
        answer: "A",
        options: {
            A: "熊猫",
            B: "马",
            C: "牛",
            D: "羊"
        },
        hint: "熊科动物",
        difficulty: 2,
        category: "动植物",
        explanation: "熊猫属于熊科，不是有蹄类动物"
    },
    {
        id: 846,
        question: "仙人掌的刺实际上是它的什么？",
        answer: "B",
        options: {
            A: "叶子",
            B: "叶的变态",
            C: "茎",
            D: "根"
        },
        hint: "适应干旱环境",
        difficulty: 2,
        category: "动植物",
        explanation: "仙人掌的刺是叶子的变态，减少水分蒸发"
    },
    {
        id: 847,
        question: "下列哪种不是鸟类迁徙的原因？",
        answer: "C",
        options: {
            A: "寻找食物",
            B: "躲避严寒",
            C: "躲避天敌",
            D: "繁殖后代"
        },
        hint: "主要原因",
        difficulty: 2,
        category: "动植物",
        explanation: "鸟类迁徙主要是为了寻找食物和适宜的繁殖地"
    },
    {
        id: 848,
        question: "哪种植物被称为'生命之树'？",
        answer: "D",
        options: {
            A: "橡树",
            B: "松树",
            C: "榕树",
            D: "猴面包树"
        },
        hint: "非洲草原上的大树",
        difficulty: 2,
        category: "动植物",
        explanation: "猴面包树能储水，为动物提供食物和水，被称为'生命之树'"
    },
    {
        id: 849,
        question: "下列哪种动物不是夜行性动物？",
        answer: "A",
        options: {
            A: "松鼠",
            B: "猫头鹰",
            C: "蝙蝠",
            D: "浣熊"
        },
        hint: "白天活动",
        difficulty: 2,
        category: "动植物",
        explanation: "松鼠主要在白天活动，不是夜行性动物"
    },
    {
        id: 850,
        question: "蘑菇属于哪类生物？",
        answer: "C",
        options: {
            A: "植物",
            B: "动物",
            C: "真菌",
            D: "细菌"
        },
        hint: "菌类",
        difficulty: 1,
        category: "动植物",
        explanation: "蘑菇属于真菌界，不是植物"
    },
    {
        id: 851,
        question: "下列哪种不是海洋哺乳动物？",
        answer: "B",
        options: {
            A: "海豚",
            B: "鲨鱼",
            C: "鲸鱼",
            D: "海豹"
        },
        hint: "鱼类",
        difficulty: 1,
        category: "动植物",
        explanation: "鲨鱼是鱼类，不是哺乳动物"
    },
    {
        id: 852,
        question: "哪种植物有'植物界的狐狸'之称？",
        answer: "D",
        options: {
            A: "猪笼草",
            B: "含羞草",
            C: "捕蝇草",
            D: "含羞草"
        },
        hint: "善于'伪装'",
        difficulty: 2,
        category: "动植物",
        explanation: "含羞草能快速闭合叶子，像狐狸一样机敏"
    },
    {
        id: 853,
        question: "下列哪种动物是两栖动物？",
        answer: "A",
        options: {
            A: "蝾螈",
            B: "蜥蜴",
            C: "蛇",
            D: "乌龟"
        },
        hint: "幼体生活在水里",
        difficulty: 2,
        category: "动植物",
        explanation: "蝾螈是两栖动物，其他是爬行动物"
    },
    {
        id: 854,
        question: "哪种树被称为'行道树之王'？",
        answer: "B",
        options: {
            A: "杨树",
            B: "法国梧桐",
            C: "柳树",
            D: "槐树"
        },
        hint: "城市街道常见",
        difficulty: 2,
        category: "动植物",
        explanation: "法国梧桐树冠大，耐修剪，是优良的行道树种"
    },
    {
        id: 855,
        question: "下列哪种不是昆虫的变态类型？",
        answer: "C",
        options: {
            A: "完全变态",
            B: "不完全变态",
            C: "不变态",
            D: "半变态"
        },
        hint: "昆虫都有变态过程",
        difficulty: 3,
        category: "动植物",
        explanation: "昆虫都有变态过程，没有'不变态'的类型"
    },
    {
        id: 856,
        question: "哪种花被称为'凌波仙子'？",
        answer: "D",
        options: {
            A: "莲花",
            B: "水仙",
            C: "荷花",
            D: "水仙"
        },
        hint: "水中开花",
        difficulty: 2,
        category: "动植物",
        explanation: "水仙花在水中开放，姿态优美，被称为'凌波仙子'"
    },
    {
        id: 857,
        question: "下列哪种动物是杂食动物？",
        answer: "A",
        options: {
            A: "人类",
            B: "狮子",
            C: "大熊猫",
            D: "牛"
        },
        hint: "既吃植物也吃动物",
        difficulty: 1,
        category: "动植物",
        explanation: "人类是杂食动物，既吃植物性食物也吃动物性食物"
    },
    {
        id: 858,
        question: "榕树的气根有什么作用？",
        answer: "B",
        options: {
            A: "繁殖",
            B: "吸收水分和支撑",
            C: "光合作用",
            D: "储存养分"
        },
        hint: "辅助功能",
        difficulty: 2,
        category: "动植物",
        explanation: "榕树的气根可以吸收空气中的水分，长大后能支撑树枝"
    },
    {
        id: 859,
        question: "下列哪种不是鸟类的喙的形状？",
        answer: "C",
        options: {
            A: "钩状",
            B: "凿状",
            C: "爪状",
            D: "筛状"
        },
        hint: "不是喙的形状",
        difficulty: 2,
        category: "动植物",
        explanation: "爪状不是鸟类喙的形状"
    },
    {
        id: 860,
        question: "哪种动物被称为'高原之舟'？",
        answer: "D",
        options: {
            A: "牦牛",
            B: "牦牛",
            C: "马",
            D: "牦牛"
        },
        hint: "生活在青藏高原",
        difficulty: 1,
        category: "动植物",
        explanation: "牦牛适应高寒气候，是高原重要的交通工具，被称为'高原之舟'"
    },
    {
        id: 861,
        question: "下列哪种不是兰科植物特征？",
        answer: "A",
        options: {
            A: "花朵通常大而鲜艳",
            B: "有唇瓣",
            C: "花粉块状",
            D: "种子微小"
        },
        hint: "兰科花朵大小不一",
        difficulty: 3,
        category: "动植物",
        explanation: "兰科植物花朵大小形态多样，不一定都大而鲜艳"
    },
    {
        id: 862,
        question: "哪种昆虫被称为'大自然的清道夫'？",
        answer: "B",
        options: {
            A: "蜜蜂",
            B: "蜣螂",
            C: "蝴蝶",
            D: "蚂蚁"
        },
        hint: "处理粪便",
        difficulty: 2,
        category: "动植物",
        explanation: "蜣螂（屎壳郎）以动物粪便为食，有助于清洁环境"
    },
    {
        id: 863,
        question: "下列哪种是食草动物？",
        answer: "C",
        options: {
            A: "狼",
            B: "狐狸",
            C: "兔子",
            D: "猫"
        },
        hint: "吃植物",
        difficulty: 1,
        category: "动植物",
        explanation: "兔子是典型的食草动物"
    },
    {
        id: 864,
        question: "松树靠什么传播种子？",
        answer: "D",
        options: {
            A: "风",
            B: "水",
            C: "动物",
            D: "风"
        },
        hint: "松果",
        difficulty: 1,
        category: "动植物",
        explanation: "松树的种子有翅，主要靠风传播"
    },
    {
        id: 865,
        question: "下列哪种不是哺乳动物的消化系统特征？",
        answer: "A",
        options: {
            A: "有喙囊",
            B: "有牙齿分化",
            C: "有胃",
            D: "有肠道"
        },
        hint: "鸟类特征",
        difficulty: 2,
        category: "动植物",
        explanation: "喙囊是鸟类的特征，哺乳动物没有"
    },
    {
        id: 866,
        question: "哪种植物被称为'药草皇后'？",
        answer: "B",
        options: {
            A: "薄荷",
            B: "蒲公英",
            C: "金银花",
            D: "艾草"
        },
        hint: "常见野菜",
        difficulty: 2,
        category: "动植物",
        explanation: "蒲公英有很好的药用价值，被称为'药草皇后'"
    },
    {
        id: 867,
        question: "下列哪种动物不是卵生的？",
        answer: "C",
        options: {
            A: "鸟类",
            B: "爬行动物",
            C: "袋鼠",
            D: "鱼类"
        },
        hint: "有袋类哺乳动物",
        difficulty: 2,
        category: "动植物",
        explanation: "袋鼠是有袋类哺乳动物，胎生"
    },
    {
        id: 868,
        question: "莲藕是莲的什么部位？",
        answer: "D",
        options: {
            A: "根",
            B: "果实",
            C: "种子",
            D: "茎"
        },
        hint: "地下茎",
        difficulty: 2,
        category: "动植物",
        explanation: "莲藕是莲的根状茎，属于变态茎"
    },
    {
        id: 869,
        question: "下列哪种不是节肢动物特征？",
        answer: "A",
        options: {
            A: "有脊椎",
            B: "身体分节",
            C: "有外骨骼",
            D: "有关节肢"
        },
        hint: "无脊椎动物",
        difficulty: 1,
        category: "动植物",
        explanation: "节肢动物是无脊椎动物，没有脊椎"
    },
    {
        id: 870,
        question: "哪种鸟被称为'森林医生'？",
        answer: "B",
        options: {
            A: "喜鹊",
            B: "啄木鸟",
            C: "猫头鹰",
            D: "杜鹃"
        },
        hint: "啄食树木害虫",
        difficulty: 1,
        category: "动植物",
        explanation: "啄木鸟啄食树木中的害虫，被称为'森林医生'"
    },
    {
        id: 871,
        question: "下列哪种不是被子植物特征？",
        answer: "C",
        options: {
            A: "有真正的花",
            B: "种子有果皮包被",
            C: "没有导管",
            D: "双受精现象"
        },
        hint: "被子植物有导管",
        difficulty: 3,
        category: "动植物",
        explanation: "被子植物有导管，裸子植物只有管胞"
    },
    {
        id: 872,
        question: "哪种动物被称为'沙漠之鼠'？",
        answer: "D",
        options: {
            A: "沙鼠",
            B: "沙鼠",
            C: "跳鼠",
            D: "沙鼠"
        },
        hint: "适应沙漠环境",
        difficulty: 2,
        category: "动植物",
        explanation: "沙鼠是适应沙漠环境的啮齿动物"
    },
    {
        id: 873,
        question: "苔藓植物没有真正的什么？",
        answer: "A",
        options: {
            A: "根",
            B: "茎",
            C: "叶",
            D: "孢子"
        },
        hint: "原始植物特征",
        difficulty: 2,
        category: "动植物",
        explanation: "苔藓植物没有真正的根，只有假根"
    },
    {
        id: 874,
        question: "下列哪种不是昆虫的足的类型？",
        answer: "B",
        options: {
            A: "步行足",
            B: "游泳足",
            C: "跳跃足",
            D: "捕捉足"
        },
        hint: "水生昆虫有游泳足",
        difficulty: 3,
        category: "动植物",
        explanation: "昆虫有游泳足，如龙虱的后足"
    },
    {
        id: 875,
        question: "哪种花被称为'花中隐士'？",
        answer: "C",
        options: {
            A: "梅花",
            B: "兰花",
            C: "菊花",
            D: "荷花"
        },
        hint: "秋季开花",
        difficulty: 2,
        category: "动植物",
        explanation: "菊花在秋季开放，有隐逸之意，被称为'花中隐士'"
    },
    {
        id: 876,
        question: "下列哪种是海洋中的哺乳动物？",
        answer: "D",
        options: {
            A: "章鱼",
            B: "海星",
            C: "海马",
            D: "海豚"
        },
        hint: "用肺呼吸",
        difficulty: 1,
        category: "动植物",
        explanation: "海豚是海洋哺乳动物，其他都不是哺乳动物"
    },
    {
        id: 877,
        question: "马铃薯是植物的哪个部分？",
        answer: "A",
        options: {
            A: "茎",
            B: "根",
            C: "果实",
            D: "种子"
        },
        hint: "块茎",
        difficulty: 2,
        category: "动植物",
        explanation: "马铃薯是块茎，属于变态茎"
    },
    {
        id: 878,
        question: "下列哪种不是鸟类适应飞行的特征？",
        answer: "C",
        options: {
            A: "骨骼中空",
            B: "有气囊",
            C: "牙齿发达",
            D: "胸肌发达"
        },
        hint: "减轻重量",
        difficulty: 2,
        category: "动植物",
        explanation: "鸟类没有牙齿，减轻了头部重量，有利于飞行"
    },
    {
        id: 879,
        question: "哪种树被称为'活着的化石'？",
        answer: "B",
        options: {
            A: "松树",
            B: "银杏",
            C: "柏树",
            D: "杉树"
        },
        hint: "古老树种",
        difficulty: 1,
        category: "动植物",
        explanation: "银杏是古老的孑遗植物，被称为'活化石'"
    },
    {
        id: 880,
        question: "下列哪种动物是肉食动物？",
        answer: "D",
        options: {
            A: "大熊猫",
            B: "牛",
            C: "羊",
            D: "老虎"
        },
        hint: "捕食其他动物",
        difficulty: 1,
        category: "动植物",
        explanation: "老虎是典型的肉食动物"
    },
    {
        id: 881,
        question: "铁树开花形容什么？",
        answer: "A",
        options: {
            A: "罕见的事",
            B: "常见的事",
            C: "美丽的事",
            D: "悲伤的事"
        },
        hint: "铁树开花不易",
        difficulty: 1,
        category: "动植物",
        explanation: "铁树（苏铁）开花较难，常用'铁树开花'形容罕见的事"
    },
    {
        id: 882,
        question: "下列哪种不是真菌？",
        answer: "C",
        options: {
            A: "蘑菇",
            B: "酵母",
            C: "地衣",
            D: "霉菌"
        },
        hint: "共生体",
        difficulty: 2,
        category: "动植物",
        explanation: "地衣是真菌和藻类的共生体，不是单一的真菌"
    },
    {
        id: 883,
        question: "哪种昆虫会发光？",
        answer: "B",
        options: {
            A: "蝴蝶",
            B: "萤火虫",
            C: "蜜蜂",
            D: "蚂蚁"
        },
        hint: "夜晚发光",
        difficulty: 1,
        category: "动植物",
        explanation: "萤火虫腹部有发光器，能发出荧光"
    },
    {
        id: 884,
        question: "下列哪种不是植物营养器官？",
        answer: "D",
        options: {
            A: "根",
            B: "茎",
            C: "叶",
            D: "花"
        },
        hint: "繁殖器官",
        difficulty: 1,
        category: "动植物",
        explanation: "花是植物的繁殖器官，不是营养器官"
    },
    {
        id: 885,
        question: "哪种动物被称为'建筑大师'？",
        answer: "C",
        options: {
            A: "燕子",
            B: "喜鹊",
            C: "蜜蜂",
            D: "蚂蚁"
        },
        hint: "建造蜂巢",
        difficulty: 1,
        category: "动植物",
        explanation: "蜜蜂能建造结构完美的六边形蜂巢，被称为'建筑大师'"
    },
    {
        id: 886,
        question: "下列哪种不是植物传粉方式？",
        answer: "A",
        options: {
            A: "自花传粉",
            B: "风媒传粉",
            C: "虫媒传粉",
            D: "水媒传粉"
        },
        hint: "传粉需要媒介",
        difficulty: 2,
        category: "动植物",
        explanation: "自花传粉是植物传粉的一种方式"
    },
    {
        id: 887,
        question: "变色龙变色主要为了什么？",
        answer: "D",
        options: {
            A: "美观",
            B: "调节体温",
            C: "交流",
            D: "伪装和情绪表达"
        },
        hint: "多种原因",
        difficulty: 2,
        category: "动植物",
        explanation: "变色龙变色既为了伪装保护，也为了调节体温和交流"
    },
    {
        id: 888,
        question: "下列哪种不是哺乳动物？",
        answer: "B",
        options: {
            A: "鲸鱼",
            B: "企鹅",
            C: "蝙蝠",
            D: "袋鼠"
        },
        hint: "鸟类",
        difficulty: 1,
        category: "动植物",
        explanation: "企鹅是鸟类，不是哺乳动物"
    },
    {
        id: 889,
        question: "哪种花被称为'花中君子'？",
        answer: "A",
        options: {
            A: "兰花",
            B: "梅花",
            C: "竹子",
            D: "菊花"
        },
        hint: "四君子之一",
        difficulty: 1,
        category: "动植物",
        explanation: "兰花与梅、竹、菊并称'四君子'"
    },
    {
        id: 890,
        question: "下列哪种不是种子传播方式？",
        answer: "C",
        options: {
            A: "风力传播",
            B: "水力传播",
            C: "光合作用传播",
            D: "动物传播"
        },
        hint: "种子传播方式",
        difficulty: 1,
        category: "动植物",
        explanation: "光合作用是植物的生理过程，不是种子传播方式"
    },
    {
        id: 891,
        question: "哪种昆虫被称为'大自然的建筑师'？",
        answer: "B",
        options: {
            A: "蜘蛛",
            B: "白蚁",
            C: "蜜蜂",
            D: "蚂蚁"
        },
        hint: "建造巨大的巢穴",
        difficulty: 2,
        category: "动植物",
        explanation: "白蚁能建造结构复杂的巨大蚁丘，被称为'大自然的建筑师'"
    },
    {
        id: 892,
        question: "下列哪种是单子叶植物？",
        answer: "D",
        options: {
            A: "大豆",
            B: "花生",
            C: "苹果树",
            D: "玉米"
        },
        hint: "禾本科植物",
        difficulty: 2,
        category: "动植物",
        explanation: "玉米是禾本科植物，属于单子叶植物"
    },
    {
        id: 893,
        question: "哪种动物冬眠时间最长？",
        answer: "A",
        options: {
            A: "睡鼠",
            B: "熊",
            C: "青蛙",
            D: "蛇"
        },
        hint: "小型啮齿动物",
        difficulty: 2,
        category: "动植物",
        explanation: "睡鼠冬眠时间可达6个月以上，是冬眠时间最长的动物之一"
    },
    {
        id: 894,
        question: "下列哪种不是植物的向性运动？",
        answer: "C",
        options: {
            A: "向光性",
            B: "向地性",
            C: "感夜性",
            D: "向水性"
        },
        hint: "植物生长方向",
        difficulty: 2,
        category: "动植物",
        explanation: "向性运动是植物对单向刺激的反应，包括向光、向地、向水等"
    },
    {
        id: 895,
        question: "哪种鸟不会飞但会游泳？",
        answer: "B",
        options: {
            A: "鸵鸟",
            B: "企鹅",
            C: "几维鸟",
            D: "鸸鹋"
        },
        hint: "生活在南极",
        difficulty: 1,
        category: "动植物",
        explanation: "企鹅不会飞，但擅长游泳和潜水"
    },
    {
        id: 896,
        question: "下列哪种不是动物的防御行为？",
        answer: "D",
        options: {
            A: "拟态",
            B: "警戒色",
            C: "装死",
            D: "捕食"
        },
        hint: "保护自己",
        difficulty: 2,
        category: "动植物",
        explanation: "捕食是获取食物的行为，不是防御行为"
    },
    {
        id: 897,
        question: "哪种植物被称为'植物界的熊猫'？",
        answer: "C",
        options: {
            A: "银杏",
            B: "水杉",
            C: "银杉",
            D: "红豆杉"
        },
        hint: "中国特有珍稀植物",
        difficulty: 3,
        category: "动植物",
        explanation: "银杉是中国特有的珍稀植物，被称为'植物界的熊猫'"
    },
    {
        id: 898,
        question: "下列哪种不是昆虫的发育阶段？",
        answer: "A",
        options: {
            A: "幼体",
            B: "幼虫",
            C: "蛹",
            D: "成虫"
        },
        hint: "变态发育阶段",
        difficulty: 2,
        category: "动植物",
        explanation: "昆虫的发育阶段包括卵、幼虫、蛹、成虫，'幼体'不准确"
    },
    {
        id: 899,
        question: "哪种动物被称为'沙漠之狐'？",
        answer: "D",
        options: {
            A: "狐狸",
            B: "沙狐",
            C: "耳廓狐",
            D: "耳廓狐"
        },
        hint: "生活在沙漠",
        difficulty: 2,
        category: "动植物",
        explanation: "耳廓狐生活在沙漠地区，被称为'沙漠之狐'"
    },
    {
        id: 900,
        question: "下列哪种是植物的繁殖方式？",
        answer: "B",
        options: {
            A: "呼吸作用",
            B: "扦插繁殖",
            C: "光合作用",
            D: "蒸腾作用"
        },
        hint: "无性繁殖",
        difficulty: 1,
        category: "动植物",
        explanation: "扦插是植物的无性繁殖方式"
    },
]

export default animalsPlantsRiddles
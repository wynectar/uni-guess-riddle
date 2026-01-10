import { Riddle } from './types'
// 文学艺术类灯谜 (80条)
const literatureArtRiddles: Riddle[] = [
    {
        id: 901,
        question: "《哈姆雷特》的作者是？",
        answer: "A",
        options: {
            A: "莎士比亚",
            B: "歌德",
            C: "雨果",
            D: "托尔斯泰"
        },
        hint: "英国文艺复兴时期剧作家",
        difficulty: 2,
        category: "文学艺术"
    },
    {
        id: 902,
        question: "贝多芬的第五交响曲又称为什么？",
        answer: "B",
        options: {
            A: "田园",
            B: "命运",
            C: "英雄",
            D: "合唱"
        },
        hint: "开头是'咚咚咚咚'",
        difficulty: 2,
        category: "文学艺术"
    },
    {
        id: 903,
        question: "中国国画中的'四君子'不包括？",
        answer: "D",
        options: {
            A: "梅",
            B: "兰",
            C: "竹",
            D: "松"
        },
        hint: "岁寒三友之一",
        difficulty: 2,
        category: "文学艺术"
    },
    {
        id: 904,
        question: "《最后的晚餐》是哪位画家的作品？",
        answer: "C",
        options: {
            A: "米开朗基罗",
            B: "拉斐尔",
            C: "达·芬奇",
            D: "提香"
        },
        hint: "文艺复兴时期",
        difficulty: 2,
        category: "文学艺术"
    },
    {
        id: 905,
        question: "中国古代'诗仙'指的是？",
        answer: "A",
        options: {
            A: "李白",
            B: "杜甫",
            C: "白居易",
            D: "王维"
        },
        hint: "唐代浪漫主义诗人",
        difficulty: 2,
        category: "文学艺术"
    }, {
        id: 906,
        question: "《红楼梦》的作者是？",
        answer: "A",
        options: {
            A: "曹雪芹",
            B: "施耐庵",
            C: "罗贯中",
            D: "吴承恩"
        },
        hint: "清代小说家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《红楼梦》的作者是曹雪芹，是中国古典小说的巅峰之作"
    },
    {
        id: 907,
        question: "下列哪位不是'初唐四杰'？",
        answer: "D",
        options: {
            A: "王勃",
            B: "杨炯",
            C: "卢照邻",
            D: "王之涣"
        },
        hint: "盛唐诗人",
        difficulty: 3,
        category: "文学艺术",
        explanation: "初唐四杰是王勃、杨炯、卢照邻、骆宾王，王之涣是盛唐诗人"
    },
    {
        id: 908,
        question: "《蒙娜丽莎》是哪位画家的作品？",
        answer: "B",
        options: {
            A: "米开朗基罗",
            B: "达·芬奇",
            C: "拉斐尔",
            D: "提香"
        },
        hint: "文艺复兴三杰之一",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《蒙娜丽莎》是达·芬奇的代表作，现藏于卢浮宫"
    },
    {
        id: 909,
        question: "下列哪部不是莎士比亚的四大悲剧？",
        answer: "C",
        options: {
            A: "《哈姆雷特》",
            B: "《奥赛罗》",
            C: "《罗密欧与朱丽叶》",
            D: "《麦克白》"
        },
        hint: "爱情悲剧",
        difficulty: 2,
        category: "文学艺术",
        explanation: "莎士比亚四大悲剧是《哈姆雷特》、《奥赛罗》、《李尔王》、《麦克白》，《罗密欧与朱丽叶》是爱情悲剧但不属于四大悲剧"
    },
    {
        id: 910,
        question: "中国书法中的'颜筋柳骨'指的是哪两位书法家？",
        answer: "D",
        options: {
            A: "王羲之、王献之",
            B: "欧阳询、褚遂良",
            C: "赵孟頫、米芾",
            D: "颜真卿、柳公权"
        },
        hint: "唐代书法家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "'颜筋柳骨'指颜真卿和柳公权的书法风格，颜体丰腴，柳体骨感"
    },
    {
        id: 911,
        question: "《命运交响曲》的作者是？",
        answer: "A",
        options: {
            A: "贝多芬",
            B: "莫扎特",
            C: "巴赫",
            D: "柴可夫斯基"
        },
        hint: "德国作曲家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《命运交响曲》（第五交响曲）是贝多芬的代表作"
    },
    {
        id: 912,
        question: "下列哪部不是中国古代四大名著？",
        answer: "B",
        options: {
            A: "《西游记》",
            B: "《金瓶梅》",
            C: "《水浒传》",
            D: "《三国演义》"
        },
        hint: "明代长篇小说",
        difficulty: 2,
        category: "文学艺术",
        explanation: "中国古代四大名著是《红楼梦》、《三国演义》、《水浒传》、《西游记》，《金瓶梅》虽重要但不属四大名著"
    },
    {
        id: 913,
        question: "《向日葵》是哪位画家的作品？",
        answer: "C",
        options: {
            A: "莫奈",
            B: "高更",
            C: "梵高",
            D: "塞尚"
        },
        hint: "荷兰后印象派画家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《向日葵》是梵高的代表作之一"
    },
    {
        id: 914,
        question: "下列哪位是'唐宋八大家'之一？",
        answer: "D",
        options: {
            A: "杜甫",
            B: "李白",
            C: "白居易",
            D: "苏轼"
        },
        hint: "宋代文学家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "苏轼是唐宋八大家之一，其他三位虽然也是著名诗人，但不属于八大家"
    },
    {
        id: 915,
        question: "芭蕾舞起源于哪个国家？",
        answer: "A",
        options: {
            A: "意大利",
            B: "法国",
            C: "俄罗斯",
            D: "英国"
        },
        hint: "文艺复兴时期",
        difficulty: 2,
        category: "文学艺术",
        explanation: "芭蕾舞起源于文艺复兴时期的意大利，后在法国发展成熟"
    },
    {
        id: 916,
        question: "下列哪部是鲁迅的作品？",
        answer: "B",
        options: {
            A: "《家》",
            B: "《呐喊》",
            C: "《子夜》",
            D: "《骆驼祥子》"
        },
        hint: "现代文学奠基人",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《呐喊》是鲁迅的小说集，包括《狂人日记》、《阿Q正传》等名篇"
    },
    {
        id: 917,
        question: "《天鹅湖》是哪位作曲家的作品？",
        answer: "C",
        options: {
            A: "贝多芬",
            B: "莫扎特",
            C: "柴可夫斯基",
            D: "肖邦"
        },
        hint: "俄罗斯作曲家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《天鹅湖》是柴可夫斯基创作的芭蕾舞剧"
    },
    {
        id: 918,
        question: "下列哪个不是中国戏曲剧种？",
        answer: "D",
        options: {
            A: "京剧",
            B: "越剧",
            C: "黄梅戏",
            D: "歌舞伎"
        },
        hint: "日本传统艺术",
        difficulty: 2,
        category: "文学艺术",
        explanation: "歌舞伎是日本的传统戏剧艺术，不是中国戏曲剧种"
    },
    {
        id: 919,
        question: "《老人与海》的作者是？",
        answer: "A",
        options: {
            A: "海明威",
            B: "马克·吐温",
            C: "福克纳",
            D: "斯坦贝克"
        },
        hint: "美国作家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《老人与海》是美国作家海明威的代表作，获诺贝尔文学奖"
    },
    {
        id: 920,
        question: "下列哪位是中国'书圣'？",
        answer: "B",
        options: {
            A: "王献之",
            B: "王羲之",
            C: "颜真卿",
            D: "柳公权"
        },
        hint: "东晋书法家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "王羲之被尊为'书圣'，其《兰亭序》被誉为'天下第一行书'"
    },
    {
        id: 921,
        question: "《蓝色多瑙河》是哪位作曲家的作品？",
        answer: "C",
        options: {
            A: "莫扎特",
            B: "贝多芬",
            C: "约翰·施特劳斯",
            D: "肖邦"
        },
        hint: "圆舞曲之王",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《蓝色多瑙河》是'圆舞曲之王'约翰·施特劳斯的代表作"
    },
    {
        id: 922,
        question: "下列哪部不是汤显祖的'临川四梦'？",
        answer: "D",
        options: {
            A: "《牡丹亭》",
            B: "《紫钗记》",
            C: "《南柯记》",
            D: "《长生殿》"
        },
        hint: "清代作品",
        difficulty: 3,
        category: "文学艺术",
        explanation: "汤显祖的'临川四梦'是《牡丹亭》、《紫钗记》、《南柯记》、《邯郸记》，《长生殿》是洪昇的作品"
    },
    {
        id: 923,
        question: "《思想者》是哪位雕塑家的作品？",
        answer: "A",
        options: {
            A: "罗丹",
            B: "米开朗基罗",
            C: "多纳泰罗",
            D: "贝尼尼"
        },
        hint: "法国雕塑家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《思想者》是法国雕塑家罗丹的代表作"
    },
    {
        id: 924,
        question: "下列哪位不是'元曲四大家'？",
        answer: "B",
        options: {
            A: "关汉卿",
            B: "王实甫",
            C: "白朴",
            D: "马致远"
        },
        hint: "《西厢记》作者",
        difficulty: 3,
        category: "文学艺术",
        explanation: "元曲四大家是关汉卿、白朴、马致远、郑光祖，王实甫虽重要但不属四大家"
    },
    {
        id: 925,
        question: "《月光奏鸣曲》的作者是？",
        answer: "C",
        options: {
            A: "莫扎特",
            B: "肖邦",
            C: "贝多芬",
            D: "德彪西"
        },
        hint: "德国作曲家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《月光奏鸣曲》是贝多芬的钢琴奏鸣曲"
    },
    {
        id: 926,
        question: "下列哪个不是中国古代文房四宝？",
        answer: "D",
        options: {
            A: "笔",
            B: "墨",
            C: "纸",
            D: "印"
        },
        hint: "书画工具",
        difficulty: 1,
        category: "文学艺术",
        explanation: "文房四宝指笔、墨、纸、砚，不包括印"
    },
    {
        id: 927,
        question: "《巴黎圣母院》的作者是？",
        answer: "A",
        options: {
            A: "雨果",
            B: "巴尔扎克",
            C: "大仲马",
            D: "莫泊桑"
        },
        hint: "法国浪漫主义作家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《巴黎圣母院》是法国作家雨果的浪漫主义小说"
    },
    {
        id: 928,
        question: "下列哪位是中国'画圣'？",
        answer: "B",
        options: {
            A: "顾恺之",
            B: "吴道子",
            C: "阎立本",
            D: "张择端"
        },
        hint: "唐代画家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "吴道子被尊为'画圣'，其画风被称为'吴带当风'"
    },
    {
        id: 929,
        question: "《卡门》是哪位作曲家的作品？",
        answer: "C",
        options: {
            A: "威尔第",
            B: "普契尼",
            C: "比才",
            D: "罗西尼"
        },
        hint: "法国作曲家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《卡门》是法国作曲家比才的歌剧"
    },
    {
        id: 930,
        question: "下列哪部不是巴金的'激流三部曲'？",
        answer: "D",
        options: {
            A: "《家》",
            B: "《春》",
            C: "《秋》",
            D: "《雾》"
        },
        hint: "爱情三部曲之一",
        difficulty: 3,
        category: "文学艺术",
        explanation: "巴金的'激流三部曲'是《家》、《春》、《秋》，《雾》是'爱情三部曲'之一"
    },
    {
        id: 931,
        question: "《大卫》雕像的作者是？",
        answer: "A",
        options: {
            A: "米开朗基罗",
            B: "多纳泰罗",
            C: "罗丹",
            D: "贝尼尼"
        },
        hint: "文艺复兴三杰之一",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《大卫》雕像是米开朗基罗的代表作"
    },
    {
        id: 932,
        question: "下列哪位不是'建安七子'？",
        answer: "B",
        options: {
            A: "孔融",
            B: "曹植",
            C: "王粲",
            D: "陈琳"
        },
        hint: "建安文学代表",
        difficulty: 3,
        category: "文学艺术",
        explanation: "建安七子是孔融、陈琳、王粲、徐干、阮瑀、应玚、刘桢，曹植是'三曹'之一"
    },
    {
        id: 933,
        question: "《胡桃夹子》是哪位作曲家的作品？",
        answer: "C",
        options: {
            A: "巴赫",
            B: "莫扎特",
            C: "柴可夫斯基",
            D: "贝多芬"
        },
        hint: "俄罗斯作曲家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《胡桃夹子》是柴可夫斯基的芭蕾舞剧"
    },
    {
        id: 934,
        question: "下列哪部不是列夫·托尔斯泰的作品？",
        answer: "D",
        options: {
            A: "《战争与和平》",
            B: "《安娜·卡列尼娜》",
            C: "《复活》",
            D: "《罪与罚》"
        },
        hint: "陀思妥耶夫斯基的作品",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《罪与罚》是陀思妥耶夫斯基的作品，不是托尔斯泰的"
    },
    {
        id: 935,
        question: "《清明上河图》的作者是？",
        answer: "A",
        options: {
            A: "张择端",
            B: "顾恺之",
            C: "阎立本",
            D: "吴道子"
        },
        hint: "北宋画家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《清明上河图》是北宋画家张择端的风俗画长卷"
    },
    {
        id: 936,
        question: "下列哪位是'交响乐之父'？",
        answer: "B",
        options: {
            A: "贝多芬",
            B: "海顿",
            C: "莫扎特",
            D: "巴赫"
        },
        hint: "古典主义时期作曲家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "海顿被称为'交响乐之父'，创作了100多部交响曲"
    },
    {
        id: 937,
        question: "《百年孤独》的作者是？",
        answer: "C",
        options: {
            A: "博尔赫斯",
            B: "略萨",
            C: "马尔克斯",
            D: "科塔萨尔"
        },
        hint: "哥伦比亚作家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《百年孤独》是哥伦比亚作家马尔克斯的代表作，魔幻现实主义文学经典"
    },
    {
        id: 938,
        question: "下列哪部不是莎士比亚的喜剧？",
        answer: "D",
        options: {
            A: "《仲夏夜之梦》",
            B: "《威尼斯商人》",
            C: "《第十二夜》",
            D: "《哈姆雷特》"
        },
        hint: "悲剧",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《哈姆雷特》是莎士比亚的悲剧，不是喜剧"
    },
    {
        id: 939,
        question: "《日出·印象》是哪位画家的作品？",
        answer: "A",
        options: {
            A: "莫奈",
            B: "马奈",
            C: "雷诺阿",
            D: "德加"
        },
        hint: "印象派创始人",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《日出·印象》是莫奈的作品，印象派由此得名"
    },
    {
        id: 940,
        question: "下列哪位是中国'诗圣'？",
        answer: "B",
        options: {
            A: "李白",
            B: "杜甫",
            C: "白居易",
            D: "王维"
        },
        hint: "唐代现实主义诗人",
        difficulty: 2,
        category: "文学艺术",
        explanation: "杜甫被尊为'诗圣'，其诗作被称为'诗史'"
    },
    {
        id: 941,
        question: "《茶花女》的作者是？",
        answer: "C",
        options: {
            A: "司汤达",
            B: "福楼拜",
            C: "小仲马",
            D: "大仲马"
        },
        hint: "法国作家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《茶花女》是法国作家小仲马的小说"
    },
    {
        id: 942,
        question: "下列哪个不是中国民间艺术？",
        answer: "D",
        options: {
            A: "剪纸",
            B: "皮影戏",
            C: "年画",
            D: "浮世绘"
        },
        hint: "日本艺术",
        difficulty: 2,
        category: "文学艺术",
        explanation: "浮世绘是日本江户时代的民间艺术"
    },
    {
        id: 943,
        question: "《格尔尼卡》是哪位画家的作品？",
        answer: "A",
        options: {
            A: "毕加索",
            B: "达利",
            C: "米罗",
            D: "马蒂斯"
        },
        hint: "立体派画家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《格尔尼卡》是毕加索的反战作品"
    },
    {
        id: 944,
        question: "下列哪位不是'竹林七贤'？",
        answer: "B",
        options: {
            A: "嵇康",
            B: "王羲之",
            C: "阮籍",
            D: "山涛"
        },
        hint: "魏晋名士",
        difficulty: 3,
        category: "文学艺术",
        explanation: "竹林七贤是嵇康、阮籍、山涛、向秀、刘伶、王戎、阮咸，王羲之是东晋书法家"
    },
    {
        id: 945,
        question: "《小夜曲》是哪位作曲家的作品？",
        answer: "C",
        options: {
            A: "贝多芬",
            B: "巴赫",
            C: "舒伯特",
            D: "肖邦"
        },
        hint: "奥地利作曲家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《小夜曲》是舒伯特著名的艺术歌曲"
    },
    {
        id: 946,
        question: "下列哪部不是老舍的作品？",
        answer: "D",
        options: {
            A: "《骆驼祥子》",
            B: "《茶馆》",
            C: "《四世同堂》",
            D: "《围城》"
        },
        hint: "钱钟书作品",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《围城》是钱钟书的作品，不是老舍的"
    },
    {
        id: 947,
        question: "《夜巡》是哪位画家的作品？",
        answer: "A",
        options: {
            A: "伦勃朗",
            B: "维米尔",
            C: "哈尔斯",
            D: "鲁本斯"
        },
        hint: "荷兰画家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《夜巡》是伦勃朗的代表作"
    },
    {
        id: 948,
        question: "下列哪位是'音乐神童'？",
        answer: "B",
        options: {
            A: "贝多芬",
            B: "莫扎特",
            C: "巴赫",
            D: "海顿"
        },
        hint: "奥地利作曲家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "莫扎特幼年就展现出非凡的音乐才华，被称为'音乐神童'"
    },
    {
        id: 949,
        question: "《变形记》的作者是？",
        answer: "C",
        options: {
            A: "歌德",
            B: "席勒",
            C: "卡夫卡",
            D: "托马斯·曼"
        },
        hint: "奥地利作家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《变形记》是卡夫卡的中篇小说"
    },
    {
        id: 950,
        question: "下列哪个不是中国古典舞蹈？",
        answer: "D",
        options: {
            A: "霓裳羽衣舞",
            B: "胡旋舞",
            C: "剑器舞",
            D: "弗拉门戈"
        },
        hint: "西班牙舞蹈",
        difficulty: 2,
        category: "文学艺术",
        explanation: "弗拉门戈是西班牙的舞蹈艺术"
    },
    {
        id: 951,
        question: "《创世纪》壁画是哪位画家的作品？",
        answer: "A",
        options: {
            A: "米开朗基罗",
            B: "达·芬奇",
            C: "拉斐尔",
            D: "波提切利"
        },
        hint: "西斯廷教堂",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《创世纪》是米开朗基罗在西斯廷教堂创作的壁画"
    },
    {
        id: 952,
        question: "下列哪位不是'婉约派'词人？",
        answer: "B",
        options: {
            A: "李清照",
            B: "苏轼",
            C: "柳永",
            D: "秦观"
        },
        hint: "豪放派代表",
        difficulty: 2,
        category: "文学艺术",
        explanation: "苏轼是豪放派代表词人，不是婉约派"
    },
    {
        id: 953,
        question: "《天鹅》是哪位作曲家的作品？",
        answer: "C",
        options: {
            A: "贝多芬",
            B: "莫扎特",
            C: "圣桑",
            D: "德彪西"
        },
        hint: "《动物狂欢节》选段",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《天鹅》是圣桑《动物狂欢节》中的著名选段"
    },
    {
        id: 954,
        question: "下列哪部不是沈从文的作品？",
        answer: "D",
        options: {
            A: "《边城》",
            B: "《长河》",
            C: "《湘行散记》",
            D: "《家》"
        },
        hint: "巴金作品",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《家》是巴金的作品，不是沈从文的"
    },
    {
        id: 955,
        question: "《呐喊》是哪位画家的作品？",
        answer: "A",
        options: {
            A: "蒙克",
            B: "梵高",
            C: "高更",
            D: "塞尚"
        },
        hint: "挪威表现主义画家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《呐喊》是挪威画家蒙克的表现主义作品"
    },
    {
        id: 956,
        question: "下列哪位是'钢琴诗人'？",
        answer: "B",
        options: {
            A: "李斯特",
            B: "肖邦",
            C: "舒曼",
            D: "勃拉姆斯"
        },
        hint: "波兰作曲家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "肖邦被称为'钢琴诗人'，其作品充满诗意"
    },
    {
        id: 957,
        question: "《源氏物语》的作者是？",
        answer: "C",
        options: {
            A: "清少纳言",
            B: "紫式部",
            C: "紫式部",
            D: "藤原道纲母"
        },
        hint: "日本平安时代女作家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《源氏物语》是紫式部创作的世界最早的长篇小说"
    },
    {
        id: 958,
        question: "下列哪个不是中国戏曲表演艺术？",
        answer: "D",
        options: {
            A: "唱",
            B: "念",
            C: "做",
            D: "说"
        },
        hint: "四种基本功",
        difficulty: 1,
        category: "文学艺术",
        explanation: "中国戏曲的'四功'是唱、念、做、打"
    },
    {
        id: 959,
        question: "《泉》是哪位画家的作品？",
        answer: "A",
        options: {
            A: "安格尔",
            B: "大卫",
            C: "德拉克洛瓦",
            D: "库尔贝"
        },
        hint: "法国新古典主义画家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《泉》是安格尔的新古典主义代表作"
    },
    {
        id: 960,
        question: "下列哪位不是'元白'？",
        answer: "B",
        options: {
            A: "元稹",
            B: "元结",
            C: "白居易",
            D: "白居易"
        },
        hint: "唐代诗人组合",
        difficulty: 3,
        category: "文学艺术",
        explanation: "'元白'指元稹和白居易，是新乐府运动的倡导者"
    },
    {
        id: 961,
        question: "《牧神午后前奏曲》是哪位作曲家的作品？",
        answer: "C",
        options: {
            A: "拉威尔",
            B: "萨蒂",
            C: "德彪西",
            D: "福雷"
        },
        hint: "法国印象派作曲家",
        difficulty: 3,
        category: "文学艺术",
        explanation: "《牧神午后前奏曲》是德彪西的印象派代表作"
    },
    {
        id: 962,
        question: "下列哪部不是莫言的作品？",
        answer: "D",
        options: {
            A: "《红高粱》",
            B: "《丰乳肥臀》",
            C: "《蛙》",
            D: "《活着》"
        },
        hint: "余华作品",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《活着》是余华的作品，莫言是诺贝尔文学奖得主"
    },
    {
        id: 963,
        question: "《维纳斯的诞生》是哪位画家的作品？",
        answer: "A",
        options: {
            A: "波提切利",
            B: "乔托",
            C: "马萨乔",
            D: "提香"
        },
        hint: "文艺复兴早期画家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《维纳斯的诞生》是波提切利的代表作"
    },
    {
        id: 964,
        question: "下列哪位是'现代绘画之父'？",
        answer: "B",
        options: {
            A: "梵高",
            B: "塞尚",
            C: "高更",
            D: "马蒂斯"
        },
        hint: "后印象派画家",
        difficulty: 3,
        category: "文学艺术",
        explanation: "塞尚被称为'现代绘画之父'，对立体主义等现代艺术影响深远"
    },
    {
        id: 965,
        question: "《追忆似水年华》的作者是？",
        answer: "C",
        options: {
            A: "加缪",
            B: "萨特",
            C: "普鲁斯特",
            D: "纪德"
        },
        hint: "法国意识流作家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《追忆似水年华》是普鲁斯特的意识流文学巨著"
    },
    {
        id: 966,
        question: "下列哪个不是中国古典音乐？",
        answer: "D",
        options: {
            A: "《高山流水》",
            B: "《广陵散》",
            C: "《梅花三弄》",
            D: "《月光奏鸣曲》"
        },
        hint: "贝多芬作品",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《月光奏鸣曲》是贝多芬的作品，属于西方古典音乐"
    },
    {
        id: 967,
        question: "《马拉之死》是哪位画家的作品？",
        answer: "A",
        options: {
            A: "大卫",
            B: "安格尔",
            C: "德拉克洛瓦",
            D: "席里柯"
        },
        hint: "法国新古典主义画家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《马拉之死》是大卫的新古典主义作品"
    },
    {
        id: 968,
        question: "下列哪位不是'南洪北孔'？",
        answer: "B",
        options: {
            A: "洪昇",
            B: "汤显祖",
            C: "孔尚任",
            D: "孔尚任"
        },
        hint: "清代戏曲家",
        difficulty: 3,
        category: "文学艺术",
        explanation: "'南洪北孔'指洪昇（《长生殿》）和孔尚任（《桃花扇》），汤显祖是明代戏曲家"
    },
    {
        id: 969,
        question: "《野蜂飞舞》是哪位作曲家的作品？",
        answer: "C",
        options: {
            A: "肖邦",
            B: "李斯特",
            C: "里姆斯基-科萨科夫",
            D: "柴可夫斯基"
        },
        hint: "俄罗斯作曲家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《野蜂飞舞》是里姆斯基-科萨科夫歌剧中的著名乐曲"
    },
    {
        id: 970,
        question: "下列哪部不是金庸的作品？",
        answer: "D",
        options: {
            A: "《射雕英雄传》",
            B: "《笑傲江湖》",
            C: "《天龙八部》",
            D: "《白发魔女传》"
        },
        hint: "梁羽生作品",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《白发魔女传》是梁羽生的武侠小说"
    },
    {
        id: 971,
        question: "《亚威农少女》是哪位画家的作品？",
        answer: "A",
        options: {
            A: "毕加索",
            B: "布拉克",
            C: "马蒂斯",
            D: "莱热"
        },
        hint: "立体主义开山之作",
        difficulty: 3,
        category: "文学艺术",
        explanation: "《亚威农少女》是毕加索的立体主义开山之作"
    },
    {
        id: 972,
        question: "下列哪位是'歌曲之王'？",
        answer: "B",
        options: {
            A: "舒曼",
            B: "舒伯特",
            C: "勃拉姆斯",
            D: "门德尔松"
        },
        hint: "奥地利作曲家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "舒伯特被称为'歌曲之王'，创作了600多首艺术歌曲"
    },
    {
        id: 973,
        question: "《尤利西斯》的作者是？",
        answer: "C",
        options: {
            A: "伍尔夫",
            B: "福克纳",
            C: "乔伊斯",
            D: "贝克特"
        },
        hint: "爱尔兰作家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《尤利西斯》是乔伊斯的意识流小说"
    },
    {
        id: 974,
        question: "下列哪个不是中国绘画题材？",
        answer: "D",
        options: {
            A: "山水画",
            B: "花鸟画",
            C: "人物画",
            D: "静物画"
        },
        hint: "西方绘画分类",
        difficulty: 2,
        category: "文学艺术",
        explanation: "静物画是西方绘画的重要题材，中国画传统分类是山水、花鸟、人物"
    },
    {
        id: 975,
        question: "《自由引导人民》是哪位画家的作品？",
        answer: "A",
        options: {
            A: "德拉克洛瓦",
            B: "席里柯",
            C: "库尔贝",
            D: "米勒"
        },
        hint: "法国浪漫主义画家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《自由引导人民》是德拉克洛瓦的浪漫主义代表作"
    },
    {
        id: 976,
        question: "下列哪位不是'豪放派'词人？",
        answer: "B",
        options: {
            A: "苏轼",
            B: "李清照",
            C: "辛弃疾",
            D: "岳飞"
        },
        hint: "婉约派代表",
        difficulty: 2,
        category: "文学艺术",
        explanation: "李清照是婉约派代表词人，不是豪放派"
    },
    {
        id: 977,
        question: "《鳟鱼》是哪位作曲家的作品？",
        answer: "C",
        options: {
            A: "莫扎特",
            B: "贝多芬",
            C: "舒伯特",
            D: "海顿"
        },
        hint: "艺术歌曲",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《鳟鱼》是舒伯特著名的艺术歌曲"
    },
    {
        id: 978,
        question: "下列哪部不是村上春树的作品？",
        answer: "D",
        options: {
            A: "《挪威的森林》",
            B: "《海边的卡夫卡》",
            C: "《1Q84》",
            D: "《雪国》"
        },
        hint: "川端康成作品",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《雪国》是川端康成的作品，村上春树是日本当代作家"
    },
    {
        id: 979,
        question: "《睡莲》系列是哪位画家的作品？",
        answer: "A",
        options: {
            A: "莫奈",
            B: "马奈",
            C: "雷诺阿",
            D: "德加"
        },
        hint: "印象派画家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "《睡莲》系列是莫奈晚年的重要作品"
    },
    {
        id: 980,
        question: "下列哪位是'西方音乐之父'？",
        answer: "B",
        options: {
            A: "贝多芬",
            B: "巴赫",
            C: "亨德尔",
            D: "维瓦尔第"
        },
        hint: "巴洛克时期作曲家",
        difficulty: 2,
        category: "文学艺术",
        explanation: "巴赫被称为'西方音乐之父'，对西方音乐发展影响深远"
    },
]

export default literatureArtRiddles
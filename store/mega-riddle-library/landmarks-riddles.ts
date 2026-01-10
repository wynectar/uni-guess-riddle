import { Riddle } from './types'
// 名胜古迹类灯谜 (80条)
const landmarksRiddles: Riddle[] = [
  {
    id: 501,
    question: "中国的长城主要建于哪个朝代？",
    answer: "D",
    options: {
      A: "汉朝",
      B: "唐朝",
      C: "宋朝",
      D: "明朝"
    },
    hint: "14-17世纪",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "现存的长城主要是明代（1368-1644）修建的"
  },
  {
    id: 502,
    question: "世界上最大的宫殿建筑群是？",
    answer: "B",
    options: {
      A: "凡尔赛宫",
      B: "故宫",
      C: "白金汉宫",
      D: "克里姆林宫"
    },
    hint: "位于北京",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "北京故宫占地72万平方米，是世界现存最大、最完整的木质结构古建筑群"
  },
  {
    id: 503,
    question: "巴黎的标志性建筑埃菲尔铁塔建于哪一年？",
    answer: "C",
    options: {
      A: "1789年",
      B: "1815年",
      C: "1889年",
      D: "1900年"
    },
    hint: "为世博会而建",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "埃菲尔铁塔于1889年建成，是当年巴黎世博会的标志性建筑"
  },
  {
    id: 504,
    question: "中国的'五岳'不包括？",
    answer: "D",
    options: {
      A: "泰山",
      B: "华山",
      C: "衡山",
      D: "黄山"
    },
    hint: "位于安徽",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "五岳是东岳泰山、西岳华山、南岳衡山、北岳恒山、中岳嵩山"
  },
  {
    id: 505,
    question: "印度的泰姬陵是谁建造的？",
    answer: "A",
    options: {
      A: "沙贾汗",
      B: "阿克巴大帝",
      C: "阿育王",
      D: "旃陀罗笈多"
    },
    hint: "为纪念妻子而建",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "沙贾汗为纪念爱妻蒙塔兹·马哈尔修建了泰姬陵"
  },
  {
    id: 506,
    question: "世界上现存最大的古代宫殿是？",
    answer: "C",
    options: {
      A: "卢浮宫",
      B: "冬宫",
      C: "故宫",
      D: "凡尔赛宫"
    },
    hint: "位于中国北京",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "北京故宫是世界现存最大、最完整的古代宫殿建筑群"
  },
  {
    id: 507,
    question: "中国的秦始皇陵位于哪个省份？",
    answer: "B",
    options: {
      A: "河南省",
      B: "陕西省",
      C: "山西省",
      D: "河北省"
    },
    hint: "省会西安",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "秦始皇陵位于陕西省西安市临潼区"
  },
  {
    id: 508,
    question: "世界七大奇迹中唯一现存的是？",
    answer: "D",
    options: {
      A: "巴比伦空中花园",
      B: "亚历山大灯塔",
      C: "罗德岛太阳神巨像",
      D: "吉萨金字塔"
    },
    hint: "位于埃及",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "埃及的吉萨金字塔是古代世界七大奇迹中唯一保存至今的"
  },
  {
    id: 509,
    question: "意大利的比萨斜塔建于哪个时期？",
    answer: "A",
    options: {
      A: "中世纪",
      B: "文艺复兴",
      C: "巴洛克",
      D: "罗马时期"
    },
    hint: "1173年开始建造",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "比萨斜塔始建于1173年，属于中世纪罗马式建筑"
  },
  {
    id: 510,
    question: "中国现存最早的木结构建筑是？",
    answer: "C",
    options: {
      A: "大雁塔",
      B: "黄鹤楼",
      C: "南禅寺",
      D: "岳阳楼"
    },
    hint: "位于山西五台山",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "山西五台山的南禅寺大殿建于782年，是中国现存最早的木结构建筑"
  },
  {
    id: 511,
    question: "美国的自由女神像是哪个国家赠送的？",
    answer: "B",
    options: {
      A: "英国",
      B: "法国",
      C: "德国",
      D: "意大利"
    },
    hint: "欧洲国家",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "自由女神像是法国为纪念美国独立100周年而赠送的礼物"
  },
  {
    id: 512,
    question: "中国的'天下第一关'指的是？",
    answer: "D",
    options: {
      A: "嘉峪关",
      B: "居庸关",
      C: "雁门关",
      D: "山海关"
    },
    hint: "位于河北秦皇岛",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "山海关是明长城东端起点，素有'天下第一关'之称"
  },
  {
    id: 513,
    question: "埃及金字塔主要分布在哪个城市附近？",
    answer: "A",
    options: {
      A: "开罗",
      B: "亚历山大",
      C: "卢克索",
      D: "阿斯旺"
    },
    hint: "尼罗河三角洲",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "最著名的吉萨金字塔位于埃及首都开罗附近的吉萨地区"
  },
  {
    id: 514,
    question: "中国四大名园不包括？",
    answer: "C",
    options: {
      A: "拙政园",
      B: "颐和园",
      C: "圆明园",
      D: "承德避暑山庄"
    },
    hint: "江南园林",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "中国四大名园是拙政园、颐和园、承德避暑山庄和留园"
  },
  {
    id: 515,
    question: "英国伦敦的标志性建筑大本钟属于哪个建筑？",
    answer: "B",
    options: {
      A: "白金汉宫",
      B: "威斯敏斯特宫",
      C: "伦敦塔",
      D: "圣保罗大教堂"
    },
    hint: "议会大厦",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "大本钟是威斯敏斯特宫（英国议会大厦）的钟楼"
  },
  {
    id: 516,
    question: "中国的敦煌莫高窟位于哪个省份？",
    answer: "D",
    options: {
      A: "新疆",
      B: "青海",
      C: "宁夏",
      D: "甘肃"
    },
    hint: "河西走廊",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "敦煌莫高窟位于甘肃省敦煌市东南25公里的鸣沙山东麓"
  },
  {
    id: 517,
    question: "意大利的罗马斗兽场建于哪个时期？",
    answer: "A",
    options: {
      A: "罗马帝国",
      B: "文艺复兴",
      C: "中世纪",
      D: "巴洛克"
    },
    hint: "公元1世纪",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "罗马斗兽场建于公元72-80年，是古罗马帝国的象征"
  },
  {
    id: 518,
    question: "中国的乐山大佛位于哪个省份？",
    answer: "C",
    options: {
      A: "贵州",
      B: "云南",
      C: "四川",
      D: "重庆"
    },
    hint: "岷江、青衣江、大渡河三江汇流处",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "乐山大佛位于四川省乐山市，是世界最大的石刻弥勒佛坐像"
  },
  {
    id: 519,
    question: "美国的白宫始建于哪一年？",
    answer: "B",
    options: {
      A: "1776年",
      B: "1792年",
      C: "1800年",
      D: "1812年"
    },
    hint: "乔治·华盛顿时期",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "白宫始建于1792年，1800年建成，是美国总统的官邸和办公场所"
  },
  {
    id: 520,
    question: "中国的'天下第一泉'指的是？",
    answer: "D",
    options: {
      A: "杭州虎跑泉",
      B: "无锡惠山泉",
      C: "苏州虎丘泉",
      D: "济南趵突泉"
    },
    hint: "山东济南",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "趵突泉位于山东济南，被乾隆皇帝封为'天下第一泉'"
  },
  {
    id: 521,
    question: "法国的凯旋门是为纪念谁而建？",
    answer: "A",
    options: {
      A: "拿破仑",
      B: "路易十四",
      C: "戴高乐",
      D: "雨果"
    },
    hint: "法国皇帝",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "巴黎凯旋门是拿破仑为纪念奥斯特利茨战役胜利而建造的"
  },
  {
    id: 522,
    question: "中国的布达拉宫位于哪个城市？",
    answer: "C",
    options: {
      A: "西宁",
      B: "兰州",
      C: "拉萨",
      D: "成都"
    },
    hint: "西藏自治区",
    difficulty: 1,
    category: "名胜古迹",
    explanation: "布达拉宫位于西藏自治区拉萨市，是世界上海拔最高的古代宫殿"
  },
  {
    id: 523,
    question: "意大利的威尼斯水城建于什么时候？",
    answer: "B",
    options: {
      A: "古罗马时期",
      B: "中世纪",
      C: "文艺复兴",
      D: "近代"
    },
    hint: "5世纪开始建造",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "威尼斯始建于5世纪，在中世纪成为重要的贸易中心"
  },
  {
    id: 524,
    question: "中国的'江南三大名楼'不包括？",
    answer: "D",
    options: {
      A: "黄鹤楼",
      B: "岳阳楼",
      C: "滕王阁",
      D: "鹳雀楼"
    },
    hint: "山西永济",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "江南三大名楼是黄鹤楼（武汉）、岳阳楼（岳阳）、滕王阁（南昌）"
  },
  {
    id: 525,
    question: "埃及的卢克索神庙主要供奉哪位神祇？",
    answer: "A",
    options: {
      A: "阿蒙神",
      B: "拉神",
      C: "奥西里斯",
      D: "伊西斯"
    },
    hint: "太阳神",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "卢克索神庙主要供奉底比斯三神：阿蒙神、穆特女神和孔苏神"
  },
  {
    id: 526,
    question: "中国的平遥古城位于哪个省份？",
    answer: "C",
    options: {
      A: "河北",
      B: "河南",
      C: "山西",
      D: "陕西"
    },
    hint: "晋中地区",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "平遥古城位于山西省晋中市，是中国保存最完整的明清县城"
  },
  {
    id: 527,
    question: "美国的金门大桥位于哪个城市？",
    answer: "B",
    options: {
      A: "洛杉矶",
      B: "旧金山",
      C: "纽约",
      D: "西雅图"
    },
    hint: "加利福尼亚州",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "金门大桥位于美国加利福尼亚州旧金山，连接旧金山湾和太平洋"
  },
  {
    id: 528,
    question: "中国的周庄古镇位于哪个省份？",
    answer: "D",
    options: {
      A: "浙江",
      B: "安徽",
      C: "江西",
      D: "江苏"
    },
    hint: "江南水乡",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "周庄古镇位于江苏省苏州市昆山市，有'中国第一水乡'之称"
  },
  {
    id: 529,
    question: "希腊的帕特农神庙供奉哪位女神？",
    answer: "A",
    options: {
      A: "雅典娜",
      B: "赫拉",
      C: "阿佛洛狄忒",
      D: "阿尔忒弥斯"
    },
    hint: "智慧女神",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "帕特农神庙是为供奉雅典城的守护神雅典娜而建"
  },
  {
    id: 530,
    question: "中国的'天下第一奇山'指的是？",
    answer: "C",
    options: {
      A: "泰山",
      B: "华山",
      C: "黄山",
      D: "庐山"
    },
    hint: "安徽",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "黄山位于安徽省，以奇松、怪石、云海、温泉'四绝'闻名，有'天下第一奇山'之称"
  },
  {
    id: 531,
    question: "英国的巨石阵建于哪个时期？",
    answer: "B",
    options: {
      A: "铁器时代",
      B: "新石器时代",
      C: "青铜时代",
      D: "中世纪"
    },
    hint: "公元前2500-前2000年",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "巨石阵建于新石器时代晚期至青铜时代早期，约公元前2500-前2000年"
  },
  {
    id: 532,
    question: "中国的'天下第一雄关'指的是？",
    answer: "D",
    options: {
      A: "山海关",
      B: "居庸关",
      C: "雁门关",
      D: "嘉峪关"
    },
    hint: "明代长城西端",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "嘉峪关位于甘肃省，是明代长城西端起点，有'天下第一雄关'之称"
  },
  {
    id: 533,
    question: "印度的琥珀堡位于哪个城市？",
    answer: "A",
    options: {
      A: "斋浦尔",
      B: "德里",
      C: "阿格拉",
      D: "孟买"
    },
    hint: "拉贾斯坦邦",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "琥珀堡位于印度拉贾斯坦邦首府斋浦尔郊外，是印度古代藩王都城"
  },
  {
    id: 534,
    question: "中国的'天下第一庙'指的是？",
    answer: "C",
    options: {
      A: "曲阜孔庙",
      B: "北京孔庙",
      C: "湄洲妈祖庙",
      D: "洛阳白马寺"
    },
    hint: "供奉妈祖",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "福建湄洲妈祖庙是世界上第一座妈祖庙，有'天下第一庙'之称"
  },
  {
    id: 535,
    question: "法国的凡尔赛宫曾是哪个国王的宫殿？",
    answer: "B",
    options: {
      A: "路易十三",
      B: "路易十四",
      C: "路易十五",
      D: "路易十六"
    },
    hint: "太阳王",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "凡尔赛宫是法国国王路易十四（太阳王）建造的豪华宫殿"
  },
  {
    id: 536,
    question: "中国的'天下第一塔'指的是？",
    answer: "D",
    options: {
      A: "大雁塔",
      B: "小雁塔",
      C: "雷峰塔",
      D: "开封铁塔"
    },
    hint: "河南开封",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "开封铁塔（祐国寺塔）建于北宋，是中国现存最早的琉璃砖塔，有'天下第一塔'之称"
  },
  {
    id: 537,
    question: "土耳其的圣索菲亚大教堂最初是什么宗教建筑？",
    answer: "A",
    options: {
      A: "东正教堂",
      B: "天主教堂",
      C: "清真寺",
      D: "犹太教堂"
    },
    hint: "拜占庭帝国",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "圣索菲亚大教堂最初是拜占庭帝国的东正教大教堂，后改为清真寺，现在是博物馆"
  },
  {
    id: 538,
    question: "中国的'天下第一桥'指的是？",
    answer: "C",
    options: {
      A: "赵州桥",
      B: "卢沟桥",
      C: "洛阳桥",
      D: "安平桥"
    },
    hint: "福建泉州",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "泉州洛阳桥建于宋代，是中国第一座跨海石桥，有'天下第一桥'之称"
  },
  {
    id: 539,
    question: "柬埔寨的吴哥窟建于哪个朝代？",
    answer: "B",
    options: {
      A: "扶南王朝",
      B: "吴哥王朝",
      C: "真腊王朝",
      D: "高棉帝国"
    },
    hint: "12世纪",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "吴哥窟建于12世纪吴哥王朝苏利耶跋摩二世时期，是高棉古典建筑艺术的巅峰"
  },
  {
    id: 540,
    question: "中国的'天下第一寺'指的是？",
    answer: "D",
    options: {
      A: "少林寺",
      B: "法门寺",
      C: "灵隐寺",
      D: "白马寺"
    },
    hint: "河南洛阳",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "洛阳白马寺建于东汉永平十一年（68年），是中国第一座官方寺院，有'天下第一寺'之称"
  },
  {
    id: 541,
    question: "俄罗斯的克里姆林宫位于哪个城市？",
    answer: "A",
    options: {
      A: "莫斯科",
      B: "圣彼得堡",
      C: "伏尔加格勒",
      D: "叶卡捷琳堡"
    },
    hint: "俄罗斯首都",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "克里姆林宫位于俄罗斯首都莫斯科，是俄罗斯总统府所在地"
  },
  {
    id: 542,
    question: "中国的'天下第一洞'指的是？",
    answer: "C",
    options: {
      A: "芦笛岩",
      B: "七星岩",
      C: "芙蓉洞",
      D: "黄龙洞"
    },
    hint: "重庆武隆",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "重庆武隆芙蓉洞是世界自然遗产，有'天下第一洞'之称"
  },
  {
    id: 543,
    question: "巴西的基督像位于哪个城市？",
    answer: "B",
    options: {
      A: "圣保罗",
      B: "里约热内卢",
      C: "巴西利亚",
      D: "萨尔瓦多"
    },
    hint: "科尔科瓦杜山",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "基督像位于巴西里约热内卢的科尔科瓦杜山顶，是世界新七大奇迹之一"
  },
  {
    id: 544,
    question: "中国的'天下第一廊'指的是？",
    answer: "D",
    options: {
      A: "颐和园长廊",
      B: "北海公园长廊",
      C: "苏州园林长廊",
      D: "岳阳楼长廊"
    },
    hint: "湖南岳阳",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "岳阳楼的长廊有'天下第一廊'之称"
  },
  {
    id: 545,
    question: "澳大利亚的悉尼歌剧院设计灵感来自什么？",
    answer: "A",
    options: {
      A: "帆船",
      B: "贝壳",
      C: "海浪",
      D: "莲花"
    },
    hint: "建筑外观",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "悉尼歌剧院的设计灵感来自帆船，其独特的帆状造型成为澳大利亚的象征"
  },
  {
    id: 546,
    question: "中国的'天下第一瀑'指的是？",
    answer: "C",
    options: {
      A: "黄果树瀑布",
      B: "壶口瀑布",
      C: "大龙湫瀑布",
      D: "庐山瀑布"
    },
    hint: "浙江雁荡山",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "浙江雁荡山大龙湫瀑布落差197米，有'天下第一瀑'之称"
  },
  {
    id: 547,
    question: "秘鲁的马丘比丘建于哪个文明？",
    answer: "B",
    options: {
      A: "玛雅文明",
      B: "印加文明",
      C: "阿兹特克文明",
      D: "奥尔梅克文明"
    },
    hint: "南美洲古代文明",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "马丘比丘是印加帝国在15世纪建造的古城，有'失落的印加城市'之称"
  },
  {
    id: 548,
    question: "中国的'天下第一秀水'指的是？",
    answer: "D",
    options: {
      A: "西湖",
      B: "太湖",
      C: "洞庭湖",
      D: "千岛湖"
    },
    hint: "浙江杭州",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "浙江千岛湖水质清澈，有'天下第一秀水'之称"
  },
  {
    id: 549,
    question: "美国的国会大厦位于哪个城市？",
    answer: "A",
    options: {
      A: "华盛顿特区",
      B: "纽约",
      C: "费城",
      D: "波士顿"
    },
    hint: "美国首都",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "美国国会大厦位于首都华盛顿特区，是美国国会所在地"
  },
  {
    id: 550,
    question: "中国的'天下第一门'指的是？",
    answer: "C",
    options: {
      A: "天安门",
      B: "午门",
      C: "应天门",
      D: "玄武门"
    },
    hint: "隋唐洛阳城",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "隋唐洛阳城的应天门是古代规格最高的城门，有'天下第一门'之称"
  },
  {
    id: 551,
    question: "日本的清水寺位于哪个城市？",
    answer: "B",
    options: {
      A: "东京",
      B: "京都",
      C: "大阪",
      D: "奈良"
    },
    hint: "古都",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "清水寺位于日本京都，是日本最古老的寺院之一"
  },
  {
    id: 552,
    question: "中国的'天下第一滩'指的是？",
    answer: "D",
    options: {
      A: "三亚亚龙湾",
      B: "厦门鼓浪屿",
      C: "青岛金沙滩",
      D: "北海银滩"
    },
    hint: "广西北海",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "广西北海银滩沙质细腻洁白，有'天下第一滩'之称"
  },
  {
    id: 553,
    question: "德国的科隆大教堂建于哪个时期？",
    answer: "A",
    options: {
      A: "中世纪",
      B: "文艺复兴",
      C: "巴洛克",
      D: "近代"
    },
    hint: "哥特式建筑",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "科隆大教堂始建于1248年，是中世纪欧洲哥特式建筑的代表作"
  },
  {
    id: 554,
    question: "中国的'天下第一峰'指的是？",
    answer: "C",
    options: {
      A: "珠穆朗玛峰",
      B: "乔戈里峰",
      C: "黄山的莲花峰",
      D: "华山的南峰"
    },
    hint: "黄山最高峰",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "黄山莲花峰海拔1864米，是黄山最高峰，有'天下第一峰'之称"
  },
  {
    id: 555,
    question: "西班牙的圣家族大教堂设计师是？",
    answer: "B",
    options: {
      A: "米开朗基罗",
      B: "高迪",
      C: "毕加索",
      D: "达利"
    },
    hint: "加泰罗尼亚建筑师",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "圣家族大教堂是西班牙建筑大师安东尼·高迪的遗作，至今仍在建设中"
  },
  {
    id: 556,
    question: "中国的'天下第一盆景'指的是？",
    answer: "D",
    options: {
      A: "苏州拙政园",
      B: "扬州个园",
      C: "无锡寄畅园",
      D: "如皋水绘园"
    },
    hint: "江苏如皋",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "江苏如皋水绘园有'天下第一盆景'之称"
  },
  {
    id: 557,
    question: "约旦的佩特拉古城是什么颜色的？",
    answer: "A",
    options: {
      A: "玫瑰红",
      B: "土黄色",
      C: "白色",
      D: "灰色"
    },
    hint: "岩石颜色",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "佩特拉古城因岩石在阳光下呈玫瑰红色，被称为'玫瑰古城'"
  },
  {
    id: 558,
    question: "中国的'天下第一村'指的是？",
    answer: "C",
    options: {
      A: "周庄",
      B: "乌镇",
      C: "华西村",
      D: "西递村"
    },
    hint: "江苏江阴",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "江苏江阴华西村是中国农村发展的典型，有'天下第一村'之称"
  },
  {
    id: 559,
    question: "荷兰的风车主要用途是什么？",
    answer: "B",
    options: {
      A: "磨面粉",
      B: "排水",
      C: "发电",
      D: "装饰"
    },
    hint: "荷兰地势低洼",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "荷兰风车主要用于排水，将低洼地区的积水排入河流"
  },
  {
    id: 560,
    question: "中国的'天下第一灯'指的是？",
    answer: "D",
    options: {
      A: "北京宫灯",
      B: "苏州灯彩",
      C: "佛山彩灯",
      D: "自贡灯会"
    },
    hint: "四川自贡",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "四川自贡灯会有'天下第一灯'之称，历史悠久，规模宏大"
  },
  {
    id: 561,
    question: "马来西亚的双子塔曾经是世界第几高楼？",
    answer: "A",
    options: {
      A: "第一",
      B: "第二",
      C: "第三",
      D: "第四"
    },
    hint: "1998-2004年",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "吉隆坡双子塔在1998年至2004年间是世界最高的摩天大楼"
  },
  {
    id: 562,
    question: "中国的'天下第一佛'指的是？",
    answer: "C",
    options: {
      A: "乐山大佛",
      B: "云冈大佛",
      C: "中原大佛",
      D: "灵山大佛"
    },
    hint: "河南平顶山",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "河南平顶山的中原大佛高208米，是世界最高佛像，有'天下第一佛'之称"
  },
  {
    id: 563,
    question: "迪拜的哈利法塔建于哪一年？",
    answer: "B",
    options: {
      A: "2008年",
      B: "2010年",
      C: "2012年",
      D: "2014年"
    },
    hint: "世界最高建筑",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "哈利法塔于2010年建成，高828米，是世界最高建筑"
  },
  {
    id: 564,
    question: "中国的'天下第一石'指的是？",
    answer: "D",
    options: {
      A: "黄山飞来石",
      B: "泰山石敢当",
      C: "鼓浪屿日光岩",
      D: "福建东山风动石"
    },
    hint: "风吹能动",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "福建东山风动石重约200吨，风吹能动但不倒，有'天下第一石'之称"
  },
  {
    id: 565,
    question: "梵蒂冈的圣彼得大教堂建于哪个时期？",
    answer: "A",
    options: {
      A: "文艺复兴",
      B: "中世纪",
      C: "巴洛克",
      D: "罗马时期"
    },
    hint: "多位大师参与设计",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "圣彼得大教堂建于文艺复兴时期，米开朗基罗、拉斐尔等大师参与设计"
  },
  {
    id: 566,
    question: "中国的'天下第一楼'指的是？",
    answer: "C",
    options: {
      A: "黄鹤楼",
      B: "岳阳楼",
      C: "鹤雀楼",
      D: "滕王阁"
    },
    hint: "山西永济",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "山西永济鹤雀楼因王之涣《登鹳雀楼》诗而闻名，有'天下第一楼'之称"
  },
  {
    id: 567,
    question: "智利的复活节岛以什么闻名？",
    answer: "B",
    options: {
      A: "金字塔",
      B: "摩艾石像",
      C: "神庙",
      D: "古城"
    },
    hint: "巨石雕像",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "复活节岛以神秘的摩艾石像闻名，这些石像是岛上原住民的祖先雕像"
  },
  {
    id: 568,
    question: "中国的'天下第一洞房'指的是？",
    answer: "D",
    options: {
      A: "张家界黄龙洞",
      B: "桂林芦笛岩",
      C: "贵州织金洞",
      D: "江西龙宫洞"
    },
    hint: "洞中婚礼场所",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "江西彭泽龙宫洞内有天然形成的'洞房'，有'天下第一洞房'之称"
  },
  {
    id: 569,
    question: "墨西哥的奇琴伊察是什么文明遗址？",
    answer: "A",
    options: {
      A: "玛雅文明",
      B: "阿兹特克文明",
      C: "印加文明",
      D: "奥尔梅克文明"
    },
    hint: "中美洲古代文明",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "奇琴伊察是玛雅文明鼎盛时期的重要城市，以库库尔坎金字塔闻名"
  },
  {
    id: 570,
    question: "中国的'天下第一洞天'指的是？",
    answer: "C",
    options: {
      A: "武当山",
      B: "龙虎山",
      C: "王屋山",
      D: "青城山"
    },
    hint: "道教圣地",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "河南王屋山是道教十大洞天之首，有'天下第一洞天'之称"
  },
  {
    id: 571,
    question: "英国的伦敦塔曾是什么场所？",
    answer: "B",
    options: {
      A: "王宫",
      B: "监狱",
      C: "教堂",
      D: "城堡"
    },
    hint: "关押重要囚犯",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "伦敦塔曾用作堡垒、军械库、国库、铸币厂、宫殿、天文台、避难所和监狱"
  },
  {
    id: 572,
    question: "中国的'天下第一杉'指的是？",
    answer: "D",
    options: {
      A: "黄山迎客松",
      B: "泰山五大夫松",
      C: "庐山三宝树",
      D: "利川水杉王"
    },
    hint: "湖北利川",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "湖北利川的水杉王树龄约600年，有'天下第一杉'之称"
  },
  {
    id: 573,
    question: "希腊的雅典卫城主要供奉哪位神祇？",
    answer: "A",
    options: {
      A: "雅典娜",
      B: "宙斯",
      C: "波塞冬",
      D: "阿波罗"
    },
    hint: "智慧与战争女神",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "雅典卫城是供奉雅典娜女神的神庙，帕特农神庙是其主要建筑"
  },
  {
    id: 574,
    question: "中国的'天下第一汤'指的是？",
    answer: "C",
    options: {
      A: "西安华清池",
      B: "南京汤山温泉",
      C: "安宁温泉",
      D: "从化温泉"
    },
    hint: "云南安宁",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "云南安宁温泉水质优良，明代旅行家徐霞客誉为'天下第一汤'"
  },
  {
    id: 575,
    question: "俄罗斯的冬宫现在是什么博物馆？",
    answer: "B",
    options: {
      A: "普希金博物馆",
      B: "艾尔米塔什博物馆",
      C: "特列季亚科夫画廊",
      D: "俄罗斯博物馆"
    },
    hint: "世界四大博物馆之一",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "冬宫现在是艾尔米塔什博物馆的一部分，是世界四大博物馆之一"
  },
  {
    id: 576,
    question: "中国的'天下第一牡丹'指的是？",
    answer: "D",
    options: {
      A: "洛阳牡丹",
      B: "菏泽牡丹",
      C: "彭州牡丹",
      D: "古县牡丹"
    },
    hint: "山西古县",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "山西古县的三合牡丹有1300多年历史，有'天下第一牡丹'之称"
  },
  {
    id: 577,
    question: "土耳其的棉花堡以什么闻名？",
    answer: "A",
    options: {
      A: "石灰华梯田",
      B: "棉花种植",
      C: "温泉",
      D: "白色建筑"
    },
    hint: "白色石灰岩",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "棉花堡是天然温泉形成的白色石灰华梯田，远看像棉花城堡"
  },
  {
    id: 578,
    question: "中国的'天下第一巷'指的是？",
    answer: "C",
    options: {
      A: "北京胡同",
      B: "上海弄堂",
      C: "天一巷",
      D: "宽窄巷子"
    },
    hint: "湖南崀山",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "湖南崀山天一巷长238.8米，最窄处仅0.33米，有'天下第一巷'之称"
  },
  {
    id: 579,
    question: "美国的拉什莫尔山国家纪念公园雕刻了哪位总统？",
    answer: "B",
    options: {
      A: "富兰克林·罗斯福",
      B: "乔治·华盛顿",
      C: "约翰·亚当斯",
      D: "詹姆斯·麦迪逊"
    },
    hint: "美国开国总统",
    difficulty: 2,
    category: "名胜古迹",
    explanation: "拉什莫尔山雕刻了四位美国总统：华盛顿、杰斐逊、罗斯福和林肯"
  },
  {
    id: 580,
    question: "中国的'天下第一鼓'指的是？",
    answer: "D",
    options: {
      A: "山西威风锣鼓",
      B: "兰州太平鼓",
      C: "开封盘鼓",
      D: "咸阳牛拉鼓"
    },
    hint: "陕西咸阳",
    difficulty: 3,
    category: "名胜古迹",
    explanation: "陕西咸阳牛拉鼓有'天下第一鼓'之称"
  }
];

export default landmarksRiddles;
import { Riddle } from './types'
// 人物传记类灯谜 (100条)
const biographyRiddles: Riddle[] = [
  {
    id: 301,
    question: "哪位科学家提出了相对论？",
    answer: "A",
    options: {
      A: "阿尔伯特·爱因斯坦",
      B: "艾萨克·牛顿",
      C: "伽利略·伽利雷",
      D: "斯蒂芬·霍金"
    },
    hint: "20世纪最伟大的物理学家之一",
    difficulty: 2,
    category: "人物传记",
    explanation: "阿尔伯特·爱因斯坦（1879-1955）提出了狭义相对论和广义相对论"
  },
  {
    id: 302,
    question: "《史记》的作者是？",
    answer: "C",
    options: {
      A: "司马光",
      B: "司马相如",
      C: "司马迁",
      D: "司马懿"
    },
    hint: "西汉史学家",
    difficulty: 2,
    category: "人物传记",
    explanation: "司马迁（前145-前86）创作了中国第一部纪传体通史《史记》"
  },
  {
    id: 303,
    question: "中国第一位皇帝是？",
    answer: "D",
    options: {
      A: "汉武帝",
      B: "唐太宗",
      C: "周武王",
      D: "秦始皇"
    },
    hint: "统一六国",
    difficulty: 1,
    category: "人物传记",
    explanation: "秦始皇嬴政（前259-前210）统一六国，建立秦朝，是中国第一位皇帝"
  },
  {
    id: 304,
    question: "《蒙娜丽莎》的创作者是？",
    answer: "B",
    options: {
      A: "米开朗基罗",
      B: "达·芬奇",
      C: "拉斐尔",
      D: "提香"
    },
    hint: "文艺复兴三杰之一",
    difficulty: 2,
    category: "人物传记",
    explanation: "莱昂纳多·达·芬奇（1452-1519）创作了世界名画《蒙娜丽莎》"
  },
  {
    id: 305,
    question: "哪位航海家完成了首次环球航行？",
    answer: "C",
    options: {
      A: "克里斯托弗·哥伦布",
      B: "瓦斯科·达·伽马",
      C: "费迪南德·麦哲伦",
      D: "詹姆斯·库克"
    },
    hint: "他的船队完成了航行，但本人死于途中",
    difficulty: 3,
    category: "人物传记",
    explanation: "麦哲伦船队（1519-1522）完成了人类历史上第一次环球航行"
  },
  {
    id: 306,
    question: "中国古代著名医学家，《本草纲目》的作者是？",
    answer: "B",
    options: {
      A: "华佗",
      B: "李时珍",
      C: "张仲景",
      D: "扁鹊"
    },
    hint: "明代医药学家",
    difficulty: 2,
    category: "人物传记",
    explanation: "李时珍（1518-1593）著有《本草纲目》，是中国古代著名医药学家"
  },
  {
    id: 307,
    question: "中国改革开放的总设计师是？",
    answer: "D",
    options: {
      A: "毛泽东",
      B: "周恩来",
      C: "刘少奇",
      D: "邓小平"
    },
    hint: "20世纪中国重要领导人",
    difficulty: 2,
    category: "人物传记",
    explanation: "邓小平（1904-1997）是中国改革开放和现代化建设的总设计师"
  },
  {
    id: 308,
    question: "《战争与和平》的作者是？",
    answer: "A",
    options: {
      A: "列夫·托尔斯泰",
      B: "陀思妥耶夫斯基",
      C: "屠格涅夫",
      D: "契诃夫"
    },
    hint: "俄国著名作家",
    difficulty: 2,
    category: "人物传记",
    explanation: "列夫·托尔斯泰（1828-1910）创作了《战争与和平》、《安娜·卡列尼娜》等名著"
  },
  {
    id: 309,
    question: "发现万有引力定律的科学家是？",
    answer: "B",
    options: {
      A: "伽利略",
      B: "牛顿",
      C: "开普勒",
      D: "哥白尼"
    },
    hint: "英国物理学家",
    difficulty: 2,
    category: "人物传记",
    explanation: "艾萨克·牛顿（1643-1727）发现了万有引力定律，建立了经典力学"
  },
  {
    id: 310,
    question: "中国第一位获得诺贝尔奖的科学家是？",
    answer: "C",
    options: {
      A: "钱学森",
      B: "李政道",
      C: "屠呦呦",
      D: "杨振宁"
    },
    hint: "发现青蒿素",
    difficulty: 2,
    category: "人物传记",
    explanation: "屠呦呦（1930-）因发现青蒿素获得2015年诺贝尔生理学或医学奖"
  },
  {
    id: 311,
    question: "电话的发明者是？",
    answer: "D",
    options: {
      A: "托马斯·爱迪生",
      B: "尼古拉·特斯拉",
      C: "亚历山大·格拉汉姆·贝尔",
      D: "亚历山大·贝尔"
    },
    hint: "苏格兰发明家",
    difficulty: 2,
    category: "人物传记",
    explanation: "亚历山大·格拉汉姆·贝尔（1847-1922）于1876年发明了电话"
  },
  {
    id: 312,
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
    category: "人物传记",
    explanation: "李白（701-762）被誉为'诗仙'，是唐代伟大的浪漫主义诗人"
  },
  {
    id: 313,
    question: "美国第一任总统是？",
    answer: "B",
    options: {
      A: "托马斯·杰斐逊",
      B: "乔治·华盛顿",
      C: "亚伯拉罕·林肯",
      D: "本杰明·富兰克林"
    },
    hint: "美国国父之一",
    difficulty: 2,
    category: "人物传记",
    explanation: "乔治·华盛顿（1732-1799）是美国第一任总统，被誉为美国国父"
  },
  {
    id: 314,
    question: "进化论的创立者是？",
    answer: "C",
    options: {
      A: "孟德尔",
      B: "拉马克",
      C: "达尔文",
      D: "华莱士"
    },
    hint: "英国生物学家",
    difficulty: 2,
    category: "人物传记",
    explanation: "查尔斯·达尔文（1809-1882）创立了进化论，著有《物种起源》"
  },
  {
    id: 315,
    question: "中国古代'书圣'指的是？",
    answer: "D",
    options: {
      A: "颜真卿",
      B: "柳公权",
      C: "欧阳询",
      D: "王羲之"
    },
    hint: "东晋书法家",
    difficulty: 2,
    category: "人物传记",
    explanation: "王羲之（303-361）被誉为'书圣'，其《兰亭序》被称为'天下第一行书'"
  },
  {
    id: 316,
    question: "发现美洲大陆的航海家是？",
    answer: "A",
    options: {
      A: "克里斯托弗·哥伦布",
      B: "费迪南德·麦哲伦",
      C: "瓦斯科·达·伽马",
      D: "詹姆斯·库克"
    },
    hint: "1492年到达美洲",
    difficulty: 2,
    category: "人物传记",
    explanation: "克里斯托弗·哥伦布（1451-1506）于1492年发现美洲大陆"
  },
  {
    id: 317,
    question: "中国古代'画圣'指的是？",
    answer: "B",
    options: {
      A: "顾恺之",
      B: "吴道子",
      C: "阎立本",
      D: "张择端"
    },
    hint: "唐代画家",
    difficulty: 2,
    category: "人物传记",
    explanation: "吴道子（约680-759）被誉为'画圣'，擅长佛教人物画"
  },
  {
    id: 318,
    question: "青霉素的发现者是？",
    answer: "C",
    options: {
      A: "路易·巴斯德",
      B: "罗伯特·科赫",
      C: "亚历山大·弗莱明",
      D: "埃尔利希"
    },
    hint: "苏格兰细菌学家",
    difficulty: 2,
    category: "人物传记",
    explanation: "亚历山大·弗莱明（1881-1955）于1928年发现了青霉素"
  },
  {
    id: 319,
    question: "中国古代'医圣'指的是？",
    answer: "D",
    options: {
      A: "华佗",
      B: "扁鹊",
      C: "孙思邈",
      D: "张仲景"
    },
    hint: "东汉医学家",
    difficulty: 2,
    category: "人物传记",
    explanation: "张仲景（150-219）著有《伤寒杂病论》，被尊为'医圣'"
  },
  {
    id: 320,
    question: "苏联的创立者是？",
    answer: "A",
    options: {
      A: "列宁",
      B: "斯大林",
      C: "托洛茨基",
      D: "赫鲁晓夫"
    },
    hint: "十月革命领导人",
    difficulty: 2,
    category: "人物传记",
    explanation: "弗拉基米尔·列宁（1870-1924）领导十月革命，创立了苏联"
  },
  {
    id: 321,
    question: "中国古代'药王'指的是？",
    answer: "B",
    options: {
      A: "华佗",
      B: "孙思邈",
      C: "李时珍",
      D: "扁鹊"
    },
    hint: "唐代医学家",
    difficulty: 2,
    category: "人物传记",
    explanation: "孙思邈（581-682）著有《千金要方》，被尊为'药王'"
  },
  {
    id: 322,
    question: "电灯的发明者是？",
    answer: "C",
    options: {
      A: "尼古拉·特斯拉",
      B: "约瑟夫·斯旺",
      C: "托马斯·爱迪生",
      D: "亚历山大·贝尔"
    },
    hint: "美国发明家",
    difficulty: 2,
    category: "人物传记",
    explanation: "托马斯·爱迪生（1847-1931）发明了实用电灯泡"
  },
  {
    id: 323,
    question: "中国古代'茶圣'指的是？",
    answer: "D",
    options: {
      A: "陆游",
      B: "苏轼",
      C: "蔡襄",
      D: "陆羽"
    },
    hint: "唐代茶学家",
    difficulty: 2,
    category: "人物传记",
    explanation: "陆羽（733-804）著有《茶经》，被尊为'茶圣'"
  },
  {
    id: 324,
    question: "法国大革命的领袖是？",
    answer: "A",
    options: {
      A: "罗伯斯庇尔",
      B: "拿破仑",
      C: "路易十六",
      D: "丹东"
    },
    hint: "雅各宾派领导人",
    difficulty: 3,
    category: "人物传记",
    explanation: "马克西米连·罗伯斯庇尔（1758-1794）是法国大革命时期雅各宾派的主要领导人"
  },
  {
    id: 325,
    question: "中国古代'科圣'指的是？",
    answer: "B",
    options: {
      A: "祖冲之",
      B: "张衡",
      C: "郭守敬",
      D: "沈括"
    },
    hint: "东汉科学家",
    difficulty: 2,
    category: "人物传记",
    explanation: "张衡（78-139）发明了地动仪和浑天仪，被尊为'科圣'"
  },
  {
    id: 326,
    question: "相对论的创立者是？",
    answer: "C",
    options: {
      A: "牛顿",
      B: "麦克斯韦",
      C: "爱因斯坦",
      D: "普朗克"
    },
    hint: "德裔美籍物理学家",
    difficulty: 2,
    category: "人物传记",
    explanation: "阿尔伯特·爱因斯坦创立了相对论，改变了人类对时空的认识"
  },
  {
    id: 327,
    question: "中国古代'酒圣'指的是？",
    answer: "D",
    options: {
      A: "刘伶",
      B: "李白",
      C: "陶渊明",
      D: "杜康"
    },
    hint: "传说中酿酒的发明者",
    difficulty: 2,
    category: "人物传记",
    explanation: "杜康被传为中国古代酿酒的发明者，被尊为'酒圣'"
  },
  {
    id: 328,
    question: "印度独立运动的领导人是？",
    answer: "A",
    options: {
      A: "甘地",
      B: "尼赫鲁",
      C: "真纳",
      D: "泰戈尔"
    },
    hint: "非暴力不合作运动",
    difficulty: 2,
    category: "人物传记",
    explanation: "莫罕达斯·甘地（1869-1948）领导了印度独立运动，倡导非暴力不合作"
  },
  {
    id: 329,
    question: "中国古代'武圣'指的是？",
    answer: "B",
    options: {
      A: "岳飞",
      B: "关羽",
      C: "张飞",
      D: "赵云"
    },
    hint: "三国时期蜀汉名将",
    difficulty: 2,
    category: "人物传记",
    explanation: "关羽因其忠义勇武，被后世尊为'武圣'"
  },
  {
    id: 330,
    question: "计算机科学之父是？",
    answer: "C",
    options: {
      A: "比尔·盖茨",
      B: "史蒂夫·乔布斯",
      C: "艾伦·图灵",
      D: "约翰·冯·诺依曼"
    },
    hint: "英国数学家",
    difficulty: 2,
    category: "人物传记",
    explanation: "艾伦·图灵（1912-1954）被誉为计算机科学之父，提出图灵机概念"
  },
  {
    id: 331,
    question: "中国古代'商圣'指的是？",
    answer: "D",
    options: {
      A: "吕不韦",
      B: "沈万三",
      C: "胡雪岩",
      D: "范蠡"
    },
    hint: "春秋时期政治家、商人",
    difficulty: 2,
    category: "人物传记",
    explanation: "范蠡在帮助越王勾践灭吴后经商致富，被尊为'商圣'"
  },
  {
    id: 332,
    question: "英国首相丘吉尔领导了哪个时期？",
    answer: "A",
    options: {
      A: "第二次世界大战",
      B: "第一次世界大战",
      C: "冷战时期",
      D: "维多利亚时代"
    },
    hint: "战时首相",
    difficulty: 2,
    category: "人物传记",
    explanation: "温斯顿·丘吉尔（1874-1965）在二战期间担任英国首相，领导英国取得战争胜利"
  },
  {
    id: 333,
    question: "中国古代'谋圣'指的是？",
    answer: "B",
    options: {
      A: "诸葛亮",
      B: "张良",
      C: "孙武",
      D: "范增"
    },
    hint: "汉初谋士",
    difficulty: 2,
    category: "人物传记",
    explanation: "张良辅佐刘邦建立汉朝，被尊为'谋圣'"
  },
  {
    id: 334,
    question: "提出日心说的天文学家是？",
    answer: "C",
    options: {
      A: "托勒密",
      B: "开普勒",
      C: "哥白尼",
      D: "伽利略"
    },
    hint: "波兰天文学家",
    difficulty: 2,
    category: "人物传记",
    explanation: "尼古拉·哥白尼（1473-1543）提出了日心说，著有《天体运行论》"
  },
  {
    id: 335,
    question: "中国古代'史圣'指的是？",
    answer: "D",
    options: {
      A: "班固",
      B: "陈寿",
      C: "司马光",
      D: "司马迁"
    },
    hint: "《史记》作者",
    difficulty: 2,
    category: "人物传记",
    explanation: "司马迁创作《史记》，被尊为'史圣'"
  },
  {
    id: 336,
    question: "南非第一位黑人总统是？",
    answer: "A",
    options: {
      A: "纳尔逊·曼德拉",
      B: "德克勒克",
      C: "姆贝基",
      D: "祖马"
    },
    hint: "反种族隔离斗士",
    difficulty: 2,
    category: "人物传记",
    explanation: "纳尔逊·曼德拉（1918-2013）是南非第一位黑人总统，反种族隔离斗士"
  },
  {
    id: 337,
    question: "中国古代'算圣'指的是？",
    answer: "B",
    options: {
      A: "祖冲之",
      B: "刘徽",
      C: "秦九韶",
      D: "杨辉"
    },
    hint: "三国时期数学家",
    difficulty: 3,
    category: "人物传记",
    explanation: "刘徽著有《九章算术注》，被尊为'算圣'"
  },
  {
    id: 338,
    question: "微生物学之父是？",
    answer: "C",
    options: {
      A: "罗伯特·科赫",
      B: "约瑟夫·李斯特",
      C: "路易·巴斯德",
      D: "亚历山大·弗莱明"
    },
    hint: "法国微生物学家",
    difficulty: 2,
    category: "人物传记",
    explanation: "路易·巴斯德（1822-1895）是微生物学的奠基人，发明了巴氏消毒法"
  },
  {
    id: 339,
    question: "中国古代'棋圣'指的是？",
    answer: "D",
    options: {
      A: "范西屏",
      B: "施襄夏",
      C: "黄龙士",
      D: "黄龙士"
    },
    hint: "清代围棋国手",
    difficulty: 3,
    category: "人物传记",
    explanation: "黄龙士是清代围棋国手，被尊为'棋圣'"
  },
  {
    id: 340,
    question: "《共产党宣言》的作者是？",
    answer: "A",
    options: {
      A: "马克思和恩格斯",
      B: "列宁和斯大林",
      C: "毛泽东和周恩来",
      D: "托洛茨基和布哈林"
    },
    hint: "德国思想家",
    difficulty: 2,
    category: "人物传记",
    explanation: "卡尔·马克思（1818-1883）和弗里德里希·恩格斯（1820-1895）合著了《共产党宣言》"
  },
  {
    id: 341,
    question: "中国古代'乐圣'指的是？",
    answer: "B",
    options: {
      A: "嵇康",
      B: "李龟年",
      C: "朱载堉",
      D: "师旷"
    },
    hint: "唐代音乐家",
    difficulty: 2,
    category: "人物传记",
    explanation: "李龟年是唐代著名音乐家，被尊为'乐圣'"
  },
  {
    id: 342,
    question: "原子弹之父是？",
    answer: "C",
    options: {
      A: "爱因斯坦",
      B: "费米",
      C: "奥本海默",
      D: "玻尔"
    },
    hint: "曼哈顿计划负责人",
    difficulty: 3,
    category: "人物传记",
    explanation: "罗伯特·奥本海默（1904-1967）领导了曼哈顿计划，被称为原子弹之父"
  },
  {
    id: 343,
    question: "中国古代'字圣'指的是？",
    answer: "D",
    options: {
      A: "许慎",
      B: "蔡邕",
      C: "王羲之",
      D: "仓颉"
    },
    hint: "传说中汉字的创造者",
    difficulty: 2,
    category: "人物传记",
    explanation: "仓颉被传为汉字的创造者，被尊为'字圣'"
  },
  {
    id: 344,
    question: "英国女王伊丽莎白一世统治时期被称为？",
    answer: "A",
    options: {
      A: "黄金时代",
      B: "维多利亚时代",
      C: "都铎王朝",
      D: "斯图亚特王朝"
    },
    hint: "16世纪英国",
    difficulty: 3,
    category: "人物传记",
    explanation: "伊丽莎白一世（1533-1603）统治时期被称为英国的黄金时代"
  },
  {
    id: 345,
    question: "中国古代'兵圣'指的是？",
    answer: "B",
    options: {
      A: "吴起",
      B: "孙武",
      C: "孙膑",
      D: "韩信"
    },
    hint: "《孙子兵法》作者",
    difficulty: 2,
    category: "人物传记",
    explanation: "孙武著有《孙子兵法》，被尊为'兵圣'"
  },
  {
    id: 346,
    question: "美国民权运动领袖是？",
    answer: "C",
    options: {
      A: "马尔科姆·X",
      B: "罗莎·帕克斯",
      C: "马丁·路德·金",
      D: "杰西·杰克逊"
    },
    hint: "'我有一个梦想'演讲",
    difficulty: 2,
    category: "人物传记",
    explanation: "马丁·路德·金（1929-1968）是美国民权运动领袖，以'我有一个梦想'演讲闻名"
  },
  {
    id: 347,
    question: "中国古代'农圣'指的是？",
    answer: "D",
    options: {
      A: "徐光启",
      B: "宋应星",
      C: "王祯",
      D: "贾思勰"
    },
    hint: "北魏农学家",
    difficulty: 2,
    category: "人物传记",
    explanation: "贾思勰著有《齐民要术》，被尊为'农圣'"
  },
  {
    id: 348,
    question: "《神曲》的作者是？",
    answer: "A",
    options: {
      A: "但丁",
      B: "彼特拉克",
      C: "薄伽丘",
      D: "莎士比亚"
    },
    hint: "意大利诗人",
    difficulty: 2,
    category: "人物传记",
    explanation: "但丁·阿利吉耶里（1265-1321）创作了《神曲》，被誉为文艺复兴的先驱"
  },
  {
    id: 349,
    question: "中国古代'塑圣'指的是？",
    answer: "B",
    options: {
      A: "阎立本",
      B: "杨惠之",
      C: "戴逵",
      D: "吴道子"
    },
    hint: "唐代雕塑家",
    difficulty: 3,
    category: "人物传记",
    explanation: "杨惠之是唐代著名雕塑家，被尊为'塑圣'"
  },
  {
    id: 350,
    question: "俄国文学巨匠，《罪与罚》的作者是？",
    answer: "C",
    options: {
      A: "托尔斯泰",
      B: "屠格涅夫",
      C: "陀思妥耶夫斯基",
      D: "契诃夫"
    },
    hint: "19世纪俄国作家",
    difficulty: 3,
    category: "人物传记",
    explanation: "费奥多尔·陀思妥耶夫斯基（1821-1881）创作了《罪与罚》、《卡拉马佐夫兄弟》等名著"
  },
  {
    id: 351,
    question: "中国古代'草圣'指的是？",
    answer: "D",
    options: {
      A: "怀素",
      B: "王献之",
      C: "黄庭坚",
      D: "张旭"
    },
    hint: "唐代书法家",
    difficulty: 2,
    category: "人物传记",
    explanation: "张旭擅长草书，被尊为'草圣'"
  },
  {
    id: 352,
    question: "美国发明家，拥有1000多项专利的是？",
    answer: "A",
    options: {
      A: "托马斯·爱迪生",
      B: "尼古拉·特斯拉",
      C: "亚历山大·贝尔",
      D: "莱特兄弟"
    },
    hint: "电灯发明者",
    difficulty: 2,
    category: "人物传记",
    explanation: "托马斯·爱迪生拥有1093项专利，是历史上最多产的发明家之一"
  },
  {
    id: 353,
    question: "中国古代'词圣'指的是？",
    answer: "B",
    options: {
      A: "辛弃疾",
      B: "苏轼",
      C: "柳永",
      D: "李清照"
    },
    hint: "宋代文学家",
    difficulty: 2,
    category: "人物传记",
    explanation: "苏轼是宋代豪放派词人代表，被誉为'词圣'"
  },
  {
    id: 354,
    question: "现代物理学奠基人，量子力学创始人之一是？",
    answer: "C",
    options: {
      A: "爱因斯坦",
      B: "玻尔",
      C: "普朗克",
      D: "海森堡"
    },
    hint: "德国物理学家",
    difficulty: 3,
    category: "人物传记",
    explanation: "马克斯·普朗克（1858-1947）提出量子理论，是现代物理学的奠基人之一"
  },
  {
    id: 355,
    question: "中国古代'曲圣'指的是？",
    answer: "D",
    options: {
      A: "马致远",
      B: "白朴",
      C: "郑光祖",
      D: "关汉卿"
    },
    hint: "元曲四大家之一",
    difficulty: 2,
    category: "人物传记",
    explanation: "关汉卿是元代著名杂剧作家，被誉为'曲圣'"
  },
  {
    id: 356,
    question: "英国生物学家，DNA双螺旋结构的发现者是？",
    answer: "A",
    options: {
      A: "沃森和克里克",
      B: "孟德尔和摩尔根",
      C: "达尔文和华莱士",
      D: "巴斯德和科赫"
    },
    hint: "1953年发现",
    difficulty: 3,
    category: "人物传记",
    explanation: "詹姆斯·沃森（1928-）和弗朗西斯·克里克（1916-2004）于1953年发现了DNA的双螺旋结构"
  },
  {
    id: 357,
    question: "中国古代'文圣'指的是？",
    answer: "B",
    options: {
      A: "韩愈",
      B: "孔子",
      C: "欧阳修",
      D: "孟子"
    },
    hint: "儒家学派创始人",
    difficulty: 2,
    category: "人物传记",
    explanation: "孔子是儒家学派创始人，被尊为'文圣'"
  },
  {
    id: 358,
    question: "《哈姆雷特》的作者是？",
    answer: "C",
    options: {
      A: "歌德",
      B: "雨果",
      C: "莎士比亚",
      D: "托尔斯泰"
    },
    hint: "英国文艺复兴时期剧作家",
    difficulty: 2,
    category: "人物传记",
    explanation: "威廉·莎士比亚（1564-1616）创作了《哈姆雷特》、《罗密欧与朱丽叶》等经典剧作"
  },
  {
    id: 359,
    question: "中国古代'智圣'指的是？",
    answer: "D",
    options: {
      A: "张良",
      B: "范增",
      C: "刘伯温",
      D: "诸葛亮"
    },
    hint: "三国时期蜀汉丞相",
    difficulty: 2,
    category: "人物传记",
    explanation: "诸葛亮以智谋著称，被尊为'智圣'"
  },
  {
    id: 360,
    question: "法国启蒙思想家，《社会契约论》的作者是？",
    answer: "A",
    options: {
      A: "卢梭",
      B: "伏尔泰",
      C: "孟德斯鸠",
      D: "狄德罗"
    },
    hint: "18世纪法国思想家",
    difficulty: 3,
    category: "人物传记",
    explanation: "让-雅克·卢梭（1712-1778）是法国启蒙思想家，著有《社会契约论》"
  },
  {
    id: 361,
    question: "中国古代'法圣'指的是？",
    answer: "B",
    options: {
      A: "韩非",
      B: "商鞅",
      C: "李斯",
      D: "管仲"
    },
    hint: "战国时期法家代表人物",
    difficulty: 2,
    category: "人物传记",
    explanation: "商鞅在秦国实行变法，被尊为'法圣'"
  },
  {
    id: 362,
    question: "美国物理学家，曼哈顿计划参与者，中国导弹之父是？",
    answer: "C",
    options: {
      A: "李政道",
      B: "杨振宁",
      C: "钱学森",
      D: "邓稼先"
    },
    hint: "中国航天事业奠基人",
    difficulty: 2,
    category: "人物传记",
    explanation: "钱学森（1911-2009）是中国航天事业的奠基人，被誉为中国导弹之父"
  },
  {
    id: 363,
    question: "中国古代'道圣'指的是？",
    answer: "D",
    options: {
      A: "庄子",
      B: "列子",
      C: "文子",
      D: "老子"
    },
    hint: "道家学派创始人",
    difficulty: 2,
    category: "人物传记",
    explanation: "老子是道家学派创始人，被尊为'道圣'"
  },
  {
    id: 364,
    question: "英国经济学家，《国富论》的作者是？",
    answer: "A",
    options: {
      A: "亚当·斯密",
      B: "凯恩斯",
      C: "李嘉图",
      D: "马尔萨斯"
    },
    hint: "现代经济学之父",
    difficulty: 2,
    category: "人物传记",
    explanation: "亚当·斯密（1723-1790）著有《国富论》，被誉为现代经济学之父"
  },
  {
    id: 365,
    question: "中国古代'墨圣'指的是？",
    answer: "B",
    options: {
      A: "韩非",
      B: "墨子",
      C: "荀子",
      D: "惠施"
    },
    hint: "墨家学派创始人",
    difficulty: 2,
    category: "人物传记",
    explanation: "墨子是墨家学派创始人，被尊为'墨圣'"
  },
  {
    id: 366,
    question: "俄国沙皇，实行西化改革的是？",
    answer: "C",
    options: {
      A: "伊凡四世",
      B: "叶卡捷琳娜二世",
      C: "彼得一世",
      D: "亚历山大二世"
    },
    hint: "彼得大帝",
    difficulty: 2,
    category: "人物传记",
    explanation: "彼得一世（1672-1725）实行西化改革，使俄国走向现代化，被称为彼得大帝"
  },
  {
    id: 367,
    question: "中国古代'佛圣'指的是？",
    answer: "D",
    options: {
      A: "鉴真",
      B: "慧能",
      C: "法显",
      D: "玄奘"
    },
    hint: "唐代高僧",
    difficulty: 2,
    category: "人物传记",
    explanation: "玄奘西行取经，翻译佛经，被尊为'佛圣'"
  },
  {
    id: 368,
    question: "德国作曲家，音乐史上最重要的人物之一，耳聋后仍创作的是？",
    answer: "A",
    options: {
      A: "贝多芬",
      B: "巴赫",
      C: "莫扎特",
      D: "海顿"
    },
    hint: "创作《第九交响曲》",
    difficulty: 2,
    category: "人物传记",
    explanation: "路德维希·凡·贝多芬（1770-1827）是德国作曲家，创作了《第九交响曲》等不朽作品"
  },
  {
    id: 369,
    question: "中国古代'剑圣'指的是？",
    answer: "B",
    options: {
      A: "荆轲",
      B: "裴旻",
      C: "聂政",
      D: "李白"
    },
    hint: "唐代剑术家",
    difficulty: 3,
    category: "人物传记",
    explanation: "裴旻是唐代著名剑术家，被尊为'剑圣'"
  },
  {
    id: 370,
    question: "美国作家，《老人与海》的作者是？",
    answer: "C",
    options: {
      A: "马克·吐温",
      B: "菲茨杰拉德",
      C: "海明威",
      D: "福克纳"
    },
    hint: "诺贝尔文学奖得主",
    difficulty: 2,
    category: "人物传记",
    explanation: "欧内斯特·海明威（1899-1961）创作了《老人与海》，获诺贝尔文学奖"
  },
  {
    id: 371,
    question: "中国古代'棋仙'指的是？",
    answer: "D",
    options: {
      A: "顾师言",
      B: "贾玄",
      C: "刘仲甫",
      D: "王积薪"
    },
    hint: "唐代围棋国手",
    difficulty: 3,
    category: "人物传记",
    explanation: "王积薪是唐代围棋国手，被尊为'棋仙'"
  },
  {
    id: 372,
    question: "意大利探险家，证明哥伦布发现的是新大陆的是？",
    answer: "A",
    options: {
      A: "亚美利哥·维斯普奇",
      B: "哥伦布",
      C: "麦哲伦",
      D: "达·伽马"
    },
    hint: "美洲以其名字命名",
    difficulty: 3,
    category: "人物传记",
    explanation: "亚美利哥·维斯普奇（1454-1512）证明了哥伦布发现的是新大陆，美洲以其名字命名"
  },
  {
    id: 373,
    question: "中国古代'画仙'指的是？",
    answer: "B",
    options: {
      A: "阎立本",
      B: "顾恺之",
      C: "吴道子",
      D: "张僧繇"
    },
    hint: "东晋画家",
    difficulty: 2,
    category: "人物传记",
    explanation: "顾恺之是东晋著名画家，被尊为'画仙'"
  },
  {
    id: 374,
    question: "英国物理学家，电磁学理论的奠基人是？",
    answer: "C",
    options: {
      A: "法拉第",
      B: "安培",
      C: "麦克斯韦",
      D: "赫兹"
    },
    hint: "麦克斯韦方程组",
    difficulty: 3,
    category: "人物传记",
    explanation: "詹姆斯·克拉克·麦克斯韦（1831-1879）建立了电磁学理论，提出了麦克斯韦方程组"
  },
  {
    id: 375,
    question: "中国古代'诗佛'指的是？",
    answer: "D",
    options: {
      A: "孟浩然",
      B: "韦应物",
      C: "柳宗元",
      D: "王维"
    },
    hint: "唐代山水田园诗人",
    difficulty: 2,
    category: "人物传记",
    explanation: "王维诗中有禅意，被尊为'诗佛'"
  },
  {
    id: 376,
    question: "法国画家，印象派代表人物是？",
    answer: "A",
    options: {
      A: "莫奈",
      B: "梵高",
      C: "塞尚",
      D: "雷诺阿"
    },
    hint: "《日出·印象》",
    difficulty: 2,
    category: "人物传记",
    explanation: "克劳德·莫奈（1840-1926）是印象派代表人物，创作了《日出·印象》"
  },
  {
    id: 377,
    question: "中国古代'诗鬼'指的是？",
    answer: "B",
    options: {
      A: "李商隐",
      B: "李贺",
      C: "杜牧",
      D: "温庭筠"
    },
    hint: "唐代诗人",
    difficulty: 2,
    category: "人物传记",
    explanation: "李贺的诗风奇诡，被称为'诗鬼'"
  },
  {
    id: 378,
    question: "波兰科学家，两次获得诺贝尔奖的是？",
    answer: "C",
    options: {
      A: "爱因斯坦",
      B: "玻尔",
      C: "居里夫人",
      D: "普朗克"
    },
    hint: "放射性研究",
    difficulty: 2,
    category: "人物传记",
    explanation: "玛丽·居里（1867-1934）发现镭和钋，是唯一获得两个不同学科诺贝尔奖的科学家"
  },
  {
    id: 379,
    question: "中国古代'诗魔'指的是？",
    answer: "D",
    options: {
      A: "杜甫",
      B: "李白",
      C: "李商隐",
      D: "白居易"
    },
    hint: "唐代现实主义诗人",
    difficulty: 2,
    category: "人物传记",
    explanation: "白居易作诗刻苦，被称为'诗魔'"
  },
  {
    id: 380,
    question: "奥地利心理学家，精神分析学派创始人是？",
    answer: "A",
    options: {
      A: "弗洛伊德",
      B: "荣格",
      C: "阿德勒",
      D: "弗洛姆"
    },
    hint: "《梦的解析》",
    difficulty: 2,
    category: "人物传记",
    explanation: "西格蒙德·弗洛伊德（1856-1939）创立了精神分析学派，著有《梦的解析》"
  },
  {
    id: 381,
    question: "中国古代'诗豪'指的是？",
    answer: "B",
    options: {
      A: "王昌龄",
      B: "刘禹锡",
      C: "高适",
      D: "岑参"
    },
    hint: "唐代诗人",
    difficulty: 2,
    category: "人物传记",
    explanation: "刘禹锡诗风豪迈，被称为'诗豪'"
  },
  {
    id: 382,
    question: "美国企业家，苹果公司联合创始人是？",
    answer: "C",
    options: {
      A: "比尔·盖茨",
      B: "史蒂夫·鲍尔默",
      C: "史蒂夫·乔布斯",
      D: "拉里·埃里森"
    },
    hint: "iPhone发明者",
    difficulty: 2,
    category: "人物传记",
    explanation: "史蒂夫·乔布斯（1955-2011）是苹果公司联合创始人，引领了个人电脑和智能手机革命"
  },
  {
    id: 383,
    question: "中国古代'诗杰'指的是？",
    answer: "D",
    options: {
      A: "杨炯",
      B: "卢照邻",
      C: "骆宾王",
      D: "王勃"
    },
    hint: "初唐四杰之一",
    difficulty: 2,
    category: "人物传记",
    explanation: "王勃是初唐四杰之一，被称为'诗杰'"
  },
  {
    id: 384,
    question: "英国作家，《傲慢与偏见》的作者是？",
    answer: "A",
    options: {
      A: "简·奥斯汀",
      B: "勃朗特姐妹",
      C: "狄更斯",
      D: "莎士比亚"
    },
    hint: "19世纪英国女作家",
    difficulty: 2,
    category: "人物传记",
    explanation: "简·奥斯汀（1775-1817）创作了《傲慢与偏见》、《理智与情感》等经典小说"
  },
  {
    id: 385,
    question: "中国古代'诗骨'指的是？",
    answer: "B",
    options: {
      A: "杜甫",
      B: "陈子昂",
      C: "韩愈",
      D: "柳宗元"
    },
    hint: "唐代文学家",
    difficulty: 3,
    category: "人物传记",
    explanation: "陈子昂诗风刚健，被称为'诗骨'"
  },
  {
    id: 386,
    question: "美国民权运动领袖，'我不是一个梦想家'演讲者是？",
    answer: "C",
    options: {
      A: "马丁·路德·金",
      B: "罗莎·帕克斯",
      C: "马尔科姆·X",
      D: "杰西·杰克逊"
    },
    hint: "非裔美国穆斯林",
    difficulty: 3,
    category: "人物传记",
    explanation: "马尔科姆·X（1925-1965）是美国民权运动领袖，以激进主张闻名"
  },
  {
    id: 387,
    question: "中国古代'诗狂'指的是？",
    answer: "D",
    options: {
      A: "孟郊",
      B: "贾岛",
      C: "张籍",
      D: "贺知章"
    },
    hint: "唐代诗人",
    difficulty: 2,
    category: "人物传记",
    explanation: "贺知章性格豪放，被称为'诗狂'"
  },
  {
    id: 388,
    question: "德国哲学家，辩证法的集大成者是？",
    answer: "A",
    options: {
      A: "黑格尔",
      B: "康德",
      C: "尼采",
      D: "叔本华"
    },
    hint: "《精神现象学》",
    difficulty: 3,
    category: "人物传记",
    explanation: "格奥尔格·威廉·弗里德里希·黑格尔（1770-1831）是德国哲学家，辩证法的大师"
  },
  {
    id: 389,
    question: "中国古代'诗囚'指的是？",
    answer: "B",
    options: {
      A: "贾岛",
      B: "孟郊和贾岛",
      C: "李贺",
      D: "卢延让"
    },
    hint: "两位苦吟诗人",
    difficulty: 3,
    category: "人物传记",
    explanation: "孟郊和贾岛都以苦吟著称，被称为'诗囚'"
  },
  {
    id: 390,
    question: "英国物理学家，发明了反射望远镜的是？",
    answer: "C",
    options: {
      A: "伽利略",
      B: "开普勒",
      C: "牛顿",
      D: "哈勃"
    },
    hint: "万有引力发现者",
    difficulty: 2,
    category: "人物传记",
    explanation: "艾萨克·牛顿发明了反射望远镜，改进了天文观测技术"
  },
  {
    id: 391,
    question: "中国古代'诗奴'指的是？",
    answer: "D",
    options: {
      A: "孟郊",
      B: "李贺",
      C: "卢延让",
      D: "贾岛"
    },
    hint: "唐代苦吟诗人",
    difficulty: 3,
    category: "人物传记",
    explanation: "贾岛作诗刻苦，被称为'诗奴'"
  },
  {
    id: 392,
    question: "法国作家，《悲惨世界》的作者是？",
    answer: "A",
    options: {
      A: "雨果",
      B: "巴尔扎克",
      C: "大仲马",
      D: "福楼拜"
    },
    hint: "19世纪法国文学家",
    difficulty: 2,
    category: "人物传记",
    explanation: "维克多·雨果（1802-1885）创作了《悲惨世界》、《巴黎圣母院》等名著"
  },
  {
    id: 393,
    question: "中国古代'诗佛'除了王维，还有谁？",
    answer: "B",
    options: {
      A: "孟浩然",
      B: "无可",
      C: "韦应物",
      D: "皎然"
    },
    hint: "唐代诗僧",
    difficulty: 3,
    category: "人物传记",
    explanation: "无可（贾岛堂弟）也是唐代著名诗僧，被称为'诗佛'"
  },
  {
    id: 394,
    question: "美国开国元勋，《独立宣言》主要起草人是？",
    answer: "C",
    options: {
      A: "华盛顿",
      B: "富兰克林",
      C: "杰斐逊",
      D: "亚当斯"
    },
    hint: "美国第三任总统",
    difficulty: 2,
    category: "人物传记",
    explanation: "托马斯·杰斐逊（1743-1826）是《独立宣言》的主要起草人，美国第三任总统"
  },
  {
    id: 395,
    question: "中国古代'诗瓢'指的是？",
    answer: "D",
    options: {
      A: "齐己",
      B: "贯休",
      C: "寒山",
      D: "唐求"
    },
    hint: "唐代隐逸诗人",
    difficulty: 3,
    category: "人物传记",
    explanation: "唐求作诗后投入瓢中，被称为'诗瓢'"
  },
  {
    id: 396,
    question: "俄国作家，《钢铁是怎样炼成的》作者是？",
    answer: "A",
    options: {
      A: "奥斯特洛夫斯基",
      B: "高尔基",
      C: "契诃夫",
      D: "屠格涅夫"
    },
    hint: "苏联作家",
    difficulty: 2,
    category: "人物传记",
    explanation: "尼古拉·奥斯特洛夫斯基（1904-1936）创作了《钢铁是怎样炼成的》"
  },
  {
    id: 397,
    question: "中国古代'诗窖'指的是？",
    answer: "B",
    options: {
      A: "冯延巳",
      B: "王仁裕",
      C: "韦庄",
      D: "温庭筠"
    },
    hint: "五代诗人",
    difficulty: 3,
    category: "人物传记",
    explanation: "王仁裕作诗万首，被称为'诗窖'"
  },
  {
    id: 398,
    question: "意大利科学家，近代实验科学奠基人是？",
    answer: "C",
    options: {
      A: "布鲁诺",
      B: "哥白尼",
      C: "伽利略",
      D: "开普勒"
    },
    hint: "改进望远镜",
    difficulty: 2,
    category: "人物传记",
    explanation: "伽利略·伽利雷（1564-1642）改进了望远镜，为近代实验科学奠定了基础"
  },
  {
    id: 399,
    question: "中国古代'诗虎'指的是？",
    answer: "D",
    options: {
      A: "罗隐",
      B: "皮日休",
      C: "陆龟蒙",
      D: "罗邺"
    },
    hint: "唐代诗人",
    difficulty: 3,
    category: "人物传记",
    explanation: "罗邺诗才敏捷，被称为'诗虎'"
  },
  {
    id: 400,
    question: "中国现代文学奠基人，《狂人日记》作者是？",
    answer: "A",
    options: {
      A: "鲁迅",
      B: "胡适",
      C: "郭沫若",
      D: "茅盾"
    },
    hint: "周树人",
    difficulty: 2,
    category: "人物传记",
    explanation: "鲁迅（1881-1936）创作了《狂人日记》、《阿Q正传》等作品，是中国现代文学的奠基人"
  }
];

export default biographyRiddles;
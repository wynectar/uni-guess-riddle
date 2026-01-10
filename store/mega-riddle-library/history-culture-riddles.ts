import { Riddle } from './types'
// 历史文化类灯谜 (120条)
const historyCultureRiddles: Riddle[] = [
  {
    id: 101,
    question: "中国古代四大发明不包括？",
    answer: "C",
    options: {
      A: "造纸术",
      B: "印刷术",
      C: "算盘",
      D: "指南针"
    },
    hint: "计算工具",
    difficulty: 2,
    category: "历史文化",
    explanation: "中国古代四大发明是造纸术、印刷术、指南针和火药"
  },
  {
    id: 102,
    question: "《红楼梦》的作者是？",
    answer: "B",
    options: {
      A: "吴承恩",
      B: "曹雪芹",
      C: "罗贯中",
      D: "施耐庵"
    },
    hint: "清代小说家",
    difficulty: 2,
    category: "历史文化",
    explanation: "曹雪芹（约1715-约1763）创作了中国古典小说巅峰之作《红楼梦》"
  },
  {
    id: 103,
    question: "中国古代科举制度始于哪个朝代？",
    answer: "C",
    options: {
      A: "汉朝",
      B: "唐朝",
      C: "隋朝",
      D: "宋朝"
    },
    hint: "6世纪末开始",
    difficulty: 3,
    category: "历史文化",
    explanation: "科举制度创立于隋朝（581-618），唐朝进一步完善"
  },
  {
    id: 104,
    question: "中国历史上第一个封建王朝是？",
    answer: "A",
    options: {
      A: "夏朝",
      B: "商朝",
      C: "周朝",
      D: "秦朝"
    },
    hint: "约公元前2070年建立",
    difficulty: 3,
    category: "历史文化",
    explanation: "夏朝（约前2070-前1600）是中国史书记载的第一个世袭制朝代"
  },
  {
    id: 105,
    question: "中国古代丝绸之路的起点是？",
    answer: "B",
    options: {
      A: "洛阳",
      B: "长安（西安）",
      C: "敦煌",
      D: "喀什"
    },
    hint: "现在的陕西省会",
    difficulty: 2,
    category: "历史文化",
    explanation: "丝绸之路通常以长安（今西安）为起点，经中亚通往欧洲"
  },
  {
    id: 106,
    question: "文艺复兴运动始于哪个国家？",
    answer: "B",
    options: {
      A: "法国",
      B: "意大利",
      C: "德国",
      D: "英国"
    },
    hint: "14世纪开始",
    difficulty: 2,
    category: "历史文化",
    explanation: "文艺复兴始于14世纪的意大利，后扩展到欧洲各国"
  },
  {
    id: 107,
    question: "中国现存最早的诗歌总集是？",
    answer: "A",
    options: {
      A: "《诗经》",
      B: "《楚辞》",
      C: "《乐府诗集》",
      D: "《全唐诗》"
    },
    hint: "收录了西周初年至春秋中叶的诗歌",
    difficulty: 2,
    category: "历史文化",
    explanation: "《诗经》是中国最早的诗歌总集，收录了西周至春秋的305篇诗歌"
  },
  {
    id: 108,
    question: "第一次工业革命始于哪个国家？",
    answer: "A",
    options: {
      A: "英国",
      B: "法国",
      C: "德国",
      D: "美国"
    },
    hint: "18世纪60年代开始",
    difficulty: 2,
    category: "历史文化",
    explanation: "第一次工业革命于18世纪60年代从英国开始，以蒸汽机的发明为标志"
  },
  {
    id: 109,
    question: "中国书法史上的'书圣'指的是？",
    answer: "C",
    options: {
      A: "颜真卿",
      B: "柳公权",
      C: "王羲之",
      D: "欧阳询"
    },
    hint: "东晋书法家",
    difficulty: 2,
    category: "历史文化",
    explanation: "王羲之（303-361）被誉为'书圣'，其《兰亭序》被称为'天下第一行书'"
  },
  {
    id: 110,
    question: "中国古代四大名著不包括？",
    answer: "D",
    options: {
      A: "《红楼梦》",
      B: "《西游记》",
      C: "《水浒传》",
      D: "《金瓶梅》"
    },
    hint: "明代长篇小说",
    difficulty: 2,
    category: "历史文化",
    explanation: "四大名著是《红楼梦》、《西游记》、《水浒传》、《三国演义》"
  },
  {
    id: 111,
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
    category: "历史文化",
    explanation: "吉萨金字塔是古代世界七大奇迹中唯一保存至今的"
  },
  {
    id: 112,
    question: "《史记》的作者是？",
    answer: "A",
    options: {
      A: "司马迁",
      B: "司马光",
      C: "司马相如",
      D: "司马懿"
    },
    hint: "西汉史学家",
    difficulty: 2,
    category: "历史文化",
    explanation: "司马迁（前145-前86）创作了中国第一部纪传体通史《史记》"
  },
  {
    id: 113,
    question: "中国古代'诗仙'指的是？",
    answer: "B",
    options: {
      A: "杜甫",
      B: "李白",
      C: "白居易",
      D: "王维"
    },
    hint: "唐代浪漫主义诗人",
    difficulty: 2,
    category: "历史文化",
    explanation: "李白（701-762）被誉为'诗仙'，其诗风豪放飘逸"
  },
  {
    id: 114,
    question: "五四运动发生在哪一年？",
    answer: "C",
    options: {
      A: "1911年",
      B: "1917年",
      C: "1919年",
      D: "1921年"
    },
    hint: "第一次世界大战结束后",
    difficulty: 2,
    category: "历史文化",
    explanation: "五四运动发生于1919年5月4日，是中国新文化运动的重要事件"
  },
  {
    id: 115,
    question: "世界上第一部成文法典是？",
    answer: "B",
    options: {
      A: "罗马法",
      B: "汉谟拉比法典",
      C: "摩奴法典",
      D: "十二铜表法"
    },
    hint: "古巴比伦王国制定",
    difficulty: 3,
    category: "历史文化",
    explanation: "《汉谟拉比法典》是公元前18世纪古巴比伦国王汉谟拉比颁布的法律，是最早的成文法典之一"
  },
  {
    id: 116,
    question: "中国古代'诗圣'指的是？",
    answer: "A",
    options: {
      A: "杜甫",
      B: "李白",
      C: "白居易",
      D: "李商隐"
    },
    hint: "唐代现实主义诗人",
    difficulty: 2,
    category: "历史文化",
    explanation: "杜甫（712-770）被誉为'诗圣'，其诗作深刻反映社会现实"
  },
  {
    id: 117,
    question: "法国大革命开始的标志是？",
    answer: "D",
    options: {
      A: "处死路易十六",
      B: "拿破仑上台",
      C: "热月政变",
      D: "攻占巴士底狱"
    },
    hint: "1789年7月14日",
    difficulty: 3,
    category: "历史文化",
    explanation: "1789年7月14日攻占巴士底狱标志着法国大革命的开始"
  },
  {
    id: 118,
    question: "中国古代'医圣'指的是？",
    answer: "C",
    options: {
      A: "华佗",
      B: "扁鹊",
      C: "张仲景",
      D: "李时珍"
    },
    hint: "东汉医学家",
    difficulty: 2,
    category: "历史文化",
    explanation: "张仲景（150-219）著有《伤寒杂病论》，被尊为'医圣'"
  },
  {
    id: 119,
    question: "美国独立宣言签署于哪一年？",
    answer: "B",
    options: {
      A: "1775年",
      B: "1776年",
      C: "1781年",
      D: "1787年"
    },
    hint: "7月4日",
    difficulty: 2,
    category: "历史文化",
    explanation: "1776年7月4日，大陆会议通过《独立宣言》，宣告美国独立"
  },
  {
    id: 120,
    question: "中国古代'画圣'指的是？",
    answer: "D",
    options: {
      A: "顾恺之",
      B: "吴道子",
      C: "阎立本",
      D: "吴道子"
    },
    hint: "唐代画家",
    difficulty: 2,
    category: "历史文化",
    explanation: "吴道子（约680-759）被誉为'画圣'，擅长佛教人物画"
  },
  {
    id: 121,
    question: "马克思主义诞生的标志是？",
    answer: "A",
    options: {
      A: "《共产党宣言》发表",
      B: "第一国际成立",
      C: "巴黎公社建立",
      D: "十月革命胜利"
    },
    hint: "1848年",
    difficulty: 3,
    category: "历史文化",
    explanation: "1848年《共产党宣言》发表，标志着马克思主义的诞生"
  },
  {
    id: 122,
    question: "中国古代'茶圣'指的是？",
    answer: "C",
    options: {
      A: "陆游",
      B: "苏轼",
      C: "陆羽",
      D: "蔡襄"
    },
    hint: "唐代茶学家",
    difficulty: 2,
    category: "历史文化",
    explanation: "陆羽（733-804）著有《茶经》，被尊为'茶圣'"
  },
  {
    id: 123,
    question: "第二次世界大战结束于哪一年？",
    answer: "D",
    options: {
      A: "1944年",
      B: "1945年",
      C: "1946年",
      D: "1945年"
    },
    hint: "日本宣布投降",
    difficulty: 2,
    category: "历史文化",
    explanation: "1945年9月2日日本签署投降书，标志二战结束"
  },
  {
    id: 124,
    question: "中国古代'酒圣'指的是？",
    answer: "B",
    options: {
      A: "刘伶",
      B: "杜康",
      C: "李白",
      D: "陶渊明"
    },
    hint: "传说中酿酒的发明者",
    difficulty: 2,
    category: "历史文化",
    explanation: "杜康被传为中国古代酿酒的发明者，被尊为'酒圣'"
  },
  {
    id: 125,
    question: "新文化运动开始的标志是？",
    answer: "A",
    options: {
      A: "《新青年》杂志创刊",
      B: "五四运动爆发",
      C: "白话文运动兴起",
      D: "北京大学改革"
    },
    hint: "1915年",
    difficulty: 3,
    category: "历史文化",
    explanation: "1915年陈独秀创办《新青年》，标志着新文化运动的开始"
  },
  {
    id: 126,
    question: "中国古代'武圣'指的是？",
    answer: "C",
    options: {
      A: "岳飞",
      B: "关羽",
      C: "关羽",
      D: "张飞"
    },
    hint: "三国时期蜀汉名将",
    difficulty: 2,
    category: "历史文化",
    explanation: "关羽因其忠义勇武，被后世尊为'武圣'"
  },
  {
    id: 127,
    question: "十月革命发生在哪一年？",
    answer: "B",
    options: {
      A: "1916年",
      B: "1917年",
      C: "1918年",
      D: "1919年"
    },
    hint: "俄国革命",
    difficulty: 2,
    category: "历史文化",
    explanation: "1917年11月7日（俄历10月25日）爆发十月革命"
  },
  {
    id: 128,
    question: "中国古代'科圣'指的是？",
    answer: "D",
    options: {
      A: "张衡",
      B: "祖冲之",
      C: "郭守敬",
      D: "张衡"
    },
    hint: "东汉科学家",
    difficulty: 2,
    category: "历史文化",
    explanation: "张衡发明了地动仪和浑天仪，被尊为'科圣'"
  },
  {
    id: 129,
    question: "中国古代'药王'指的是？",
    answer: "A",
    options: {
      A: "孙思邈",
      B: "华佗",
      C: "扁鹊",
      D: "李时珍"
    },
    hint: "唐代医学家",
    difficulty: 2,
    category: "历史文化",
    explanation: "孙思邈（581-682）著有《千金要方》，被尊为'药王'"
  },
  {
    id: 130,
    question: "罗马帝国建立于哪一年？",
    answer: "C",
    options: {
      A: "公元前27年",
      B: "公元前44年",
      C: "公元前27年",
      D: "公元14年"
    },
    hint: "屋大维建立",
    difficulty: 3,
    category: "历史文化",
    explanation: "公元前27年，屋大维建立元首制，罗马共和国变为罗马帝国"
  },
  {
    id: 131,
    question: "中国古代'商圣'指的是？",
    answer: "B",
    options: {
      A: "吕不韦",
      B: "范蠡",
      C: "沈万三",
      D: "胡雪岩"
    },
    hint: "春秋时期政治家、商人",
    difficulty: 2,
    category: "历史文化",
    explanation: "范蠡在帮助越王勾践灭吴后经商致富，被尊为'商圣'"
  },
  {
    id: 132,
    question: "文艺复兴三杰不包括？",
    answer: "D",
    options: {
      A: "达·芬奇",
      B: "米开朗基罗",
      C: "拉斐尔",
      D: "但丁"
    },
    hint: "意大利文艺复兴时期的艺术家",
    difficulty: 2,
    category: "历史文化",
    explanation: "文艺复兴三杰是达·芬奇、米开朗基罗和拉斐尔"
  },
  {
    id: 133,
    question: "中国古代'谋圣'指的是？",
    answer: "C",
    options: {
      A: "张良",
      B: "诸葛亮",
      C: "张良",
      D: "孙武"
    },
    hint: "汉初谋士",
    difficulty: 2,
    category: "历史文化",
    explanation: "张良辅佐刘邦建立汉朝，被尊为'谋圣'"
  },
  {
    id: 134,
    question: "英国光荣革命发生在哪一年？",
    answer: "A",
    options: {
      A: "1688年",
      B: "1642年",
      C: "1649年",
      D: "1707年"
    },
    hint: "不流血的革命",
    difficulty: 3,
    category: "历史文化",
    explanation: "1688年英国发生光荣革命，确立了君主立宪制"
  },
  {
    id: 135,
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
    category: "历史文化",
    explanation: "司马迁创作《史记》，被尊为'史圣'"
  },
  {
    id: 136,
    question: "美国南北战争发生在哪一年？",
    answer: "B",
    options: {
      A: "1859-1865年",
      B: "1861-1865年",
      C: "1863-1867年",
      D: "1860-1864年"
    },
    hint: "19世纪60年代",
    difficulty: 2,
    category: "历史文化",
    explanation: "美国南北战争发生于1861-1865年"
  },
  {
    id: 137,
    question: "中国古代'算圣'指的是？",
    answer: "C",
    options: {
      A: "刘徽",
      B: "祖冲之",
      C: "刘徽",
      D: "秦九韶"
    },
    hint: "三国时期数学家",
    difficulty: 3,
    category: "历史文化",
    explanation: "刘徽著有《九章算术注》，被尊为'算圣'"
  },
  {
    id: 138,
    question: "第一次世界大战开始于哪一年？",
    answer: "A",
    options: {
      A: "1914年",
      B: "1915年",
      C: "1916年",
      D: "1917年"
    },
    hint: "萨拉热窝事件",
    difficulty: 2,
    category: "历史文化",
    explanation: "1914年6月28日萨拉热窝事件引发第一次世界大战"
  },
  {
    id: 139,
    question: "中国古代'棋圣'指的是？",
    answer: "D",
    options: {
      A: "黄龙士",
      B: "范西屏",
      C: "施襄夏",
      D: "黄龙士"
    },
    hint: "清代围棋国手",
    difficulty: 3,
    category: "历史文化",
    explanation: "黄龙士是清代围棋国手，被尊为'棋圣'"
  },
  {
    id: 140,
    question: "法国大革命的口号是？",
    answer: "B",
    options: {
      A: "自由、民主、科学",
      B: "自由、平等、博爱",
      C: "人权、民主、法治",
      D: "独立、自由、平等"
    },
    hint: "三个词的组合",
    difficulty: 2,
    category: "历史文化",
    explanation: "自由、平等、博爱是法国大革命的口号"
  },
  {
    id: 141,
    question: "中国古代'乐圣'指的是？",
    answer: "C",
    options: {
      A: "嵇康",
      B: "李龟年",
      C: "李龟年",
      D: "朱载堉"
    },
    hint: "唐代音乐家",
    difficulty: 2,
    category: "历史文化",
    explanation: "李龟年是唐代著名音乐家，被尊为'乐圣'"
  },
  {
    id: 142,
    question: "罗马帝国分裂为东西两部分是在哪一年？",
    answer: "D",
    options: {
      A: "293年",
      B: "324年",
      C: "364年",
      D: "395年"
    },
    hint: "4世纪末",
    difficulty: 3,
    category: "历史文化",
    explanation: "395年罗马帝国分裂为西罗马帝国和东罗马帝国（拜占庭帝国）"
  },
  {
    id: 143,
    question: "中国古代'字圣'指的是？",
    answer: "A",
    options: {
      A: "仓颉",
      B: "许慎",
      C: "蔡邕",
      D: "王羲之"
    },
    hint: "传说中汉字的创造者",
    difficulty: 2,
    category: "历史文化",
    explanation: "仓颉被传为汉字的创造者，被尊为'字圣'"
  },
  {
    id: 144,
    question: "明治维新开始于哪一年？",
    answer: "B",
    options: {
      A: "1867年",
      B: "1868年",
      C: "1869年",
      D: "1870年"
    },
    hint: "日本近代化改革",
    difficulty: 2,
    category: "历史文化",
    explanation: "1868年日本开始明治维新，实行全面西化改革"
  },
  {
    id: 145,
    question: "中国古代'兵圣'指的是？",
    answer: "C",
    options: {
      A: "吴起",
      B: "孙膑",
      C: "孙武",
      D: "韩信"
    },
    hint: "《孙子兵法》作者",
    difficulty: 2,
    category: "历史文化",
    explanation: "孙武著有《孙子兵法》，被尊为'兵圣'"
  },
  {
    id: 146,
    question: "英国大宪章签署于哪一年？",
    answer: "D",
    options: {
      A: "1199年",
      B: "1207年",
      C: "1213年",
      D: "1215年"
    },
    hint: "13世纪初",
    difficulty: 3,
    category: "历史文化",
    explanation: "1215年英国国王约翰签署大宪章，限制王权"
  },
  {
    id: 147,
    question: "中国古代'农圣'指的是？",
    answer: "A",
    options: {
      A: "贾思勰",
      B: "徐光启",
      C: "宋应星",
      D: "王祯"
    },
    hint: "北魏农学家",
    difficulty: 2,
    category: "历史文化",
    explanation: "贾思勰著有《齐民要术》，被尊为'农圣'"
  },
  {
    id: 148,
    question: "文艺复兴运动的指导思想是？",
    answer: "B",
    options: {
      A: "理性主义",
      B: "人文主义",
      C: "浪漫主义",
      D: "现实主义"
    },
    hint: "以人为本的思想",
    difficulty: 2,
    category: "历史文化",
    explanation: "人文主义是文艺复兴运动的核心思想，强调人的价值和尊严"
  },
  {
    id: 149,
    question: "中国古代'塑圣'指的是？",
    answer: "C",
    options: {
      A: "阎立本",
      B: "吴道子",
      C: "杨惠之",
      D: "戴逵"
    },
    hint: "唐代雕塑家",
    difficulty: 3,
    category: "历史文化",
    explanation: "杨惠之是唐代著名雕塑家，被尊为'塑圣'"
  },
  {
    id: 150,
    question: "鸦片战争开始于哪一年？",
    answer: "D",
    options: {
      A: "1839年",
      B: "1840年",
      C: "1841年",
      D: "1840年"
    },
    hint: "19世纪40年代",
    difficulty: 2,
    category: "历史文化",
    explanation: "1840年英国发动鸦片战争，中国开始近代史"
  },
  {
    id: 151,
    question: "中国古代'草圣'指的是？",
    answer: "A",
    options: {
      A: "张旭",
      B: "怀素",
      C: "王献之",
      D: "黄庭坚"
    },
    hint: "唐代书法家",
    difficulty: 2,
    category: "历史文化",
    explanation: "张旭擅长草书，被尊为'草圣'"
  },
  {
    id: 152,
    question: "十月革命的领导者是？",
    answer: "B",
    options: {
      A: "斯大林",
      B: "列宁",
      C: "托洛茨基",
      D: "布哈林"
    },
    hint: "布尔什维克党领导人",
    difficulty: 2,
    category: "历史文化",
    explanation: "列宁领导了十月革命，建立了世界上第一个社会主义国家"
  },
  {
    id: 153,
    question: "中国古代'词圣'指的是？",
    answer: "C",
    options: {
      A: "辛弃疾",
      B: "柳永",
      C: "苏轼",
      D: "李清照"
    },
    hint: "宋代文学家",
    difficulty: 2,
    category: "历史文化",
    explanation: "苏轼是宋代豪放派词人代表，被誉为'词圣'"
  },
  {
    id: 154,
    question: "美国独立战争的转折点是？",
    answer: "D",
    options: {
      A: "列克星敦战役",
      B: "邦克山战役",
      C: "特伦顿战役",
      D: "萨拉托加大捷"
    },
    hint: "1777年",
    difficulty: 3,
    category: "历史文化",
    explanation: "1777年萨拉托加大捷是美国独立战争的转折点"
  },
  {
    id: 155,
    question: "中国古代'曲圣'指的是？",
    answer: "A",
    options: {
      A: "关汉卿",
      B: "马致远",
      C: "白朴",
      D: "郑光祖"
    },
    hint: "元曲四大家之一",
    difficulty: 2,
    category: "历史文化",
    explanation: "关汉卿是元代著名杂剧作家，被誉为'曲圣'"
  },
  {
    id: 156,
    question: "第二次世界大战的转折点是？",
    answer: "B",
    options: {
      A: "诺曼底登陆",
      B: "斯大林格勒战役",
      C: "中途岛海战",
      D: "阿拉曼战役"
    },
    hint: "苏德战场",
    difficulty: 2,
    category: "历史文化",
    explanation: "斯大林格勒战役（1942-1943）是二战的转折点"
  },
  {
    id: 157,
    question: "中国古代'文圣'指的是？",
    answer: "C",
    options: {
      A: "韩愈",
      B: "欧阳修",
      C: "孔子",
      D: "孟子"
    },
    hint: "儒家学派创始人",
    difficulty: 2,
    category: "历史文化",
    explanation: "孔子是儒家学派创始人，被尊为'文圣'"
  },
  {
    id: 158,
    question: "辛亥革命发生在哪一年？",
    answer: "D",
    options: {
      A: "1909年",
      B: "1910年",
      C: "1911年",
      D: "1911年"
    },
    hint: "10月10日",
    difficulty: 2,
    category: "历史文化",
    explanation: "1911年10月10日武昌起义爆发，史称辛亥革命"
  },
  {
    id: 159,
    question: "中国古代'智圣'指的是？",
    answer: "A",
    options: {
      A: "诸葛亮",
      B: "张良",
      C: "范增",
      D: "刘伯温"
    },
    hint: "三国时期蜀汉丞相",
    difficulty: 2,
    category: "历史文化",
    explanation: "诸葛亮以智谋著称，被尊为'智圣'"
  },
  {
    id: 160,
    question: "工业革命最早开始于哪个行业？",
    answer: "B",
    options: {
      A: "交通运输业",
      B: "纺织业",
      C: "采矿业",
      D: "冶金业"
    },
    hint: "英国的产业",
    difficulty: 2,
    category: "历史文化",
    explanation: "工业革命最早从英国的纺织业开始"
  },
  {
    id: 161,
    question: "中国古代'法圣'指的是？",
    answer: "C",
    options: {
      A: "商鞅",
      B: "韩非",
      C: "商鞅",
      D: "李斯"
    },
    hint: "战国时期法家代表人物",
    difficulty: 2,
    category: "历史文化",
    explanation: "商鞅在秦国实行变法，被尊为'法圣'"
  },
  {
    id: 162,
    question: "古代奥林匹克运动会起源于哪个国家？",
    answer: "D",
    options: {
      A: "罗马",
      B: "埃及",
      C: "波斯",
      D: "希腊"
    },
    hint: "公元前776年",
    difficulty: 2,
    category: "历史文化",
    explanation: "古代奥运会起源于古希腊，第一届于公元前776年举行"
  },
  {
    id: 163,
    question: "中国古代'道圣'指的是？",
    answer: "A",
    options: {
      A: "老子",
      B: "庄子",
      C: "列子",
      D: "文子"
    },
    hint: "道家学派创始人",
    difficulty: 2,
    category: "历史文化",
    explanation: "老子是道家学派创始人，被尊为'道圣'"
  },
  {
    id: 164,
    question: "巴黎和会召开于哪一年？",
    answer: "B",
    options: {
      A: "1918年",
      B: "1919年",
      C: "1920年",
      D: "1921年"
    },
    hint: "第一次世界大战结束后",
    difficulty: 3,
    category: "历史文化",
    explanation: "1919年巴黎和会召开，签订了《凡尔赛条约》"
  },
  {
    id: 165,
    question: "中国古代'墨圣'指的是？",
    answer: "C",
    options: {
      A: "韩非",
      B: "荀子",
      C: "墨子",
      D: "惠施"
    },
    hint: "墨家学派创始人",
    difficulty: 2,
    category: "历史文化",
    explanation: "墨子是墨家学派创始人，被尊为'墨圣'"
  },
  {
    id: 166,
    question: "美国独立战争的开始是？",
    answer: "D",
    options: {
      A: "波士顿倾茶事件",
      B: "大陆会议召开",
      C: "《独立宣言》发表",
      D: "列克星敦枪声"
    },
    hint: "1775年",
    difficulty: 2,
    category: "历史文化",
    explanation: "1775年列克星敦枪声标志着美国独立战争的开始"
  },
  {
    id: 167,
    question: "中国古代'佛圣'指的是？",
    answer: "A",
    options: {
      A: "玄奘",
      B: "鉴真",
      C: "慧能",
      D: "法显"
    },
    hint: "唐代高僧",
    difficulty: 2,
    category: "历史文化",
    explanation: "玄奘西行取经，翻译佛经，被尊为'佛圣'"
  },
  {
    id: 168,
    question: "法国大革命中被处死的国王是？",
    answer: "B",
    options: {
      A: "路易十五",
      B: "路易十六",
      C: "查理十世",
      D: "菲利普二世"
    },
    hint: "1793年被处死",
    difficulty: 2,
    category: "历史文化",
    explanation: "路易十六于1793年被送上断头台处死"
  },
  {
    id: 169,
    question: "中国古代'剑圣'指的是？",
    answer: "C",
    options: {
      A: "荆轲",
      B: "聂政",
      C: "裴旻",
      D: "李白"
    },
    hint: "唐代剑术家",
    difficulty: 3,
    category: "历史文化",
    explanation: "裴旻是唐代著名剑术家，被尊为'剑圣'"
  },
  {
    id: 170,
    question: "联合国成立于哪一年？",
    answer: "D",
    options: {
      A: "1944年",
      B: "1945年",
      C: "1946年",
      D: "1945年"
    },
    hint: "第二次世界大战结束后",
    difficulty: 2,
    category: "历史文化",
    explanation: "联合国于1945年10月24日正式成立"
  },
  {
    id: 171,
    question: "中国古代'棋仙'指的是？",
    answer: "A",
    options: {
      A: "王积薪",
      B: "顾师言",
      C: "贾玄",
      D: "刘仲甫"
    },
    hint: "唐代围棋国手",
    difficulty: 3,
    category: "历史文化",
    explanation: "王积薪是唐代围棋国手，被尊为'棋仙'"
  },
  {
    id: 172,
    question: "苏联成立于哪一年？",
    answer: "B",
    options: {
      A: "1917年",
      B: "1922年",
      C: "1924年",
      D: "1928年"
    },
    hint: "十月革命后",
    difficulty: 3,
    category: "历史文化",
    explanation: "苏维埃社会主义共和国联盟（苏联）于1922年成立"
  },
  {
    id: 173,
    question: "中国古代'画仙'指的是？",
    answer: "C",
    options: {
      A: "顾恺之",
      B: "阎立本",
      C: "顾恺之",
      D: "吴道子"
    },
    hint: "东晋画家",
    difficulty: 2,
    category: "历史文化",
    explanation: "顾恺之是东晋著名画家，被尊为'画仙'"
  },
  {
    id: 174,
    question: "美国宪法颁布于哪一年？",
    answer: "D",
    options: {
      A: "1776年",
      B: "1781年",
      C: "1783年",
      D: "1787年"
    },
    hint: "费城制宪会议",
    difficulty: 3,
    category: "历史文化",
    explanation: "美国宪法于1787年在费城制宪会议上制定"
  },
  {
    id: 175,
    question: "中国古代'诗佛'指的是？",
    answer: "A",
    options: {
      A: "王维",
      B: "孟浩然",
      C: "韦应物",
      D: "柳宗元"
    },
    hint: "唐代山水田园诗人",
    difficulty: 2,
    category: "历史文化",
    explanation: "王维诗中有禅意，被尊为'诗佛'"
  },
  {
    id: 176,
    question: "英国工业革命时期的发明家不包括？",
    answer: "B",
    options: {
      A: "詹姆斯·瓦特",
      B: "本杰明·富兰克林",
      C: "理查德·阿克赖特",
      D: "詹姆斯·哈格里夫斯"
    },
    hint: "美国科学家",
    difficulty: 2,
    category: "历史文化",
    explanation: "本杰明·富兰克林是美国科学家，不是英国工业革命时期的发明家"
  },
  {
    id: 177,
    question: "中国古代'诗鬼'指的是？",
    answer: "C",
    options: {
      A: "李贺",
      B: "李商隐",
      C: "李贺",
      D: "杜牧"
    },
    hint: "唐代诗人",
    difficulty: 2,
    category: "历史文化",
    explanation: "李贺的诗风奇诡，被称为'诗鬼'"
  },
  {
    id: 178,
    question: "法国大革命的三等级不包括？",
    answer: "D",
    options: {
      A: "教士",
      B: "贵族",
      C: "平民",
      D: "资产阶级"
    },
    hint: "旧制度下的社会分层",
    difficulty: 3,
    category: "历史文化",
    explanation: "法国大革命前的三等级是教士、贵族和平民"
  },
  {
    id: 179,
    question: "中国古代'诗魔'指的是？",
    answer: "A",
    options: {
      A: "白居易",
      B: "杜甫",
      C: "李白",
      D: "李商隐"
    },
    hint: "唐代现实主义诗人",
    difficulty: 2,
    category: "历史文化",
    explanation: "白居易作诗刻苦，被称为'诗魔'"
  },
  {
    id: 180,
    question: "美国内战时期的总统是？",
    answer: "B",
    options: {
      A: "托马斯·杰斐逊",
      B: "亚伯拉罕·林肯",
      C: "安德鲁·杰克逊",
      D: "尤利西斯·格兰特"
    },
    hint: "颁布《解放宣言》",
    difficulty: 2,
    category: "历史文化",
    explanation: "亚伯拉罕·林肯是美国内战时期的总统"
  },
  {
    id: 181,
    question: "中国古代'诗豪'指的是？",
    answer: "C",
    options: {
      A: "刘禹锡",
      B: "王昌龄",
      C: "刘禹锡",
      D: "高适"
    },
    hint: "唐代诗人",
    difficulty: 2,
    category: "历史文化",
    explanation: "刘禹锡诗风豪迈，被称为'诗豪'"
  },
  {
    id: 182,
    question: "第一次世界大战的导火索是？",
    answer: "D",
    options: {
      A: "日德兰海战",
      B: "马恩河战役",
      C: "凡尔登战役",
      D: "萨拉热窝事件"
    },
    hint: "1914年",
    difficulty: 2,
    category: "历史文化",
    explanation: "1914年萨拉热窝事件是第一次世界大战的导火索"
  },
  {
    id: 183,
    question: "中国古代'诗杰'指的是？",
    answer: "A",
    options: {
      A: "王勃",
      B: "杨炯",
      C: "卢照邻",
      D: "骆宾王"
    },
    hint: "初唐四杰之一",
    difficulty: 2,
    category: "历史文化",
    explanation: "王勃是初唐四杰之一，被称为'诗杰'"
  },
  {
    id: 184,
    question: "第二次世界大战的发动者是？",
    answer: "B",
    options: {
      A: "日本",
      B: "德国",
      C: "意大利",
      D: "三个轴心国"
    },
    hint: "1939年入侵波兰",
    difficulty: 2,
    category: "历史文化",
    explanation: "1939年德国入侵波兰，发动第二次世界大战"
  },
  {
    id: 185,
    question: "中国古代'诗骨'指的是？",
    answer: "C",
    options: {
      A: "陈子昂",
      B: "杜甫",
      C: "陈子昂",
      D: "韩愈"
    },
    hint: "唐代文学家",
    difficulty: 3,
    category: "历史文化",
    explanation: "陈子昂诗风刚健，被称为'诗骨'"
  },
  {
    id: 186,
    question: "冷战开始于哪一年？",
    answer: "D",
    options: {
      A: "1945年",
      B: "1946年",
      C: "1947年",
      D: "1947年"
    },
    hint: "杜鲁门主义出台",
    difficulty: 3,
    category: "历史文化",
    explanation: "1947年杜鲁门主义出台，标志冷战开始"
  },
  {
    id: 187,
    question: "中国古代'诗狂'指的是？",
    answer: "A",
    options: {
      A: "贺知章",
      B: "孟郊",
      C: "贾岛",
      D: "张籍"
    },
    hint: "唐代诗人",
    difficulty: 2,
    category: "历史文化",
    explanation: "贺知章性格豪放，被称为'诗狂'"
  },
  {
    id: 188,
    question: "美国独立战争的结束标志是？",
    answer: "B",
    options: {
      A: "约克镇战役",
      B: "《巴黎和约》签订",
      C: "华盛顿就任总统",
      D: "宪法颁布"
    },
    hint: "1783年",
    difficulty: 3,
    category: "历史文化",
    explanation: "1783年《巴黎和约》签订，美国独立战争正式结束"
  },
  {
    id: 189,
    question: "中国古代'诗囚'指的是？",
    answer: "C",
    options: {
      A: "孟郊",
      B: "贾岛",
      C: "孟郊和贾岛",
      D: "李贺"
    },
    hint: "两位苦吟诗人",
    difficulty: 3,
    category: "历史文化",
    explanation: "孟郊和贾岛都以苦吟著称，被称为'诗囚'"
  },
  {
    id: 190,
    question: "法国大革命达到高潮的标志是？",
    answer: "D",
    options: {
      A: "攻占巴士底狱",
      B: "颁布《人权宣言》",
      C: "处死路易十六",
      D: "雅各宾派专政"
    },
    hint: "罗伯斯庇尔执政时期",
    difficulty: 3,
    category: "历史文化",
    explanation: "雅各宾派专政时期（1793-1794）是法国大革命的高潮"
  },
  {
    id: 191,
    question: "中国古代'诗奴'指的是？",
    answer: "A",
    options: {
      A: "贾岛",
      B: "孟郊",
      C: "李贺",
      D: "卢延让"
    },
    hint: "唐代苦吟诗人",
    difficulty: 3,
    category: "历史文化",
    explanation: "贾岛作诗刻苦，被称为'诗奴'"
  },
  {
    id: 192,
    question: "英国资产阶级革命开始于哪一年？",
    answer: "B",
    options: {
      A: "1640年",
      B: "1642年",
      C: "1649年",
      D: "1688年"
    },
    hint: "17世纪40年代",
    difficulty: 3,
    category: "历史文化",
    explanation: "1642年英国内战爆发，标志英国资产阶级革命开始"
  },
  {
    id: 193,
    question: "中国古代'诗佛'除了王维，还有谁？",
    answer: "C",
    options: {
      A: "孟浩然",
      B: "韦应物",
      C: "无可",
      D: "皎然"
    },
    hint: "唐代诗僧",
    difficulty: 3,
    category: "历史文化",
    explanation: "无可（贾岛堂弟）也是唐代著名诗僧，被称为'诗佛'"
  },
  {
    id: 194,
    question: "十月革命建立的政权是？",
    answer: "D",
    options: {
      A: "俄罗斯共和国",
      B: "俄罗斯帝国",
      C: "俄罗斯联邦",
      D: "苏维埃俄国"
    },
    hint: "世界上第一个社会主义国家",
    difficulty: 2,
    category: "历史文化",
    explanation: "十月革命建立了苏维埃俄国，后发展为苏联"
  },
  {
    id: 195,
    question: "中国古代'诗瓢'指的是？",
    answer: "A",
    options: {
      A: "唐求",
      B: "齐己",
      C: "贯休",
      D: "寒山"
    },
    hint: "唐代隐逸诗人",
    difficulty: 3,
    category: "历史文化",
    explanation: "唐求作诗后投入瓢中，被称为'诗瓢'"
  },
  {
    id: 196,
    question: "美国独立战争中的大陆军总司令是？",
    answer: "B",
    options: {
      A: "本杰明·富兰克林",
      B: "乔治·华盛顿",
      C: "托马斯·杰斐逊",
      D: "约翰·亚当斯"
    },
    hint: "美国第一任总统",
    difficulty: 2,
    category: "历史文化",
    explanation: "乔治·华盛顿是美国独立战争时期的大陆军总司令"
  },
  {
    id: 197,
    question: "中国古代'诗窖'指的是？",
    answer: "C",
    options: {
      A: "王仁裕",
      B: "冯延巳",
      C: "王仁裕",
      D: "韦庄"
    },
    hint: "五代诗人",
    difficulty: 3,
    category: "历史文化",
    explanation: "王仁裕作诗万首，被称为'诗窖'"
  },
  {
    id: 198,
    question: "法国大革命时期的重要文件是？",
    answer: "D",
    options: {
      A: "《独立宣言》",
      B: "《大宪章》",
      C: "《权利法案》",
      D: "《人权宣言》"
    },
    hint: "1789年颁布",
    difficulty: 2,
    category: "历史文化",
    explanation: "1789年法国制宪会议通过《人权宣言》"
  },
  {
    id: 199,
    question: "中国古代'诗虎'指的是？",
    answer: "A",
    options: {
      A: "罗邺",
      B: "罗隐",
      C: "皮日休",
      D: "陆龟蒙"
    },
    hint: "唐代诗人",
    difficulty: 3,
    category: "历史文化",
    explanation: "罗邺诗才敏捷，被称为'诗虎'"
  },
  {
    id: 200,
    question: "英国《权利法案》颁布于哪一年？",
    answer: "B",
    options: {
      A: "1688年",
      B: "1689年",
      C: "1690年",
      D: "1701年"
    },
    hint: "光荣革命后",
    difficulty: 3,
    category: "历史文化",
    explanation: "1689年英国议会通过《权利法案》，确立了君主立宪制"
  },
  {
    id: 201,
    question: "中国古代'诗家天子'指的是？",
    answer: "C",
    options: {
      A: "王昌龄",
      B: "李白",
      C: "王昌龄",
      D: "杜甫"
    },
    hint: "唐代边塞诗人",
    difficulty: 2,
    category: "历史文化",
    explanation: "王昌龄被誉为'诗家天子'"
  },
  {
    id: 202,
    question: "美国《独立宣言》的主要起草人是？",
    answer: "D",
    options: {
      A: "乔治·华盛顿",
      B: "本杰明·富兰克林",
      C: "约翰·亚当斯",
      D: "托马斯·杰斐逊"
    },
    hint: "美国第三任总统",
    difficulty: 2,
    category: "历史文化",
    explanation: "托马斯·杰斐逊是《独立宣言》的主要起草人"
  },
  {
    id: 203,
    question: "中国古代'五言长城'指的是？",
    answer: "A",
    options: {
      A: "刘长卿",
      B: "韦应物",
      C: "柳宗元",
      D: "孟浩然"
    },
    hint: "唐代诗人",
    difficulty: 3,
    category: "历史文化",
    explanation: "刘长卿擅长五言诗，被称为'五言长城'"
  },
  {
    id: 204,
    question: "文艺复兴运动最早在哪个城市兴起？",
    answer: "B",
    options: {
      A: "罗马",
      B: "佛罗伦萨",
      C: "威尼斯",
      D: "米兰"
    },
    hint: "意大利城市",
    difficulty: 2,
    category: "历史文化",
    explanation: "文艺复兴最早在意大利佛罗伦萨兴起"
  },
  {
    id: 205,
    question: "中国古代'杜紫薇'指的是？",
    answer: "C",
    options: {
      A: "杜牧",
      B: "杜甫",
      C: "杜牧",
      D: "杜审言"
    },
    hint: "唐代诗人",
    difficulty: 3,
    category: "历史文化",
    explanation: "杜牧曾任中书舍人，唐代中书省称紫薇省，故称'杜紫薇'"
  },
  {
    id: 206,
    question: "第二次世界大战中诺曼底登陆发生在哪一年？",
    answer: "D",
    options: {
      A: "1943年",
      B: "1944年",
      C: "1945年",
      D: "1944年"
    },
    hint: "D-Day",
    difficulty: 2,
    category: "历史文化",
    explanation: "1944年6月6日盟军在诺曼底登陆，开辟欧洲第二战场"
  },
  {
    id: 207,
    question: "中国古代'郑鹧鸪'指的是？",
    answer: "A",
    options: {
      A: "郑谷",
      B: "郑虔",
      C: "郑燮",
      D: "郑成功"
    },
    hint: "唐代诗人",
    difficulty: 3,
    category: "历史文化",
    explanation: "郑谷以《鹧鸪诗》闻名，被称为'郑鹧鸪'"
  },
  {
    id: 208,
    question: "美国内战时期的南方联盟总统是？",
    answer: "B",
    options: {
      A: "罗伯特·李",
      B: "杰斐逊·戴维斯",
      C: "斯通沃尔·杰克逊",
      D: "亚历山大·斯蒂芬斯"
    },
    hint: "美利坚联盟国总统",
    difficulty: 3,
    category: "历史文化",
    explanation: "杰斐逊·戴维斯是美国内战时期南方联盟的总统"
  },
  {
    id: 209,
    question: "中国古代'崔鸳鸯'指的是？",
    answer: "C",
    options: {
      A: "崔颢",
      B: "崔护",
      C: "崔珏",
      D: "崔日用"
    },
    hint: "唐代诗人",
    difficulty: 3,
    category: "历史文化",
    explanation: "崔珏以《和友人鸳鸯之什》闻名，被称为'崔鸳鸯'"
  },
  {
    id: 210,
    question: "法国大革命中被推翻的王朝是？",
    answer: "D",
    options: {
      A: "卡佩王朝",
      B: "瓦卢瓦王朝",
      C: "奥尔良王朝",
      D: "波旁王朝"
    },
    hint: "路易十六所属王朝",
    difficulty: 3,
    category: "历史文化",
    explanation: "法国大革命推翻了波旁王朝的统治"
  },
  {
    id: 211,
    question: "中国古代'赵倚楼'指的是？",
    answer: "A",
    options: {
      A: "赵嘏",
      B: "赵匡胤",
      C: "赵孟頫",
      D: "赵翼"
    },
    hint: "唐代诗人",
    difficulty: 3,
    category: "历史文化",
    explanation: "赵嘏以'长笛一声人倚楼'闻名，被称为'赵倚楼'"
  },
  {
    id: 212,
    question: "英国工业革命时期的主要能源是？",
    answer: "B",
    options: {
      A: "石油",
      B: "煤炭",
      C: "水力",
      D: "电力"
    },
    hint: "黑色固体燃料",
    difficulty: 2,
    category: "历史文化",
    explanation: "煤炭是英国工业革命时期的主要能源"
  },
  {
    id: 213,
    question: "中国古代'刘仙掌'指的是？",
    answer: "C",
    options: {
      A: "刘禹锡",
      B: "刘长卿",
      C: "刘象",
      D: "刘驾"
    },
    hint: "唐代诗人",
    difficulty: 3,
    category: "历史文化",
    explanation: "刘象以《咏仙掌》闻名，被称为'刘仙掌'"
  },
  {
    id: 214,
    question: "美国西进运动开始于哪个世纪？",
    answer: "D",
    options: {
      A: "17世纪",
      B: "18世纪",
      C: "19世纪",
      D: "19世纪"
    },
    hint: "19世纪大规模西迁",
    difficulty: 2,
    category: "历史文化",
    explanation: "美国西进运动在19世纪达到高潮"
  },
  {
    id: 215,
    question: "中国古代'鲍孤雁'指的是？",
    answer: "A",
    options: {
      A: "鲍当",
      B: "鲍照",
      C: "鲍防",
      D: "鲍溶"
    },
    hint: "宋代诗人",
    difficulty: 3,
    category: "历史文化",
    explanation: "鲍当以《孤雁》诗闻名，被称为'鲍孤雁'"
  },
  {
    id: 216,
    question: "法国大革命中的雅各宾派领导人是？",
    answer: "B",
    options: {
      A: "丹东",
      B: "罗伯斯庇尔",
      C: "马拉",
      D: "圣鞠斯特"
    },
    hint: "恐怖统治时期",
    difficulty: 2,
    category: "历史文化",
    explanation: "罗伯斯庇尔是雅各宾派的主要领导人"
  },
  {
    id: 217,
    question: "中国古代'谢蝴蝶'指的是？",
    answer: "C",
    options: {
      A: "谢灵运",
      B: "谢朓",
      C: "谢逸",
      D: "谢翱"
    },
    hint: "宋代诗人",
    difficulty: 3,
    category: "历史文化",
    explanation: "谢逸作蝴蝶诗三百首，被称为'谢蝴蝶'"
  },
  {
    id: 218,
    question: "英国工业革命从哪个世纪开始？",
    answer: "D",
    options: {
      A: "16世纪",
      B: "17世纪",
      C: "18世纪",
      D: "18世纪"
    },
    hint: "18世纪60年代",
    difficulty: 2,
    category: "历史文化",
    explanation: "英国工业革命始于18世纪60年代"
  },
  {
    id: 219,
    question: "中国古代'梅河豚'指的是？",
    answer: "A",
    options: {
      A: "梅尧臣",
      B: "梅询",
      C: "梅鼎祚",
      D: "梅文鼎"
    },
    hint: "宋代诗人",
    difficulty: 3,
    category: "历史文化",
    explanation: "梅尧臣以《范饶州坐中客语食河豚鱼》闻名，被称为'梅河豚'"
  },
  {
    id: 220,
    question: "美国独立战争得到哪个国家的援助？",
    answer: "B",
    options: {
      A: "英国",
      B: "法国",
      C: "西班牙",
      D: "荷兰"
    },
    hint: "欧洲大陆国家",
    difficulty: 2,
    category: "历史文化",
    explanation: "法国在美国独立战争中给予美国重要援助"
  }
];

export default historyCultureRiddles;
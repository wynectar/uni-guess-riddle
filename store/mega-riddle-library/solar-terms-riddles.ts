import { Riddle } from './types'
// 节气类灯谜 (50条)
const solarTermsRiddles: Riddle[] = [
  {
    id: 601,
    question: "二十四节气中第一个节气是？",
    answer: "A",
    options: {
      A: "立春",
      B: "雨水",
      C: "惊蛰",
      D: "春分"
    },
    hint: "春季开始",
    difficulty: 2,
    category: "节气",
    explanation: "立春是二十四节气之首，通常在公历2月3-5日，标志着春季的开始"
  },
  {
    id: 602,
    question: "'清明时节雨纷纷'描写的是哪个节气？",
    answer: "B",
    options: {
      A: "谷雨",
      B: "清明",
      C: "立夏",
      D: "小满"
    },
    hint: "也是传统节日",
    difficulty: 2,
    category: "节气",
    explanation: "清明节既是节气又是传统节日，通常在公历4月4-6日，有扫墓踏青的习俗"
  },
  {
    id: 603,
    question: "夏至时，北半球出现什么现象？",
    answer: "C",
    options: {
      A: "黑夜最长",
      B: "昼夜平分",
      C: "白昼最长",
      D: "天气最热"
    },
    hint: "太阳直射北回归线",
    difficulty: 2,
    category: "节气",
    explanation: "夏至时太阳直射北回归线，北半球白昼最长，黑夜最短"
  },
  {
    id: 604,
    question: "哪个节气标志着秋季的结束？",
    answer: "D",
    options: {
      A: "白露",
      B: "秋分",
      C: "寒露",
      D: "霜降"
    },
    hint: "最后一个秋季节气",
    difficulty: 3,
    category: "节气",
    explanation: "霜降是秋季最后一个节气，通常在公历10月23-24日"
  },
  {
    id: 605,
    question: "'冬至'时太阳直射哪个位置？",
    answer: "B",
    options: {
      A: "赤道",
      B: "南回归线",
      C: "北回归线",
      D: "北极圈"
    },
    hint: "南半球23.5度",
    difficulty: 3,
    category: "节气",
    explanation: "冬至时太阳直射南回归线，北半球白昼最短，黑夜最长"
  },
  {
    id: 606,
    question: "二十四节气起源于哪个流域？",
    answer: "A",
    options: {
      A: "黄河流域",
      B: "长江流域",
      C: "珠江流域",
      D: "淮河流域"
    },
    hint: "中原地区",
    difficulty: 2,
    category: "节气",
    explanation: "二十四节气起源于黄河流域，是中国古代农耕文明的产物"
  },
  {
    id: 607,
    question: "'雨水'节气通常在几月份？",
    answer: "C",
    options: {
      A: "1月",
      B: "2月",
      C: "2月",
      D: "3月"
    },
    hint: "公历2月",
    difficulty: 2,
    category: "节气",
    explanation: "雨水节气通常在公历2月18-20日，意味着降雨开始增多"
  },
  {
    id: 608,
    question: "哪个节气意味着天气开始转暖，冬眠动物苏醒？",
    answer: "D",
    options: {
      A: "立春",
      B: "雨水",
      C: "春分",
      D: "惊蛰"
    },
    hint: "春雷始鸣",
    difficulty: 2,
    category: "节气",
    explanation: "惊蛰意味着春雷始鸣，冬眠动物开始苏醒，通常在公历3月5-7日"
  },
  {
    id: 609,
    question: "'春分秋分，昼夜平分'描述的是什么现象？",
    answer: "B",
    options: {
      A: "太阳高度角最大",
      B: "昼夜时间相等",
      C: "季节转换",
      D: "气温适中"
    },
    hint: "字面意思",
    difficulty: 2,
    category: "节气",
    explanation: "春分和秋分时，太阳直射赤道，全球昼夜时间基本相等"
  },
  {
    id: 610,
    question: "哪个节气有吃饺子的习俗？",
    answer: "C",
    options: {
      A: "春节",
      B: "中秋",
      C: "冬至",
      D: "立冬"
    },
    hint: "北方传统",
    difficulty: 2,
    category: "节气",
    explanation: "中国北方有'冬至不端饺子碗，冻掉耳朵没人管'的说法"
  },
  {
    id: 611,
    question: "'小满'的含义是什么？",
    answer: "A",
    options: {
      A: "麦类作物籽粒开始饱满",
      B: "雨水充足",
      C: "天气炎热",
      D: "秋季开始"
    },
    hint: "农作物状态",
    difficulty: 2,
    category: "节气",
    explanation: "小满意味着夏熟作物籽粒开始饱满但未成熟，通常在公历5月20-22日"
  },
  {
    id: 612,
    question: "哪个节气最适合播种？",
    answer: "D",
    options: {
      A: "立春",
      B: "惊蛰",
      C: "清明",
      D: "谷雨"
    },
    hint: "雨生百谷",
    difficulty: 2,
    category: "节气",
    explanation: "谷雨是春季最后一个节气，意味着'雨生百谷'，是播种的好时机"
  },
  {
    id: 613,
    question: "'大暑'通常在什么时间？",
    answer: "B",
    options: {
      A: "6月下旬",
      B: "7月下旬",
      C: "8月上旬",
      D: "8月下旬"
    },
    hint: "一年中最热的时候",
    difficulty: 2,
    category: "节气",
    explanation: "大暑通常在公历7月22-24日，是一年中最热的时候"
  },
  {
    id: 614,
    question: "哪个节气标志着冬季的开始？",
    answer: "C",
    options: {
      A: "霜降",
      B: "寒露",
      C: "立冬",
      D: "小雪"
    },
    hint: "季节转换",
    difficulty: 2,
    category: "节气",
    explanation: "立冬标志着冬季的开始，通常在公历11月7-8日"
  },
  {
    id: 615,
    question: "'处暑'的'处'是什么意思？",
    answer: "A",
    options: {
      A: "终止",
      B: "处理",
      C: "处于",
      D: "处罚"
    },
    hint: "炎热结束",
    difficulty: 3,
    category: "节气",
    explanation: "'处'是终止的意思，处暑意味着炎热的夏天即将结束"
  },
  {
    id: 616,
    question: "哪个节气有登高赏菊的习俗？",
    answer: "D",
    options: {
      A: "寒露",
      B: "霜降",
      C: "立秋",
      D: "重阳节（非节气）"
    },
    hint: "传统节日",
    difficulty: 2,
    category: "节气",
    explanation: "重阳节（农历九月初九）有登高赏菊的习俗，但重阳节不是二十四节气"
  },
  {
    id: 617,
    question: "'白露'的名称来源于什么现象？",
    answer: "B",
    options: {
      A: "雪花飘落",
      B: "露水凝结",
      C: "雾气弥漫",
      D: "霜冻出现"
    },
    hint: "天气转凉",
    difficulty: 2,
    category: "节气",
    explanation: "白露时天气转凉，清晨地面和叶子上出现露水，故称白露"
  },
  {
    id: 618,
    question: "哪个节气太阳直射赤道？",
    answer: "C",
    options: {
      A: "立春和立秋",
      B: "夏至和冬至",
      C: "春分和秋分",
      D: "小满和大暑"
    },
    hint: "有两个节气",
    difficulty: 2,
    category: "节气",
    explanation: "春分和秋分时，太阳直射赤道，全球昼夜平分"
  },
  {
    id: 619,
    question: "'小雪'节气通常出现在几月份？",
    answer: "A",
    options: {
      A: "11月",
      B: "12月",
      C: "1月",
      D: "2月"
    },
    hint: "冬季初期",
    difficulty: 2,
    category: "节气",
    explanation: "小雪通常在公历11月22-23日，意味着开始降雪但雪量不大"
  },
  {
    id: 620,
    question: "哪个节气与'三伏'相关？",
    answer: "D",
    options: {
      A: "小暑",
      B: "大暑",
      C: "立秋",
      D: "夏至"
    },
    hint: "三伏的计算起点",
    difficulty: 3,
    category: "节气",
    explanation: "'三伏'的计算以夏至后的第三个庚日为初伏开始"
  },
  {
    id: 621,
    question: "'芒种'主要与哪种农作物相关？",
    answer: "B",
    options: {
      A: "小麦",
      B: "水稻",
      C: "玉米",
      D: "大豆"
    },
    hint: "南方种植",
    difficulty: 2,
    category: "节气",
    explanation: "芒种意味着有芒的作物（如水稻）可以播种，北方收麦，南方种稻"
  },
  {
    id: 622,
    question: "哪个节气有'数九'开始的说法？",
    answer: "C",
    options: {
      A: "立冬",
      B: "小雪",
      C: "冬至",
      D: "大寒"
    },
    hint: "从冬至开始数九",
    difficulty: 2,
    category: "节气",
    explanation: "'数九'从冬至开始，每九天为一九，共九九八十一天"
  },
  {
    id: 623,
    question: "'寒露'时节气温如何变化？",
    answer: "A",
    options: {
      A: "由凉转寒",
      B: "由寒转暖",
      C: "持续炎热",
      D: "开始转暖"
    },
    hint: "露水更冷",
    difficulty: 2,
    category: "节气",
    explanation: "寒露时露水更冷，气温由凉转寒，南方秋意渐浓，北方已入深秋"
  },
  {
    id: 624,
    question: "二十四节气被列入联合国非遗名录是哪一年？",
    answer: "D",
    options: {
      A: "2014年",
      B: "2015年",
      C: "2016年",
      D: "2016年"
    },
    hint: "21世纪10年代",
    difficulty: 3,
    category: "节气",
    explanation: "2016年11月30日，二十四节气被正式列入联合国教科文组织人类非物质文化遗产代表作名录"
  },
  {
    id: 625,
    question: "'大寒'是一年中什么时候？",
    answer: "B",
    options: {
      A: "最冷的时候",
      B: "最冷的时候",
      C: "开始变暖",
      D: "秋季结束"
    },
    hint: "冬季最后一个节气",
    difficulty: 2,
    category: "节气",
    explanation: "大寒是冬季最后一个节气，通常在公历1月20-21日，是一年中最冷的时候"
  },
  {
    id: 626,
    question: "哪个节气与'三九'最相关？",
    answer: "C",
    options: {
      A: "冬至",
      B: "小寒",
      C: "小寒",
      D: "大寒"
    },
    hint: "数九寒天",
    difficulty: 3,
    category: "节气",
    explanation: "'三九'通常在小寒节气期间，是数九中最冷的时候"
  },
  {
    id: 627,
    question: "'立秋'的习俗是什么？",
    answer: "A",
    options: {
      A: "贴秋膘",
      B: "吃饺子",
      C: "登高",
      D: "祭祖"
    },
    hint: "饮食习俗",
    difficulty: 2,
    category: "节气",
    explanation: "立秋有'贴秋膘'的习俗，人们会吃些好的以补偿夏天的损失"
  },
  {
    id: 628,
    question: "哪个节气太阳高度角最大？",
    answer: "D",
    options: {
      A: "春分",
      B: "秋分",
      C: "冬至",
      D: "夏至"
    },
    hint: "北半球",
    difficulty: 2,
    category: "节气",
    explanation: "夏至时太阳直射北回归线，北半球太阳高度角达到一年中最大值"
  },
  {
    id: 629,
    question: "'小暑'意味着什么？",
    answer: "B",
    options: {
      A: "炎热结束",
      B: "开始炎热",
      C: "最热的时候",
      D: "凉爽开始"
    },
    hint: "相对大暑",
    difficulty: 2,
    category: "节气",
    explanation: "小暑意味着天气开始炎热，但还未到最热，通常在公历7月6-8日"
  },
  {
    id: 630,
    question: "哪个节气与'桂子飘香'相关？",
    answer: "C",
    options: {
      A: "白露",
      B: "秋分",
      C: "寒露",
      D: "霜降"
    },
    hint: "农历八月",
    difficulty: 3,
    category: "节气",
    explanation: "寒露时节桂花盛开，有'桂子飘香'的说法"
  },
  {
    id: 631,
    question: "'大雪'节气的特征是什么？",
    answer: "A",
    options: {
      A: "降雪量增大",
      B: "开始下雪",
      C: "雪融化",
      D: "不下雪"
    },
    hint: "与小雪对比",
    difficulty: 2,
    category: "节气",
    explanation: "大雪意味着降雪量增大，地面可能积雪，通常在公历12月6-8日"
  },
  {
    id: 632,
    question: "哪个节气有吃元宵的习俗？",
    answer: "D",
    options: {
      A: "冬至",
      B: "小寒",
      C: "大寒",
      D: "元宵节（非节气）"
    },
    hint: "传统节日",
    difficulty: 2,
    category: "节气",
    explanation: "元宵节（农历正月十五）有吃元宵的习俗，但元宵节不是二十四节气"
  },
  {
    id: 633,
    question: "'春分'的民俗活动是什么？",
    answer: "B",
    options: {
      A: "放风筝",
      B: "竖鸡蛋",
      C: "踏青",
      D: "扫墓"
    },
    hint: "传统游戏",
    difficulty: 2,
    category: "节气",
    explanation: "春分有'春分到，蛋儿俏'的说法，人们会在这一天玩竖鸡蛋的游戏"
  },
  {
    id: 634,
    question: "哪个节气太阳直射点开始向南移动？",
    answer: "C",
    options: {
      A: "立夏",
      B: "小满",
      C: "夏至",
      D: "大暑"
    },
    hint: "转折点",
    difficulty: 3,
    category: "节气",
    explanation: "夏至后太阳直射点开始从北回归线向南移动"
  },
  {
    id: 635,
    question: "'霜降'时节应该注意什么？",
    answer: "A",
    options: {
      A: "防霜冻",
      B: "防中暑",
      C: "防洪涝",
      D: "防干旱"
    },
    hint: "农作物保护",
    difficulty: 2,
    category: "节气",
    explanation: "霜降时初霜出现，要注意防霜冻，保护农作物"
  },
  {
    id: 636,
    question: "二十四节气中，'二分二至'指的是哪四个节气？",
    answer: "D",
    options: {
      A: "立春、立夏、立秋、立冬",
      B: "春分、夏至、秋分、冬至",
      C: "清明、谷雨、白露、寒露",
      D: "春分、夏至、秋分、冬至"
    },
    hint: "天文意义最明显的四个节气",
    difficulty: 2,
    category: "节气",
    explanation: "'二分二至'指春分、夏至、秋分、冬至，这四个节气太阳位置最特殊"
  },
  {
    id: 637,
    question: "'小满'节气在什么时间？",
    answer: "B",
    options: {
      A: "4月下旬",
      B: "5月下旬",
      C: "6月上旬",
      D: "7月上旬"
    },
    hint: "夏季初期",
    difficulty: 2,
    category: "节气",
    explanation: "小满通常在公历5月20-22日，夏季的第二个节气"
  },
  {
    id: 638,
    question: "哪个节气太阳直射点开始向北移动？",
    answer: "C",
    options: {
      A: "立春",
      B: "春分",
      C: "冬至",
      D: "大寒"
    },
    hint: "冬季转折点",
    difficulty: 3,
    category: "节气",
    explanation: "冬至后太阳直射点开始从南回归线向北移动"
  },
  {
    id: 639,
    question: "'立夏'的习俗是什么？",
    answer: "A",
    options: {
      A: "称体重",
      B: "吃粽子",
      C: "赏月",
      D: "祭灶"
    },
    hint: "传统习俗",
    difficulty: 2,
    category: "节气",
    explanation: "立夏有'称人'的习俗，人们会称体重，观察夏季身体变化"
  },
  {
    id: 640,
    question: "哪个节气有'七月流火'的说法？",
    answer: "D",
    options: {
      A: "小暑",
      B: "大暑",
      C: "立秋",
      D: "处暑"
    },
    hint: "农历七月",
    difficulty: 3,
    category: "节气",
    explanation: "'七月流火'出自《诗经》，指农历七月（对应公历8月，处暑前后）天气转凉"
  },
  {
    id: 641,
    question: "'秋分'时太阳直射哪里？",
    answer: "B",
    options: {
      A: "北回归线",
      B: "赤道",
      C: "南回归线",
      D: "北极圈"
    },
    hint: "与春分相同",
    difficulty: 2,
    category: "节气",
    explanation: "秋分时太阳直射赤道，全球昼夜平分"
  },
  {
    id: 642,
    question: "哪个节气是收获的季节？",
    answer: "C",
    options: {
      A: "立秋",
      B: "白露",
      C: "秋分",
      D: "寒露"
    },
    hint: '秋"收"',
    difficulty: 2,
    category: "节气",
    explanation: "秋分是收获的季节，中国农民丰收节就定在秋分日"
  },
  {
    id: 643,
    question: "'冬至'时北半球白天多长？",
    answer: "A",
    options: {
      A: "最短",
      B: "最长",
      C: "12小时",
      D: "与夏至相同"
    },
    hint: "与夏至相反",
    difficulty: 2,
    category: "节气",
    explanation: "冬至时北半球白天最短，黑夜最长"
  },
  {
    id: 644,
    question: "哪个节气有吃汤圆的习俗？",
    answer: "D",
    options: {
      A: "立冬",
      B: "小雪",
      C: "大雪",
      D: "冬至"
    },
    hint: "南方习俗",
    difficulty: 2,
    category: "节气",
    explanation: "南方地区有'冬至大如年'的说法，冬至要吃汤圆"
  },
  {
    id: 645,
    question: "'惊蛰'时节哪些动物开始活动？",
    answer: "B",
    options: {
      A: "候鸟迁徙",
      B: "冬眠动物苏醒",
      C: "鱼类产卵",
      D: "昆虫越冬"
    },
    hint: "春雷惊百虫",
    difficulty: 2,
    category: "节气",
    explanation: "惊蛰意味着春雷惊醒冬眠的动物，如蛇、青蛙等开始活动"
  },
  {
    id: 646,
    question: "哪个节气最适合赏月？",
    answer: "C",
    options: {
      A: "白露",
      B: "秋分",
      C: "中秋（非节气）",
      D: "寒露"
    },
    hint: "传统节日",
    difficulty: 2,
    category: "节气",
    explanation: "中秋节（农历八月十五）最适合赏月，但中秋节不是二十四节气"
  },
  {
    id: 647,
    question: "'大寒'之后是什么节气？",
    answer: "A",
    options: {
      A: "立春",
      B: "雨水",
      C: "惊蛰",
      D: "春分"
    },
    hint: "节气循环",
    difficulty: 2,
    category: "节气",
    explanation: "大寒是冬季最后一个节气，之后是立春，开始新的节气循环"
  },
  {
    id: 648,
    question: "哪个节气与'三伏'中的'末伏'相关？",
    answer: "D",
    options: {
      A: "小暑",
      B: "大暑",
      C: "立秋",
      D: "立秋"
    },
    hint: "立秋后第一个庚日",
    difficulty: 3,
    category: "节气",
    explanation: "末伏在立秋后第一个庚日开始，所以与立秋节气相关"
  },
  {
    id: 649,
    question: "'雨水'时节降雨量如何变化？",
    answer: "B",
    options: {
      A: "减少",
      B: "增多",
      C: "不变",
      D: "降雪"
    },
    hint: "节气名称含义",
    difficulty: 2,
    category: "节气",
    explanation: "雨水意味着降雨开始增多，气温回升，冰雪融化"
  },
  {
    id: 650,
    question: "二十四节气完整名称最早出现在哪部著作？",
    answer: "C",
    options: {
      A: "《诗经》",
      B: "《尚书》",
      C: "《淮南子》",
      D: "《史记》"
    },
    hint: "西汉时期",
    difficulty: 3,
    category: "节气",
    explanation: "西汉刘安的《淮南子·天文训》首次完整记载了二十四节气名称"
  }
];

export default solarTermsRiddles;
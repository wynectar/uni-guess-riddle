import { Riddle } from './types'
// 天文地理类灯谜 (100条)
const astronomyGeographyRiddles: Riddle[] = [
  {
    id: 1,
    question: "太阳系中最大的行星是？",
    answer: "C",
    options: {
      A: "地球",
      B: "火星", 
      C: "木星",
      D: "土星"
    },
    hint: "它的质量是其他七大行星总和的2.5倍",
    difficulty: 1,
    category: "天文地理",
    explanation: "木星是太阳系中最大的行星，质量约为地球的318倍"
  },
  {
    id: 2,
    question: "地球的天然卫星是什么？",
    answer: "D",
    options: {
      A: "太阳",
      B: "火星",
      C: "金星",
      D: "月球"
    },
    hint: "夜晚天空中能看到的明亮天体",
    difficulty: 1,
    category: "天文地理",
    explanation: "月球是地球唯一的天然卫星"
  },
  {
    id: 3,
    question: "世界上最高的山峰是？",
    answer: "C",
    options: {
      A: "乔戈里峰",
      B: "干城章嘉峰",
      C: "珠穆朗玛峰",
      D: "洛子峰"
    },
    hint: "位于中国和尼泊尔边境",
    difficulty: 1,
    category: "天文地理",
    explanation: "珠穆朗玛峰海拔8848.86米，是世界最高峰"
  },
  {
    id: 4,
    question: "哪个星球被称为'红色星球'？",
    answer: "B",
    options: {
      A: "金星",
      B: "火星",
      C: "木星",
      D: "水星"
    },
    hint: "表面富含氧化铁",
    difficulty: 1,
    category: "天文地理",
    explanation: "火星表面因富含氧化铁而呈红色"
  },
  {
    id: 5,
    question: "世界上最长的河流是？",
    answer: "D",
    options: {
      A: "亚马逊河",
      B: "长江",
      C: "密西西比河",
      D: "尼罗河"
    },
    hint: "流经非洲东北部",
    difficulty: 2,
    category: "天文地理",
    explanation: "尼罗河全长约6670公里，是世界最长河流"
  },
  {
    id: 6,
    question: "太阳系中距离太阳最近的行星是？",
    answer: "A",
    options: {
      A: "水星",
      B: "金星",
      C: "地球",
      D: "火星"
    },
    hint: "名字与化学元素相同",
    difficulty: 2,
    category: "天文地理",
    explanation: "水星是太阳系中距离太阳最近的行星"
  },
  {
    id: 7,
    question: "中国最大的沙漠是？",
    answer: "C",
    options: {
      A: "巴丹吉林沙漠",
      B: "腾格里沙漠",
      C: "塔克拉玛干沙漠",
      D: "古尔班通古特沙漠"
    },
    hint: "位于新疆南部",
    difficulty: 2,
    category: "天文地理",
    explanation: "塔克拉玛干沙漠是中国最大的沙漠，面积约33万平方公里"
  },
  {
    id: 8,
    question: "哪个大洲被称为'冰雪大陆'？",
    answer: "B",
    options: {
      A: "北美洲",
      B: "南极洲",
      C: "欧洲",
      D: "亚洲"
    },
    hint: "没有常住人口的大陆",
    difficulty: 2,
    category: "天文地理",
    explanation: "南极洲被冰盖覆盖，气温极低，被称为冰雪大陆"
  },
  {
    id: 9,
    question: "世界上最深的海洋是？",
    answer: "D",
    options: {
      A: "大西洋",
      B: "印度洋",
      C: "北冰洋",
      D: "太平洋"
    },
    hint: "包含马里亚纳海沟",
    difficulty: 2,
    category: "天文地理",
    explanation: "太平洋平均深度约4028米，最深处马里亚纳海沟深达11034米"
  },
  {
    id: 10,
    question: "地球自转一周需要多长时间？",
    answer: "B",
    options: {
      A: "12小时",
      B: "24小时",
      C: "365天",
      D: "30天"
    },
    hint: "一天的时间",
    difficulty: 1,
    category: "天文地理",
    explanation: "地球自转一周约需24小时，这就是我们一天的时间"
  },
  {
    id: 11,
    question: "中国面积最大的省份是？",
    answer: "A",
    options: {
      A: "新疆",
      B: "西藏",
      C: "内蒙古",
      D: "青海"
    },
    hint: "位于西北地区",
    difficulty: 2,
    category: "天文地理",
    explanation: "新疆面积约166万平方公里，占中国陆地总面积的六分之一"
  },
  {
    id: 12,
    question: "哪个行星被称为'晨星'或'昏星'？",
    answer: "B",
    options: {
      A: "水星",
      B: "金星",
      C: "火星",
      D: "木星"
    },
    hint: "天空中最亮的行星",
    difficulty: 2,
    category: "天文地理",
    explanation: "金星在日出前或日落后可见，被称为晨星或昏星"
  },
  {
    id: 13,
    question: "世界上最大的岛屿是？",
    answer: "C",
    options: {
      A: "本州岛",
      B: "大不列颠岛",
      C: "格陵兰岛",
      D: "马达加斯加岛"
    },
    hint: "属于丹麦",
    difficulty: 2,
    category: "天文地理",
    explanation: "格陵兰岛面积约216.6万平方公里，是世界最大岛屿"
  },
  {
    id: 14,
    question: "地球公转一周需要多长时间？",
    answer: "C",
    options: {
      A: "24小时",
      B: "30天",
      C: "365天",
      D: "12个月"
    },
    hint: "一年的时间",
    difficulty: 1,
    category: "天文地理",
    explanation: "地球绕太阳公转一周约需365.25天，这就是一年的时间"
  },
  {
    id: 15,
    question: "哪个国家被称为'千岛之国'？",
    answer: "A",
    options: {
      A: "印度尼西亚",
      B: "菲律宾",
      C: "日本",
      D: "马尔代夫"
    },
    hint: "东南亚国家",
    difficulty: 2,
    category: "天文地理",
    explanation: "印度尼西亚拥有17508个岛屿，是世界最大的群岛国家"
  },
  {
    id: 16,
    question: "世界上最长的山脉是？",
    answer: "B",
    options: {
      A: "喜马拉雅山脉",
      B: "安第斯山脉",
      C: "落基山脉",
      D: "阿尔卑斯山脉"
    },
    hint: "位于南美洲",
    difficulty: 2,
    category: "天文地理",
    explanation: "安第斯山脉全长约8900公里，是世界最长的山脉"
  },
  {
    id: 17,
    question: "太阳系中唯一有生命存在的行星是？",
    answer: "C",
    options: {
      A: "火星",
      B: "金星",
      C: "地球",
      D: "木星"
    },
    hint: "我们居住的星球",
    difficulty: 1,
    category: "天文地理",
    explanation: "地球是目前已知唯一存在生命的行星"
  },
  {
    id: 18,
    question: "地球上最大的海洋是？",
    answer: "A",
    options: {
      A: "太平洋",
      B: "大西洋",
      C: "印度洋",
      D: "北冰洋"
    },
    hint: "面积最大",
    difficulty: 2,
    category: "天文地理",
    explanation: "太平洋面积约1.65亿平方公里，占地球海洋总面积的一半"
  },
  {
    id: 19,
    question: "哪个行星有最美丽的光环？",
    answer: "D",
    options: {
      A: "木星",
      B: "天王星",
      C: "海王星",
      D: "土星"
    },
    hint: "以冰粒和岩石碎片组成的环而闻名",
    difficulty: 2,
    category: "天文地理",
    explanation: "土星的光环主要由冰粒和少量岩石碎片组成，直径达27万公里"
  },
  {
    id: 20,
    question: "中国最长的河流是？",
    answer: "B",
    options: {
      A: "黄河",
      B: "长江",
      C: "珠江",
      D: "黑龙江"
    },
    hint: "发源于青藏高原，注入东海",
    difficulty: 1,
    category: "天文地理",
    explanation: "长江全长约6397公里，是中国第一、世界第三长河"
  },
  {
    id: 21,
    question: "哪个国家横跨欧亚两大洲？",
    answer: "C",
    options: {
      A: "土耳其",
      B: "埃及",
      C: "俄罗斯",
      D: "哈萨克斯坦"
    },
    hint: "世界面积最大的国家",
    difficulty: 2,
    category: "天文地理",
    explanation: "俄罗斯国土横跨欧亚两大洲，是世界面积最大的国家"
  },
  {
    id: 22,
    question: "地球上最大的淡水湖是？",
    answer: "A",
    options: {
      A: "苏必利尔湖",
      B: "贝加尔湖",
      C: "维多利亚湖",
      D: "密歇根湖"
    },
    hint: "位于北美洲",
    difficulty: 3,
    category: "天文地理",
    explanation: "苏必利尔湖是世界面积最大的淡水湖，面积约8.2万平方公里"
  },
  {
    id: 23,
    question: "月亮绕地球公转一周需要多长时间？",
    answer: "B",
    options: {
      A: "24小时",
      B: "一个月",
      C: "一年",
      D: "一周"
    },
    hint: "约27.3天",
    difficulty: 2,
    category: "天文地理",
    explanation: "月球绕地球公转一周约需27.3天，这就是一个月的由来"
  },
  {
    id: 24,
    question: "世界上最小的国家是？",
    answer: "D",
    options: {
      A: "摩纳哥",
      B: "圣马力诺",
      C: "瑙鲁",
      D: "梵蒂冈"
    },
    hint: "位于意大利罗马城内",
    difficulty: 2,
    category: "天文地理",
    explanation: "梵蒂冈面积仅0.44平方公里，是世界最小的国家"
  },
  {
    id: 25,
    question: "太阳系中拥有卫星最多的行星是？",
    answer: "C",
    options: {
      A: "地球",
      B: "火星",
      C: "土星",
      D: "木星"
    },
    hint: "截至2023年确认有146颗卫星",
    difficulty: 3,
    category: "天文地理",
    explanation: "土星拥有146颗已确认的卫星，是太阳系中卫星最多的行星"
  },
  {
    id: 26,
    question: "地球上最大的珊瑚礁群是？",
    answer: "A",
    options: {
      A: "大堡礁",
      B: "马尔代夫环礁",
      C: "红海珊瑚礁",
      D: "佛得角珊瑚礁"
    },
    hint: "位于澳大利亚东北海岸",
    difficulty: 2,
    category: "天文地理",
    explanation: "大堡礁绵延2300公里，是世界最大最长的珊瑚礁群"
  },
  {
    id: 27,
    question: "哪个行星被称为'蓝色的行星'？",
    answer: "C",
    options: {
      A: "火星",
      B: "金星",
      C: "地球",
      D: "海王星"
    },
    hint: "从太空看是蓝色的",
    difficulty: 2,
    category: "天文地理",
    explanation: "地球表面71%被水覆盖，从太空看呈蓝色"
  },
  {
    id: 28,
    question: "世界上最深的湖泊是？",
    answer: "B",
    options: {
      A: "苏必利尔湖",
      B: "贝加尔湖",
      C: "维多利亚湖",
      D: "坦噶尼喀湖"
    },
    hint: "位于俄罗斯西伯利亚",
    difficulty: 3,
    category: "天文地理",
    explanation: "贝加尔湖最深处达1642米，是世界最深的湖泊"
  },
  {
    id: 29,
    question: "太阳的直径大约是地球的多少倍？",
    answer: "C",
    options: {
      A: "50倍",
      B: "80倍",
      C: "109倍",
      D: "150倍"
    },
    hint: "约109倍",
    difficulty: 3,
    category: "天文地理",
    explanation: "太阳直径约139.2万公里，是地球直径的109倍"
  },
  {
    id: 30,
    question: "世界上最大的半岛是？",
    answer: "D",
    options: {
      A: "印度半岛",
      B: "伊比利亚半岛",
      C: "中南半岛",
      D: "阿拉伯半岛"
    },
    hint: "位于亚洲西南部",
    difficulty: 2,
    category: "天文地理",
    explanation: "阿拉伯半岛面积约322万平方公里，是世界最大的半岛"
  },
  {
    id: 31,
    question: "哪个行星自转方向与其他行星相反？",
    answer: "B",
    options: {
      A: "火星",
      B: "金星",
      C: "木星",
      D: "水星"
    },
    hint: "自东向西自转",
    difficulty: 3,
    category: "天文地理",
    explanation: "金星是太阳系中唯一自东向西自转的行星"
  },
  {
    id: 32,
    question: "中国最大的淡水湖是？",
    answer: "A",
    options: {
      A: "鄱阳湖",
      B: "洞庭湖",
      C: "太湖",
      D: "洪泽湖"
    },
    hint: "位于江西省北部",
    difficulty: 2,
    category: "天文地理",
    explanation: "鄱阳湖面积约3585平方公里，是中国最大的淡水湖"
  },
  {
    id: 33,
    question: "太阳系中最热的行星是？",
    answer: "D",
    options: {
      A: "水星",
      B: "火星",
      C: "木星",
      D: "金星"
    },
    hint: "表面温度可达470℃",
    difficulty: 2,
    category: "天文地理",
    explanation: "金星大气中二氧化碳含量达96.5%，温室效应使其表面温度高达470℃"
  },
  {
    id: 34,
    question: "世界上最大的瀑布是？",
    answer: "C",
    options: {
      A: "尼亚加拉瀑布",
      B: "伊瓜苏瀑布",
      C: "维多利亚瀑布",
      D: "安赫尔瀑布"
    },
    hint: "位于非洲赞比西河上",
    difficulty: 2,
    category: "天文地理",
    explanation: "维多利亚瀑布宽1700米，高108米，是世界最大瀑布"
  },
  {
    id: 35,
    question: "地球内部结构从外到内依次是？",
    answer: "B",
    options: {
      A: "地核-地幔-地壳",
      B: "地壳-地幔-地核",
      C: "地幔-地壳-地核",
      D: "地壳-地核-地幔"
    },
    hint: "最外层是地壳",
    difficulty: 2,
    category: "天文地理",
    explanation: "地球内部结构由外向内依次为地壳、地幔和地核"
  },
  {
    id: 36,
    question: "哪个行星被称为'带外行星'？",
    answer: "A",
    options: {
      A: "天王星",
      B: "火星",
      C: "土星",
      D: "木星"
    },
    hint: "距离太阳较远的行星",
    difficulty: 3,
    category: "天文地理",
    explanation: "天王星、海王星等距离太阳较远的行星被称为带外行星"
  },
  {
    id: 37,
    question: "中国最大的咸水湖是？",
    answer: "C",
    options: {
      A: "纳木错",
      B: "色林错",
      C: "青海湖",
      D: "太湖"
    },
    hint: "位于青海省",
    difficulty: 2,
    category: "天文地理",
    explanation: "青海湖面积约4583平方公里，是中国最大的咸水湖"
  },
  {
    id: 38,
    question: "地球上最长的纬线是？",
    answer: "D",
    options: {
      A: "北回归线",
      B: "南回归线",
      C: "北极圈",
      D: "赤道"
    },
    hint: "0度纬线",
    difficulty: 1,
    category: "天文地理",
    explanation: "赤道是地球上最长的纬线，全长约4万公里"
  },
  {
    id: 39,
    question: "太阳系中密度最小的行星是？",
    answer: "B",
    options: {
      A: "木星",
      B: "土星",
      C: "天王星",
      D: "海王星"
    },
    hint: "密度比水还小",
    difficulty: 3,
    category: "天文地理",
    explanation: "土星的平均密度为0.687克/立方厘米，比水还小"
  },
  {
    id: 40,
    question: "世界上最宽的瀑布是？",
    answer: "A",
    options: {
      A: "伊瓜苏瀑布",
      B: "尼亚加拉瀑布",
      C: "维多利亚瀑布",
      D: "安赫尔瀑布"
    },
    hint: "位于巴西和阿根廷交界处",
    difficulty: 2,
    category: "天文地理",
    explanation: "伊瓜苏瀑布宽4000米，是世界最宽的瀑布群"
  },
  {
    id: 41,
    question: "地球表面陆地面积约占多少？",
    answer: "C",
    options: {
      A: "21%",
      B: "25%",
      C: "29%",
      D: "33%"
    },
    hint: "约三成",
    difficulty: 2,
    category: "天文地理",
    explanation: "地球表面陆地面积约占29%，海洋面积约占71%"
  },
  {
    id: 42,
    question: "哪个行星自转速度最快？",
    answer: "D",
    options: {
      A: "地球",
      B: "火星",
      C: "金星",
      D: "木星"
    },
    hint: "自转周期约10小时",
    difficulty: 3,
    category: "天文地理",
    explanation: "木星自转一周只需约9小时55分钟，是太阳系自转最快的行星"
  },
  {
    id: 43,
    question: "中国最大的岛屿是？",
    answer: "B",
    options: {
      A: "海南岛",
      B: "台湾岛",
      C: "崇明岛",
      D: "舟山岛"
    },
    hint: "位于中国东南沿海",
    difficulty: 2,
    category: "天文地理",
    explanation: "台湾岛面积约3.58万平方公里，是中国第一大岛"
  },
  {
    id: 44,
    question: "地球上最深的海洋在哪里？",
    answer: "A",
    options: {
      A: "马里亚纳海沟",
      B: "汤加海沟",
      C: "日本海沟",
      D: "菲律宾海沟"
    },
    hint: "太平洋西部",
    difficulty: 2,
    category: "天文地理",
    explanation: "马里亚纳海沟最深处达11034米，是地球已知最深的地方"
  },
  {
    id: 45,
    question: "太阳系中唯一有液态水的行星是？",
    answer: "C",
    options: {
      A: "火星",
      B: "金星",
      C: "地球",
      D: "木星"
    },
    hint: "生命存在的必要条件",
    difficulty: 2,
    category: "天文地理",
    explanation: "地球是目前已知太阳系中唯一表面有液态水存在的行星"
  },
  {
    id: 46,
    question: "世界上最大的三角洲是？",
    answer: "D",
    options: {
      A: "长江三角洲",
      B: "湄公河三角洲",
      C: "密西西比河三角洲",
      D: "恒河-布拉马普特拉河三角洲"
    },
    hint: "位于孟加拉国和印度",
    difficulty: 3,
    category: "天文地理",
    explanation: "恒河-布拉马普特拉河三角洲面积约10.5万平方公里，是世界最大的三角洲"
  },
  {
    id: 47,
    question: "月球上最大的环形山是？",
    answer: "B",
    options: {
      A: "哥白尼环形山",
      B: "第谷环形山",
      C: "开普勒环形山",
      D: "柏拉图环形山"
    },
    hint: "直径约85公里",
    difficulty: 3,
    category: "天文地理",
    explanation: "第谷环形山是月球上最明显的环形山之一，直径约85公里"
  },
  {
    id: 48,
    question: "中国最北端的省份是？",
    answer: "A",
    options: {
      A: "黑龙江",
      B: "内蒙古",
      C: "新疆",
      D: "吉林"
    },
    hint: "省会哈尔滨",
    difficulty: 2,
    category: "天文地理",
    explanation: "黑龙江省漠河市是中国最北端的城市"
  },
  {
    id: 49,
    question: "地球上最大的热带雨林是？",
    answer: "C",
    options: {
      A: "刚果雨林",
      B: "东南亚雨林",
      C: "亚马逊雨林",
      D: "马达加斯加雨林"
    },
    hint: "位于南美洲",
    difficulty: 2,
    category: "天文地理",
    explanation: "亚马逊雨林面积约550万平方公里，是世界最大的热带雨林"
  },
  {
    id: 50,
    question: "太阳系中轨道最扁的行星是？",
    answer: "D",
    options: {
      A: "地球",
      B: "火星",
      C: "木星",
      D: "水星"
    },
    hint: "轨道偏心率最大",
    difficulty: 3,
    category: "天文地理",
    explanation: "水星的轨道偏心率最大，为0.2056，轨道最扁"
  },
  {
    id: 51,
    question: "世界上最深的峡谷是？",
    answer: "B",
    options: {
      A: "科罗拉多大峡谷",
      B: "雅鲁藏布大峡谷",
      C: "科尔卡大峡谷",
      D: "虎跳峡"
    },
    hint: "位于中国西藏",
    difficulty: 3,
    category: "天文地理",
    explanation: "雅鲁藏布大峡谷最深达6009米，是世界最深的峡谷"
  },
  {
    id: 52,
    question: "太阳的核心温度大约是？",
    answer: "C",
    options: {
      A: "100万摄氏度",
      B: "1000万摄氏度",
      C: "1500万摄氏度",
      D: "1亿摄氏度"
    },
    hint: "千万度级别",
    difficulty: 3,
    category: "天文地理",
    explanation: "太阳核心温度约1500万摄氏度，在此发生核聚变反应"
  },
  {
    id: 53,
    question: "世界上最大的内陆国是？",
    answer: "A",
    options: {
      A: "哈萨克斯坦",
      B: "蒙古",
      C: "乌兹别克斯坦",
      D: "埃塞俄比亚"
    },
    hint: "位于中亚",
    difficulty: 2,
    category: "天文地理",
    explanation: "哈萨克斯坦面积272.5万平方公里，是世界最大的内陆国"
  },
  {
    id: 54,
    question: "地球的年龄大约是？",
    answer: "D",
    options: {
      A: "10亿年",
      B: "30亿年",
      C: "40亿年",
      D: "46亿年"
    },
    hint: "约46亿岁",
    difficulty: 2,
    category: "天文地理",
    explanation: "根据放射性同位素测定，地球年龄约为46亿年"
  },
  {
    id: 55,
    question: "世界上最长的洞穴系统是？",
    answer: "B",
    options: {
      A: "猛犸洞穴",
      B: "猛犸洞穴系统",
      C: "贾恩茨考斯韦洞穴",
      D: "卡尔斯巴德洞穴"
    },
    hint: "位于美国肯塔基州",
    difficulty: 3,
    category: "天文地理",
    explanation: "美国肯塔基州的猛犸洞穴系统总长超过651公里，是世界最长的洞穴"
  },
  {
    id: 56,
    question: "太阳系中卫星最多的行星是？",
    answer: "D",
    options: {
      A: "地球",
      B: "火星",
      C: "木星",
      D: "土星"
    },
    hint: "截至2023年有146颗卫星",
    difficulty: 3,
    category: "天文地理",
    explanation: "土星拥有146颗已确认的卫星，是太阳系中卫星最多的行星"
  },
  {
    id: 57,
    question: "中国最大的盆地是？",
    answer: "C",
    options: {
      A: "四川盆地",
      B: "柴达木盆地",
      C: "塔里木盆地",
      D: "准噶尔盆地"
    },
    hint: "位于新疆南部",
    difficulty: 2,
    category: "天文地理",
    explanation: "塔里木盆地面积约53万平方公里，是中国最大的盆地"
  },
  {
    id: 58,
    question: "地球上最大的火山是？",
    answer: "A",
    options: {
      A: "冒纳罗亚火山",
      B: "富士山",
      C: "维苏威火山",
      D: "黄石超级火山"
    },
    hint: "位于夏威夷",
    difficulty: 2,
    category: "天文地理",
    explanation: "夏威夷的冒纳罗亚火山从海底算起高约9170米，是世界最大的火山"
  },
  {
    id: 59,
    question: "月球距离地球大约多远？",
    answer: "B",
    options: {
      A: "3万公里",
      B: "38万公里",
      C: "100万公里",
      D: "150万公里"
    },
    hint: "约38万公里",
    difficulty: 2,
    category: "天文地理",
    explanation: "月球距离地球平均约38.4万公里"
  },
  {
    id: 60,
    question: "世界上最大的群岛国家是？",
    answer: "D",
    options: {
      A: "菲律宾",
      B: "日本",
      C: "马尔代夫",
      D: "印度尼西亚"
    },
    hint: "拥有17000多个岛屿",
    difficulty: 2,
    category: "天文地理",
    explanation: "印度尼西亚拥有17508个岛屿，是世界最大的群岛国家"
  },
  {
    id: 61,
    question: "地球大气中含量最多的气体是？",
    answer: "A",
    options: {
      A: "氮气",
      B: "氧气",
      C: "二氧化碳",
      D: "氩气"
    },
    hint: "约占78%",
    difficulty: 2,
    category: "天文地理",
    explanation: "地球大气中氮气约占78%，氧气约占21%"
  },
  {
    id: 62,
    question: "太阳系中最大的卫星是？",
    answer: "C",
    options: {
      A: "月球",
      B: "木卫二",
      C: "木卫三",
      D: "土卫六"
    },
    hint: "比水星还大",
    difficulty: 3,
    category: "天文地理",
    explanation: "木卫三直径约5262公里，比水星还大，是太阳系最大的卫星"
  },
  {
    id: 63,
    question: "中国最南端的城市是？",
    answer: "B",
    options: {
      A: "三亚",
      B: "三沙",
      C: "海口",
      D: "湛江"
    },
    hint: "位于南海",
    difficulty: 2,
    category: "天文地理",
    explanation: "海南省三沙市是中国最南端的地级市"
  },
  {
    id: 64,
    question: "世界上最长的海峡是？",
    answer: "D",
    options: {
      A: "马六甲海峡",
      B: "直布罗陀海峡",
      C: "台湾海峡",
      D: "莫桑比克海峡"
    },
    hint: "位于非洲东南部",
    difficulty: 3,
    category: "天文地理",
    explanation: "莫桑比克海峡长约1670公里，是世界最长的海峡"
  },
  {
    id: 65,
    question: "太阳的寿命大约是？",
    answer: "C",
    options: {
      A: "50亿年",
      B: "80亿年",
      C: "100亿年",
      D: "150亿年"
    },
    hint: "约100亿年",
    difficulty: 3,
    category: "天文地理",
    explanation: "太阳的预计寿命约为100亿年，目前约45.7亿岁"
  },
  {
    id: 66,
    question: "世界上最大的高原是？",
    answer: "A",
    options: {
      A: "巴西高原",
      B: "青藏高原",
      C: "德干高原",
      D: "蒙古高原"
    },
    hint: "位于南美洲",
    difficulty: 2,
    category: "天文地理",
    explanation: "巴西高原面积约500万平方公里，是世界最大的高原"
  },
  {
    id: 67,
    question: "地球自转轴与公转轨道面的夹角是？",
    answer: "B",
    options: {
      A: "15.5度",
      B: "23.5度",
      C: "30度",
      D: "45度"
    },
    hint: "约23.5度",
    difficulty: 3,
    category: "天文地理",
    explanation: "地球自转轴与公转轨道面成约23.5度的夹角，这导致了四季变化"
  },
  {
    id: 68,
    question: "世界上最长的运河是？",
    answer: "C",
    options: {
      A: "苏伊士运河",
      B: "巴拿马运河",
      C: "京杭大运河",
      D: "伊利运河"
    },
    hint: "位于中国",
    difficulty: 2,
    category: "天文地理",
    explanation: "京杭大运河全长约1794公里，是世界最长的古代运河"
  },
  {
    id: 69,
    question: "太阳系中最冷的行星是？",
    answer: "D",
    options: {
      A: "天王星",
      B: "海王星",
      C: "冥王星",
      D: "天王星"
    },
    hint: "温度可达-224℃",
    difficulty: 3,
    category: "天文地理",
    explanation: "天王星是太阳系最冷的行星，最低温度可达-224℃"
  },
  {
    id: 70,
    question: "中国最大的平原是？",
    answer: "A",
    options: {
      A: "东北平原",
      B: "华北平原",
      C: "长江中下游平原",
      D: "关中平原"
    },
    hint: "位于中国东北部",
    difficulty: 2,
    category: "天文地理",
    explanation: "东北平原面积约35万平方公里，是中国最大的平原"
  },
  {
    id: 71,
    question: "地球上最大的岩石是？",
    answer: "B",
    options: {
      A: "巨石阵",
      B: "艾尔斯岩",
      C: "魔鬼塔",
      D: "马特洪峰"
    },
    hint: "位于澳大利亚",
    difficulty: 2,
    category: "天文地理",
    explanation: "澳大利亚的艾尔斯岩高348米，长3000米，是世界最大的单体岩石"
  },
  {
    id: 72,
    question: "太阳系中唯一有磁场的行星是？",
    answer: "C",
    options: {
      A: "所有行星都有",
      B: "只有地球有",
      C: "多个行星有",
      D: "只有木星有"
    },
    hint: "地球不是唯一",
    difficulty: 3,
    category: "天文地理",
    explanation: "地球、木星、土星、天王星、海王星等都有磁场"
  },
  {
    id: 73,
    question: "世界上最大的湖泊是？",
    answer: "D",
    options: {
      A: "苏必利尔湖",
      B: "维多利亚湖",
      C: "贝加尔湖",
      D: "里海"
    },
    hint: "咸水湖",
    difficulty: 2,
    category: "天文地理",
    explanation: "里海面积约37.1万平方公里，是世界最大的湖泊（咸水湖）"
  },
  {
    id: 74,
    question: "地球到太阳的平均距离大约是？",
    answer: "A",
    options: {
      A: "1.5亿公里",
      B: "5000万公里",
      C: "3亿公里",
      D: "5亿公里"
    },
    hint: "约1.5亿公里",
    difficulty: 2,
    category: "天文地理",
    explanation: "地球到太阳的平均距离约1.496亿公里，称为1个天文单位"
  },
  {
    id: 75,
    question: "世界上最深的海沟是？",
    answer: "B",
    options: {
      A: "日本海沟",
      B: "马里亚纳海沟",
      C: "菲律宾海沟",
      D: "汤加海沟"
    },
    hint: "位于太平洋西部",
    difficulty: 2,
    category: "天文地理",
    explanation: "马里亚纳海沟最深处达11034米，是地球已知最深的地方"
  },
  {
    id: 76,
    question: "中国最大的淡水湖群是？",
    answer: "C",
    options: {
      A: "洞庭湖群",
      B: "太湖流域",
      C: "鄱阳湖流域",
      D: "洪泽湖群"
    },
    hint: "位于江西省",
    difficulty: 3,
    category: "天文地理",
    explanation: "鄱阳湖及其周边湖泊组成中国最大的淡水湖群"
  },
  {
    id: 77,
    question: "太阳的直径大约是地球直径的多少倍？",
    answer: "D",
    options: {
      A: "50倍",
      B: "80倍",
      C: "100倍",
      D: "109倍"
    },
    hint: "约109倍",
    difficulty: 2,
    category: "天文地理",
    explanation: "太阳直径约139.2万公里，是地球直径（12756公里）的109倍"
  },
  {
    id: 78,
    question: "世界上最大的沙漠是？",
    answer: "A",
    options: {
      A: "撒哈拉沙漠",
      B: "阿拉伯沙漠",
      C: "戈壁沙漠",
      D: "澳洲沙漠"
    },
    hint: "位于非洲北部",
    difficulty: 2,
    category: "天文地理",
    explanation: "撒哈拉沙漠面积约906.5万平方公里，是世界最大的沙漠"
  },
  {
    id: 79,
    question: "地球内部温度最高的部分是？",
    answer: "B",
    options: {
      A: "地壳",
      B: "地核",
      C: "地幔",
      D: "岩石圈"
    },
    hint: "最内部",
    difficulty: 2,
    category: "天文地理",
    explanation: "地核温度可达4000-6000℃，是地球内部温度最高的部分"
  },
  {
    id: 80,
    question: "世界上最长的海岸线属于哪个国家？",
    answer: "C",
    options: {
      A: "俄罗斯",
      B: "美国",
      C: "加拿大",
      D: "澳大利亚"
    },
    hint: "北美洲国家",
    difficulty: 3,
    category: "天文地理",
    explanation: "加拿大海岸线长约24.3万公里，是世界最长的海岸线"
  },
  {
    id: 81,
    question: "太阳系中最大的小行星是？",
    answer: "D",
    options: {
      A: "智神星",
      B: "灶神星",
      C: "健神星",
      D: "谷神星"
    },
    hint: "直径约950公里",
    difficulty: 3,
    category: "天文地理",
    explanation: "谷神星直径约950公里，是太阳系最大的小行星"
  },
  {
    id: 82,
    question: "中国最长的内陆河是？",
    answer: "A",
    options: {
      A: "塔里木河",
      B: "黑河",
      C: "疏勒河",
      D: "额尔齐斯河"
    },
    hint: "位于新疆",
    difficulty: 2,
    category: "天文地理",
    explanation: "塔里木河全长约2137公里，是中国最长的内陆河"
  },
  {
    id: 83,
    question: "地球上最大的冰川是？",
    answer: "B",
    options: {
      A: "喜马拉雅冰川",
      B: "南极冰盖",
      C: "格陵兰冰盖",
      D: "阿尔卑斯冰川"
    },
    hint: "位于南极洲",
    difficulty: 2,
    category: "天文地理",
    explanation: "南极冰盖覆盖面积约1390万平方公里，是世界最大的冰川"
  },
  {
    id: 84,
    question: "太阳的光到达地球需要多长时间？",
    answer: "C",
    options: {
      A: "1秒钟",
      B: "1分钟",
      C: "8分钟",
      D: "1小时"
    },
    hint: "约8分钟",
    difficulty: 2,
    category: "天文地理",
    explanation: "太阳光到达地球约需8分20秒"
  },
  {
    id: 85,
    question: "世界上最大的群岛是？",
    answer: "D",
    options: {
      A: "菲律宾群岛",
      B: "日本群岛",
      C: "马尔代夫群岛",
      D: "马来群岛"
    },
    hint: "位于东南亚",
    difficulty: 2,
    category: "天文地理",
    explanation: "马来群岛由2万多个岛屿组成，是世界最大的群岛"
  },
  {
    id: 86,
    question: "地球大气层中最厚的一层是？",
    answer: "A",
    options: {
      A: "对流层",
      B: "平流层",
      C: "中间层",
      D: "热层"
    },
    hint: "最接近地面的一层",
    difficulty: 2,
    category: "天文地理",
    explanation: "对流层厚度约8-18公里，是大气层中最厚的一层"
  },
  {
    id: 87,
    question: "太阳系中拥有最大火山的行星是？",
    answer: "B",
    options: {
      A: "地球",
      B: "火星",
      C: "金星",
      D: "木星"
    },
    hint: "奥林帕斯山",
    difficulty: 3,
    category: "天文地理",
    explanation: "火星上的奥林帕斯山高约22公里，是太阳系最高的火山"
  },
  {
    id: 88,
    question: "中国最大的草原是？",
    answer: "C",
    options: {
      A: "呼伦贝尔草原",
      B: "锡林郭勒草原",
      C: "内蒙古草原",
      D: "新疆草原"
    },
    hint: "世界四大草原之一",
    difficulty: 2,
    category: "天文地理",
    explanation: "内蒙古草原总面积约88万平方公里，是中国最大的草原"
  },
  {
    id: 89,
    question: "地球上最大的陨石坑是？",
    answer: "D",
    options: {
      A: "巴林杰陨石坑",
      B: "希克苏鲁伯陨石坑",
      C: "沃尔夫溪陨石坑",
      D: "弗里德堡陨石坑"
    },
    hint: "位于南非",
    difficulty: 3,
    category: "天文地理",
    explanation: "南非的弗里德堡陨石坑直径约300公里，是地球已知最大的陨石坑"
  },
  {
    id: 90,
    question: "太阳系中唯一有浓厚大气层的卫星是？",
    answer: "A",
    options: {
      A: "土卫六",
      B: "木卫二",
      C: "木卫一",
      D: "海卫一"
    },
    hint: "土星的卫星",
    difficulty: 3,
    category: "天文地理",
    explanation: "土卫六（泰坦）有浓厚的大气层，主要成分是氮气"
  },
  {
    id: 91,
    question: "世界上最长的山脉系统是？",
    answer: "B",
    options: {
      A: "安第斯山脉",
      B: "科迪勒拉山系",
      C: "喜马拉雅山脉",
      D: "阿尔卑斯山脉"
    },
    hint: "纵贯美洲大陆",
    difficulty: 3,
    category: "天文地理",
    explanation: "科迪勒拉山系全长约1.5万公里，是世界最长的山脉系统"
  },
  {
    id: 92,
    question: "地球的引力加速度大约是？",
    answer: "C",
    options: {
      A: "5.8 m/s²",
      B: "8.9 m/s²",
      C: "9.8 m/s²",
      D: "10.2 m/s²"
    },
    hint: "约9.8米每二次方秒",
    difficulty: 2,
    category: "天文地理",
    explanation: "地球表面重力加速度约为9.8 m/s²"
  },
  {
    id: 93,
    question: "中国最大的自然保护区是？",
    answer: "D",
    options: {
      A: "三江源保护区",
      B: "可可西里保护区",
      C: "阿尔金山保护区",
      D: "羌塘保护区"
    },
    hint: "位于西藏",
    difficulty: 3,
    category: "天文地理",
    explanation: "羌塘自然保护区面积约29.8万平方公里，是中国最大的自然保护区"
  },
  {
    id: 94,
    question: "太阳系中最明亮的行星是？",
    answer: "A",
    options: {
      A: "金星",
      B: "木星",
      C: "火星",
      D: "土星"
    },
    hint: "在夜空中非常明亮",
    difficulty: 2,
    category: "天文地理",
    explanation: "金星是夜空中最亮的行星，视星等可达-4.9等"
  },
  {
    id: 95,
    question: "世界上最深的湖泊位于哪个国家？",
    answer: "B",
    options: {
      A: "美国",
      B: "俄罗斯",
      C: "加拿大",
      D: "中国"
    },
    hint: "位于西伯利亚",
    difficulty: 2,
    category: "天文地理",
    explanation: "贝加尔湖位于俄罗斯西伯利亚，是世界最深的湖泊"
  },
  {
    id: 96,
    question: "地球赤道周长大约是？",
    answer: "C",
    options: {
      A: "2万公里",
      B: "3万公里",
      C: "4万公里",
      D: "5万公里"
    },
    hint: "约4万公里",
    difficulty: 2,
    category: "天文地理",
    explanation: "地球赤道周长约40075公里"
  },
  {
    id: 97,
    question: "太阳系中唯一有液态甲烷湖泊的星球是？",
    answer: "D",
    options: {
      A: "火星",
      B: "木星",
      C: "天王星",
      D: "土卫六"
    },
    hint: "土星的卫星",
    difficulty: 3,
    category: "天文地理",
    explanation: "土卫六（泰坦）表面有液态甲烷湖泊"
  },
  {
    id: 98,
    question: "世界上最大的活火山是？",
    answer: "A",
    options: {
      A: "冒纳罗亚火山",
      B: "富士山",
      C: "维苏威火山",
      D: "圣海伦斯火山"
    },
    hint: "位于夏威夷",
    difficulty: 2,
    category: "天文地理",
    explanation: "夏威夷的冒纳罗亚火山是世界最大的活火山"
  },
  {
    id: 99,
    question: "中国最大的沙漠位于哪个省份？",
    answer: "B",
    options: {
      A: "青海省",
      B: "新疆维吾尔自治区",
      C: "内蒙古自治区",
      D: "甘肃省"
    },
    hint: "西北地区",
    difficulty: 1,
    category: "天文地理",
    explanation: "塔克拉玛干沙漠位于新疆南部，是中国最大的沙漠"
  },
  {
    id: 100,
    question: "太阳系中距离太阳最远的行星是？",
    answer: "D",
    options: {
      A: "土星",
      B: "天王星",
      C: "冥王星（矮行星）",
      D: "海王星"
    },
    hint: "第八颗行星",
    difficulty: 2,
    category: "天文地理",
    explanation: "海王星是太阳系中距离太阳最远的行星（冥王星已被重新分类为矮行星）"
  }
];

export default astronomyGeographyRiddles;
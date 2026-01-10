import { Riddle } from './types'
// 科学技术类灯谜 (70条)
const technologyRiddles: Riddle[] = [
    {
        id: 1101,
        question: "计算机的'大脑'指的是？",
        answer: "B",
        options: {
            A: "内存",
            B: "CPU",
            C: "硬盘",
            D: "主板"
        },
        hint: "中央处理器",
        difficulty: 2,
        category: "科学技术"
    },
    {
        id: 1102,
        question: "互联网的英文缩写是？",
        answer: "A",
        options: {
            A: "Internet",
            B: "Intranet",
            C: "Web",
            D: "Net"
        },
        hint: "全球网络",
        difficulty: 1,
        category: "科学技术"
    },
    {
        id: 1103,
        question: "下列哪种不是编程语言？",
        answer: "D",
        options: {
            A: "Python",
            B: "Java",
            C: "C++",
            D: "HTML"
        },
        hint: "标记语言",
        difficulty: 2,
        category: "科学技术"
    },
    {
        id: 1104,
        question: "谁发明了电灯泡？",
        answer: "B",
        options: {
            A: "尼古拉·特斯拉",
            B: "托马斯·爱迪生",
            C: "亚历山大·贝尔",
            D: "迈克尔·法拉第"
        },
        hint: "美国发明家",
        difficulty: 2,
        category: "科学技术"
    },
    {
        id: 1105,
        question: "下列哪位科学家提出了相对论？",
        answer: "A",
        options: {
            A: "爱因斯坦",
            B: "牛顿",
            C: "霍金",
            D: "伽利略"
        },
        hint: "质能方程 E=mc²",
        difficulty: 2,
        category: "科学技术",
        explanation: "爱因斯坦提出了狭义相对论和广义相对论"
    },
    {
        id: 1106,
        question: "哪种金属在常温下是液态？",
        answer: "B",
        options: {
            A: "铝",
            B: "汞",
            C: "铜",
            D: "铁"
        },
        hint: "温度计中的金属",
        difficulty: 1,
        category: "科学技术",
        explanation: "汞（水银）是唯一在常温下呈液态的金属"
    },
    {
        id: 1107,
        question: "下列哪个不是操作系统？",
        answer: "C",
        options: {
            A: "Windows",
            B: "Linux",
            C: "Office",
            D: "macOS"
        },
        hint: "办公软件",
        difficulty: 1,
        category: "科学技术",
        explanation: "Office是办公软件，不是操作系统"
    },
    {
        id: 1108,
        question: "万有引力定律是哪位科学家提出的？",
        answer: "D",
        options: {
            A: "伽利略",
            B: "开普勒",
            C: "哥白尼",
            D: "牛顿"
        },
        hint: "苹果落地的故事",
        difficulty: 1,
        category: "科学技术",
        explanation: "牛顿在1687年发表的《自然哲学的数学原理》中提出了万有引力定律"
    },
    {
        id: 1109,
        question: "DNA的双螺旋结构是由谁发现的？",
        answer: "A",
        options: {
            A: "沃森和克里克",
            B: "孟德尔",
            C: "达尔文",
            D: "摩尔根"
        },
        hint: "1953年",
        difficulty: 2,
        category: "科学技术",
        explanation: "沃森和克里克在1953年提出了DNA的双螺旋结构模型"
    },
    {
        id: 1110,
        question: "下列哪个不是计算机硬件？",
        answer: "B",
        options: {
            A: "CPU",
            B: "Windows",
            C: "内存",
            D: "硬盘"
        },
        hint: "软件系统",
        difficulty: 1,
        category: "科学技术",
        explanation: "Windows是操作系统软件，不是硬件"
    },
    {
        id: 1111,
        question: "电话的发明者是？",
        answer: "C",
        options: {
            A: "爱迪生",
            B: "特斯拉",
            C: "贝尔",
            D: "马可尼"
        },
        hint: "1876年",
        difficulty: 1,
        category: "科学技术",
        explanation: "亚历山大·贝尔于1876年发明了电话"
    },
    {
        id: 1112,
        question: "下列哪种不是新能源？",
        answer: "D",
        options: {
            A: "太阳能",
            B: "风能",
            C: "地热能",
            D: "煤炭"
        },
        hint: "化石燃料",
        difficulty: 1,
        category: "科学技术",
        explanation: "煤炭是传统化石能源，不是新能源"
    },
    {
        id: 1113,
        question: "元素周期表的创建者是？",
        answer: "A",
        options: {
            A: "门捷列夫",
            B: "居里夫人",
            C: "道尔顿",
            D: "拉瓦锡"
        },
        hint: "俄罗斯化学家",
        difficulty: 2,
        category: "科学技术",
        explanation: "门捷列夫于1869年创建了元素周期表"
    },
    {
        id: 1114,
        question: "下列哪个不是编程语言？",
        answer: "B",
        options: {
            A: "Python",
            B: "Excel",
            C: "Java",
            D: "C++"
        },
        hint: "办公软件",
        difficulty: 1,
        category: "科学技术",
        explanation: "Excel是电子表格软件，不是编程语言"
    },
    {
        id: 1115,
        question: "青霉素的发现者是？",
        answer: "C",
        options: {
            A: "巴斯德",
            B: "科赫",
            C: "弗莱明",
            D: "李斯特"
        },
        hint: "1928年",
        difficulty: 2,
        category: "科学技术",
        explanation: "亚历山大·弗莱明于1928年发现了青霉素"
    },
    {
        id: 1116,
        question: "下列哪个不是网络协议？",
        answer: "D",
        options: {
            A: "HTTP",
            B: "TCP/IP",
            C: "FTP",
            D: "USB"
        },
        hint: "硬件接口",
        difficulty: 2,
        category: "科学技术",
        explanation: "USB是硬件接口标准，不是网络协议"
    },
    {
        id: 1117,
        question: "进化论的提出者是？",
        answer: "A",
        options: {
            A: "达尔文",
            B: "拉马克",
            C: "孟德尔",
            D: "华莱士"
        },
        hint: "《物种起源》",
        difficulty: 1,
        category: "科学技术",
        explanation: "查尔斯·达尔文在《物种起源》中提出了进化论"
    },
    {
        id: 1118,
        question: "下列哪种材料导电性最好？",
        answer: "B",
        options: {
            A: "铜",
            B: "银",
            C: "铝",
            D: "铁"
        },
        hint: "贵金属",
        difficulty: 2,
        category: "科学技术",
        explanation: "银是导电性最好的金属，铜次之"
    },
    {
        id: 1119,
        question: "第一台电子计算机叫什么名字？",
        answer: "C",
        options: {
            A: "苹果I号",
            B: "IBM 701",
            C: "ENIAC",
            D: "UNIVAC"
        },
        hint: "1946年",
        difficulty: 2,
        category: "科学技术",
        explanation: "ENIAC（电子数值积分计算机）是世界上第一台通用电子计算机"
    },
    {
        id: 1120,
        question: "下列哪个不是力的单位？",
        answer: "D",
        options: {
            A: "牛顿",
            B: "达因",
            C: "千克力",
            D: "焦耳"
        },
        hint: "能量单位",
        difficulty: 2,
        category: "科学技术",
        explanation: "焦耳是能量单位，不是力的单位"
    },
    {
        id: 1121,
        question: "X射线的发现者是？",
        answer: "A",
        options: {
            A: "伦琴",
            B: "居里夫人",
            C: "贝克勒尔",
            D: "汤姆逊"
        },
        hint: "1895年",
        difficulty: 2,
        category: "科学技术",
        explanation: "威廉·伦琴于1895年发现了X射线"
    },
    {
        id: 1122,
        question: "下列哪个不是数据库类型？",
        answer: "B",
        options: {
            A: "关系型数据库",
            B: "Word文档",
            C: "NoSQL数据库",
            D: "文档数据库"
        },
        hint: "办公软件",
        difficulty: 1,
        category: "科学技术",
        explanation: "Word文档不是数据库类型"
    },
    {
        id: 1123,
        question: "血液循环理论的提出者是？",
        answer: "C",
        options: {
            A: "盖伦",
            B: "希波克拉底",
            C: "哈维",
            D: "维萨里"
        },
        hint: "17世纪",
        difficulty: 2,
        category: "科学技术",
        explanation: "威廉·哈维在1628年提出了血液循环理论"
    },
    {
        id: 1124,
        question: "下列哪种不是半导体材料？",
        answer: "D",
        options: {
            A: "硅",
            B: "锗",
            C: "砷化镓",
            D: "铜"
        },
        hint: "金属",
        difficulty: 2,
        category: "科学技术",
        explanation: "铜是良导体，不是半导体"
    },
    {
        id: 1125,
        question: "互联网的前身是什么？",
        answer: "A",
        options: {
            A: "ARPANET",
            B: "Ethernet",
            C: "WWW",
            D: "TCP/IP"
        },
        hint: "美国军方项目",
        difficulty: 2,
        category: "科学技术",
        explanation: "互联网起源于美国国防部的ARPANET项目"
    },
    {
        id: 1126,
        question: "下列哪个不是物理学家？",
        answer: "B",
        options: {
            A: "牛顿",
            B: "达尔文",
            C: "爱因斯坦",
            D: "麦克斯韦"
        },
        hint: "生物学家",
        difficulty: 1,
        category: "科学技术",
        explanation: "达尔文是生物学家，不是物理学家"
    },
    {
        id: 1127,
        question: "无线电的发明者是？",
        answer: "C",
        options: {
            A: "爱迪生",
            B: "贝尔",
            C: "马可尼",
            D: "特斯拉"
        },
        hint: "意大利发明家",
        difficulty: 2,
        category: "科学技术",
        explanation: "古列尔莫·马可尼通常被认为是无线电的发明者"
    },
    {
        id: 1128,
        question: "下列哪个不是人工智能应用？",
        answer: "D",
        options: {
            A: "语音识别",
            B: "图像识别",
            C: "自动驾驶",
            D: "计算器"
        },
        hint: "简单计算工具",
        difficulty: 2,
        category: "科学技术",
        explanation: "计算器是简单计算工具，不是人工智能应用"
    },
    {
        id: 1129,
        question: "微生物学的奠基人是？",
        answer: "A",
        options: {
            A: "巴斯德",
            B: "科赫",
            C: "列文虎克",
            D: "弗莱明"
        },
        hint: "法国科学家",
        difficulty: 2,
        category: "科学技术",
        explanation: "路易·巴斯德被认为是微生物学的奠基人"
    },
    {
        id: 1130,
        question: "下列哪个不是能量单位？",
        answer: "B",
        options: {
            A: "焦耳",
            B: "瓦特",
            C: "卡路里",
            D: "千瓦时"
        },
        hint: "功率单位",
        difficulty: 2,
        category: "科学技术",
        explanation: "瓦特是功率单位，不是能量单位"
    },
    {
        id: 1131,
        question: "遗传学奠基人是？",
        answer: "C",
        options: {
            A: "达尔文",
            B: "拉马克",
            C: "孟德尔",
            D: "摩尔根"
        },
        hint: "豌豆实验",
        difficulty: 2,
        category: "科学技术",
        explanation: "孟德尔通过豌豆实验奠定了遗传学基础"
    },
    {
        id: 1132,
        question: "下列哪个不是计算机输入设备？",
        answer: "D",
        options: {
            A: "键盘",
            B: "鼠标",
            C: "扫描仪",
            D: "显示器"
        },
        hint: "输出设备",
        difficulty: 1,
        category: "科学技术",
        explanation: "显示器是输出设备，不是输入设备"
    },
    {
        id: 1133,
        question: "蒸汽机的改良者是？",
        answer: "A",
        options: {
            A: "瓦特",
            B: "纽科门",
            C: "斯蒂芬森",
            D: "富尔顿"
        },
        hint: "工业革命",
        difficulty: 2,
        category: "科学技术",
        explanation: "詹姆斯·瓦特改良了蒸汽机，推动了工业革命"
    },
    {
        id: 1134,
        question: "下列哪个不是金属特性？",
        answer: "B",
        options: {
            A: "导电性",
            B: "透明性",
            C: "延展性",
            D: "导热性"
        },
        hint: "通常不透明",
        difficulty: 1,
        category: "科学技术",
        explanation: "金属一般不透明，没有透明性"
    },
    {
        id: 1135,
        question: "万维网（WWW）的发明者是？",
        answer: "C",
        options: {
            A: "盖茨",
            B: "乔布斯",
            C: "伯纳斯-李",
            D: "安德森"
        },
        hint: "英国科学家",
        difficulty: 2,
        category: "科学技术",
        explanation: "蒂姆·伯纳斯-李于1989年发明了万维网"
    },
    {
        id: 1136,
        question: "下列哪个不是化学元素？",
        answer: "D",
        options: {
            A: "氢",
            B: "氧",
            C: "碳",
            D: "水"
        },
        hint: "化合物",
        difficulty: 1,
        category: "科学技术",
        explanation: "水是化合物，不是化学元素"
    },
    {
        id: 1137,
        question: "集成电路的发明者是？",
        answer: "A",
        options: {
            A: "基尔比",
            B: "肖克利",
            C: "巴丁",
            D: "诺伊斯"
        },
        hint: "1958年",
        difficulty: 3,
        category: "科学技术",
        explanation: "杰克·基尔比于1958年发明了集成电路"
    },
    {
        id: 1138,
        question: "下列哪个不是计算机病毒？",
        answer: "B",
        options: {
            A: "蠕虫病毒",
            B: "防火墙",
            C: "特洛伊木马",
            D: "勒索病毒"
        },
        hint: "安全防护",
        difficulty: 1,
        category: "科学技术",
        explanation: "防火墙是网络安全设备，不是计算机病毒"
    },
    {
        id: 1139,
        question: "电磁感应现象的发现者是？",
        answer: "C",
        options: {
            A: "安培",
            B: "欧姆",
            C: "法拉第",
            D: "麦克斯韦"
        },
        hint: "英国科学家",
        difficulty: 2,
        category: "科学技术",
        explanation: "迈克尔·法拉第发现了电磁感应现象"
    },
    {
        id: 1140,
        question: "下列哪个不是云计算服务模式？",
        answer: "D",
        options: {
            A: "IaaS",
            B: "PaaS",
            C: "SaaS",
            D: "BaaS"
        },
        hint: "三大服务模式",
        difficulty: 3,
        category: "科学技术",
        explanation: "云计算三大服务模式是IaaS、PaaS、SaaS"
    },
    {
        id: 1141,
        question: "发现镭和钋的科学家是？",
        answer: "A",
        options: {
            A: "居里夫人",
            B: "伦琴",
            C: "贝克勒尔",
            D: "费米"
        },
        hint: "波兰裔法国科学家",
        difficulty: 2,
        category: "科学技术",
        explanation: "玛丽·居里发现了镭和钋，是第一位获得诺贝尔奖的女性"
    },
    {
        id: 1142,
        question: "下列哪个不是生物分类等级？",
        answer: "B",
        options: {
            A: "界",
            B: "类",
            C: "属",
            D: "种"
        },
        hint: "七个主要等级",
        difficulty: 2,
        category: "科学技术",
        explanation: "生物分类七个主要等级：界、门、纲、目、科、属、种"
    },
    {
        id: 1143,
        question: "激光的发明基于哪位科学家的理论？",
        answer: "C",
        options: {
            A: "玻尔",
            B: "海森堡",
            C: "爱因斯坦",
            D: "普朗克"
        },
        hint: "受激辐射理论",
        difficulty: 3,
        category: "科学技术",
        explanation: "激光基于爱因斯坦的受激辐射理论"
    },
    {
        id: 1144,
        question: "下列哪个不是编程范式？",
        answer: "D",
        options: {
            A: "面向对象编程",
            B: "函数式编程",
            C: "过程式编程",
            D: "硬件编程"
        },
        hint: "软件编程方法",
        difficulty: 2,
        category: "科学技术",
        explanation: "硬件编程不是软件编程的范式分类"
    },
    {
        id: 1145,
        question: "提出量子力学波动方程的是？",
        answer: "A",
        options: {
            A: "薛定谔",
            B: "海森堡",
            C: "玻尔",
            D: "狄拉克"
        },
        hint: "薛定谔方程",
        difficulty: 3,
        category: "科学技术",
        explanation: "埃尔温·薛定谔提出了薛定谔方程"
    },
    {
        id: 1146,
        question: "下列哪个不是无线通信技术？",
        answer: "B",
        options: {
            A: "蓝牙",
            B: "以太网",
            C: "Wi-Fi",
            D: "5G"
        },
        hint: "有线网络",
        difficulty: 2,
        category: "科学技术",
        explanation: "以太网是有线网络技术"
    },
    {
        id: 1147,
        question: "发现电流磁效应的是？",
        answer: "C",
        options: {
            A: "安培",
            B: "欧姆",
            C: "奥斯特",
            D: "法拉第"
        },
        hint: "丹麦物理学家",
        difficulty: 2,
        category: "科学技术",
        explanation: "汉斯·奥斯特发现了电流的磁效应"
    },
    {
        id: 1148,
        question: "下列哪个不是开源软件许可证？",
        answer: "D",
        options: {
            A: "GPL",
            B: "MIT",
            C: "Apache",
            D: "Windows EULA"
        },
        hint: "专有软件协议",
        difficulty: 3,
        category: "科学技术",
        explanation: "Windows EULA是微软的专有软件许可协议"
    },
    {
        id: 1149,
        question: "提出大陆漂移学说的是？",
        answer: "A",
        options: {
            A: "魏格纳",
            B: "赫斯",
            C: "威尔逊",
            D: "达尔文"
        },
        hint: "德国气象学家",
        difficulty: 2,
        category: "科学技术",
        explanation: "阿尔弗雷德·魏格纳在1912年提出大陆漂移学说"
    },
    {
        id: 1150,
        question: "下列哪个不是数据库管理系统？",
        answer: "B",
        options: {
            A: "MySQL",
            B: "Excel",
            C: "Oracle",
            D: "PostgreSQL"
        },
        hint: "电子表格",
        difficulty: 2,
        category: "科学技术",
        explanation: "Excel是电子表格软件，不是专业的数据库管理系统"
    },
    {
        id: 1151,
        question: "发现核裂变现象的是？",
        answer: "C",
        options: {
            A: "居里夫人",
            B: "卢瑟福",
            C: "哈恩和斯特拉斯曼",
            D: "费米"
        },
        hint: "1938年",
        difficulty: 3,
        category: "科学技术",
        explanation: "奥托·哈恩和弗里茨·斯特拉斯曼在1938年发现了核裂变"
    },
    {
        id: 1152,
        question: "下列哪个不是面向对象编程特性？",
        answer: "D",
        options: {
            A: "封装",
            B: "继承",
            C: "多态",
            D: "顺序"
        },
        hint: "三大特性",
        difficulty: 2,
        category: "科学技术",
        explanation: "面向对象编程三大特性是封装、继承、多态"
    },
    {
        id: 1153,
        question: "提出黑洞理论的是？",
        answer: "A",
        options: {
            A: "霍金",
            B: "爱因斯坦",
            C: "彭罗斯",
            D: "奥本海默"
        },
        hint: "英国物理学家",
        difficulty: 2,
        category: "科学技术",
        explanation: "斯蒂芬·霍金提出了黑洞辐射理论"
    },
    {
        id: 1154,
        question: "下列哪个不是网络拓扑结构？",
        answer: "B",
        options: {
            A: "星型",
            B: "链型",
            C: "环型",
            D: "总线型"
        },
        hint: "网络连接方式",
        difficulty: 2,
        category: "科学技术",
        explanation: "常见网络拓扑结构有星型、环型、总线型、网状型等"
    },
    {
        id: 1155,
        question: "发现电磁波的是？",
        answer: "C",
        options: {
            A: "安培",
            B: "法拉第",
            C: "赫兹",
            D: "麦克斯韦"
        },
        hint: "德国物理学家",
        difficulty: 2,
        category: "科学技术",
        explanation: "海因里希·赫兹首次证实了电磁波的存在"
    },
    {
        id: 1156,
        question: "下列哪个不是软件开发模型？",
        answer: "D",
        options: {
            A: "瀑布模型",
            B: "敏捷开发",
            C: "螺旋模型",
            D: "量子模型"
        },
        hint: "软件开发方法",
        difficulty: 3,
        category: "科学技术",
        explanation: "量子模型不是软件开发模型"
    },
    {
        id: 1157,
        question: "提出原子核式结构模型的是？",
        answer: "A",
        options: {
            A: "卢瑟福",
            B: "汤姆逊",
            C: "玻尔",
            D: "查德威克"
        },
        hint: "α粒子散射实验",
        difficulty: 2,
        category: "科学技术",
        explanation: "欧内斯特·卢瑟福通过α粒子散射实验提出了原子核式结构模型"
    },
    {
        id: 1158,
        question: "下列哪个不是大数据技术？",
        answer: "B",
        options: {
            A: "Hadoop",
            B: "Word",
            C: "Spark",
            D: "HBase"
        },
        hint: "办公软件",
        difficulty: 2,
        category: "科学技术",
        explanation: "Word是文字处理软件，不是大数据技术"
    },
    {
        id: 1159,
        question: "发现电子的是？",
        answer: "C",
        options: {
            A: "卢瑟福",
            B: "查德威克",
            C: "汤姆逊",
            D: "密立根"
        },
        hint: "英国物理学家",
        difficulty: 2,
        category: "科学技术",
        explanation: "约瑟夫·汤姆逊于1897年发现了电子"
    },
    {
        id: 1160,
        question: "下列哪个不是网络安全威胁？",
        answer: "D",
        options: {
            A: "病毒",
            B: "木马",
            C: "钓鱼攻击",
            D: "防火墙"
        },
        hint: "安全防护",
        difficulty: 2,
        category: "科学技术",
        explanation: "防火墙是安全防护设备，不是安全威胁"
    },
    {
        id: 1161,
        question: "提出光的波粒二象性的是？",
        answer: "A",
        options: {
            A: "爱因斯坦",
            B: "牛顿",
            C: "惠更斯",
            D: "麦克斯韦"
        },
        hint: "解释光电效应",
        difficulty: 3,
        category: "科学技术",
        explanation: "爱因斯坦通过光电效应理论支持了光的波粒二象性"
    },
    {
        id: 1162,
        question: "下列哪个不是计算机语言类型？",
        answer: "B",
        options: {
            A: "编译型语言",
            B: "自然语言",
            C: "解释型语言",
            D: "脚本语言"
        },
        hint: "人类语言",
        difficulty: 2,
        category: "科学技术",
        explanation: "自然语言是人类语言，不是计算机语言类型"
    },
    {
        id: 1163,
        question: "发现中子的是？",
        answer: "C",
        options: {
            A: "卢瑟福",
            B: "汤姆逊",
            C: "查德威克",
            D: "费米"
        },
        hint: "1932年",
        difficulty: 2,
        category: "科学技术",
        explanation: "詹姆斯·查德威克在1932年发现了中子"
    },
    {
        id: 1164,
        question: "下列哪个不是物联网应用？",
        answer: "D",
        options: {
            A: "智能家居",
            B: "车联网",
            C: "工业物联网",
            D: "电子邮件"
        },
        hint: "传统互联网应用",
        difficulty: 2,
        category: "科学技术",
        explanation: "电子邮件是传统互联网应用，不是典型的物联网应用"
    },
    {
        id: 1165,
        question: "提出日心说的是？",
        answer: "A",
        options: {
            A: "哥白尼",
            B: "托勒密",
            C: "伽利略",
            D: "开普勒"
        },
        hint: "波兰天文学家",
        difficulty: 2,
        category: "科学技术",
        explanation: "尼古拉·哥白尼在《天体运行论》中提出了日心说"
    },
    {
        id: 1166,
        question: "下列哪个不是机器学习算法？",
        answer: "B",
        options: {
            A: "神经网络",
            B: "冒泡排序",
            C: "决策树",
            D: "支持向量机"
        },
        hint: "排序算法",
        difficulty: 2,
        category: "科学技术",
        explanation: "冒泡排序是排序算法，不是机器学习算法"
    },
    {
        id: 1167,
        question: "发现行星运动三定律的是？",
        answer: "C",
        options: {
            A: "哥白尼",
            B: "伽利略",
            C: "开普勒",
            D: "牛顿"
        },
        hint: "德国天文学家",
        difficulty: 2,
        category: "科学技术",
        explanation: "约翰内斯·开普勒提出了行星运动三定律"
    },
    {
        id: 1168,
        question: "下列哪个不是区块链特性？",
        answer: "D",
        options: {
            A: "去中心化",
            B: "不可篡改",
            C: "透明可追溯",
            D: "高速传输"
        },
        hint: "区块链特点",
        difficulty: 2,
        category: "科学技术",
        explanation: "区块链目前还面临交易速度较慢的问题"
    },
    {
        id: 1169,
        question: "提出光电效应理论的是？",
        answer: "A",
        options: {
            A: "爱因斯坦",
            B: "普朗克",
            C: "玻尔",
            D: "康普顿"
        },
        hint: "获诺贝尔奖的工作",
        difficulty: 2,
        category: "科学技术",
        explanation: "爱因斯坦因解释光电效应获得诺贝尔物理学奖"
    },
    {
        id: 1170,
        question: "下列哪个不是虚拟现实技术应用？",
        answer: "B",
        options: {
            A: "VR游戏",
            B: "电子邮件",
            C: "虚拟培训",
            D: "虚拟旅游"
        },
        hint: "传统通信",
        difficulty: 2,
        category: "科学技术",
        explanation: "电子邮件不是虚拟现实技术应用"
    },
]

export default technologyRiddles
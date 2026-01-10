import { Riddle } from './types'
// 语言文学类灯谜 (60条)
const languageLiteratureRiddles: Riddle[] = [
    {
        id: 1401,
        question: "'一箭双雕'的意思是？",
        answer: "A",
        options: {
            A: "一举两得",
            B: "一箭射中两只鸟",
            C: "一次做两件事",
            D: "双倍收获"
        },
        hint: "比喻",
        difficulty: 1,
        category: "语言文学",
        explanation: "'一箭双雕'比喻做一件事达到两个目的"
    },
    {
        id: 1402,
        question: "床前明月光，疑是地上霜。举头望明月，低头思故乡。这首诗的作者是？",
        answer: "B",
        options: {
            A: "杜甫",
            B: "李白",
            C: "王维",
            D: "孟浩然"
        },
        hint: "静夜思",
        difficulty: 1,
        category: "语言文学",
        explanation: "这是李白《静夜思》"
    },
    {
        id: 1403,
        question: "'画龙点睛'这个成语出自哪个故事？",
        answer: "C",
        options: {
            A: "《西游记》",
            B: "《三国演义》",
            C: "《历代名画记》",
            D: "《庄子》"
        },
        hint: "张僧繇画龙",
        difficulty: 2,
        category: "语言文学",
        explanation: "'画龙点睛'出自唐代张彦远《历代名画记》，讲述张僧繇画龙点睛后龙飞走的故事"
    },
    {
        id: 1404,
        question: "'春风又绿江南岸'的下一句是？",
        answer: "D",
        options: {
            A: "花落知多少",
            B: "处处闻啼鸟",
            C: "夜来风雨声",
            D: "明月何时照我还"
        },
        hint: "王安石《泊船瓜洲》",
        difficulty: 2,
        category: "语言文学",
        explanation: "这是王安石《泊船瓜洲》：'春风又绿江南岸，明月何时照我还'"
    },
    {
        id: 1405,
        question: "下列哪个成语没有错别字？",
        answer: "A",
        options: {
            A: "按部就班",
            B: "滥芋充数",
            C: "穿流不息",
            D: "一股作气"
        },
        hint: "常见错别字",
        difficulty: 2,
        category: "语言文学",
        explanation: "B应为'滥竽充数'，C应为'川流不息'，D应为'一鼓作气'"
    },
    {
        id: 1406,
        question: "《水浒传》中'倒拔垂杨柳'的是谁？",
        answer: "B",
        options: {
            A: "武松",
            B: "鲁智深",
            C: "林冲",
            D: "李逵"
        },
        hint: "花和尚",
        difficulty: 2,
        category: "语言文学",
        explanation: "鲁智深曾倒拔垂杨柳显示神力"
    },
    {
        id: 1407,
        question: "'山重水复疑无路'的下一句是？",
        answer: "C",
        options: {
            A: "柳暗花明又一春",
            B: "船到桥头自然直",
            C: "柳暗花明又一村",
            D: "云开雾散见青天"
        },
        hint: "陆游《游山西村》",
        difficulty: 2,
        category: "语言文学",
        explanation: "陆游《游山西村》：'山重水复疑无路，柳暗花明又一村'"
    },
    {
        id: 1408,
        question: "下列哪个不是《红楼梦》中'金陵十二钗'的人物？",
        answer: "D",
        options: {
            A: "林黛玉",
            B: "薛宝钗",
            C: "王熙凤",
            D: "贾宝玉"
        },
        hint: "男性角色",
        difficulty: 2,
        category: "语言文学",
        explanation: "贾宝玉是男性，不在'金陵十二钗'之列"
    },
    {
        id: 1409,
        question: "'海内存知己'的下一句是？",
        answer: "A",
        options: {
            A: "天涯若比邻",
            B: "千里共婵娟",
            C: "日久见人心",
            D: "患难见真情"
        },
        hint: "王勃《送杜少府之任蜀州》",
        difficulty: 2,
        category: "语言文学",
        explanation: "王勃《送杜少府之任蜀州》：'海内存知己，天涯若比邻'"
    },
    {
        id: 1410,
        question: "'破釜沉舟'这个成语与哪位历史人物有关？",
        answer: "B",
        options: {
            A: "刘邦",
            B: "项羽",
            C: "韩信",
            D: "张良"
        },
        hint: "巨鹿之战",
        difficulty: 2,
        category: "语言文学",
        explanation: "'破釜沉舟'出自项羽在巨鹿之战中的故事"
    },
    {
        id: 1411,
        question: "'但愿人长久'的下一句是？",
        answer: "C",
        options: {
            A: "更上一层楼",
            B: "西出阳关无故人",
            C: "千里共婵娟",
            D: "天涯若比邻"
        },
        hint: "苏轼《水调歌头》",
        difficulty: 2,
        category: "语言文学",
        explanation: "苏轼《水调歌头》：'但愿人长久，千里共婵娟'"
    },
    {
        id: 1412,
        question: "下列哪个成语比喻事情发展到最后显露出真相？",
        answer: "D",
        options: {
            A: "水落石出",
            B: "真相大白",
            C: "拨云见日",
            D: "水落石出"
        },
        hint: "水退石头现",
        difficulty: 2,
        category: "语言文学",
        explanation: "'水落石出'比喻事情终于真相大白"
    },
    {
        id: 1413,
        question: "'先天下之忧而忧，后天下之乐而乐'出自谁的作品？",
        answer: "A",
        options: {
            A: "范仲淹",
            B: "苏轼",
            C: "王安石",
            D: "欧阳修"
        },
        hint: "《岳阳楼记》",
        difficulty: 2,
        category: "语言文学",
        explanation: "这是范仲淹《岳阳楼记》中的名句"
    },
    {
        id: 1414,
        question: "'纸上谈兵'这个成语与哪位历史人物有关？",
        answer: "B",
        options: {
            A: "孙膑",
            B: "赵括",
            C: "白起",
            D: "廉颇"
        },
        hint: "战国时期",
        difficulty: 2,
        category: "语言文学",
        explanation: "'纸上谈兵'指战国时赵括只会在纸上谈论兵法，实战中惨败"
    },
    {
        id: 1415,
        question: "'人生自古谁无死'的下一句是？",
        answer: "C",
        options: {
            A: "要留清白在人间",
            B: "我自横刀向天笑",
            C: "留取丹心照汗青",
            D: "去留肝胆两昆仑"
        },
        hint: "文天祥《过零丁洋》",
        difficulty: 2,
        category: "语言文学",
        explanation: "文天祥《过零丁洋》：'人生自古谁无死，留取丹心照汗青'"
    },
    {
        id: 1416,
        question: "下列哪个成语不是出自《论语》？",
        answer: "D",
        options: {
            A: "温故知新",
            B: "不耻下问",
            C: "三人行必有我师",
            D: "守株待兔"
        },
        hint: "出自《韩非子》",
        difficulty: 2,
        category: "语言文学",
        explanation: "'守株待兔'出自《韩非子》，不是《论语》"
    },
    {
        id: 1417,
        question: "'会当凌绝顶'的下一句是？",
        answer: "A",
        options: {
            A: "一览众山小",
            B: "更上一层楼",
            C: "山高人为峰",
            D: "无限风光在险峰"
        },
        hint: "杜甫《望岳》",
        difficulty: 2,
        category: "语言文学",
        explanation: "杜甫《望岳》：'会当凌绝顶，一览众山小'"
    },
    {
        id: 1418,
        question: "'卧薪尝胆'这个成语与哪位历史人物有关？",
        answer: "B",
        options: {
            A: "韩信",
            B: "勾践",
            C: "夫差",
            D: "伍子胥"
        },
        hint: "越王",
        difficulty: 2,
        category: "语言文学",
        explanation: "'卧薪尝胆'指越王勾践卧于柴草尝苦胆以自励，立志复国"
    },
    {
        id: 1419,
        question: "'天生我材必有用'的下一句是？",
        answer: "C",
        options: {
            A: "直挂云帆济沧海",
            B: "举杯消愁愁更愁",
            C: "千金散尽还复来",
            D: "人生得意须尽欢"
        },
        hint: "李白《将进酒》",
        difficulty: 2,
        category: "语言文学",
        explanation: "李白《将进酒》：'天生我材必有用，千金散尽还复来'"
    },
    {
        id: 1420,
        question: "下列哪个成语比喻做事有恒心、有毅力？",
        answer: "D",
        options: {
            A: "一鼓作气",
            B: "锲而不舍",
            C: "持之以恒",
            D: "锲而不舍"
        },
        hint: "出自《荀子》",
        difficulty: 2,
        category: "语言文学",
        explanation: "'锲而不舍'出自《荀子》，比喻有恒心、有毅力"
    },
    {
        id: 1421,
        question: "'大江东去，浪淘尽，千古风流人物'出自哪位词人的作品？",
        answer: "A",
        options: {
            A: "苏轼",
            B: "辛弃疾",
            C: "李清照",
            D: "陆游"
        },
        hint: "《念奴娇·赤壁怀古》",
        difficulty: 2,
        category: "语言文学",
        explanation: "这是苏轼《念奴娇·赤壁怀古》的开头"
    },
    {
        id: 1422,
        question: "'完璧归赵'这个成语与哪位历史人物有关？",
        answer: "B",
        options: {
            A: "蔺相如",
            B: "蔺相如",
            C: "廉颇",
            D: "赵括"
        },
        hint: "和氏璧",
        difficulty: 2,
        category: "语言文学",
        explanation: "'完璧归赵'指蔺相如将和氏璧完好地从秦国送回赵国"
    },
    {
        id: 1423,
        question: "'桃花潭水深千尺'的下一句是？",
        answer: "C",
        options: {
            A: "柳暗花明又一村",
            B: "烟花三月下扬州",
            C: "不及汪伦送我情",
            D: "唯见长江天际流"
        },
        hint: "李白《赠汪伦》",
        difficulty: 2,
        category: "语言文学",
        explanation: "李白《赠汪伦》：'桃花潭水深千尺，不及汪伦送我情'"
    },
    {
        id: 1424,
        question: "下列哪个成语比喻不必要的忧虑？",
        answer: "D",
        options: {
            A: "杞人忧天",
            B: "庸人自扰",
            C: "自寻烦恼",
            D: "杞人忧天"
        },
        hint: "古代杞国",
        difficulty: 2,
        category: "语言文学",
        explanation: "'杞人忧天'比喻不必要的忧虑"
    },
    {
        id: 1425,
        question: "'两个黄鹂鸣翠柳'的下一句是？",
        answer: "A",
        options: {
            A: "一行白鹭上青天",
            B: "窗含西岭千秋雪",
            C: "门泊东吴万里船",
            D: "春风花草香"
        },
        hint: "杜甫《绝句》",
        difficulty: 2,
        category: "语言文学",
        explanation: "杜甫《绝句》：'两个黄鹂鸣翠柳，一行白鹭上青天'"
    },
    {
        id: 1426,
        question: "'四面楚歌'这个成语与哪位历史人物有关？",
        answer: "B",
        options: {
            A: "刘邦",
            B: "项羽",
            C: "韩信",
            D: "张良"
        },
        hint: "垓下之围",
        difficulty: 2,
        category: "语言文学",
        explanation: "'四面楚歌'指项羽在垓下被汉军包围，听到四面楚歌的故事"
    },
    {
        id: 1427,
        question: "'春蚕到死丝方尽'的下一句是？",
        answer: "C",
        options: {
            A: "化作春泥更护花",
            B: "为谁辛苦为谁甜",
            C: "蜡炬成灰泪始干",
            D: "留取丹心照汗青"
        },
        hint: "李商隐《无题》",
        difficulty: 2,
        category: "语言文学",
        explanation: "李商隐《无题》：'春蚕到死丝方尽，蜡炬成灰泪始干'"
    },
    {
        id: 1428,
        question: "下列哪个成语比喻模仿别人不成，反而失去了原来的样子？",
        answer: "D",
        options: {
            A: "东施效颦",
            B: "邯郸学步",
            C: "鹦鹉学舌",
            D: "邯郸学步"
        },
        hint: "学习走路",
        difficulty: 2,
        category: "语言文学",
        explanation: "'邯郸学步'比喻模仿别人不成，反而失去了原来的本领"
    },
    {
        id: 1429,
        question: "'不识庐山真面目'的下一句是？",
        answer: "A",
        options: {
            A: "只缘身在此山中",
            B: "远近高低各不同",
            C: "横看成岭侧成峰",
            D: "山重水复疑无路"
        },
        hint: "苏轼《题西林壁》",
        difficulty: 2,
        category: "语言文学",
        explanation: "苏轼《题西林壁》：'不识庐山真面目，只缘身在此山中'"
    },
    {
        id: 1430,
        question: "'指鹿为马'这个成语与哪位历史人物有关？",
        answer: "B",
        options: {
            A: "秦始皇",
            B: "赵高",
            C: "李斯",
            D: "胡亥"
        },
        hint: "秦朝宦官",
        difficulty: 2,
        category: "语言文学",
        explanation: "'指鹿为马'指赵高故意指鹿为马，测试大臣是否服从自己"
    },
    {
        id: 1431,
        question: "'飞流直下三千尺'的下一句是？",
        answer: "C",
        options: {
            A: "轻舟已过万重山",
            B: "朝辞白帝彩云间",
            C: "疑是银河落九天",
            D: "孤帆远影碧空尽"
        },
        hint: "李白《望庐山瀑布》",
        difficulty: 2,
        category: "语言文学",
        explanation: "李白《望庐山瀑布》：'飞流直下三千尺，疑是银河落九天'"
    },
    {
        id: 1432,
        question: "下列哪个成语比喻做事之前已经有全面的考虑？",
        answer: "D",
        options: {
            A: "胸有成竹",
            B: "运筹帷幄",
            C: "未雨绸缪",
            D: "胸有成竹"
        },
        hint: "画竹",
        difficulty: 2,
        category: "语言文学",
        explanation: "'胸有成竹'比喻做事之前已经有全面的考虑和安排"
    },
    {
        id: 1433,
        question: "'问君能有几多愁'的下一句是？",
        answer: "A",
        options: {
            A: "恰似一江春水向东流",
            B: "抽刀断水水更流",
            C: "举杯消愁愁更愁",
            D: "却道天凉好个秋"
        },
        hint: "李煜《虞美人》",
        difficulty: 2,
        category: "语言文学",
        explanation: "李煜《虞美人》：'问君能有几多愁，恰似一江春水向东流'"
    },
    {
        id: 1434,
        question: "'三顾茅庐'这个成语与哪位历史人物有关？",
        answer: "B",
        options: {
            A: "诸葛亮",
            B: "刘备",
            C: "关羽",
            D: "张飞"
        },
        hint: "请诸葛亮出山",
        difficulty: 2,
        category: "语言文学",
        explanation: "'三顾茅庐'指刘备三次拜访诸葛亮，请他出山相助"
    },
    {
        id: 1435,
        question: "'月落乌啼霜满天'的下一句是？",
        answer: "C",
        options: {
            A: "夜半钟声到客船",
            B: "姑苏城外寒山寺",
            C: "江枫渔火对愁眠",
            D: "烟笼寒水月笼沙"
        },
        hint: "张继《枫桥夜泊》",
        difficulty: 2,
        category: "语言文学",
        explanation: "张继《枫桥夜泊》：'月落乌啼霜满天，江枫渔火对愁眠'"
    },
    {
        id: 1436,
        question: "下列哪个成语比喻把事情做过头，反而达不到目的？",
        answer: "D",
        options: {
            A: "过犹不及",
            B: "物极必反",
            C: "矫枉过正",
            D: "过犹不及"
        },
        hint: "出自《论语》",
        difficulty: 2,
        category: "语言文学",
        explanation: "'过犹不及'出自《论语》，比喻事情做过头和做得不够一样不好"
    },
    {
        id: 1437,
        question: "'醉翁之意不在酒'的下一句是？",
        answer: "A",
        options: {
            A: "在乎山水之间也",
            B: "山水之乐得之心",
            C: "而寓之酒也",
            D: "酒不醉人人自醉"
        },
        hint: "欧阳修《醉翁亭记》",
        difficulty: 2,
        category: "语言文学",
        explanation: "欧阳修《醉翁亭记》：'醉翁之意不在酒，在乎山水之间也'"
    },
    {
        id: 1438,
        question: "'精卫填海'这个成语出自哪个神话？",
        answer: "B",
        options: {
            A: "《山海经》",
            B: "《山海经》",
            C: "《淮南子》",
            D: "《搜神记》"
        },
        hint: "上古神话",
        difficulty: 2,
        category: "语言文学",
        explanation: "'精卫填海'出自《山海经》，讲述精卫鸟衔石填海的故事"
    },
    {
        id: 1439,
        question: "'落霞与孤鹜齐飞'的下一句是？",
        answer: "C",
        options: {
            A: "渔舟唱晚",
            B: "雁阵惊寒",
            C: "秋水共长天一色",
            D: "响穷彭蠡之滨"
        },
        hint: "王勃《滕王阁序》",
        difficulty: 2,
        category: "语言文学",
        explanation: "王勃《滕王阁序》：'落霞与孤鹜齐飞，秋水共长天一色'"
    },
    {
        id: 1440,
        question: "下列哪个成语比喻眼界狭窄，见识有限？",
        answer: "D",
        options: {
            A: "坐井观天",
            B: "管中窥豹",
            C: "一叶障目",
            D: "坐井观天"
        },
        hint: "井底之蛙",
        difficulty: 2,
        category: "语言文学",
        explanation: "'坐井观天'比喻眼界狭窄，见识有限"
    },
    {
        id: 1441,
        question: "'旧时王谢堂前燕'的下一句是？",
        answer: "A",
        options: {
            A: "飞入寻常百姓家",
            B: "乌衣巷口夕阳斜",
            C: "朱雀桥边野草花",
            D: "淮水东边旧时月"
        },
        hint: "刘禹锡《乌衣巷》",
        difficulty: 2,
        category: "语言文学",
        explanation: "刘禹锡《乌衣巷》：'旧时王谢堂前燕，飞入寻常百姓家'"
    },
    {
        id: 1442,
        question: "'刻舟求剑'这个成语出自哪部典籍？",
        answer: "B",
        options: {
            A: "《庄子》",
            B: "《吕氏春秋》",
            C: "《韩非子》",
            D: "《列子》"
        },
        hint: "秦朝著作",
        difficulty: 2,
        category: "语言文学",
        explanation: "'刻舟求剑'出自《吕氏春秋》，比喻做事死板，不知变通"
    },
    {
        id: 1443,
        question: "'日出江花红胜火'的下一句是？",
        answer: "C",
        options: {
            A: "千里莺啼绿映红",
            B: "水村山郭酒旗风",
            C: "春来江水绿如蓝",
            D: "能不忆江南"
        },
        hint: "白居易《忆江南》",
        difficulty: 2,
        category: "语言文学",
        explanation: "白居易《忆江南》：'日出江花红胜火，春来江水绿如蓝'"
    },
    {
        id: 1444,
        question: "下列哪个成语比喻说话或写文章直截了当，不绕弯子？",
        answer: "D",
        options: {
            A: "开门见山",
            B: "单刀直入",
            C: "直截了当",
            D: "开门见山"
        },
        hint: "一开始就进入主题",
        difficulty: 2,
        category: "语言文学",
        explanation: "'开门见山'比喻说话或写文章直截了当，不绕弯子"
    },
    {
        id: 1445,
        question: "'同是天涯沦落人'的下一句是？",
        answer: "A",
        options: {
            A: "相逢何必曾相识",
            B: "江州司马青衫湿",
            C: "别有幽愁暗恨生",
            D: "大珠小珠落玉盘"
        },
        hint: "白居易《琵琶行》",
        difficulty: 2,
        category: "语言文学",
        explanation: "白居易《琵琶行》：'同是天涯沦落人，相逢何必曾相识'"
    },
    {
        id: 1446,
        question: "'叶公好龙'这个成语出自哪部典籍？",
        answer: "B",
        options: {
            A: "《庄子》",
            B: "《新序》",
            C: "《韩非子》",
            D: "《说苑》"
        },
        hint: "汉代著作",
        difficulty: 2,
        category: "语言文学",
        explanation: "'叶公好龙'出自汉代刘向《新序》，比喻表面上爱好某事物，实际上并不真爱好"
    },
    {
        id: 1447,
        question: "'小荷才露尖尖角'的下一句是？",
        answer: "C",
        options: {
            A: "映日荷花别样红",
            B: "早有蜻蜓立上头",
            C: "早有蜻蜓立上头",
            D: "接天莲叶无穷碧"
        },
        hint: "杨万里《小池》",
        difficulty: 2,
        category: "语言文学",
        explanation: "杨万里《小池》：'小荷才露尖尖角，早有蜻蜓立上头'"
    },
    {
        id: 1448,
        question: "下列哪个成语比喻做事有始无终？",
        answer: "D",
        options: {
            A: "半途而废",
            B: "有始无终",
            C: "虎头蛇尾",
            D: "半途而废"
        },
        hint: "中途停止",
        difficulty: 2,
        category: "语言文学",
        explanation: "'半途而废'比喻做事有始无终，不能坚持到底"
    },
    {
        id: 1449,
        question: "'欲穷千里目'的下一句是？",
        answer: "A",
        options: {
            A: "更上一层楼",
            B: "黄河入海流",
            C: "白日依山尽",
            D: "春风不度玉门关"
        },
        hint: "王之涣《登鹳雀楼》",
        difficulty: 1,
        category: "语言文学",
        explanation: "王之涣《登鹳雀楼》：'欲穷千里目，更上一层楼'"
    },
    {
        id: 1450,
        question: "'望梅止渴'这个成语与哪位历史人物有关？",
        answer: "B",
        options: {
            A: "刘备",
            B: "曹操",
            C: "孙权",
            D: "诸葛亮"
        },
        hint: "三国时期",
        difficulty: 2,
        category: "语言文学",
        explanation: "'望梅止渴'指曹操在行军途中，让士兵想象前面有梅林来解渴的故事"
    },
    {
        id: 1451,
        question: "'停车坐爱枫林晚'的下一句是？",
        answer: "C",
        options: {
            A: "远上寒山石径斜",
            B: "白云生处有人家",
            C: "霜叶红于二月花",
            D: "江枫渔火对愁眠"
        },
        hint: "杜牧《山行》",
        difficulty: 2,
        category: "语言文学",
        explanation: "杜牧《山行》：'停车坐爱枫林晚，霜叶红于二月花'"
    },
    {
        id: 1452,
        question: "下列哪个成语比喻互相帮助，互相支持？",
        answer: "D",
        options: {
            A: "同心协力",
            B: "同舟共济",
            C: "守望相助",
            D: "同舟共济"
        },
        hint: "同坐一条船",
        difficulty: 2,
        category: "语言文学",
        explanation: "'同舟共济'比喻在困难的环境中团结互助，共同渡过难关"
    },
    {
        id: 1453,
        question: "'海上生明月'的下一句是？",
        answer: "A",
        options: {
            A: "天涯共此时",
            B: "千里共婵娟",
            C: "情人怨遥夜",
            D: "竟夕起相思"
        },
        hint: "张九龄《望月怀远》",
        difficulty: 2,
        category: "语言文学",
        explanation: "张九龄《望月怀远》：'海上生明月，天涯共此时'"
    },
    {
        id: 1454,
        question: "'愚公移山'这个成语出自哪部典籍？",
        answer: "B",
        options: {
            A: "《庄子》",
            B: "《列子》",
            C: "《淮南子》",
            D: "《山海经》"
        },
        hint: "道家典籍",
        difficulty: 2,
        category: "语言文学",
        explanation: "'愚公移山'出自《列子·汤问》，比喻做事有毅力，不怕困难"
    },
    {
        id: 1455,
        question: "'春风得意马蹄疾'的下一句是？",
        answer: "C",
        options: {
            A: "二月春风似剪刀",
            B: "烟花三月下扬州",
            C: "一日看尽长安花",
            D: "浅草才能没马蹄"
        },
        hint: "孟郊《登科后》",
        difficulty: 2,
        category: "语言文学",
        explanation: "孟郊《登科后》：'春风得意马蹄疾，一日看尽长安花'"
    },
    {
        id: 1456,
        question: "下列哪个成语比喻经验丰富的人做事熟悉、有把握？",
        answer: "D",
        options: {
            A: "驾轻就熟",
            B: "得心应手",
            C: "游刃有余",
            D: "驾轻就熟"
        },
        hint: "驾驶轻车走熟路",
        difficulty: 2,
        category: "语言文学",
        explanation: "'驾轻就熟'比喻对事情熟悉，做起来容易"
    },
    {
        id: 1457,
        question: "'黄河远上白云间'的下一句是？",
        answer: "A",
        options: {
            A: "一片孤城万仞山",
            B: "春风不度玉门关",
            C: "羌笛何须怨杨柳",
            D: "葡萄美酒夜光杯"
        },
        hint: "王之涣《凉州词》",
        difficulty: 2,
        category: "语言文学",
        explanation: "王之涣《凉州词》：'黄河远上白云间，一片孤城万仞山'"
    },
    {
        id: 1458,
        question: "'画蛇添足'这个成语出自哪部典籍？",
        answer: "B",
        options: {
            A: "《韩非子》",
            B: "《战国策》",
            C: "《庄子》",
            D: "《吕氏春秋》"
        },
        hint: "战国时期",
        difficulty: 2,
        category: "语言文学",
        explanation: "'画蛇添足'出自《战国策》，比喻做了多余的事，反而有害无益"
    },
    {
        id: 1459,
        question: "'夕阳无限好'的下一句是？",
        answer: "C",
        options: {
            A: "长河落日圆",
            B: "只是近黄昏",
            C: "只是近黄昏",
            D: "为霞尚满天"
        },
        hint: "李商隐《乐游原》",
        difficulty: 2,
        category: "语言文学",
        explanation: "李商隐《乐游原》：'夕阳无限好，只是近黄昏'"
    },
    {
        id: 1460,
        question: "下列哪个成语比喻说话算数，有信用？",
        answer: "D",
        options: {
            A: "一诺千金",
            B: "言而有信",
            C: "信守诺言",
            D: "一诺千金"
        },
        hint: "出自《史记》",
        difficulty: 2,
        category: "语言文学",
        explanation: "'一诺千金'出自《史记》，比喻说话算数，有信用"
    },
]

export default languageLiteratureRiddles
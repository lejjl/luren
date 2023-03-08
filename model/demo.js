export function catalogue() {
  return [
    {
      id: 1,
      title: "热门精选",
      cityList: [
        {
          cityId: 1,
          title: "成都太古里",
          img: "https://i.postimg.cc/1XhQGzPQ/55.png",
          introduce: "成都太古里坐落成都中心地带，成都时尚地标之一",
        },
        {
          cityId: 2,
          title: "香港",
          img: "https://i.postimg.cc/3J2xkXKw/4.png",
          introduce:
            "香港迪士尼乐园是全球第五座、亚洲第二座、中国第一座迪士尼乐园。园区内设有主题游乐设施、娱乐表演、互动体验、餐饮服务、商品店铺及小食亭。此外，乐园每天晚上会呈献巡游表演节目及烟花汇演。",
        },
        {
          cityId: 3,
          title: "延安",
          img: "https://i.postimg.cc/Hks1TXnR/12.png",
          introduce:
            "壶口瀑布是国家级风景名胜区，国家AAAAA级旅游景区。壶口瀑布是中国第二大瀑布，世界上最大的黄色瀑布，闻名中外。",
        },
        {
          cityId: 4,
          title: "苏州",
          img: "https://i.postimg.cc/fR6C8QGC/18.png",
          introduce:
            "拙政园，位于江苏省苏州市姑苏区东北街178号。拙政园的整个环境虽由人做，自然生态的野趣却十分突出，尚保留着明代建园之初的风范，被认为是江南古典园林的代表作和中国园林艺术的珍贵遗产。",
        },
      ],
    },
    {
      id: 2,
      title: "感受导向",
      cityList: [
        {
          cityId: 5,
          title: "桂林",
          img: "https://i.postimg.cc/Wz3029Rt/22.png",
          introduce: "桂林--水乡柔情",
        },
        {
          cityId: 6,
          title: "南京",
          img: "https://i.postimg.cc/9Xn7dY5t/26.png",
          introduce: "南京--朦胧古典",
        },
        {
          cityId: 7,
          title: "漠河",
          img: "https://i.postimg.cc/s2mBvp4W/33.png",
          introduce: "漠河--远离喧嚣",
        },
        {
          cityId: 8,
          title: "延边",
          img: "https://i.postimg.cc/vHncWRvb/39.png",
          introduce: "延边--精神力量",
        },
      ],
    },
  ];
}

export function scenicDetail(id) {
  if (id == 1) {
    return [
      {
        title: "成都太古里",
        img: "https://i.postimg.cc/1XhQGzPQ/55.png",
        introduce: "成都太古里坐落成都中心地带，成都时尚地标之一",
        price: "free",
      },
      {
        title: "成都国际金融中心（IFS）",
        img: "https://i.postimg.cc/RFhkwBKR/1.png",
        introduce:
          "成都国际金融中心，简称“成都IFS”，位于四川省成都市锦江区红星路和大慈寺路的交汇处，是集购物、文化娱乐、写字楼、酒店式公寓、酒店于一体的城市综合体。",
        price: "free",
      },
      {
        title: "宽窄巷子",
        img: "https://i.postimg.cc/NG9MchSm/3.png",
        introduce:
          "宽窄巷子位于四川省成都市青羊区长顺街附近，由宽巷子、窄巷子、井巷子平行排列组成，全为青黛砖瓦的仿古四合院落，这里也是成都遗留下来的较成规模的清朝古街道，与大慈寺、文殊院一起并称为成都三大历史文化名城保护街区。",
        price: "free",
      },
      {
        title: "大熊猫繁育研究基地",
        img: "https://i.postimg.cc/ZRQ1cMLh/2.png",
        introduce:
          "成都大熊猫繁育研究基地，位于四川省成都市成华区熊猫大道1375号，距市中心10公里。是世界著名的大熊猫迁地保护基地、科研繁育基地、公众教育基地和教育旅游基地。2006年被评为国家AAAA级旅游景区。",
        price: 52,
      },
      {
        title: "武侯祠",
        img: "https://i.postimg.cc/6p060B4J/5.png",
        introduce:
          "武侯祠，位于四川省成都市武侯区武侯祠大街231号，占地15万平方米，始建于章武元年（221年），原是纪念诸葛亮的专祠，亦称孔明庙、诸葛祠、丞相祠等，后合并为君臣合祀祠。",
        price: 50,
      },
      {
        title: "都江堰",
        img: "https://i.postimg.cc/3wfKs9Zt/6.png",
        introduce:
          "都江堰是当今世界年代久远、唯一留存、以无坝引水为特征的宏大水利工程。都江堰是世界文化遗产、世界自然遗产的重要组成部分、世界灌溉工程遗产、全国重点文物保护单位、国家级风景名胜区、国家AAAAA级旅游景区。",
        price: 80,
      },
    ];
  } else if (id == 2) {
    return [
      {
        title: "尖沙咀",
        img: "https://i.postimg.cc/Bt9Lsqv4/7.png",
        introduce:
          "尖沙咀是九龙油尖旺区的一部分，位于九龙半岛的南端。弥敦道两旁的大街小巷暗藏着不少特色店铺，出售当地著名的商品与美食，很值得游客前往品赏。尖沙咀区内设有不少购物商场，包括新港中心、太阳广场、美丽华商场、新世界中心等。",
        price: "free",
      },
      {
        title: "香港迪士尼乐园",
        img: "https://i.postimg.cc/3J2xkXKw/4.png",
        introduce:
          "香港迪士尼乐园是全球第五座、亚洲第二座、中国第一座迪士尼乐园。园区内设有主题游乐设施、娱乐表演、互动体验、餐饮服务、商品店铺及小食亭。此外，乐园每天晚上会呈献巡游表演节目及烟花汇演。",
        price: 550,
      },
      {
        title: "维多利亚港",
        img: "https://i.postimg.cc/h42hrRRX/8.png",
        introduce:
          "维多利亚港简称维港，是位于中华人民共和国香港特别行政区的香港岛和九龙半岛之间的海港。世界三大天然良港之一。维多利亚港一直影响香港的历史和文化，主导中国香港的经济和旅游业发展，是中国香港成为国际化大都市的关键之一，也是香港举行烟花汇演的主要场地。",
        price: "free",
      },
      {
        title: "香港海洋公园",
        img: "hhttps://i.postimg.cc/4d5yqrKF/9.png",
        introduce:
          "香港海洋公园位于中国香港港岛南区黄竹坑，占地超过91.5公顷，是一座集海陆动物、机动游戏和大型表演于一身的世界级主题公园。",
        price: 300,
      },
      {
        title: "太平山顶",
        img: "https://i.postimg.cc/mkgks8CZ/10.png",
        introduce:
          "太平山风光秀丽，是人们到香港的必游之地。在快到山顶的地方，有个观景台，可以俯瞰香港及维多利亚港的景色。",
        price: 100,
      },
      {
        title: "星光大道",
        img: "https://i.postimg.cc/1zg5J8PX/11.png",
        introduce:
          "星光大道为表扬香港电影界的杰出人士的特色景点，仿效好莱坞星光大道，杰出电影工作者的芳名与手掌印镶嵌在特制的纪念牌匾，以年代依次排列在星光大道上，星光大道可容纳100名电影工作者的纪念牌匾。此外，星光大道也有多尊以电影拍摄情况及香港知名艺人为题材的塑像，供游人拍照留念。",
        price: "free",
      },
    ];
  } else if (id == 3) {
    return [
      {
        title: "壶口瀑布",
        img: "https://i.postimg.cc/0yXyYpTh/12.png",
        introduce:
          "壶口瀑布是国家级风景名胜区，国家AAAAA级旅游景区。壶口瀑布是中国第二大瀑布，世界上最大的黄色瀑布，闻名中外。",
        price: 90,
      },
      {
        title: "黄帝陵",
        img: "https://i.postimg.cc/wMYvtgCv/13.png",
        introduce:
          "黄帝陵，位于陕西省延安市黄陵县城北桥山。黄帝陵古称“桥陵”，是历代帝王和名人祭祀黄帝的场所。桥山一直是历代王朝举行国家大祭之地，保存着汉代至今的各类文物。陵前的“黄帝手植柏”距今五千余年，相传为黄帝亲手所植，是世界上最古老的柏树。",
        price: 75,
      },
      {
        title: "延安革命纪念馆",
        img: "https://i.postimg.cc/PqNN96bt/14.png",
        introduce:
          "延安革命纪念馆位于中国陕西省延安市宝塔区西北，延河东岸。延安革命纪念馆成立于1950年7月1日，是新中国成立后最早建成的革命纪念馆之一，也是一座集收藏、展示、研究、宣传为一体的革命纪念馆。延安革命纪念馆拥有馆藏文物近3.6万件，历史照片1万余张，图书3万余册。",
        price: "free",
      },
      {
        title: "延安红街",
        img: "https://i.postimg.cc/ry5sBR4t/15.png",
        introduce:
          "延安红街是陕西省延安市一处红色文化与旅游景区，由红色主题街区、窑洞主题酒店群和延湖共同组成。",
        price: "free",
      },
      {
        title: "宝塔山",
        img: "https://i.postimg.cc/Zqg0Srj6/16.png",
        introduce:
          "宝塔山，国家AAAAA级旅游景区，位于陕西省延安市宝塔区，建于唐代宗大历年间，是延安革命遗址的组成部分，也是延安市的标志性建筑。宝塔山先后被评为国家红色旅游经典景区、省级平安景区和省级文明风景旅游区。",
        price: 30,
      },
      {
        title: "金延安文化旅游产业园",
        img: "https://i.postimg.cc/FzbK3wvx/17.png",
        introduce:
          "金延安文化旅游产业园是一个旅游集合地，有民国时期建筑风格的街区、北宋延州小镇、特色美食以及民宿。这里有延安最大的民宿集群，以及众多网红拍照打卡地例如民国教堂、新华书店等。",
        price: "free",
      },
    ];
  } else if (id == 4) {
    return [
      {
        title: "拙政园",
        img: "https://i.postimg.cc/wjw7WKmf/18.png",
        introduce:
          "拙政园，位于江苏省苏州市姑苏区东北街178号。拙政园的整个环境虽由人做，自然生态的野趣却十分突出，尚保留着明代建园之初的风范，被认为是江南古典园林的代表作和中国园林艺术的珍贵遗产。。",
        price: "free",
      },
      {
        title: "周庄",
        img: "https://i.postimg.cc/8zzCfy0h/19.png",
        introduce:
          "周庄古镇位于苏州城东南，昆山、吴江、上海三地交界处，是世界文化遗产预选地、首批国家5A级旅游景区，主要景点有富安桥、双桥、沈厅等。井字型河道上完好保存着14座建于元、明、清各代的古石桥。800多户原住民枕河而居，60%以上的民居依旧保存着明清时期的建筑风貌",
        price: "free",
      },
      {
        title: "寒山寺",
        img: "https://i.postimg.cc/gkdjmcyt/20.png",
        introduce:
          "寒山寺位于苏州市姑苏区，历史上寒山寺曾是中国十大名寺之一，寺内古迹甚多，有张继诗的石刻碑文，寒山、拾得的石刻像，文徵明、唐寅所书碑文残片等。",
        price: "free",
      },
      {
        title: "华谊兄弟电影乐园",
        img: "https://i.postimg.cc/TY9ww8Cd/21.png",
        introduce:
          "华谊兄弟电影乐园坐落于风光旖旎的苏州阳澄湖半岛国家旅游度假区，华谊兄弟电影乐园的设计团队恣意想象，倾力打造了“星光大道”、“非诚勿扰”、“集结号”、“太极”、“通天帝国”五大电影主题区域。",
        price: "free",
      },
      // {
      //   title: "苏州博物馆",
      //   img: "https://i.postimg.cc/zGpSrP96/22.png",
      //   introduce:
      //     "苏州博物馆，位于苏州市姑苏区东北街204号，总建筑面积达26500平方米，是收藏、展示、研究、传播苏州历史、文化、艺术的地方性综合性博物馆。苏州博物馆太平天国忠王府为首批全国重点文物保护单位",
      //   price: "free",
      // },
    ];
  } else if (id == 5) {
    return [
      {
        title: "漓江",
        img: "https://i.postimg.cc/zGpSrP96/22.png",
        introduce:
          "桂林漓江风景区：世界自然遗产地，国家AAAAA级旅游景区，国家重点风景名胜区，是世界上规模最大、风景最美的岩溶山水游览区。",
        price: "free",
      },
      {
        title: "银子岩",
        img: "https://i.postimg.cc/m2YydrVb/23.png",
        introduce:
          "银子岩旅游景区位于桂林市荔浦市马岭镇荔桂公路东侧，1999年初对外开放，是国家AAAA级景区、首批“桂林市文明旅游风景区示范点”，是桂林旅游圈新出现的一颗璀璨明珠，也是桂林现最大的岩洞。有俗话说：“游了银子岩，一世不缺钱”之称 。",
        price: 58,
      },
      {
        title: "象鼻山",
        img: "https://i.postimg.cc/HW72yzy8/24.png",
        introduce: "象鼻山是桂林的城徽山，是桂林旅游的标志山。",
        price: "free",
      },
      {
        title: "阳朔西街",
        img: "https://i.postimg.cc/kX3yFSQ1/25.png",
        introduce:
          "西街是阳朔县城内最古老的街道，有1400多年的历史。西街是中西文化在阳朔最早的接触和融合地。西街成了中西文化交融的“洋人街”，超越地域的“地球村”，规模庞大的“外语角”",
        price: "free",
      },
    ];
  } else if (id == 6) {
    return [
      {
        title: "鸡鸣寺",
        img: "https://i.postimg.cc/PqRWLvfM/26.png",
        introduce:
          "鸡鸣寺位于南京市玄武区鸡笼山东麓山阜上，又称古鸡鸣寺，始建于西晋永康元年（300年），已有一千七百多年的历史，是南京最古老的梵刹和皇家寺庙之一，香火一直旺盛不衰，自古有“南朝第一寺”，“南朝四百八十寺”之首的美誉，南朝时期与栖霞寺、定山寺齐名，是南朝时期中国的佛教中心。",
        price: 10,
      },
      {
        title: "玄武湖公园",
        img: "https://i.postimg.cc/VkzB2cHX/27.png",
        introduce:
          "武湖风景区位于南京市玄武区，东枕紫金山，西靠明城墙，是中国较大的皇家园林湖泊，也是中国仅存的江南皇家园林和江南地区较大的城内公园，被誉为“金陵明珠”，现为国家重点公园、国家AAAA级旅游景区。",
        price: "free",
      },
      {
        title: "夫子庙",
        img: "https://i.postimg.cc/q7RcMxrR/28.png",
        introduce:
          "夫子庙是一组规模宏大的古建筑群，主要由孔庙、学宫、贡院三大建筑群组成，占地极大。有照壁、泮池、牌坊、聚星亭、魁星阁、棂星门、大成殿、明德堂、尊经阁等建筑。夫子庙被誉为秦淮名胜而成为古都南京的特色景观区，也是中国著名的开放式国家AAAAA级旅游景区和国际旅游胜地。",
        price: "free",
      },
      {
        title: "中山陵",
        img: "https://i.postimg.cc/4dHzp4mR/29.png",
        introduce:
          "中山陵位于南京市玄武区紫金山南麓钟山风景名胜区内，被誉为“中国近代建筑史上第一陵”。",
        price: "free",
      },
      {
        title: "南京博物馆",
        img: "https://i.postimg.cc/fy4YC49t/30.png",
        introduce:
          "南京博物院位于江苏省南京市玄武区中山东路321号，是中国创建最早的博物馆、中国第一座由国家投资兴建的大型综合类博物馆。现为大型综合性的国家级博物馆、首批国家一级博物馆、首批中央地方共建国家级博物馆、国家AAAA级旅游景区、全国重点文物保护单位和中国20世纪建筑遗产。南京博物院占地13万余平方米，为“一院六馆”格局，即历史馆、特展馆、数字馆、艺术馆、非遗馆、民国馆。",
        price: "free",
      },
      {
        title: "牛首山",
        img: "https://i.postimg.cc/wMhLbWXW/31.png",
        introduce:
          "牛首山，位于江苏省南京市江宁区牛首山文化旅游区内，因山顶突出的双峰相对峙恰似牛头双角而得名，民间又称为牛头山。东晋宰相王导曾劝谏初创政权的晋元帝司马睿打消在皇宫外兴建象征皇权的双阙的念头，请晋元帝乘舆出宣阳门，南眺牛首，两峰对峙，趁机劝喻元帝：“此天阙也，岂烦改作”，故得名“天阙山”。",
        price: 98,
      },
    ];
  } else if (id == 7) {
    return [
      {
        title: "北极村",
        img: "https://i.postimg.cc/sxbYX1rL/33.png",
        introduce:
          "北极村位于黑龙江省大兴安岭地区漠河市北极镇，地处北纬53°33′30″、东经122°20'27.14“，是国家AAAAA级旅游景区，素有“金鸡之冠”、“神州北极”和“不夜城”之美誉，是全国观赏北极光的最佳观测点，是中国“北方第一哨”所在地，也是中国最北的城镇。北极村凭借中国最北、神奇天象、极地冰雪等国内独特的资源景观，与三亚的天涯海角共列最具魅力旅游景点景区榜单前十名。",
        price: "free",
      },
      {
        title: "乌苏里浅滩",
        img: "https://i.postimg.cc/tgbzW1xQ/34.png",
        introduce:
          "乌苏里浅滩，坐落在北纬53°33′43″的黑龙江南岸，位于大兴安岭北端，图强林业局施业区内，是黑龙江畔的一处天然风景区。浅滩由黑龙江冲积而成，面积约50余平方公里，因在清朝时这里设有卡伦（相当于边防哨所）叫乌苏里，所以才被定名为“乌苏里浅滩”。",
        price: "free",
      },
      {
        title: "北红村",
        img: "https://i.postimg.cc/VshB4ZCF/35.png",
        introduce:
          "北红村位于大兴安岭最北部的群山之中，其四周均为未开发的原始森林，林木浓密，野果遍地，小动物如野猪、狍子、雪兔、飞龙等随处可见。需要有当地人作为向导（不然容易迷路）。丛林中鸟叫虫鸣，在夏末，可以采摘野果，蘑菇木耳也可以寻找野生灵芝等名贵药材。",
        price: "free",
      },
      {
        title: "龙江第一湾",
        img: "https://i.postimg.cc/d09jBq27/36.png",
        introduce:
          "“龙江第一湾”是黑龙江流经大兴安岭地区图强林业局施业区红旗岭段的江面回流急转而形成的独特景观，江湾环抱的岛上，绿树成荫，花香草茂。岛的边缘经江水的冲刷，形成了一圈由鹅卵石与黄沙构成的沙带，在阳光的映照下，整个小岛就像镶上了金边，所以又名“金环岛”。",
        price: "free",
      },
      {
        title: "白桦林",
        img: "https://i.postimg.cc/ncQKWKKf/37.png",
        introduce: "",
        price: "free",
      },
      {
        title: "九曲十八弯",
        img: "https://i.postimg.cc/x1DGVkgJ/38.png",
        introduce:
          "九曲十八湾国家级湿地公园景区内建有5层24.8米高仿木观景台，名为腾龙阁。湿地内1500米木栈道蜿蜒而过，游客可以穿林越壑，近听水声鸟语，松涛虫鸣，沉浸在广阔的绿色林海之中。“九曲十八湾”成为大自然鬼斧神工赐予的奇绝胜景，也是大兴安岭著名的摄影景区之一。",
        price: "free",
      },
    ];
  } else if (id == 8) {
    return [
      {
        title: "长白山国家级自然保护区",
        img: "https://i.postimg.cc/52BB4xkP/39.png",
        introduce:
          "国家5A级旅游景区，是中华十大名山之一。主峰长白山多白色浮石与积雪而得名，素有“千年积雪万年松，直上人间第一峰”的美誉。景区是拥有“神山、圣水、奇林、仙果”等盛誉的旅游胜地，也是满族的发祥地，在清代有“圣地”之誉，皇帝须亲自或委派大臣到吉林乌拉（今吉林市）望祭长白山。",
        price: 125
      },
      {
        title: "中国朝鲜民俗园",
        img: "https://i.postimg.cc/7LqgbpFq/40.png",
        introduce:
          "中国朝鲜族民俗园共分为5个功能区，分别为：传统文化展示区、传统体育演艺区、百年老宅体验区、民俗活动体验中心和传统饮食体验区。民俗园内有古朴的民居，秋千、跳板、摔跤场，还有美食街、婚礼厅。在这里，游客可以穿上朝鲜族服饰，学着简捷明快的朝鲜族舞步，参与朝鲜族婚礼。",
        price: 30,
      },
      {
        title: "延吉西市场",
        img: "https://i.postimg.cc/25TnW0Yh/41.png",
        introduce:
          "延吉西市场坐落于延吉市中心最繁华的商业街解放路西段，是一个具有朝鲜族民族特色的集工贸、农贸为一体的楼层式大型综合集贸市场，是延边朝鲜族特产集散地。",
        price: "free",
      },
      {
        title: "延边大学及大学城",
        img: "https://i.postimg.cc/7660nSPc/42.png",
        introduce:
          "   延边大学（Yanbian University），简称“延大”，校园内环境优美，校园建筑颇具朝鲜族特色。",
        price: "free",
      }
    ];
  }
}

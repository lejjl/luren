export function catalogue() {
  return [
    {
      id: 1,
      title: "热门精选",
      cityList: [
        {
          title: "成都太古里",
          img: "https://i.postimg.cc/1XhQGzPQ/55.png",
          introduce: "成都太古里坐落成都中心地带，成都时尚地标之一",
        },
        {
          title: "香港",
          img: "https://i.postimg.cc/3J2xkXKw/4.png",
          introduce:
            "香港迪士尼乐园是全球第五座、亚洲第二座、中国第一座迪士尼乐园。园区内设有主题游乐设施、娱乐表演、互动体验、餐饮服务、商品店铺及小食亭。此外，乐园每天晚上会呈献巡游表演节目及烟花汇演。",
        },
        {
          title: "延安",
          img: "https://i.postimg.cc/Hks1TXnR/12.png",
          introduce:
            "壶口瀑布是国家级风景名胜区，国家AAAAA级旅游景区。壶口瀑布是中国第二大瀑布，世界上最大的黄色瀑布，闻名中外。",
        },
        {
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
          title: "成都",
          img: "https://i.postimg.cc/1XhQGzPQ/55.png",
          introduce: "",
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
      },
      {
        title: "成都国际金融中心（IFS）",
        img: "https://i.postimg.cc/RFhkwBKR/1.png",
        introduce:
          "成都国际金融中心，简称“成都IFS”，位于四川省成都市锦江区红星路和大慈寺路的交汇处，是集购物、文化娱乐、写字楼、酒店式公寓、酒店于一体的城市综合体。",
      },
      {
        title: "宽窄巷子",
        img: "https://i.postimg.cc/NG9MchSm/3.png",
        introduce:
          "宽窄巷子位于四川省成都市青羊区长顺街附近，由宽巷子、窄巷子、井巷子平行排列组成，全为青黛砖瓦的仿古四合院落，这里也是成都遗留下来的较成规模的清朝古街道，与大慈寺、文殊院一起并称为成都三大历史文化名城保护街区。",
      },
      {
        title: "大熊猫繁育研究基地",
        img: "https://i.postimg.cc/ZRQ1cMLh/2.png",
        introduce:
          "成都大熊猫繁育研究基地，位于四川省成都市成华区熊猫大道1375号，距市中心10公里。是世界著名的大熊猫迁地保护基地、科研繁育基地、公众教育基地和教育旅游基地。2006年被评为国家AAAA级旅游景区。",
      },
      {
        title: "武侯祠",
        img: "https://i.postimg.cc/6p060B4J/5.png",
        introduce:
          "武侯祠，位于四川省成都市武侯区武侯祠大街231号，占地15万平方米，始建于章武元年（221年），原是纪念诸葛亮的专祠，亦称孔明庙、诸葛祠、丞相祠等，后合并为君臣合祀祠。",
      },
      {
        title: "6、都江堰",
        img: "https://i.postimg.cc/3wfKs9Zt/6.png",
        introduce:
          "都江堰是当今世界年代久远、唯一留存、以无坝引水为特征的宏大水利工程。都江堰是世界文化遗产、世界自然遗产的重要组成部分、世界灌溉工程遗产、全国重点文物保护单位、国家级风景名胜区、国家AAAAA级旅游景区。",
      },
    ];
  }
}

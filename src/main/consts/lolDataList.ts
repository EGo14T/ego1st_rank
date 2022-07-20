export type ChampionInfo = {
  [key: string]: {
    title: string;
    alias: string;
    name: string;
  };
};

export const championFmt: ChampionInfo = {
  1: { title: '黑暗之女', alias: 'Annie', name: '安妮' },
  2: { title: '狂战士', alias: 'Olaf', name: '奥拉夫' },
  3: { title: '正义巨像', alias: 'Galio', name: '加里奥' },
  4: { title: '卡牌大师', alias: 'TwistedFate', name: '崔斯特' },
  5: { title: '德邦总管', alias: 'XinZhao', name: '赵信' },
  6: { title: '无畏战车', alias: 'Urgot', name: '厄加特' },
  7: { title: '诡术妖姬', alias: 'Leblanc', name: '乐芙兰' },
  8: { title: '猩红收割者', alias: 'Vladimir', name: '弗拉基米尔' },
  9: { title: '远古恐惧', alias: 'Fiddlesticks', name: '费德提克' },
  10: { title: '正义天使', alias: 'Kayle', name: '凯尔' },
  11: { title: '无极剑圣', alias: 'MasterYi', name: '易' },
  12: { title: '牛头酋长', alias: 'Alistar', name: '阿利斯塔' },
  13: { title: '符文法师', alias: 'Ryze', name: '瑞兹' },
  14: { title: '亡灵战神', alias: 'Sion', name: '赛恩' },
  15: { title: '战争女神', alias: 'Sivir', name: '希维尔' },
  16: { title: '众星之子', alias: 'Soraka', name: '索拉卡' },
  17: { title: '迅捷斥候', alias: 'Teemo', name: '提莫' },
  18: { title: '麦林炮手', alias: 'Tristana', name: '崔丝塔娜' },
  19: { title: '祖安怒兽', alias: 'Warwick', name: '沃里克' },
  20: { title: '雪原双子', alias: 'Nunu', name: '努努和威朗普' },
  21: { title: '赏金猎人', alias: 'MissFortune', name: '厄运小姐' },
  22: { title: '寒冰射手', alias: 'Ashe', name: '艾希' },
  23: { title: '蛮族之王', alias: 'Tryndamere', name: '泰达米尔' },
  24: { title: '武器大师', alias: 'Jax', name: '贾克斯' },
  25: { title: '堕落天使', alias: 'Morgana', name: '莫甘娜' },
  26: { title: '时光守护者', alias: 'Zilean', name: '基兰' },
  27: { title: '炼金术士', alias: 'Singed', name: '辛吉德' },
  28: { title: '痛苦之拥', alias: 'Evelynn', name: '伊芙琳' },
  29: { title: '瘟疫之源', alias: 'Twitch', name: '图奇' },
  30: { title: '死亡颂唱者', alias: 'Karthus', name: '卡尔萨斯' },
  31: { title: '虚空恐惧', alias: 'Chogath', name: '科加斯' },
  32: { title: '殇之木乃伊', alias: 'Amumu', name: '阿木木' },
  33: { title: '披甲龙龟', alias: 'Rammus', name: '拉莫斯' },
  34: { title: '冰晶凤凰', alias: 'Anivia', name: '艾尼维亚' },
  35: { title: '恶魔小丑', alias: 'Shaco', name: '萨科' },
  36: { title: '祖安狂人', alias: 'DrMundo', name: '蒙多医生' },
  37: { title: '琴瑟仙女', alias: 'Sona', name: '娑娜' },
  38: { title: '虚空行者', alias: 'Kassadin', name: '卡萨丁' },
  39: { title: '刀锋舞者', alias: 'Irelia', name: '艾瑞莉娅' },
  40: { title: '风暴之怒', alias: 'Janna', name: '迦娜' },
  41: { title: '海洋之灾', alias: 'Gangplank', name: '普朗克' },
  42: { title: '英勇投弹手', alias: 'Corki', name: '库奇' },
  43: { title: '天启者', alias: 'Karma', name: '卡尔玛' },
  44: { title: '瓦洛兰之盾', alias: 'Taric', name: '塔里克' },
  45: { title: '邪恶小法师', alias: 'Veigar', name: '维迦' },
  48: { title: '巨魔之王', alias: 'Trundle', name: '特朗德尔' },
  50: { title: '诺克萨斯统领', alias: 'Swain', name: '斯维因' },
  51: { title: '皮城女警', alias: 'Caitlyn', name: '凯特琳' },
  53: { title: '蒸汽机器人', alias: 'Blitzcrank', name: '布里茨' },
  54: { title: '熔岩巨兽', alias: 'Malphite', name: '墨菲特' },
  55: { title: '不祥之刃', alias: 'Katarina', name: '卡特琳娜' },
  56: { title: '永恒梦魇', alias: 'Nocturne', name: '魔腾' },
  57: { title: '扭曲树精', alias: 'Maokai', name: '茂凯' },
  58: { title: '荒漠屠夫', alias: 'Renekton', name: '雷克顿' },
  59: { title: '德玛西亚皇子', alias: 'JarvanIV', name: '嘉文四世' },
  60: { title: '蜘蛛女皇', alias: 'Elise', name: '伊莉丝' },
  61: { title: '发条魔灵', alias: 'Orianna', name: '奥莉安娜' },
  62: { title: '齐天大圣', alias: 'MonkeyKing', name: '孙悟空' },
  63: { title: '复仇焰魂', alias: 'Brand', name: '布兰德' },
  64: { title: '盲僧', alias: 'LeeSin', name: '李青' },
  67: { title: '暗夜猎手', alias: 'Vayne', name: '薇恩' },
  68: { title: '机械公敌', alias: 'Rumble', name: '兰博' },
  69: { title: '魔蛇之拥', alias: 'Cassiopeia', name: '卡西奥佩娅' },
  72: { title: '水晶先锋', alias: 'Skarner', name: '斯卡纳' },
  74: { title: '大发明家', alias: 'Heimerdinger', name: '黑默丁格' },
  75: { title: '沙漠死神', alias: 'Nasus', name: '内瑟斯' },
  76: { title: '狂野女猎手', alias: 'Nidalee', name: '奈德丽' },
  77: { title: '兽灵行者', alias: 'Udyr', name: '乌迪尔' },
  78: { title: '圣锤之毅', alias: 'Poppy', name: '波比' },
  79: { title: '酒桶', alias: 'Gragas', name: '古拉加斯' },
  80: { title: '不屈之枪', alias: 'Pantheon', name: '潘森' },
  81: { title: '探险家', alias: 'Ezreal', name: '伊泽瑞尔' },
  82: { title: '铁铠冥魂', alias: 'Mordekaiser', name: '莫德凯撒' },
  83: { title: '牧魂人', alias: 'Yorick', name: '约里克' },
  84: { title: '离群之刺', alias: 'Akali', name: '阿卡丽' },
  85: { title: '狂暴之心', alias: 'Kennen', name: '凯南' },
  86: { title: '德玛西亚之力', alias: 'Garen', name: '盖伦' },
  89: { title: '曙光女神', alias: 'Leona', name: '蕾欧娜' },
  90: { title: '虚空先知', alias: 'Malzahar', name: '玛尔扎哈' },
  91: { title: '刀锋之影', alias: 'Talon', name: '泰隆' },
  92: { title: '放逐之刃', alias: 'Riven', name: '锐雯' },
  96: { title: '深渊巨口', alias: 'KogMaw', name: '克格莫' },
  98: { title: '暮光之眼', alias: 'Shen', name: '慎' },
  99: { title: '光辉女郎', alias: 'Lux', name: '拉克丝' },
  101: { title: '远古巫灵', alias: 'Xerath', name: '泽拉斯' },
  102: { title: '龙血武姬', alias: 'Shyvana', name: '希瓦娜' },
  103: { title: '九尾妖狐', alias: 'Ahri', name: '阿狸' },
  104: { title: '法外狂徒', alias: 'Graves', name: '格雷福斯' },
  105: { title: '潮汐海灵', alias: 'Fizz', name: '菲兹' },
  106: { title: '不灭狂雷', alias: 'Volibear', name: '沃利贝尔' },
  107: { title: '傲之追猎者', alias: 'Rengar', name: '雷恩加尔' },
  110: { title: '惩戒之箭', alias: 'Varus', name: '韦鲁斯' },
  111: { title: '深海泰坦', alias: 'Nautilus', name: '诺提勒斯' },
  112: { title: '机械先驱', alias: 'Viktor', name: '维克托' },
  113: { title: '北地之怒', alias: 'Sejuani', name: '瑟庄妮' },
  114: { title: '无双剑姬', alias: 'Fiora', name: '菲奥娜' },
  115: { title: '爆破鬼才', alias: 'Ziggs', name: '吉格斯' },
  117: { title: '仙灵女巫', alias: 'Lulu', name: '璐璐' },
  119: { title: '荣耀行刑官', alias: 'Draven', name: '德莱文' },
  120: { title: '战争之影', alias: 'Hecarim', name: '赫卡里姆' },
  121: { title: '虚空掠夺者', alias: 'Khazix', name: '卡兹克' },
  122: { title: '诺克萨斯之手', alias: 'Darius', name: '德莱厄斯' },
  126: { title: '未来守护者', alias: 'Jayce', name: '杰斯' },
  127: { title: '冰霜女巫', alias: 'Lissandra', name: '丽桑卓' },
  131: { title: '皎月女神', alias: 'Diana', name: '黛安娜' },
  133: { title: '德玛西亚之翼', alias: 'Quinn', name: '奎因' },
  134: { title: '暗黑元首', alias: 'Syndra', name: '辛德拉' },
  136: { title: '铸星龙王', alias: 'AurelionSol', name: '奥瑞利安索尔' },
  141: { title: '影流之镰', alias: 'Kayn', name: '凯隐' },
  142: { title: '暮光星灵', alias: 'Zoe', name: '佐伊' },
  143: { title: '荆棘之兴', alias: 'Zyra', name: '婕拉' },
  145: { title: '虚空之女', alias: 'Kaisa', name: '卡莎' },
  147: { title: '星籁歌姬', alias: 'Seraphine', name: '萨勒芬妮' },
  150: { title: '迷失之牙', alias: 'Gnar', name: '纳尔' },
  154: { title: '生化魔人', alias: 'Zac', name: '扎克' },
  157: { title: '疾风剑豪', alias: 'Yasuo', name: '亚索' },
  161: { title: '虚空之眼', alias: 'Velkoz', name: '维克兹' },
  163: { title: '岩雀', alias: 'Taliyah', name: '塔莉垭' },
  164: { title: '青钢影', alias: 'Camille', name: '卡蜜尔' },
  166: { title: '影哨', alias: 'Akshan', name: '阿克尚' },
  200: { title: '虚空女皇', alias: 'Belveth', name: '卑尔维斯' },
  201: { title: '弗雷尔卓德之心', alias: 'Braum', name: '布隆' },
  202: { title: '戏命师', alias: 'Jhin', name: '烬' },
  203: { title: '永猎双子', alias: 'Kindred', name: '千珏' },
  221: { title: '祖安花火', alias: 'Zeri', name: '泽丽' },
  222: { title: '暴走萝莉', alias: 'Jinx', name: '金克丝' },
  223: { title: '河流之王', alias: 'TahmKench', name: '塔姆' },
  234: { title: '破败之王', alias: 'Viego', name: '佛耶戈' },
  235: { title: '涤魂圣枪', alias: 'Senna', name: '赛娜' },
  236: { title: '圣枪游侠', alias: 'Lucian', name: '卢锡安' },
  238: { title: '影流之主', alias: 'Zed', name: '劫' },
  240: { title: '暴怒骑士', alias: 'Kled', name: '克烈' },
  245: { title: '时间刺客', alias: 'Ekko', name: '艾克' },
  246: { title: '元素女皇', alias: 'Qiyana', name: '奇亚娜' },
  254: { title: '皮城执法官', alias: 'Vi', name: '蔚' },
  266: { title: '暗裔剑魔', alias: 'Aatrox', name: '亚托克斯' },
  267: { title: '唤潮鲛姬', alias: 'Nami', name: '娜美' },
  268: { title: '沙漠皇帝', alias: 'Azir', name: '阿兹尔' },
  350: { title: '魔法猫咪', alias: 'Yuumi', name: '悠米' },
  360: { title: '沙漠玫瑰', alias: 'Samira', name: '莎弥拉' },
  412: { title: '魂锁典狱长', alias: 'Thresh', name: '锤石' },
  420: { title: '海兽祭司', alias: 'Illaoi', name: '俄洛伊' },
  421: { title: '虚空遁地兽', alias: 'RekSai', name: '雷克塞' },
  427: { title: '翠神', alias: 'Ivern', name: '艾翁' },
  429: { title: '复仇之矛', alias: 'Kalista', name: '卡莉丝塔' },
  432: { title: '星界游神', alias: 'Bard', name: '巴德' },
  497: { title: '幻翎', alias: 'Rakan', name: '洛' },
  498: { title: '逆羽', alias: 'Xayah', name: '霞' },
  516: { title: '山隐之焰', alias: 'Ornn', name: '奥恩' },
  517: { title: '解脱者', alias: 'Sylas', name: '塞拉斯' },
  518: { title: '万花通灵', alias: 'Neeko', name: '妮蔻' },
  523: { title: '残月之肃', alias: 'Aphelios', name: '厄斐琉斯' },
  526: { title: '镕铁少女', alias: 'Rell', name: '芮尔' },
  555: { title: '血港鬼影', alias: 'Pyke', name: '派克' },
  711: { title: '愁云使者', alias: 'Vex', name: '薇古丝' },
  777: { title: '封魔剑魂', alias: 'Yone', name: '永恩' },
  875: { title: '腕豪', alias: 'Sett', name: '瑟提' },
  876: { title: '含羞蓓蕾', alias: 'Lillia', name: '莉莉娅' },
  887: { title: '灵罗娃娃', alias: 'Gwen', name: '格温' },
  888: { title: '炼金男爵', alias: 'Renata', name: '烈娜塔 · 戈拉斯克' },
  895: { title: '不羁之悦', alias: 'Nilah', name: '尼菈' },
};

import { createHttp1Request, Credentials } from 'league-connect';
import { tierFmt } from '.';
import { championFmt } from '../consts/lolDataList';

let summonerId: unknown;

export const acceptGame = async (credentials: Credentials) => {
  try {
    await createHttp1Request(
      {
        method: 'POST',
        url: '/lol-matchmaking/v1/ready-check/accept',
      },
      credentials
    );
  } catch (e) {
    console.error(e);
  }
};

// 查询召唤师信息
export const queryCurrentSummonerInfo = (
  credentials: Credentials
): Promise<any> => {
  return createHttp1Request(
    {
      method: 'GET',
      url: `/lol-summoner/v1/current-summoner`,
    },
    credentials
  );
};

// 查询召唤师英雄信息
export const queryCurrentChapm = (credentials: Credentials): Promise<any> => {
  return createHttp1Request(
    {
      method: 'GET',
      url: `/lol-collections/v1/inventories/${summonerId}/champion-mastery`,
    },
    credentials
  );
};

// 查询召唤师排位分数
const queryRankPoint = async (credentials: Credentials): Promise<any> => {
  const rankPoint: any[] = (
    await createHttp1Request(
      {
        method: 'GET',
        url: '/lol-ranked/v1/current-ranked-stats',
      },
      credentials
    )
  ).json().queues as Array<any>;

  // 单双排位/ 灵活排位/ 云顶之亦
  let rankSolo = rankPoint.find((i) => i.queueType == 'RANKED_SOLO_5x5');
  let rankSr = rankPoint.find((i) => i.queueType == 'RANKED_FLEX_SR');
  let rankTft = rankPoint.find((i) => i.queueType == 'RANKED_TFT');

  let RANKED_SOLO =
    rankSolo.tier == 'NONE'
      ? '未定级'
      : `${tierFmt(rankSolo.tier)}${rankSolo.division} ${
          rankSolo.leaguePoints
        } 胜点`;
  let RANKED_FLEX_SR =
    rankSr.tier == 'NONE'
      ? '未定级'
      : `${tierFmt(rankSr.tier)}${rankSr.division} ${rankSr.leaguePoints} 胜点`;
  let RANKED_TFT =
    rankTft.tier == 'NONE'
      ? '未定级'
      : `${tierFmt(rankTft.tier)}${rankTft.division} ${
          rankTft.leaguePoints
        } 胜点`;

  return [
    {
      title: '单双排位',
      point: RANKED_SOLO,
    },
    { title: '灵活组排', point: RANKED_FLEX_SR },
    { title: '云顶之弈', point: RANKED_TFT },
  ];
};

// 处理召唤师英雄熟练度数据
export const dealSummonerInfo = async (credentials: Credentials) => {
  let superChampList: any[] = [];
  let summonerInfoTemp = {};

  const summonerInfo = await queryCurrentSummonerInfo(credentials)
    .then((res) => {
      const jsonData = res.json();
      summonerId = jsonData.accountId;
      summonerInfoTemp = jsonData;
      return queryCurrentChapm(credentials);
    })
    .then((res) => {
      const summonerChampData = res.json();
      for (const item of summonerChampData.slice(0, 3)) {
        let championImgUrl = `https://game.gtimg.cn/images/lol/act/img/champion/${
          championFmt[String(item.championId)].alias
        }.png`;
        let champLevel = item.championLevel;
        let championPoints = item.championPoints;
        let championName = championFmt[String(item.championId)].title;
        superChampList.push({
          championId: item.championId,
          championName,
          champLevel,
          championPoints,
          championImgUrl,
        });
      }
      return new Promise<any>((resolve) => {
        resolve({ ...summonerInfoTemp, championData: superChampList });
      });
    });

  const rankList = await queryRankPoint(credentials);
  return { ...summonerInfo, rankList };
};

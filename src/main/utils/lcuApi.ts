import { createHttp1Request, Credentials } from 'league-connect';
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
export const queryCurrentSummonerInfo = async (credentials: Credentials) => {
  const summonerInfo = (
    await createHttp1Request(
      {
        method: 'GET',
        url: `/lol-summoner/v1/current-summoner`,
      },
      credentials
    )
  ).json();
  summonerId = summonerInfo.summonerId;
  return summonerInfo;
};

// 查询召唤师英雄信息
export const queryCurrentChapm = async (credentials: Credentials) => {
  const summonerChampData = (
    await createHttp1Request(
      {
        method: 'GET',
        url: `/lol-collections/v1/inventories/${summonerId}/champion-mastery`,
      },
      credentials
    )
  ).json();
  return summonerChampData;
};

// 处理召唤师英雄熟练度数据
export const dealSummonerInfo = async (credentials: Credentials) => {
  const summonerInfo = await queryCurrentSummonerInfo(credentials);
  const summonerChampData: any = await queryCurrentChapm(credentials);
  let superChampList: any[] = [];

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

  return { ...summonerInfo, championData: superChampList };
};

import { createHttp1Request, Credentials } from 'league-connect';

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
  return summonerInfo;
};

import {
  createWebSocketConnection,
  Credentials,
} from 'league-connect';
import { acceptGame } from './lcuApi';

export const wsListen = async (credentials: Credentials) => {
  const ws = await createWebSocketConnection({
    authenticationOptions: {},
    pollInterval: 0,
  });

  // ws.subscribe('/lol-chat/v1/conversations/active', async (data, _) => {
  //   const id = data?.id;
  //   if (id != null) {
  //     await createHttp1Request({
  //       method: "POST",
  //       url: `/lol-chat/v1/conversations/${id}/messages`,
  //       body: {
  //         "body": "测试消息" + new Date(),
  //         "type": 'chat'
  //       }
  //     }, credentials)
  //   }
  // })

  ws.subscribe('/lol-gameflow/v1/gameflow-phase', async (data) => {
    console.log('gameflow:', data);
    if (data == 'ReadyCheck') {
      acceptGame(credentials);
    }
  });
};

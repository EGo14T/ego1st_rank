import { createHttp1Request, createWebSocketConnection, Credentials } from "league-connect";

export const wsListen = async (credentials: Credentials) => {
  const ws = await createWebSocketConnection({
    authenticationOptions: {},
    pollInterval: 0
  })

  ws.subscribe('/lol-chat/v1/conversations/active', async (data, event) => {
    const id = data?.id;
    if (id != null) {
      await createHttp1Request({
        method: "POST",
        url: `/lol-chat/v1/conversations/${id}/messages`,
        body: {
          "body": "测试消息" + new Date(),
          "type": 'chat'
        }
      }, credentials)
    }
  })
}


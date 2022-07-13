import { createHttp1Request, Credentials } from "league-connect"

export const acceptGame = async (credentials: Credentials) => {
  try {
    await createHttp1Request({
      method: "POST",
      url: '/lol-matchmaking/v1/ready-check/accept',
    }, credentials)
  } catch (e) {
    console.error(e)
  }
}

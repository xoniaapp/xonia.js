import axios from "axios";

interface SendMessage {
  text: string;
  channelId: string;
  token: string;
}

interface GetMessages {
  channelId: string;
  token: string;
}

/**
 * @param {string} text - Text to send
 * @param {string} channelId - Channel Id
 * @param {string} token - Token
 */
async function send(text: string, channelId: string, token: string) {
  try {
    const data = JSON.stringify({
      text: text,
    });

    const config = {
      method: "POST",
      url: `https://gateway.xoniaapp.com/api/messages/${channelId}`,
      headers: {
        "Content-Type": "application/json",
        Cookie: token,
      },
      data: data,
    };

    const response = await axios(config);

    return `Sent: ${response.data}`;
  } catch (error) {
    return error;
  }
}

/**
 * @param {string} channelId - Channel Id
 * @param {string} token - Token
 */
async function get(channelId: string, token: string) {
  try {
    const config = {
      method: "GET",
      url: `https://gateway.xoniaapp.com/api/messages/${channelId}`,
      headers: {
        Cookie: `${token}`,
      },
    };
    const res = await axios(config);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export default { get, send };

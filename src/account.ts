import axios from "axios";

interface GetToken {
  email: string;
  password: string;
}

/**
 * @param {string} email - email
 * @param {string} password - password
 */
async function get_token(email: string, password: string) {
  try {
    const data = JSON.stringify({
      email: email,
      password: password,
    });

    const config = {
      method: "POST",
      url: `https://gateway.xoniaapp.com/api/account/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios(config);
    const cookie = response.headers["set-cookie"];
    const token = cookie?.toString().split(";")[0];

    return token;
  } catch (error) {
    // @ts-ignore
    if (error.code == "ERR_BAD_REQUEST") {
      return "Password is wrong."
    }
    return error;
  }
}

export default { get_token };
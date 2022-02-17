import axios from "axios";
import baseURL from "../config";

/**
 * ```js
 * const { getToken } = require("xoniajs");
 * const bot = new getToken("email", "password");
 * ```
 * Don't forgot to keep the SESSION_ID secure!
 */

function getToken(email, password) {
    const data = JSON.stringify({
        email: email,
        password: password,
    });

    const config = {
        method: "POST",
        url: `${baseURL}account/login`,
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
    };

    axios(config)
        .then(function (response) {
            const headerFindcookie = response.headers;
            const token = headerFindcookie["set-cookie"];
            console.log(`
            REMAINING REQUESTS = ${response.headers["x-ratelimit-remaining"]}
            SESSION_ID = ${token.toString().split(";")[0]}
            Don't forgot to keep the SESSION_ID secure!
            `)
        })
        .catch(function (error) {
            console.log("something went wrong!", error);
        });
}

export default {
    getToken,
}
const axios = require("axios");
const { baseURL } = require("../config.js")

/**
 * @param {string} message - The message to send
 * @param {string} channel - The channel to send the message to
 * @param {string} token - The token to use for the request
 */

function sendMessage(message, channel, token) {
    const data = JSON.stringify({
        "text": `${message}`
    });

    const config = {
        method: 'POST',
        url: `${baseURL}messages/${channel}`,
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `${token}`
        },
        data: data,
    };

    axios(config)
        .then(function (response) {
            console.log(`
            200 OK
            Message: ${message}
            Channel ID: ${channel}
            Requests Left: ${response.headers["x-ratelimit-remaining"]}
            `);
        })
        .catch(function (error) {
            console.log("something went wrong!", error);
        });

}

module.exports = { sendMessage }

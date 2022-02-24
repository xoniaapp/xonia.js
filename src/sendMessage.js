const axios = require("axios");
const { baseURL } = require("../config.js")

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
            console.log(`| Success | Message: ${message} | Channel ID ${channel}`);
        })
        .catch(function (error) {
            console.log(error);
        });

}

module.exports = {
    sendMessage,
}
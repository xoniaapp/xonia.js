const axios = require('axios');
const { baseURL } = require("../config.js");

/** 
 * @param {string} channel - The channel to get the messages from
 * @param {string} token - The token to use for the request
*/

function getMessage(channel, token) {
    const config = {
        method: 'GET',
        url: `${baseURL}messages/${channel}`,
        headers: {
            'Cookie': `${token}`
        },
    };

    axios(config)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

}

module.exports = { getMessage };

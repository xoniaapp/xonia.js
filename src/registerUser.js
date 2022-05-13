const axios = require('axios');
const { baseURL } = require("../config.js");


/**
 * @param {string} username - The username to use.
 * @param {string} email - The email to use.
 * @param {string} password - The password to use.
 */
function registerUser(username, email, password) {
    const data = JSON.stringify({
        "username": username,
        "email": email,
        "password": password
    });

    const config = {
        method: 'POST',
        url: `${baseURL}account/register`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

}

module.exports = { registerUser };
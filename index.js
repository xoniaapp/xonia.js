const { getToken } = require("./src/getToken.js");
const { sendMessage } = require("./src/sendMessage.js");
const { getMessage } = require("./src/getMessage.js");
const { registerUser } = require("./src/registerUser.js")

module.exports = {
    getToken,
    registerUser,
    sendMessage,
    getMessage,
};

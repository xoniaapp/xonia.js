const { getToken } = require("./getToken.js");
const { sendMessage } = require("./sendMessage.js");
const { getMessage } = require("./getMessage.js");
const { registerUser } = require("./registerUser")

module.exports = {
    getToken,
    registerUser,
    sendMessage,
    getMessage,
};

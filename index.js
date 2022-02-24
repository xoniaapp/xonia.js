const { getToken, sendMessage, getMessage } = require("./src");
const { sessionToken } = require("./config.js");

// const newMsg = new sendMessage(
//     "helllllllo",
//     "1487076174428377088",
//     `${sessionToken}`
// )

getMessage("1487076174428377088", `${sessionToken}`)
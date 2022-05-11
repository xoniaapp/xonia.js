// Example WebHook
const { sendMessage } = require("./src");

sendMessage("**Hi, there.**", "channelID", "sessionToken");

// Weather Application WebHook
const { sendMessage } = require("./src");

sendMessage("Location: Degree:"); // Get the weather data from an APIand send the response.
// async await is valid as well.

// News WebHook
// Same as weather hook
const weather = require('weather-js');

const {sendMessage} = require("../../src")

// Options:
// search:     location name or zipcode
// degreeType: F or C

weather.find({ search: 'London, United Kingdom', degreeType: 'C' }, function (err, result) {
    if (err) console.log(err);

    sendMessage(result, "channeID", "your token")
});
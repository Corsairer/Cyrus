exports.commands = [
    "joke",
    "math_fact"
]

exports.math_fact = {
        usage: "<random math>",
        description: "Gives a Random Math Fact",
        process: function(bot, msg, suffix) {
            require("request")("http://numbersapi.com/random/math?json",
                function(err, res, body) {
                    var data = JSON.parse(body);
                    if (data && data.text) {
                        msg.channel.sendMessage(data.text)
                    }
                });
        }
    },

    exports.joke = {
        description: "Gives a Random Joke",
        process: function(bot, msg, suffix) {
            require("request")("http://tambal.azurewebsites.net/joke/random",
                function(err, res, body) {
                    var data = JSON.parse(body);
                    if (data && data.joke) {
                        msg.channel.sendMessage(data.joke)
                    }
                });
        }
    },

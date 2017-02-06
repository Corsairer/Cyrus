var urban = require("urban");

exports.commands = [
	"urban"
];

exports.urban = {
			usage: "<word>",
			description: "looks up a word on Urban Dictionary",
			process: function(bot,msg,suffix){
					var targetWord = suffix == "" ? urban.random() : urban(suffix);
					targetWord.first(function(json) {
							if (json) {
								var message = "Urban Dictionary: **" +json.word + "**\n\n" + json.definition;
								if (json.example) {
										message = message + "\n\n__Example__:\n" + json.example;
								}
						//    msg.channel.sendMessage(message);
								msg.channel.sendMessage("", {
		                embed: {
		                    color: 0x9933FF,
		                    author: {
		                        name: "Urban Dictionary",
		                        icon_url: "https://www.google.co.uk/imgres?imgurl=https://lh5.googleusercontent.com/-rY97dP0iEo0/AAAAAAAAAAI/AAAAAAAAAGA/xm1HYqJXdMw/s0-c-k-no-ns/photo.jpg&imgrefurl=https://plus.google.com/u/0/112869282427801871672&h=1024&w=1024&tbnid=S_bczJAelBKSNM:&vet=1&tbnh=151&tbnw=151&docid=2VrW9H1HRXA2mM&itg=1&usg=__2s7MWxs80GFsZOKWQ2-v3zjENiE=&sa=X&ved=0ahUKEwiwy5Ksy_bRAhUBK8AKHXZxB-kQ_B0IcTAP#h=1024&imgrc=S_bczJAelBKSNM:&tbnh=151&tbnw=151&vet=1&w=1024"
		                    },
				    timestamp: new Date(),
		                    description: message,
		                }
		            }).catch(console.error);
							} else {
								msg.channel.sendMessage( "No matches found");
							}
					});
			}
	}

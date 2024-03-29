exports.commands = [
	"twitch",
	"chuckNorris",
	"watchtogether"
]

//a collection of simple self contained commands with no dependencies beyond request

exports.twitch = {
	usage: "<stream>",
	description: "checks if the given stream is online",
	process: function(bot,msg,suffix){
		require("request")("https://api.twitch.tv/kraken/streams/"+suffix,
		function(err,res,body){
			var stream = JSON.parse(body);
			if(stream.stream){
				msg.channel.sendMessage( suffix
					+" is online, playing "
					+stream.stream.game
					+"\n"+stream.stream.channel.status
					+"\n"+stream.stream.preview.large)
			}else{
				msg.channel.sendMessage( suffix+" is offline")
			}
		});
	}
}

exports.chuckNorris = {
	usage: "<joke>",
	description: "gives a random Chuck Norris joke",
	process: function(bot, msg, suffix) {
		require("request")("http://api.icndb.com/jokes/random",
		function(err, res, body) {
			var data = JSON.parse(body);
			if (data && data.value && data.value.joke) {
			msg.channel.sendMessage(data.value.joke)
			}
		});
	}
}

exports.watchtogether = {
	usage: "[video url (Youtube, Vimeo)",
	description: "Generate a watch2gether room with your video to watch with your friends!",
	process: function(bot,msg,suffix){
		var watch2getherUrl = "https://www.watch2gether.com/go#";
		msg.channel.sendMessage(
			"watch2gether link").then(function(){
				msg.channel.sendMessage(watch2getherUrl + suffix)
		})
	}
}

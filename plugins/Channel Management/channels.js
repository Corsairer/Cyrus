exports.commands = [
	"create",
	"voice",
	"delete",
	"servers",
	"topic"
]

exports.create = {
	usage: "<channel name>",
	description: "creates a new text channel with the given name.",
	process: function(bot,msg,suffix) {
		let role = msg.guild.roles.find("name","Commander");
    if(!msg.member.roles.has(role.id)) {
      return msg.reply(":x: You do not have the permissions to use this command! You need the ``Commander`` role in order to use commands in this group.")
    } else {
			msg.channel.guild.createChannel(suffix,"text").then(function(channel) {
		//		msg.channel.sendMessage("created " + channel);
				msg.channel.sendMessage("", {
						embed: {
								color: 0x9933FF,
								author: {
										name: "Cyrus",
										icon_url: "http://assets.enjin.com/wall_embed_images/pic_full/1478667780_dts-640x480.jpg"
								},
		timestamp: new Date(),
								description: "created " + channel,
						}
				}).catch(console.error);
			}).catch(function(error){
//				msg.channel.sendMessage("failed to create channel: " + error);
				msg.channel.sendMessage("", {
						embed: {
								color: 0x9933FF,
								author: {
										name: "Cyrus",
										icon_url: "https://img.clipartfest.com/558fc41eaa74ea1abeaa19512aacc609_png-small-medium-large-big-red-x-clip-art_300-300.png"
								},
								timestamp: new Date(),
								description: "failed to create channel: " + error,
						}
				}).catch(console.error);
			});
		}
	}
}

exports.servers = {
description: "Tells you what servers the bot is in",
process: function(bot,msg) {
	msg.channel.sendMessage(`__**${bot.user.username} is currently on the following servers:**__ \n\n${bot.guilds.map(g => `${g.name} - **${g.memberCount} Members**`).join(`\n`)}`, {split: true});
}
},



exports.voice = {
	usage: "<channel name>",
	description: "creates a new voice channel with the give name.",
	process: function(bot,msg,suffix) {
		let role = msg.guild.roles.find("name","Commander");
		if(!msg.member.roles.has(role.id)) {
			return msg.reply(":x: You do not have the permissions to use this command! You need the ``Commander`` role in order to use commands in this group.")
		} else {
			msg.channel.guild.createChannel(suffix,"voice").then(function(channel) {
//				msg.channel.sendMessage("created " + channel.id);
				msg.channel.sendMessage("", {
						embed: {
								color: 0x9933FF,
								author: {
										name: "Cyrus",
										icon_url: "http://assets.enjin.com/wall_embed_images/pic_full/1478667780_dts-640x480.jpg"
								},
								timestamp: new Date(),
								description: "created " + channel.id,
						}
				}).catch(console.error);
				console.log("created " + channel);
			}).catch(function(error){
	//			msg.channel.sendMessage("failed to create channel: " + error);
				msg.channel.sendMessage("", {
						embed: {
								color: 0x9933FF,
								author: {
										name: "Cyrus",
										icon_url: "https://img.clipartfest.com/558fc41eaa74ea1abeaa19512aacc609_png-small-medium-large-big-red-x-clip-art_300-300.png"
								},
								timestamp: new Date(),
								description: "failed to create channel: " + error,
						}
				}).catch(console.error);
			});
		}
	}
},
exports["delete"] = {
	usage: "<channel name>",
	description: "deletes the specified channel",
	process: function(bot,msg,suffix) {
		let role = msg.guild.roles.find("name","Commander");
		if(!msg.member.roles.has(role.id)) {
			return msg.reply(":x: You do not have the permissions to use this command! You need the ``Commander`` role in order to use commands in this group.")
		} else {
		var channel = bot.channels.get(suffix);
		if(suffix.startsWith('<#')){
			channel = bot.channels.get(suffix.substr(2,suffix.length-3));
		}
		if(!channel){
			var channels = msg.channel.guild.channels.findAll("name",suffix);
			if(channels.length > 1){
				var response = "Multiple channels match, please use id:";
				for(var i=0;i<channels.length;i++){
					response += channels[i] + ": " + channels[i].id;
				}
//				msg.channel.sendMessage(response);
				msg.channel.sendMessage("", {
						embed: {
								color: 0x9933FF,
								author: {
										name: "Cyrus",
										icon_url: "http://assets.enjin.com/wall_embed_images/pic_full/1478667780_dts-640x480.jpg"
								},
								timestamp: new Date(),
								description: response,
						}
				}).catch(console.error);
				return;
			}else if(channels.length == 1){
				channel = channels[0];
			} else {
//				msg.channel.sendMessage( "Couldn't find channel " + suffix + " to delete!");
				msg.channel.sendMessage("", {
						embed: {
								color: 0x9933FF,
								author: {
										name: "Cyrus",
										icon_url: "https://img.clipartfest.com/558fc41eaa74ea1abeaa19512aacc609_png-small-medium-large-big-red-x-clip-art_300-300.png"
								},
								timestamp: new Date(),
								description: "Couldn't find channel " + suffix + " to delete!",
						}
				}).catch(console.error);
				return;
			}
		}
//		msg.channel.guild.defaultChannel.sendMessage("deleting channel " + suffix + " at " +msg.author + "'s request");
		msg.channel.sendMessage("", {
				embed: {
						color: 0x9933FF,
						author: {
								name: "Cyrus",
								icon_url: "http://assets.enjin.com/wall_embed_images/pic_full/1478667780_dts-640x480.jpg"
						},
						timestamp: new Date(),
						description: "deleting channel " + suffix + " at " +msg.author + "'s request'",
				}
		}).catch(console.error);
		if(msg.channel.guild.defaultChannel != msg.channel){
	//		msg.channel.sendMessage("deleting " + channel);
			msg.channel.sendMessage("", {
					embed: {
							color: 0x9933FF,
							author: {
									name: "Cyrus",
									icon_url: "http://assets.enjin.com/wall_embed_images/pic_full/1478667780_dts-640x480.jpg"
							},
	timestamp: new Date(),
							description: "deleting " + channel,
					}
			}).catch(console.error);
		}
		channel.delete().then(function(channel){
			console.log("deleted " + suffix + " at " + msg.author + "'s request");
		}).catch(function(error){
//			msg.channel.sendMessage("couldn't delete channel: " + error);
			msg.channel.sendMessage("", {
					embed: {
							color: 0x9933FF,
							author: {
									name: "Cyrus",
									icon_url: "https://img.clipartfest.com/558fc41eaa74ea1abeaa19512aacc609_png-small-medium-large-big-red-x-clip-art_300-300.png"
							},
							timestamp: new Date(),
							description: "Couldn't delete channel: " + error,
					}
			}).catch(console.error);
			});
		}
	}
}

exports.topic = {
	usage: "[topic]",
	description: 'Sets the topic for the channel. No topic removes the topic.',
	process: function(bot,msg,suffix) {
		let role = msg.guild.roles.find("name","Commander");
		if(!msg.member.roles.has(role.id)) {
			return msg.reply(":x: You do not have the permissions to use this command! You need the ``Commander`` role in order to use commands in this group.")
		} else {
			msg.channel.setTopic(suffix);
			msg.channel.sendMessage("", {
					embed: {
							color: 0x9933FF,
							author: {
									name: "Cyrus",
									icon_url: "http://assets.enjin.com/wall_embed_images/pic_full/1478667780_dts-640x480.jpg"
							},
							timestamp: new Date(),
							description: "Set the topic to ``" + suffix + "``",
					}
			}).catch(console.error);
		}
	}
}

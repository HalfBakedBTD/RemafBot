const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	message.channel.send("I have sent you a DM.")
    return message.author.send("...")
}
module.exports.help = {
  name: "help"
}

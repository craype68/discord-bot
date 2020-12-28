const Discord = require("discord.js");
const colours = require("../colours.json");
 
module.exports.run = async (bot, message, args) => {
 
   let kickedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
   if(!kickedUser) {
       return message.channel.send("**Not found.**")
   }
   let kickReason = args.join(" ").slice(22);
   if(!message.member.hasPermission("MANAGE_MESSAGES")) {
       return message.channel.send("You don't have permission !")
   }
   if(kickedUser.hasPermission("MANAGE_MESSAGES")) {
       return message.channel.send("You don't kick this person")
   }
   let kickEmbed = new Discord.RichEmbed()
   .setDescription("-Kick-")
   .setColor(colours.red_light)
   .addField("User kicked", `${kickedUser} (ID: ${kickedUser.id})`)
   .addField("Autor of kick", `${message.author} (ID: ${message.author.id})`)
   .addField("Canal", message.channel)
   .addField("Raison", kickReason)
 
   let kickChannel = message.guild.channels.find(`name`, "tutodev-log");
   if(!kickChannel) {
       return message.channel.send("Canal 'tutodev-log' not found. Please create it")
   }
   message.guild.member(kickedUser).kick(kickReason)
   kickChannel.send(kickEmbed)
}
 
module.exports.help = {
    name: "kick"
}
 
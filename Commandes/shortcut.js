const Discord = require('discord.js')
const fs = require('fs')
const cf = require('../data/config.json')
const em = require('../data/emojis.json')
const cl = require('../data/colors.json')
const QuickChart = require('quickchart-js');


module.exports.run = async (client, message, args, guild) => {
    message.channel.send(
        new Discord.MessageEmbed()
        .setColor(cl.blue)
        .setTitle( em.utility + '__ » Raccourcis des commandes__')
        .setDescription('> `%guild`・%g \n> `%member`・%m\n> `%ping`・%p \n> `%help`・%h \n> `%counter`・ %count \n> `%chart`・%c')
    )
}
module.exports.help = {
    name: 'shortcut', 
    aliases: 'sc'
  }
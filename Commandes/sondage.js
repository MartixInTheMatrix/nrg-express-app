const Discord = require('discord.js')
const fs = require('fs')
const cf = require('../data/config.json')
const em = require('../data/emojis.json')
const cl = require('../data/colors.json')
const QuickChart = require('quickchart-js');
const { join } = require('path')

module.exports.run = async (client, message, args, guild) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")){ return message.channel.send(
        new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(em.x + ' » Erreur ')
        .setDescription('Tu dois avoir les permissions `MANAGE_MESSAGES` ou plus pour faire cette commande !')
    )}
    if(!args[0]){
        message.channel.send(
            new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(em.x + ' » Erreur ')
            .setDescription('Veuillez entrer l\'object du sondage, comme ceci: `%sondage choix1 / choix2 `')
            
        )
        return
    }
let choix1 = message.content.slice(9).split('/').shift()
let choix2 = message.content.slice(9).split('/').slice(1)

    message.delete()
    let main = await message.channel.send(
        new Discord.MessageEmbed()
        .setColor(cl.invisible)
        .setTitle('Veuillez à présent entrer le salon dans lequel le sondage sera effectué, exemple: `#general` ou `here` si vous le voulez dans ce salon')
    )
    var filter = m => m.author.id === message.author.id;

    await message.channel.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: 30000}).then(async collected => {
            var sondech = collected.first().mentions.channels.first() || message.channel
                       await main.edit(new Discord.MessageEmbed()
                       .setColor(cl.invisible)
                       .setTitle('Veuillez entrer un emoji dans ce salon pour mettre le `premier` choix du sondage'))
                       collected.first().delete()

                       await message.channel.awaitMessages(m => m.author.id == message.author.id,
                       { max: 1, time: 30000 }).then(async collected => {
                               const em1 = collected.first().content
                               await main.edit(new Discord.MessageEmbed()
                               .setColor(cl.invisible)
                               .setTitle('Veuillez entrer un emoji dans ce salon pour mettre le `deuxième` choix du sondage'))   
                                collected.first().delete()
                               await message.channel.awaitMessages(m => m.author.id == message.author.id,
                               { max: 1, time: 30000 }).then(async collected => {
                                const em2 = collected.first().content
                                collected.first().delete()
                                await main.delete()
                                       let sonde = await sondech.send(
                                        new Discord.MessageEmbed()
                                        .setColor(cl.blue)
                                        .setTitle('__' + em.chart + ' » Sondage__')
                                        .setDescription(em1+" `"+choix1  +'` ou ' + em2 +' `'+ choix2 + "`" )
                                    )
                                await sonde.react(em1)
                                await sonde.react(em2)
                                    })
                            })
                        })

}
module.exports.help = {
    name: 'sondage'
  }
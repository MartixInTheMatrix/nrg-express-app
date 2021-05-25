const Discord = require('discord.js')
const fs = require('fs')
const cf = require('../data/config.json')
const em = require('../data/emojis.json')
const cl = require('../data/colors.json')
const QuickChart = require('quickchart-js');
const { join } = require('path')
const ms = require('ms')


module.exports.run = async (client, message, guild) => {
    const args = message.content.split(' ').slice(1);    
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

let arg = args.slice().join(" ")


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

                                await main.delete()
                                       let sonde = await sondech.send(
                                        new Discord.MessageEmbed()
                                        .setColor(cl.blue)
                                        .setTitle('__' + em.stats + ' » Choix__')
                                        .setDescription(arg)
                                    )
                                await sonde.react(em.check)
                                await sonde.react(em.x)


setTimeout(()=> {
    const tmembres  = message.guild.members.cache.filter(member => member.user).size
    const vn = sonde.reactions.cache.filter(emoji=> emoji.name === em.x).size -1
    const vp = sonde.reactions.cache.filter(emoji=> emoji.name === em.check).size -1
    const vt = sonde.reactions.cache.size -1
    const getpercentage = (vt  * 100) /tmembres + '%'
    sondech.send(
        new Discord.MessageEmbed()
        .setColor(cl.blue)
        .setTitle('Résultats du sondage')
        .setDescription(`**${em.chart} > Réactions totales » ${vt}**  \n> ** Pourcentage d'activité du serveur »** ${getpercentage} \n`) 
    )
}, ms('1d'))
        })


    
    }
        

module.exports.help = {
    name: 'choix'
  }

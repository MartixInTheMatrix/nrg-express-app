const Discord = require('discord.js')
const fs = require('fs')
const cf = require('../data/config.json')
const em = require('../data/emojis.json')
const cl = require('../data/colors.json')

module.exports.run = async (client, message, args) => {
    message.channel.send(
        new Discord.MessageEmbed()
        .setColor(cl.blue)
        .setAuthor(' » Menu d\'aide de NRG' , client.user.displayAvatarURL())
        .setTitle('__Prefixe :__  `%`')
        .setDescription(`**${em.stats} » Statistiques Générales**\n> \`guild\`・ Informations et statistiques sur le serveur \n> \`member\`・ Profil et statistiques sur l'utilisateur \n> \`top\`・ Leaderboard des serveurs par les messages \n> \`invites\`・ Informations sur les invitations du serveur\n\n **${em.chart}» Statistiques avancées** \n> \`eval\`・ Teste l'égilibilité du serveur au discord partner program \n> \`bnd\`・ Historique de bannissements \n> \`count\`・ Système de statistiques en salon \n\n **${em.members}» Communauté** \n> \`sondage\`・ Fait un sondage analysé par le bot \n> \`choix\`・ Fait un sondage à double choix analysé par le bot\n\n**${em.reglages}» Bot**\n> \`NRG\`・ Informations sur le bot \n> \`ping\`・ Informations sur le status réseau du bot \n> \`shortcut\`・ Liste des raccourcis des commandes \n\n **Je t'invite à regarder ces liens :**\n [Invitation](https://discord.com/api/oauth2/authorize?client_id=814805186181857290&permissions=8&scope=bot)・[Support](https://discord.gg/PNbsQWQpAA)`)
        .setFooter(cf.footer)
        .setImage('https://cdn.discordapp.com/attachments/732540419673686017/818898415177826324/NRG.gif')
        )
}

module.exports.help = {
    name: 'help',
    aliases:"h"
  }
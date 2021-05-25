const Discord = require('discord.js')
const fs = require('fs')
const cf = require('../data/config.json')
const em = require('../data/emojis.json')
const cl = require('../data/colors.json')
const { Menu } = require('discord.js-menu')

module.exports.run = async (client, message, args, guild) => {
    message.guild.fetchInvites()
        .then

        (invites => {
            let guildInvites = invites.array()
            let desc = ''
            let number = 1

            for (var i = 0; i < guildInvites.length; i++) {
                var invite = guildInvites[i];
                if (invite['uses'] >= 1) {
                    desc = desc + `**#${number}** **Inviteur**・ <@${invite['inviter'].id}> - **Uses**・${invite['uses']} - **code**・${invite['code']}\n`
                number = number + 1
                }


            }

                message.channel.send(
                    new Discord.MessageEmbed()
                        .setAuthor('Invitations du serveur', message.guild.iconURL())
                        .setDescription(desc)
                        .setColor(cl.blue)
                );

        })
}
module.exports.help = {
    name: 'invites',
}
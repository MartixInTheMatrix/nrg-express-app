const Discord = require('discord.js')
const fs = require('fs')
const cf = require('../data/config.json')
const em = require('../data/emojis.json')
const cl = require('../data/colors.json')
var mysql = require('mysql')
var con = mysql.createConnection({
    host: "65.21.30.118",
    port:"3306",
    user: "u2_Rpm8aIBLPR",
    password: "wawKuW.!q!4.924Pgt9qPWw@",
    database: "s2_stats"
});

module.exports.run = async (client, message, args, guild) => {
    let top = ''
    let number = 1
    con.query(`SELECT * FROM gxp `, (err, res)=> {
        if (err) throw err;

        res.forEach(g => {
            top = top + `\n> \`#${number}\` **${client.guilds.cache.get(g.id).name}** - ${g.gxp} messages`
            number ++;
        })
            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor(cl.invisible)
                    .setAuthor('Leaderboard des serveurs', client.user.displayAvatarURL())
                    .setDescription(top)

        )


    })
}
module.exports.help = {
    name: 'top'
}
const Discord = require('discord.js')
const fs = require('fs')
const cf = require('../data/config.json')
const em = require('../data/emojis.json')
const cl = require('../data/colors.json')
const QuickChart = require('quickchart-js');
const os = require('os')

module.exports.run = async (client, message, args, guild, channel) => {
    const serveursBar = new QuickChart()
    serveursBar.setConfig(
        {
            type: 'progressBar',
            data: {
              datasets: [{
                data: [client.guilds.cache.size],
                "backgroundColor": [
                    cl.blue,
                    "rgba(255, 255, 255, 0.1)"
                  ],

              }]
            },
            plugins: {
                backgroundImageUrl: 'https://cdn.discordapp.com/attachments/816650927254536214/816756917513748490/image0.png',
              },
              options:{
                  rectangle:{
                    height: 30,
                    color:"rgba(255, 255, 255, 0.1)",
                  }
              }
          }
    )
    var usedMemory = os.totalmem() -os.freemem(), totalMemory = os.totalmem();

    var  getpercentage = ((usedMemory/totalMemory) * 100).toFixed(2) + '%'

    usedMemory = (usedMemory/ Math.pow(1024, 3)).toFixed(2);
    totalMemory = (totalMemory/ Math.pow(1024, 3)).toFixed(2);
    guilds = [];
    client.guilds.cache.forEach(g => {
        guilds.push(g.name)
    });
    message.channel.send(
        new Discord.MessageEmbed()
        .setColor(cl.blue)
        .setAuthor(' » NRG#7617', client.user.displayAvatarURL())
        .setDescription(`**Voici les informations du bot :**
                
        ⚙️  » **Informations Système**

        > 💽 » \`Os\`・ MacOSX
        > 💿 » \`RAM Totale\`・ ${totalMemory} GB
        > 🗑️ » \`RAM Utilisée\`・ ${usedMemory} GB *(${getpercentage})*

        🤖  » **Informations sur le bot**

        > ${em.owner} » \`Créateur\`・ <@626431238491734026>
        > ${em.world} » \`Serveurs\`・ ${client.guilds.cache.size}
        > ${em.members} » \`Utilisateurs\`・ ${client.users.cache.size}
        > ${em.hastag} » \`Salons\`・ ${client.channels.cache.size}

        ${em.link}  » **Liens**

        > ${em.link} » \`Invitation\`・ [Clique ici](https://discord.com/api/oauth2/authorize?client_id=814805186181857290&permissions=8&scope=bot)
        > ${em.help} » \`Serveur support:\`・ [Clique pour rejoindre](https://discord.gg/PNbsQWQpAA)
         

        **» ${client.guilds.cache.size} / 100 serveurs**`)
        .setImage(serveursBar.getUrl())
        .setFooter(cf.footer)
    )
}
module.exports.help = {
    name: 'NRG'
  }
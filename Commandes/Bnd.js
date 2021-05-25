const Discord = require('discord.js')
const fs = require('fs')
const cf = require('../data/config.json')
const em = require('../data/emojis.json')
const cl = require('../data/colors.json')
const QuickChart = require('quickchart-js');


module.exports.run = async (client, message, args, guild) => {
  if(!message.member.hasPermission("ADMINISTRATOR")){ return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(em.x + ' » Erreur ')
    .setDescription('Tu dois avoir les permissions `ADMINISTRATOR` pour faire cette commande !')
)}


console.log(message.guild.members.cache.size)
  message.guild.fetchBans()
  .then(banned => {
      let list = banned.map(ban => ban.user.tag).join('\n> ・');
      let nbBnds = banned.size
      if (list.length >= 1950) list = `${list.slice(0, 1948)}...`;
    const getpercentage = ((nbBnds / message.guild.members.cache.size) * 100).toFixed(0) + '%'
      const Bnds = new QuickChart();
      Bnds.setConfig({
              "type": "doughnut",
              "data": {
                "datasets": [{
                  "label": "foo",
                  "data": [nbBnds, message.guild.members.cache.size],
                  "backgroundColor": [
                    "rgb(75, 192, 192)",
                    "rgba(255, 255, 255, 0.4)"
                  ],
                  "textcolor":[cl.invisible,cl.invisible],
                  "borderWidth": 0,
                }] 
              },
              "options": {
                rotation: Math.PI,
                circumference: Math.PI,
                cutoutPercentage: 75,
                plugins: {
                  datalabels: { display: false },
                  doughnutlabel: {
                    labels: [
                      {
                        text: "Membres bannis",
                        postiton:"top",
                        fontColor: "#fff",
                        font: {
                        size: 25
                        },
                      },
                      {
                        text: getpercentage,
                        fontColor:"#fff",
                        font: {
                          size: 40
                        },
                      },
                    ]},
                  }
                },
                plugins: {
                  backgroundImageUrl: 'https://cdn.discordapp.com/attachments/816650927254536214/816756917513748490/image0.png',
                }	
              }   
      )
      message.channel.send(
        new Discord.MessageEmbed()
        .setColor(cl.blue)
        .setAuthor(' » Informations sur les bans dans le serveur', message.guild.iconURL())
        .setDescription(`> ${em.mod} **Nombre de bans** » ${banned.size} \n\n ${em.liste} » **__Qui ?__** \n> ・${list}`)
        .setImage(Bnds.getUrl())
      )
  })
  .catch(console.error);
}
module.exports.help = {
    name: 'bnd'
  }
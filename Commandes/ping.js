const Discord = require('discord.js')
const fs = require('fs')
const cf = require('../data/config.json')
const em = require('../data/emojis.json')
const cl = require('../data/colors.json')
const QuickChart = require('quickchart-js');
const os = require('os')

module.exports.run = async (client, message, args, guild) => {
  let msg = await message.channel.send('__Test de latence...__')
  var usedMemory = os.totalmem() -os.freemem(), totalMemory = os.totalmem();

  var  getpercentage = ((usedMemory/totalMemory) * 100).toFixed(2) + '%'

  usedMemory = (usedMemory/ Math.pow(1024, 3)).toFixed(2);
  totalMemory = (totalMemory/ Math.pow(1024, 3)).toFixed(2);
    const UsedMem = new QuickChart();
    UsedMem.setConfig({
            "type": "doughnut",
            "data": {
              "datasets": [{
                "label": "foo",
                "data": [usedMemory, totalMemory],
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
                      text: "Mémoire utilisée",
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

    await msg.edit(
        new Discord.MessageEmbed()
        .setColor(cl.invisible)
        .setAuthor(message.author.tag, message.author.displayAvatarURL({format: 'png', dynamic: 'true'}))
        .setDescription('**Latence CLIENT** '+ Math.round(client.ws.ping)+'ms'+'\n\n **En ligne depuis** '+msToTime(client.uptime)+  '\n\n**Mémoire utilisée :**') 
        .setImage(UsedMem.getUrl())
    )
    function msToTime(ms){
      days = Math.floor(ms / 86400000); // 24*60*60*1000
      daysms = ms % 86400000; // 24*60*60*1000
      hours = Math.floor(daysms / 3600000); // 60*60*1000
      hoursms = ms % 3600000; // 60*60*1000
      minutes = Math.floor(hoursms / 60000); // 60*1000
      minutesms = ms % 60000; // 60*1000
      sec = Math.floor(minutesms / 1000);
    
      let str = "";
      if (days) str = str + days + "d";
      if (hours) str = str + hours + "h";
      if (minutes) str = str + minutes + "m";
      if (sec) str = str + sec + "s";
    
      return str;
    }
}
module.exports.help = {
    name: 'ping',
    aliases: "p"
  }
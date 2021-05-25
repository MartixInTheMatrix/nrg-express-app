const Discord = require('discord.js')
const fs = require('fs')
const cf = require('../data/config.json')
const em = require('../data/emojis.json')
const cl = require('../data/colors.json')
const QuickChart = require('quickchart-js');
var mysql = require('mysql')
var con = mysql.createConnection({
  host: "65.21.30.118",
  port:"3306",
  user: "u2_Rpm8aIBLPR",
  password: "wawKuW.!q!4.924Pgt9qPWw@",
  database: "s2_stats"
});



module.exports.run = async (client, message, args, guild) => {
    if(!message.member.hasPermission("ADMINISTRATOR")){ return message.channel.send(
        new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(em.x + ' » Erreur ')
        .setDescription('Tu dois avoir les permissions `ADMINISTRATOR` pour faire cette commande !')
    )}
        if(!args[0]){
            message.channel.send(
                new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle(em.x + ' » Erreur')
                .setDescription('Veuillez entrer un argument ensuite : soit `%count on` ou `%count off`')
            )
        }
        if(args[0] === 'on'){
          let everyoneid = message.guild.roles.cache.find((x)=> x.name === '@everyone').id
          if(!message.guild.channels.cache.find((x)=> x.name === '╰╮Counter╰╮')){
            let main = await message.guild.channels.create('╰╮Counter╰╮', {
                type: 'category',
                permissionsOverwrites: [{
                  id: everyoneid,
                  deny: ['CONNECT'],
                }]
              })

              await message.guild.channels.create('Membres » '+ message.guild.members.cache.filter(member => member.user).size, {
                  type: 'voice',
                  parent: main,
                  permissionsOverwrites: [{
                    id: everyoneid,
                    deny: 'CONNECT',
                  }]  
              })
              await message.guild.channels.create('Bots » '+ message.guild.members.cache.filter(member => member.user.bot).size, {
                type: 'voice',
                parent: main,
                permissionsOverwrites: [{
                  id: everyoneid,
                  deny: 'CONNECT',
                }]
            })
            await message.guild.channels.create('En ligne » '+ message.guild.members.cache.filter(member => member.presence.status === 'online' && 'dnd').size, {
                type: 'voice',
                parent: main,
                permissionsOverwrites: [{
                  id: everyoneid,
                  deny: 'CONNECT',
                }]
            })
            main.edit({
              position: main.position - 3
          })
            message.channel.send(
                new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle(em.check + ' » Succès')
                .setDescription('Le counter a été activé !')
            )

      con.query(`SELECT * FROM counters WHERE guildid = '${message.guild.id}'`, (err, rows)=> {
      if(err)throw err;
      let sql;
        sql = `INSERT INTO counters (guildid, mchid, bchid, onchid, state) VALUES ('${message.guild.id}','${message.guild.channels.cache.find((x) => x.name === 'Membres » '+ message.guild.members.cache.filter(member => member.user).size).id}', '${message.guild.channels.cache.find((x) => x.name === 'Bots » '+ message.guild.members.cache.filter(member => member.user.bot).size).id}', '${message.guild.channels.cache.find((x) => x.name ==='En ligne » '+ message.guild.members.cache.filter(member => member.presence.status === 'online' && 'dnd').size).id}', 'on')`;
      con.query(sql)
    })

          }else {
            let main = await  message.guild.channels.cache.find((x)=> x.name === '╰╮Counter╰╮')
            await message.guild.channels.create('Membres » '+ message.guild.members.cache.filter(member => member.user).size, {
                type: 'voice',
                parent: main,
                permissionsOverwrites: [{
                  name: '@everyone',
                  deny: ['CONNECT'],
                }]
            })
            await message.guild.channels.create('Bots » '+ message.guild.members.cache.filter(member => member.user.bot).size, {
              type: 'voice',
              parent: main,
              permissionsOverwrites: [{
                name: '@everyone',
                deny: ['CONNECT'],
              }]
          })
          await message.guild.channels.create('En ligne » '+ message.guild.members.cache.filter(member => member.presence.status === 'online' && 'dnd').size, {
              type: 'voice',
              parent: main,
              permissionsOverwrites: [{
                name: '@everyone',
                deny: ['CONNECT'],
              }]
          })
          message.channel.send(
            new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle(em.check + ' » Succès')
            .setDescription('Le counter a été activé !')
        )
        con.query(`SELECT * FROM counters WHERE guildid = '${message.guild.id}'`, (err, rows)=> {
          if(err)throw err;
          let sql;
            sql = `INSERT INTO counters (guildid, mchid, bchid, onchid, state) VALUES ('${message.guild.id}','${message.guild.channels.cache.find((x) => x.name === 'Membres » '+ message.guild.members.cache.filter(member => member.user).size).id}', '${message.guild.channels.cache.find((x) => x.name === 'Bots » '+ message.guild.members.cache.filter(member => member.user.bot).size).id}', '${message.guild.channels.cache.find((x) => x.name ==='En ligne » '+ message.guild.members.cache.filter(member => member.presence.status === 'online' && 'dnd').size).id}', 'on')`;
          con.query(sql)
        })
      }
        }else if(args[0] === 'off'){
          
            let main = message.guild.channels.cache.find((x)=> x.name === '╰╮Counter╰╮')
            con.query(`SELECT * FROM counters WHERE guildid = '${message.guild.id}'`, (err, rows)=> {
              if(err) throw err;
              if(!rows)return message.channel.send('Vous n\'avez jamais activé le counter, faites `%count on` pour l\'activer')
              



              let main = message.guild.channels.cache.find((x)=> x.name === '╰╮Counter╰╮').delete()
              let mch = message.guild.channels.cache.get(rows[0].mchid).delete()
              let bch = message.guild.channels.cache.get(rows[0].bchid).delete()
              let onch = message.guild.channels.cache.get(rows[0].onchid).delete()

              message.channel.send(
                new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle(em.check + ' » Succès')
                .setDescription('Le counter a été désactivé !')
            )
            let sql;
            sql = `DELETE FROM counters WHERE guildid = '${message.guild.id}'`
            con.query(sql)
            })
            

        }
}
module.exports.help = {
    name: 'count',
    aliases:'counter'
  }

  const Discord = require('discord.js')
  const fs = require('fs')
  const cf = require('../data/config.json')
  const em = require('../data/emojis.json')
  const cl = require('../data/colors.json')
  const QuickChart = require('quickchart-js');
  const { Menu } = require('discord.js-menu')
  const { setTimeout } = require('timers')
  
  
  
  module.exports.run = async (client, message, args, con) => {
  const dateObj = new Date();
  const month = String(dateObj.getMonth()).padStart(2, '0')
  const day = String(dateObj.getDate()).padStart(2, '0');
  const year = dateObj.getFullYear();
  const today = day  + '/' + month  +  '/' + year;
    const getPassedDay1 = String(dateObj.getDate() -1).padStart(2, '0') +'/'+ month + '/'+ year
    const getPassedDay2 = String(dateObj.getDate() -2).padStart(2, '0') +'/'+ month + '/'+ year
    const getPassedDay3 = String(dateObj.getDate() -3).padStart(2, '0') +'/'+ month + '/'+ year
    const getPassedDay4 = String(dateObj.getDate() -4).padStart(2, '0') +'/'+ month + '/'+ year
    const getPassedDay5 = String(dateObj.getDate() -5).padStart(2, '0') +'/'+ month + '/'+ year
    const getPassedDay6 = String(dateObj.getDate() -6).padStart(2, '0') +'/'+ month + '/'+ year
    const getPassedDay7 = String(dateObj.getDate() -6).padStart(2, '0') +'/'+ month + '/'+ year

    let membre = message.mentions.members.first()|| message.member

  con.query(`SELECT * FROM mxp WHERE id = '${membre.id}'`, (err, mxp)=> {
    if(err) throw err;
    if(mxp.length < 1){
      sql = `INSERT INTO mxp (id, mxp) VALUES ('${membre.id}',${0})`;
  
      con.query(sql)
    }
  
    con.query(`SELECT * FROM utm WHERE compiled = '${today}.${membre.id}'`, (err, utxp0)=> {
      if(err) throw err;
      if(utxp0.length < 1){
        sql = `INSERT INTO utm (compiled, utxp) VALUES ('${today}.${membre.id}',${0})`;
  
        con.query(sql)
      }
      con.query(`SELECT * FROM utm WHERE compiled = '${getPassedDay1}.${membre.id}'`, (err, utxp1)=> {
        if(err) throw err;
        if(utxp1.length < 1){
          sql = `INSERT INTO utm (compiled, utxp) VALUES ('${getPassedDay1}.${membre.id}',${0})`;
    
          con.query(sql)
        }
        con.query(`SELECT * FROM utm WHERE compiled = '${getPassedDay2}.${membre.id}'`, (err, utxp2)=> {
          if(err) throw err;
          if(utxp2.length < 1){
            sql = `INSERT INTO utm (compiled, utxp) VALUES ('${getPassedDay2}.${membre.id}',${0})`;
      
            con.query(sql)
          }
          con.query(`SELECT * FROM utm WHERE compiled = '${getPassedDay3}.${membre.id}'`, (err, utxp3)=> {
            if(err) throw err;
            if(utxp3.length < 1){
              sql = `INSERT INTO utm (compiled, utxp) VALUES ('${getPassedDay3}.${membre.id}',${0})`;
        
              con.query(sql)
            }
            con.query(`SELECT * FROM utm WHERE compiled = '${getPassedDay4}.${membre.id}'`, (err, utxp4)=> {
              if(err) throw err;
              if(utxp4.length < 1){
                sql = `INSERT INTO utm (compiled, utxp) VALUES ('${getPassedDay4}.${membre.id}',${0})`;
          
                con.query(sql)
              }
              con.query(`SELECT * FROM utm WHERE compiled = '${getPassedDay5}.${membre.id}'`, (err, utxp5)=> {
                if(err) throw err;
                if(utxp5.length < 1){
                  sql = `INSERT INTO utm (compiled, utxp) VALUES ('${getPassedDay5}.${membre.id}',${0})`;
            
                  con.query(sql)
                }
                con.query(`SELECT * FROM utm WHERE compiled = '${getPassedDay6}.${membre.id}'`, (err, utxp6)=> {
                  if(err) throw err;
                  if(utxp6.length < 1){
                    sql = `INSERT INTO utm (compiled, utxp) VALUES ('${getPassedDay6}.${membre.id}',${0})`;
              
                    con.query(sql)
                  }
                  con.query(`SELECT * FROM utm WHERE compiled = '${getPassedDay7}.${membre.id}'`, (err, utxp7)=> {
                    if(err) throw err;
                    if(utxp7.length < 1){
                      sql = `INSERT INTO utm (compiled, utxp) VALUES ('${getPassedDay7}.${membre.id}',${0})`;
                
                      con.query(sql)
                    }
  
                                  })
                                })
                                })
                                })
                                })
                                })
                                })
                                })
                                })
                                   
                        let load = await message.channel.send('Récupération des données...')
  setTimeout(async ()=>{
    con.query(`SELECT * FROM mxp WHERE id = '${membre.id}'`, (err, mxp)=> {
      if(err) throw err;
      if(mxp.length < 1){
        sql = `INSERT INTO mxp (id, mxp) VALUES ('${membre.id}',${0})`;
    
        con.query(sql)
      }
    
      con.query(`SELECT * FROM utm WHERE compiled = '${today}.${membre.id}'`, (err, utxp0)=> {
        if(err) throw err;
        if(utxp0.length < 1){
          sql = `INSERT INTO utm (compiled, utxp) VALUES ('${today}.${membre.id}',${0})`;
    
          con.query(sql)
        }
        con.query(`SELECT * FROM utm WHERE compiled = '${getPassedDay1}.${membre.id}'`, (err, utxp1)=> {
          if(err) throw err;
          if(utxp1.length < 1){
            sql = `INSERT INTO utm (compiled, utxp) VALUES ('${getPassedDay1}.${membre.id}',${0})`;
      
            con.query(sql)
          }
          con.query(`SELECT * FROM utm WHERE compiled = '${getPassedDay2}.${membre.id}'`, (err, utxp2)=> {
            if(err) throw err;
            if(utxp2.length < 1){
              sql = `INSERT INTO utm (compiled, utxp) VALUES ('${getPassedDay2}.${membre.id}',${0})`;
        
              con.query(sql)
            }
            con.query(`SELECT * FROM utm WHERE compiled = '${getPassedDay3}.${membre.id}'`, (err, utxp3)=> {
              if(err) throw err;
              if(utxp3.length < 1){
                sql = `INSERT INTO utm (compiled, utxp) VALUES ('${getPassedDay3}.${membre.id}',${0})`;
          
                con.query(sql)
              }
              con.query(`SELECT * FROM utm WHERE compiled = '${getPassedDay4}.${membre.id}'`, (err, utxp4)=> {
                if(err) throw err;
                if(utxp4.length < 1){
                  sql = `INSERT INTO utm (compiled, utxp) VALUES ('${getPassedDay4}.${membre.id}',${0})`;
            
                  con.query(sql)
                }
                con.query(`SELECT * FROM utm WHERE compiled = '${getPassedDay5}.${membre.id}'`, (err, utxp5)=> {
                  if(err) throw err;
                  if(utxp5.length < 1){
                    sql = `INSERT INTO utm (compiled, utxp) VALUES ('${getPassedDay5}.${membre.id}',${0})`;
              
                    con.query(sql)
                  }
                  con.query(`SELECT * FROM utm WHERE compiled = '${getPassedDay6}.${membre.id}'`, (err, utxp6)=> {
                    if(err) throw err;
                    if(utxp6.length < 1){
                      sql = `INSERT INTO utm (compiled, utxp) VALUES ('${getPassedDay6}.${membre.id}',${0})`;
                
                      con.query(sql)
                    }
                    con.query(`SELECT * FROM utm WHERE compiled = '${getPassedDay7}.${membre.id}'`, async(err, utxp7)=> {
                      if(err) throw err;
                      if(utxp7.length < 1){
                        sql = `INSERT INTO utm (compiled, utxp) VALUES ('${getPassedDay7}.${membre.id}',${0})`;
                  
                        con.query(sql)
                      }
  await load.delete()
  
      const messagesTemps = new QuickChart();
  messagesTemps.setConfig(
      {
        type:"bar",
        data: {
          fontColor: 'rgb(255, 255, 255)',
        labels: ['1 sem','6j','5j','4j','3j','2j', 'Hier','Auj'],
          datasets: [
            
          {
            "type": "line",
            "label": "Messages du membre",
            "backgroundColor": "rgba(75, 192, 192, 0.5)",
            "borderColor": "rgb(75, 192, 192)",
            "fill": false,
            "data": [
              utxp7[0].utxp,
              utxp6[0].utxp,
              utxp5[0].utxp,
              utxp4[0].utxp,
              utxp3[0].utxp,
              utxp2[0].utxp,
              utxp1[0].utxp,
              utxp0[0].utxp
            ]
          }
        ],
        },
        options: {
          responsive: true,
          legend: {
            position: 'top',
            fontColor: 'rgb(255, 255, 255)'
          },
          title: {
            display: true,
            text: 'Messages',
            fontColor: 'rgb(255, 255, 255)'
          },
          plugins: {
            backgroundImageUrl: 'https://cdn.discordapp.com/attachments/816650927254536214/816756917513748490/image0.png',
          }	
        },
        
      }
    )
    let status;
                          switch (membre.presence.status) {
                              case "online":
                                  status = em.online + " **Status »** En ligne";
                                  break;
                              case "dnd":
                                  status = em.dnd + " **Status »** Ne pas déranger";
                                  break;
                              case "idle":
                                  status = em.idle + " **Status »** Mode Nuit";
                                  break;
                              case "offline":
                                  status = em.offline + " **Status »** Hors Ligne";
                                  break;
                          }
                        if(!membre){
                          message.channel.send(
                            new Discord.MessageEmbed()
                            .setColor('RED')
                            .setAuthor(em.x + ' » Erreur')
                            .setDescription('Je n\'arrive pas à trouver l\'utilisateur ou à lancer la commande.')
                            .setFooter('si le probleme persciste, veuillez contacter Martix#1227')
                          )
                        }

    message.channel.send(
      new Discord.MessageEmbed()
      .setColor(cl.blue)
      .setAuthor(' » Informations sur le membre '+ membre.displayName, membre.user.displayAvatarURL())
      .setDescription(`**__Utilisateur__** \n> **${em.members} Pseudo »** ${membre.displayName}\n> **${em.id} ID »** ${membre.user.id}\n> **${em.hastag} Tag »** #${membre.user.discriminator}\n> ${status}\n> **${em.time} Compte crée le »** ${membre.user.createdAt.toLocaleDateString("fr")}\n\n **__Par rapport au serveur__** \n> **${em.time} A rejoint le »** ${membre.joinedAt.toLocaleDateString("fr")}\n> ** ${em.role} Rôles » **${membre.roles.cache.map(role => role.toString()).join(" ,")}`)
      .setFooter(cf.footer)
    )
     
    message.channel.send(
      new Discord.MessageEmbed()
      .setColor(cl.blue)
      .setTitle('**' + em.chart + ' » Statistiques sur les messages du membre**')
      .setDescription(`__ **${em.send} Nombre de messages envoyés »** __ \n> ・**Aujourd'hui »** ${utxp0[0].utxp}\n> ・**Hier »**  ${utxp1[0].utxp}\n> ・**Il y a 3 jours »** ${utxp3[0].utxp}\n> ・**La semaine dernière »** ${utxp7[0].utxp} \n> ・**Total »** ` + mxp[0].mxp)
      .setImage(messagesTemps.getUrl())
    )
  
  })
  
  })
  })
  })
  })
  })
  })
  })
  })
  }, 2000)
  }
  module.exports.help = {
      name: 'member',
      aliases:'m'
    }
  


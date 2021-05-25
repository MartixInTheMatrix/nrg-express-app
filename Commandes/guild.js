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

const membres  = message.guild.members.cache.filter(member => !member.user.bot).size - message.guild.members.cache.filter(member => member.hasPermission("ADMINISTRATOR") && !member.user.bot).size
con.query(`SELECT * FROM gxp WHERE id = '${message.guild.id}'`, (err, gxp)=> {
  if(err) throw err;
  if(gxp.length < 1){
    sql = `INSERT INTO gxp (id, gxp) VALUES ('${message.guild.id}',${0})`;

    con.query(sql)
  }

  con.query(`SELECT * FROM gtm WHERE compiled = '${today}.${message.guild.id}'`, (err, gtxp0)=> {
    if(err) throw err;
    if(gtxp0.length < 1){
      sql = `INSERT INTO gtm (compiled, gtxp) VALUES ('${today}.${message.guild.id}',${0})`;

      con.query(sql)
    }
    con.query(`SELECT * FROM gtm WHERE compiled = '${getPassedDay1}.${message.guild.id}'`, (err, gtxp1)=> {
      if(err) throw err;
      if(gtxp1.length < 1){
        sql = `INSERT INTO gtm (compiled, gtxp) VALUES ('${getPassedDay1}.${message.guild.id}',${0})`;
  
        con.query(sql)
      }
      con.query(`SELECT * FROM gtm WHERE compiled = '${getPassedDay2}.${message.guild.id}'`, (err, gtxp2)=> {
        if(err) throw err;
        if(gtxp2.length < 1){
          sql = `INSERT INTO gtm (compiled, gtxp) VALUES ('${getPassedDay2}.${message.guild.id}',${0})`;
    
          con.query(sql)
        }
        con.query(`SELECT * FROM gtm WHERE compiled = '${getPassedDay3}.${message.guild.id}'`, (err, gtxp3)=> {
          if(err) throw err;
          if(gtxp3.length < 1){
            sql = `INSERT INTO gtm (compiled, gtxp) VALUES ('${getPassedDay3}.${message.guild.id}',${0})`;
      
            con.query(sql)
          }
          con.query(`SELECT * FROM gtm WHERE compiled = '${getPassedDay4}.${message.guild.id}'`, (err, gtxp4)=> {
            if(err) throw err;
            if(gtxp4.length < 1){
              sql = `INSERT INTO gtm (compiled, gtxp) VALUES ('${getPassedDay4}.${message.guild.id}',${0})`;
        
              con.query(sql)
            }
            con.query(`SELECT * FROM gtm WHERE compiled = '${getPassedDay5}.${message.guild.id}'`, (err, gtxp5)=> {
              if(err) throw err;
              if(gtxp5.length < 1){
                sql = `INSERT INTO gtm (compiled, gtxp) VALUES ('${getPassedDay5}.${message.guild.id}',${0})`;
          
                con.query(sql)
              }
              con.query(`SELECT * FROM gtm WHERE compiled = '${getPassedDay6}.${message.guild.id}'`, (err, gtxp6)=> {
                if(err) throw err;
                if(gtxp6.length < 1){
                  sql = `INSERT INTO gtm (compiled, gtxp) VALUES ('${getPassedDay6}.${message.guild.id}',${0})`;
            
                  con.query(sql)
                }
                con.query(`SELECT * FROM gtm WHERE compiled = '${getPassedDay7}.${message.guild.id}'`, (err, gtxp7)=> {
                  if(err) throw err;
                  if(gtxp7.length < 1){
                    sql = `INSERT INTO gtm (compiled, gtxp) VALUES ('${getPassedDay7}.${message.guild.id}',${0})`;
              
                    con.query(sql)
                  }
                  con.query(`SELECT * FROM etm WHERE compiled = '${today}.${message.guild.id}'`, (err, sm0)=> {
                    if(err) throw err;
                    if(sm0.length < 1){
                      sql = `INSERT INTO etm (compiled, sm) VALUES ('${today}.${message.guild.id}',${0})`;
                
                      con.query(sql)
                    }
                    con.query(`SELECT * FROM etm WHERE compiled = '${getPassedDay1}.${message.guild.id}'`, (err, sm1)=> {
                      if(err) throw err;
                      if(sm1.length < 1){
                        sql = `INSERT INTO etm (compiled, sm) VALUES ('${getPassedDay1}.${message.guild.id}',${0})`;
                  
                        con.query(sql)
                      }
                      con.query(`SELECT * FROM etm WHERE compiled = '${getPassedDay2}.${message.guild.id}'`, (err, sm2)=> {
                        if(err) throw err;
                        if(sm2.length < 1){
                          sql = `INSERT INTO etm (compiled, sm) VALUES ('${getPassedDay2}.${message.guild.id}',${0})`;
                    
                          con.query(sql)
                        }
                        con.query(`SELECT * FROM etm WHERE compiled = '${getPassedDay3}.${message.guild.id}'`, (err, sm3)=> {
                          if(err) throw err;
                          if(sm3.length < 1){
                            sql = `INSERT INTO etm (compiled, sm) VALUES ('${getPassedDay3}.${message.guild.id}',${0})`;
                      
                            con.query(sql)
                          }
                          con.query(`SELECT * FROM etm WHERE compiled = '${getPassedDay4}.${message.guild.id}'`, (err, sm4)=> {
                            if(err) throw err;
                            if(sm4.length < 1){
                              sql = `INSERT INTO etm (compiled, sm) VALUES ('${getPassedDay4}.${message.guild.id}',${0})`;
                        
                              con.query(sql)
                            }
                            con.query(`SELECT * FROM etm WHERE compiled = '${getPassedDay5}.${message.guild.id}'`, (err, sm5)=> {
                              if(err) throw err;
                              if(sm5.length < 1){
                                sql = `INSERT INTO etm (compiled, sm) VALUES ('${getPassedDay5}.${message.guild.id}',${0})`;
                          
                                con.query(sql)
                              }
                              con.query(`SELECT * FROM etm WHERE compiled = '${getPassedDay6}.${message.guild.id}'`, (err, sm6)=> {
                                if(err) throw err;
                                if(sm6.length < 1){
                                  sql = `INSERT INTO etm (compiled, sm) VALUES ('${getPassedDay6}.${message.guild.id}',${0})`;
                            
                                  con.query(sql)
                                }
                                con.query(`SELECT * FROM etm WHERE compiled = '${getPassedDay7}.${message.guild.id}'`, (err, sm7)=> {
                                  if(err) throw err;
                                  if(sm7.length < 1){
                                    sql = `INSERT INTO etm (compiled, sm) VALUES ('${getPassedDay7}.${message.guild.id}',${0})`;
                              
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
  con.query(`SELECT * FROM gxp WHERE id = '${message.guild.id}'`, (err, gxp)=> {
    if(err) throw err;
    if(gxp.length < 1){
      sql = `INSERT INTO gxp (id, gxp) VALUES ('${message.guild.id}',${0})`;
  
      con.query(sql)
    }
  
    con.query(`SELECT * FROM gtm WHERE compiled = '${today}.${message.guild.id}'`, (err, gtxp0)=> {
      if(err) throw err;
      if(gtxp0.length < 1){
        sql = `INSERT INTO gtm (compiled, gtxp) VALUES ('${today}.${message.guild.id}',${0})`;
  
        con.query(sql)
      }
      con.query(`SELECT * FROM gtm WHERE compiled = '${getPassedDay1}.${message.guild.id}'`, (err, gtxp1)=> {
        if(err) throw err;
        if(gtxp1.length < 1){
          sql = `INSERT INTO gtm (compiled, gtxp) VALUES ('${getPassedDay1}.${message.guild.id}',${0})`;
    
          con.query(sql)
        }
        con.query(`SELECT * FROM gtm WHERE compiled = '${getPassedDay2}.${message.guild.id}'`, (err, gtxp2)=> {
          if(err) throw err;
          if(gtxp2.length < 1){
            sql = `INSERT INTO gtm (compiled, gtxp) VALUES ('${getPassedDay2}.${message.guild.id}',${0})`;
      
            con.query(sql)
          }
          con.query(`SELECT * FROM gtm WHERE compiled = '${getPassedDay3}.${message.guild.id}'`, (err, gtxp3)=> {
            if(err) throw err;
            if(gtxp3.length < 1){
              sql = `INSERT INTO gtm (compiled, gtxp) VALUES ('${getPassedDay3}.${message.guild.id}',${0})`;
        
              con.query(sql)
            }
            con.query(`SELECT * FROM gtm WHERE compiled = '${getPassedDay4}.${message.guild.id}'`, (err, gtxp4)=> {
              if(err) throw err;
              if(gtxp4.length < 1){
                sql = `INSERT INTO gtm (compiled, gtxp) VALUES ('${getPassedDay4}.${message.guild.id}',${0})`;
          
                con.query(sql)
              }
              con.query(`SELECT * FROM gtm WHERE compiled = '${getPassedDay5}.${message.guild.id}'`, (err, gtxp5)=> {
                if(err) throw err;
                if(gtxp5.length < 1){
                  sql = `INSERT INTO gtm (compiled, gtxp) VALUES ('${getPassedDay5}.${message.guild.id}',${0})`;
            
                  con.query(sql)
                }
                con.query(`SELECT * FROM gtm WHERE compiled = '${getPassedDay6}.${message.guild.id}'`, (err, gtxp6)=> {
                  if(err) throw err;
                  if(gtxp6.length < 1){
                    sql = `INSERT INTO gtm (compiled, gtxp) VALUES ('${getPassedDay6}.${message.guild.id}',${0})`;
              
                    con.query(sql)
                  }
                  con.query(`SELECT * FROM gtm WHERE compiled = '${getPassedDay7}.${message.guild.id}'`, (err, gtxp7)=> {
                    if(err) throw err;
                    if(gtxp7.length < 1){
                      sql = `INSERT INTO gtm (compiled, gtxp) VALUES ('${getPassedDay7}.${message.guild.id}',${0})`;
                
                      con.query(sql)
                    }
                    con.query(`SELECT * FROM etm WHERE compiled = '${today}.${message.guild.id}'`, (err, sm0)=> {
                      if(err) throw err;
                      if(sm0.length < 1){
                        sql = `INSERT INTO etm (compiled, sm) VALUES ('${today}.${message.guild.id}',${0})`;
                  
                        con.query(sql)
                      }
                      con.query(`SELECT * FROM etm WHERE compiled = '${getPassedDay1}.${message.guild.id}'`, (err, sm1)=> {
                        if(err) throw err;
                        if(sm1.length < 1){
                          sql = `INSERT INTO etm (compiled, sm) VALUES ('${getPassedDay1}.${message.guild.id}',${0})`;
                    
                          con.query(sql)
                        }
                        con.query(`SELECT * FROM etm WHERE compiled = '${getPassedDay2}.${message.guild.id}'`, (err, sm2)=> {
                          if(err) throw err;
                          if(sm2.length < 1){
                            sql = `INSERT INTO etm (compiled, sm) VALUES ('${getPassedDay2}.${message.guild.id}',${0})`;
                      
                            con.query(sql)
                          }
                          con.query(`SELECT * FROM etm WHERE compiled = '${getPassedDay3}.${message.guild.id}'`, (err, sm3)=> {
                            if(err) throw err;
                            if(sm3.length < 1){
                              sql = `INSERT INTO etm (compiled, sm) VALUES ('${getPassedDay3}.${message.guild.id}',${0})`;
                        
                              con.query(sql)
                            }
                            con.query(`SELECT * FROM etm WHERE compiled = '${getPassedDay4}.${message.guild.id}'`, (err, sm4)=> {
                              if(err) throw err;
                              if(sm4.length < 1){
                                sql = `INSERT INTO etm (compiled, sm) VALUES ('${getPassedDay4}.${message.guild.id}',${0})`;
                          
                                con.query(sql)
                              }
                              con.query(`SELECT * FROM etm WHERE compiled = '${getPassedDay5}.${message.guild.id}'`, (err, sm5)=> {
                                if(err) throw err;
                                if(sm5.length < 1){
                                  sql = `INSERT INTO etm (compiled, sm) VALUES ('${getPassedDay5}.${message.guild.id}',${0})`;
                            
                                  con.query(sql)
                                }
                                con.query(`SELECT * FROM etm WHERE compiled = '${getPassedDay6}.${message.guild.id}'`, (err, sm6)=> {
                                  if(err) throw err;
                                  if(sm6.length < 1){
                                    sql = `INSERT INTO etm (compiled, sm) VALUES ('${getPassedDay6}.${message.guild.id}',${0})`;
                              
                                    con.query(sql)
                                  }
                                  con.query(`SELECT * FROM etm WHERE compiled = '${getPassedDay7}.${message.guild.id}'`, async(err, sm7)=> {
                                    if(err) throw err;
                                    if(sm7.length < 1){
                                      sql = `INSERT INTO etm (compiled, sm) VALUES ('${getPassedDay7}.${message.guild.id}',${0})`;
                                
                                      con.query(sql)
                                    }
await load.delete()
const membresTotaux = new QuickChart();
membresTotaux.setConfig({
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [membres, message.guild.members.cache.filter(member => member.user.bot).size, message.guild.members.cache.filter(member => member.hasPermission("ADMINISTRATOR") && !member.user.bot).size],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(75, 192, 192)',
          ],
          label: 'Membres du serveur',
        },
      ],
      labels: ['Utilisateurs', 'Bots', 'Admins'],
    },
    options: {
      legend: {
        labels: {
          fontColor: '#fff',
        }
      },
      title: {
        fontColor: "#fff",
        display: true,
        text: 'Membres du serveur',
      },
      plugins: {
        backgroundImageUrl: 'https://cdn.discordapp.com/attachments/816650927254536214/816756917513748490/image0.png',
      }	
    },
  });



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
          "label": "Messages du serveur",
          "backgroundColor": "rgba(75, 192, 192, 0.5)",
          "borderColor": "rgb(75, 192, 192)",
          "fill": false,
          "data": [
            gtxp7[0].gtxp,
            gtxp6[0].gtxp,
            gtxp5[0].gtxp,
            gtxp4[0].gtxp,
            gtxp3[0].gtxp,
            gtxp2[0].gtxp,
            gtxp1[0].gtxp,
            gtxp0[0].gtxp
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
          text: 'Messages du serveur',
          fontColor: 'rgb(255, 255, 255)'
        },
        plugins: {
          backgroundImageUrl: 'https://cdn.discordapp.com/attachments/816650927254536214/816756917513748490/image0.png',
        }	
      },
      
    }
  )

  const membresTemps = new QuickChart();
membresTemps.setConfig(
  {
    type: 'bar',
    data: {
      labels: ['1 sem','6j','5j','4j','3j','2j', 'Hier','Auj'],
      datasets: [
        {
          label: 'Dataset 1',
          backgroundColor: 'rgb(255, 99, 132)',
          stack: 'Stack 0',
          data: [
          sm7[0].sm,
          sm6[0].sm,
          sm5[0].sm,
          sm4[0].sm,
          sm3[0].sm,
          sm2[0].sm,
          sm1[0].sm,
          sm0[0].sm],
        },
        
      ],
    },
    options: {
      title: {
        display: true,
        text: 'Evolution des membres',
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      responsive: true,
      scales: {
        xAxes: [
          {
            stacked: true,
          },
        ],
        yAxes: [
          {
            stacked: true,
          },
        ],
      },
        plugins: {
          backgroundImageUrl: 'https://cdn.discordapp.com/attachments/816650927254536214/816756917513748490/image0.png',
        }	
      },
      
    }
  )

    let gMenu = new Menu(message.channel, message.author.id, [
      {

          name: 'main',
          content: new Discord.MessageEmbed({
              title: 'Menu guild',
              description: '**Réagir aux réactions pour recevoir des informations diverses sur le serveur »** \n\n> 🗂 ・ Informations générales \n> ✉️ ・ Statistiques sur les messages \n> 👤 ・ Statistiques sur les membres',
              
          }),
          reactions: {
              '🗂':'info',
              '✉️': 'messages',
              '👤':'membres',
          }
      },
      {
          name: 'messages',
          content: new Discord.MessageEmbed({
              color: "#9A9EFF",
              title: '**' + em.chart + ' » Statistiques sur les messages**',
              description: `__ **${em.send} Nombre de messages envoyés »** __ \n> ・**Aujourd'hui »** `+ gtxp0[0].gtxp + `\n> ・**Hier »** `+ gtxp1[0].gtxp + `\n> ・**Il y a 3 jours »** `+ gtxp3[0].gtxp+ `\n> ・**La semaine dernière »** `+ gtxp7[0].gtxp+`\n> ・**Total »** `+ gxp[0].gxp,
              image: {
                url: messagesTemps.getUrl()
              },
            }),
          reactions: {
            '⬅️': 'main',
            '🗂':'info',
            '👤':'membres',
          }
      },
      {
        name: 'info',
        content: new Discord.MessageEmbed({
            color: "#9A9EFF",
            author: {
              name: '» Informations sur le serveur ' +message.guild.name,
              icon_url: message.guild.iconURL()
            }, 
            description: `> **${em.owner} Owner »** ${message.guild.owner.displayName} \n> **${em.time} Crée le »** ${message.guild.createdAt}\n> **${em.world} Région »** ${message.guild.region}\n> **${em.verified} Vérifié »** ${message.guild.verified}\n> **${em.online} En ligne »** ${message.guild.members.cache.filter(m => m.presence.status === 'online' || 'dnd').size}`,
            image: {
              url: membresTotaux.getUrl()
            },
          }),
        reactions: {
          '⬅️':'main',
          '✉️': 'messages',
          '👤':'membres',
        }
    },
    {
      name: 'membres',
      content: new Discord.MessageEmbed({
          color: "#9A9EFF",
          title: '**' + em.chart + ' » Statistiques sur les membres**',
          description: `__ **${em.join} Nouveaux membres »** __  \n> ・**Aujourd'hui »** `+ sm0[0].sm + `\n> ・**Hier »** `+ sm1[0].sm + `\n> ・**Il y a 3 jours »** `+ sm3[0].sm+ `\n> ・**La semaine dernière »** `+ sm7[0].sm,
          image: {
            url: membresTemps.getUrl()
          },
        }),
      reactions: {
        '⬅️':'main',
        '🗂':'info',
        '✉️': 'messages',
        
      }
  }
  ], 300000)


  gMenu.start()
}, 2000)

})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
}
module.exports.help = {
    name: 'guild',
    aliases:'g'
  }




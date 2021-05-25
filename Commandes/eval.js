const Discord = require('discord.js')
const fs = require('fs')
const cf = require('../data/config.json')
const em = require('../data/emojis.json')
const cl = require('../data/colors.json')

module.exports.run = async (client, message, args, con) => {
    let date = ''
    let membres = ''
    let evo = ''
    let bilan = true
    let bilantxt = ''
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

    if(Date.now() - message.guild.createdAt > 1000*60*60*24*7*8) {
        date = `${em.x} Votre serveur doit avoir **au moins 8 semaines d’existence**.`
        bilan = false
    }else{
        date = em.check + ` Eligible !`
    }

    if(message.guild.memberCount < 500){
        membres = `${em.x} Votre serveur doit avoir **au moins 500 membres**.`
        bilan = false
    }else{
        membres = em.check + ` Eligible !`
    }
    con.query(`SELECT * FROM etm WHERE compiled = '${today}.${message.guild.id}'`, (err, sm0)=> {
        if(err) throw err;
        if(sm0.length < 1){
            sql = `INSERT INTO etm (compiled, sm) VALUES ('${today}.${message.guild.id}',${0})`;

            con.query(sql)
        }
    con.query(`SELECT * FROM etm WHERE compiled = '${getPassedDay1}.${message.guild.id}'`, (err, sm1)=> {
        if (err) throw err;
        if (sm1.length < 1) {
            sql = `INSERT INTO etm (compiled, sm) VALUES ('${getPassedDay1}.${message.guild.id}',${0})`;

            con.query(sql)
        }
        con.query(`SELECT * FROM etm WHERE compiled = '${getPassedDay2}.${message.guild.id}'`, (err, sm2) => {
            if (err) throw err;
            if (sm2.length < 1) {
                sql = `INSERT INTO etm (compiled, sm) VALUES ('${getPassedDay2}.${message.guild.id}',${0})`;

                con.query(sql)
            }
            con.query(`SELECT * FROM etm WHERE compiled = '${getPassedDay3}.${message.guild.id}'`, (err, sm3) => {
                if (err) throw err;
                if (sm3.length < 1) {
                    sql = `INSERT INTO etm (compiled, sm) VALUES ('${getPassedDay3}.${message.guild.id}',${0})`;

                    con.query(sql)
                }
                con.query(`SELECT * FROM etm WHERE compiled = '${getPassedDay4}.${message.guild.id}'`, (err, sm4) => {
                    if (err) throw err;
                    if (sm4.length < 1) {
                        sql = `INSERT INTO etm (compiled, sm) VALUES ('${getPassedDay4}.${message.guild.id}',${0})`;

                        con.query(sql)
                    }
                    con.query(`SELECT * FROM etm WHERE compiled = '${getPassedDay5}.${message.guild.id}'`, (err, sm5) => {
                        if (err) throw err;
                        if (sm5.length < 1) {
                            sql = `INSERT INTO etm (compiled, sm) VALUES ('${getPassedDay5}.${message.guild.id}',${0})`;

                            con.query(sql)
                        }
                        con.query(`SELECT * FROM etm WHERE compiled = '${getPassedDay6}.${message.guild.id}'`, (err, sm6) => {
                            if (err) throw err;
                            if (sm6.length < 1) {
                                sql = `INSERT INTO etm (compiled, sm) VALUES ('${getPassedDay6}.${message.guild.id}',${0})`;

                                con.query(sql)
                            }
                            con.query(`SELECT * FROM etm WHERE compiled = '${getPassedDay7}.${message.guild.id}'`, async (err, sm7) => {
                                if (err) throw err;
                                if (sm7.length < 1) {
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
    setTimeout(()=>{
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
                                        if (err) throw err;
                                        if (sm7.length < 1) {
                                            sql = `INSERT INTO etm (compiled, sm) VALUES ('${getPassedDay7}.${message.guild.id}',${0})`;

                                            con.query(sql)
                                        }

                                        let compileeed = sm1[0].sm + sm2[0].sm + sm3[0].sm + sm4[0].sm + sm5[0].sm + sm6[0].sm + sm7[0].sm
                                        if (compileeed < 100) {
                                            evo = `${em.x} Vous devez avoir **au moins 100 personnes qui rejoignent par semaine.**`
                                            bilan = false
                                        } else {
                                            evo = `${em.check} Eligible`
                                        }
                                        if (bilan === false) {
                                            bilantxt = `${em.x} **Votre serveur n'est pas éligible !**`
                                        } else {
                                            bilantxt = `${em.check} **Votre serveur est éligible !**`
                                        }
                                        message.channel.send(
                                            new Discord.MessageEmbed()
                                                .setColor(cl.blue)
                                                .setAuthor(`Eligibilité au programme partenaire du serveur`, message.guild.iconURL())
                                                .addField(`Date de création`, date)
                                                .addField(`Membres au total`, membres)
                                                .addField(`Evolution des membres`, evo)
                                                .addField(`**__Bilan__**`, bilantxt)
                                        )
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }, 500)

}

module.exports.help = {
    name: 'eval',
    aliases:"ev"
}
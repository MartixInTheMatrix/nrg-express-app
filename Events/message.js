
const Discord = require('discord.js')
const fs = require('fs')
const path = require('path')
const cf = require('../data/config.json')


var mysql = require('mysql')
var con = mysql.createConnection({
  host: "65.21.30.118",
  port:"3306",
  user: "u2_Rpm8aIBLPR",
  password: "wawKuW.!q!4.924Pgt9qPWw@",
  database: "s2_stats"
});


module.exports = async(client, message) => {
  const dateObj = new Date();
  const month = String(dateObj.getMonth()).padStart(2, '0')
  const day = String(dateObj.getDate()).padStart(2, '0')
  const year = dateObj.getFullYear();
  const today = day  + '/' + month  +  '/' + year;

    let prefix = '%'
      if (message.channel.type === 'dm') return;
      if(message.author.bot) { return; }
      if (!message.channel.permissionsFor(client.user).has('SEND_MESSAGES')) { return; }
    
    con.query(`SELECT * FROM mxp WHERE id = '${message.author.id}'`, (err, rows)=> {
      if(err)throw err;

      let sql;

      if(rows.length < 1){
        sql = `INSERT INTO mxp (id, mxp) VALUES ('${message.author.id}',${1})`;
      }else{
        let mxp = rows[0].mxp;

        sql = `UPDATE mxp SET mxp = ${mxp + 1} WHERE id = '${message.author.id}'`;
      }
      con.query(sql)
      
    })
    
    con.query(`SELECT * FROM gxp WHERE id = '${message.guild.id}'`, (err, rows)=> {
      if(err)throw err;

      let sql;

      if(rows.length < 1){
        sql = `INSERT INTO gxp (id, gxp) VALUES ('${message.guild.id}',${1})`;
      }else{
        let gxp = rows[0].gxp;

        sql = `UPDATE gxp SET gxp = ${gxp + 1} WHERE id = '${message.guild.id}'`;
      }
      con.query(sql)
      
    })

    con.query(`SELECT * FROM utm WHERE compiled = '${today}.${message.author.id}'`, (err, rows)=> {
      if(err)throw err;

      let sql;

      if(rows.length < 1){
        sql = `INSERT INTO utm (compiled, utxp) VALUES ('${today}.${message.author.id}',${1})`;
      }else{
        let utxp = rows[0].utxp;

        sql = `UPDATE utm SET utxp = ${utxp + 1} WHERE compiled = '${today}.${message.author.id}'`;
      }
      con.query(sql)
      
    })

    con.query(`SELECT * FROM gtm WHERE compiled = '${today}.${message.guild.id}'`, (err, rows)=> {
      if(err)throw err;

      let sql;

      if(rows.length < 1){
        sql = `INSERT INTO gtm (compiled, gtxp) VALUES ('${today}.${message.guild.id}',${1})`;
      }else{
        let gtxp = rows[0].gtxp;

        sql = `UPDATE gtm SET gtxp = ${gtxp + 1} WHERE compiled = '${today}.${message.guild.id}'`;
      }
      con.query(sql)
      
    })

      if (!message.content.startsWith(prefix)) { return; }
          let args = message.content.slice(prefix.length).trim().split(/ +/g);
          let commande = args.shift();
          let cmd = client.commands.get(commande);
          if (!cmd) { return; }
          let date = new Date()
              cmd.run(client, message, args, con);
              console.log(`${message.author.username} | ${date} | Commande : ${prefix}${commande} ${args.join(' ')}`)

  };


        

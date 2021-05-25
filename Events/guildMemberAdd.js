const Discord = require('discord.js')
const fs = require('fs')
const path = require('path')
const cf = require('../data/config.json')
const message = require('./message')
var mysql = require('mysql')
var con = mysql.createConnection({
  host: "65.21.30.118",
  port:"3306",
  user: "u2_Rpm8aIBLPR",
  password: "wawKuW.!q!4.924Pgt9qPWw@",
  database: "s2_stats"
});


module.exports = async(client, member) => {

const dateObj = new Date();
const month = String(dateObj.getMonth()).padStart(2, '0')
const day = String(dateObj.getDate()).padStart(2, '0');
const year = dateObj.getFullYear();
const today = day  + '/' + month  +  '/' + year;

      con.query(`SELECT * FROM etm WHERE compiled = '${today}.${member.guild.id}'`, (err, rows)=> {
        if(err)throw err;
  
        let sql;
  
        if(rows.length < 1){
          sql = `INSERT INTO etm (compiled, sm) VALUES ('${today}.${member.guild.id}',${1})`;
        }else{
          let sm = rows[0].sm;
  
          sql = `UPDATE etm SET sm = ${sm + 1} WHERE compiled = '${today}.${member.guild.id}'`;
        }
        con.query(sql)
      })



}





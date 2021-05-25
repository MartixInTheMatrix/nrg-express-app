const Discord = require('discord.js')
const fs = require('fs')
const path = require('path')
const cf = require('../data/config.json')
const dl = require('discord-leveling')
const db = require('quick.db')
const { table, count } = require('console')
const msgs = new db.table('msgs')
const dmess = new db.table('dmess')
var today = new Date();
const prefixe = new db.table('prefixe')
const scounter = new db.table('counter')




module.exports = async(client, message) => {
        setInterval(() => {
            client.user.setActivity(`MAINTENANCE`, {
                status: "online"
              })
        }, 20000);
        console.log('Bot connecté avec succès')



}


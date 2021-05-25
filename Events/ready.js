const Discord = require('discord.js')
const fs = require('fs')
const path = require('path')
const cf = require('../data/config.json')
const { table, count } = require('console')
var today = new Date();


module.exports = async(client, message) => {
        setInterval(() => {
            client.user.setActivity(`MAINTENANCE`, {
                status: "online"
              })
        }, 20000);
        console.log('Bot connecté avec succès')



}


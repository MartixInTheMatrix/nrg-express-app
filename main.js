const { Client } = require('discord.js')
const WS = require('./ws/ws')

// load config.json
const config = require('./config.json')


var client = new Client()

client.config = config


var ws = new WS(config.ws.token, config.ws.port, client)

// Logging in Discord Bot at the API
client.login(config.token)


const Discord = require('discord.js');
client.commands = new Discord.Collection()
const fs = require('fs');
const cf = require('./data/config.json')
const cl = require('./data/colors.json')
const message = require('./Events/message');


fs.readdir('./Commandes/', (error, f) => {
    if(error) return console.log(error);
    let commandes = f.filter(f => f.split('.').pop() === 'js');
    if(commandes.length <= 0) return console.log('Aucune commande n\'a été trouvée.')

    commandes.forEach((f) => {
        let commande = require(`./Commandes/${f}`);
        console.log(`${f}, commande chargée !`)
        client.commands.set(commande.help.name, commande);
        client.commands.set(commande.help.aliases, commande);
    })
})

fs.readdir('./Events/', (error, f) => {
    if(error) return console.log(error);
    console.log(`${f.length} events chargé(s)`)

    f.forEach((f) => {
        let events = require(`./Events/${f}`);
        let event = f.split('.')[0];
        client.on(event, events.bind(null, client));
    })
})

var mysql = require('mysql')
var con = mysql.createConnection({
    host: "65.21.30.118",
    port:"3306",
    user: "u2_Rpm8aIBLPR",
    password: "wawKuW.!q!4.924Pgt9qPWw@",
    database: "s2_stats"
});

con.connect(err => {
  if(err) throw err;
  console.log("Connected to database.");
});




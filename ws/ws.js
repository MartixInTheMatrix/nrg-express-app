const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require("body-parser");
const path = require('path');
const QuickChart = require('quickchart-js')

/**
 * Websocket class.
 * @param {string}         token  Token to authenticate at the web interface
 * @param {number}         port   Port to access web interface
 * @param {discord.Client} client Discord client instance to access the discord bot
 */
class WebSocket {

    constructor(token, port, client) {
        this.token = token
        this.port = port
        this.client = client
        this.app = express()

        // Register Handlebars instance as view engine
        this.app.engine('hbs', hbs({
            extname: 'hbs',                     // Extension (*.hbs Files)
            defaultLayout: 'layout',            // Main layout -> layouts/layout.hbs
            layoutsDir: __dirname + '/layouts'  // Layouts directory -> layouts/
        }))
        // Set folder views/ as location for views files
        this.app.set('views', path.join(__dirname, 'views'))
        // Set hbs as view engine
        this.app.set('view engine', 'hbs')
        // Set public/ as public files root
        this.app.use(express.static(path.join(__dirname, 'public')))
        // Register bodyParser as parser for Post requests body in JSON-format
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());

        this.registerRoots()

        // Start websocket on port defined in constructors arguments
        this.server = this.app.listen(port, () => {
            console.log("Websocket API set up at localhost://" + this.server.address().port)
        })
    }

    /**
     * Compare passed token with the token defined on
     * initialization of the websocket
     * @param {string} token //Token from request parameter 
     * @returns {boolean} True if token is the same
     */
     checkToken(_token) {
        return Boolean(this.client.guilds.cache.get(_token))
    }

    /**
     * Register root pathes
     */
    registerRoots() {
        this.app.get('/', (req, res) => {
            var _token = req.query.token
            
            if (this.checkToken(_token)) {
              var guild = this.client.guilds.cache.get(_token)
              const membres  = guild.members.cache.filter(member => !member.user.bot).size - guild.members.cache.filter(member => member.hasPermission("ADMINISTRATOR") && !member.user.bot).size
              let admins = guild.members.cache.filter(member => member.hasPermission("ADMINISTRATOR") && !member.user.bot).size
              let bots = guild.members.cache.filter(member => member.user.bot).size
              const membresTotaux = new QuickChart();
              membresTotaux.setConfig({
                  type: 'doughnut',
                  data: {
                    datasets: [
                      {
                        data: [membres, bots, admins],
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
            45,
            23,
            65,
            75,
            54,
            24,
            34,
            110
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
          label:"Membres du serveur",
          backgroundColor: 'rgb(255, 99, 132)',
          stack: 'Stack 0',
          data: [
          65,
          34,
          85,
          45,
          64,
          12,
          77,
          65],
        },
        
      ],
    },
    options: {
      title: {
        display: true,
        text: 'Evolution des membres',
        fontColor: 'rgb(255, 255, 255)'
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
let chartmsg = messagesTemps.getUrl()
let chartmt = membresTemps.getUrl()
let chartmb = membresTotaux.getUrl()
let tmsgem = 120
let msgparj = (tmsgem / 7).toFixed(0)

                let guildname = guild.name
                
                // Render error view if token does not pass
                res.render('stats', { title: `Stats - ${guild.name}`, guildname, chartmsg, chartmt, chartmb, admins, bots, membres, tmsgem, msgparj})
                return
            }else{

            var glds = []
            
                this.client.guilds.cache
                .forEach(g => {
                    glds.push({id: g.id, name: g.name})
                })    
            // Render index view and pass title, token
            // and channels array

            res.render('index', { 
                title: "NRG", 
                glds 
            })
            

        }
        })
        
        this.app.post('/getStats', function(req, res) {     
          var guildid = req.body.guildid
            res.render('stats', {
              title: `stats - ${this.client.guilds.cache.get(guildid)}`,
              token: guildid,
              })

      });
 

    }

}

module.exports = WebSocket

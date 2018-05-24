const Discord = require('discord.js')
const bot = new Discord.Client()
const PornHub = require('./commands/porn')
const Help = require('./commands/help')
const fonda = require('./commands/fonda')
const Google = require('./commands/google')
const Random = require('./commands/random')
const Youtube = require('./commands/youtube')
const Smiley = require('./commands/smiley')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const fungif = require('./commands/fungif')
const Blague = require('./commands/blague')
const Say = require('./commands/say')
const Role = require('./commands/role')
const choix = require('./commands/choix')
const clear = require('./commands/clear')
const recherche = require('./commands/recherche')
const music = require('discord.js-music-v11')
const moment = require('moment')



const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ histoires: [], xp: []}).write()

var prefix = ("!k")
var randnum = 0;
var dispatcher;


bot.on('ready', () => {
  bot.user.setPresence({ game: { name: 'Préfix : !k ', type: 0} });
  console.log("Bot ready !");
  music(bot)
});

bot.on('guildMemberAdd', function (member) {
  member.createDM().then(function (channel) {
    return channel.send('Bienvenue sur le channel ' + member.displayName)
  }).catch(console.error)
})

bot.on('message', function (message) {
  let commandUsed =
  Help.parse(message) ||
  Google.parse(message) ||
  fonda.parse(message) ||
  PornHub.parse(message) ||
  Random.parse(message) ||
  Youtube.parse(message) ||
  Smiley.parse(message) ||
  fungif.parse(message) ||
  Blague.parse(message) ||
  Say.parse(message) ||
  Role.parse(message) ||
  choix.parse(message) ||
  clear.parse(message) ||
  recherche.parse(message)

})

bot.login('YokenKey')

bot.on('message', message => {

  var msgauthor = message.author.id;

  if(message.author.bot)return;

  if(!db.get("xp").find({user: msgauthor}).value()){
      db.get("xp").push({user: msgauthor, xp: 1}).write();
  }else{
      var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
      console.log(userxpdb);
      var userxp = Object.values(userxpdb)
      console.log(userxp)
      console.log(`Nombre d'xp: ${userxp[1]}`)

      db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();

    if (message.content === prefix + "xp"){
      var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
      var xpfinal = Object.values(xp);
      var xp_embed = new Discord.RichEmbed()
          .setTitle(`Stats des XP de ${message.author.username}`)
          .setColor('#F4D03F')
          .setDescription(`Affichage de l'XP de ${message.author.username}`)
          .addField("XP:", `${xpfinal[1]} xp`)
          .setFooter("Continue comme ça ! :p")
      message.channel.send({embed: xp_embed});

}}})

bot.on('message', function (message) {
    if (message.content === '!khelp') {
    const embed = {
 "title": "Aide des commandes:",
 "description": "``Le préfixe du bot est !k``",
 "color": 0x0066FE,
 "fields": [
  {
   "name": "!krandom",
   "value": "``Le créateur du bot vas tout les jours mettre une musique ou bruit random sur cette commande !``"
  },
  {
    "name": "!kporn",
    "value": "``Cette commande sert a rechercher quelque chose pour vous sur PornHub !``"
  },
  {
    "name": "!kfonda",
    "value": "``Cette commande sert a satisfaire l'égaux du créateur !``"
  },
  {
    "name": "!kgoogle (votre recherche)",
    "value": "``Cette commande sert a rechercher quelque chose pour vous sur google !``"
  },
  {
  "name": "!khelp",
  "value": "``C'est pour voir toutes les commendes du bot ! ps: certaine commandes sont caché , si tu les retrouve tu gagnera de l'xp ;)``"
  },
  {
  "name": "!play (sans le k , car sinon il y a des conflits",
  "value": "``C'est pour pouvoir lancer une musique a partir d'une recherche youtube !``"
  },
  {
"name": "!kyt",
"value": "``Cette commandes permet de faire apparaitre la chaîne de mon créateur``"
},
{
"name": "!ksmiley",
"value": "`Cette commande permet de faire rire le bot`"
  },
  {
    "name": "!kxp",
    "value": "`Cette commande permet de voir l'xp que tu as`"
  },
        {
          "name": "!kfungif",
          "value": "`Cette commande permet d'afficher des gif animé !`"
            },
            {
                "name": "!kblague",
                "value": "`Cette commande permet d'envoyer une blague aléatoirement !`"
                  },
                  {
                      "name": "!ksay",
                      "value": "`Cette commande permet d'envoyer un message avec le bot`"
                        },
                        {
                            "name": "!kstats",
                            "value": "`Cette commande permet d'afficher les stats du serveur`"
                              },
                              {
                                  "name": "!kall_roles",
                                  "value": "`Cette commande permet d'afficher les roles disponible`"
                                    },
                                    {
                                      "name": "!k8ball",
                                      "value": "`Cette commande permet de repondre a une question posé !`"
                                        },
                                        {
                                          "name": "!kclear",
                                          "value": "`supprime autant de message que vous le désirez !`"
                                            },                  
{
  "name": "Invite le bot !",
  "value": "https://discordapp.com/oauth2/authorize?client_id=445619348061814784&scope=bot&permissions=2105015551"
},
{
"name": "Serveur du créateur !",
"value": "https://discord.gg/JNG9W2x"
}
 ]
}
message.channel.send({ embed })
    }
})

bot.on('message', function (message) {
    if (message.content === 'coucou le bot') {
      message.channel.send("Coucou ;)")

    }
  })

  bot.on('message', function (message) {
      if (message.content === 'ça va le bot ?') {
        message.channel.send("ça va et toi ?")

      }
    })

    bot.on('message', function (message) {
        if (message.content === 't ki') {
          message.channel.send("Ta Maman La Femme Respectable ")

        }
      })
      bot.on('message', function (message) {
          if (message.content === 'tfq ?') {
            message.channel.send("je parle a mon maître !")

          }
        })
        bot.on('message', function (message) {
            if (message.content === 'bite') {
              message.channel.send("ELLE EST GROSSE TA BITE")

            }
          })
          bot.on('message', function (message) {
              if (message.content === 'Kalieno bot') {
                message.channel.send("Oui ?")

              }
            })
  bot.on('message', function(message) {
    if(message.content === prefix + 'stats') {
      var date_moment = moment(message.guild.createdAt)
		date_moment = date_moment.locale('fr')

		var embed = new Discord.RichEmbed()
		.setColor("#226666")
		.addField('Statistiques du serveur Kalieno', 'Il y a actuellement ' + '**' + message.guild.channels.size + '**' +' channels dans ce serveur \nIl y a exactement ' + '**' + message.guild.members.size + '**' + ' membres dans ce serveur\nLe serveur a été crée le: ' + '**' + date_moment.format('DD MMM YYYY') + '** \nJe suis present dans ' + '**' + bot.guilds.size + '**' + ' serveurs')
		message.channel.send(embed).catch(console.error)

  }  else if(message.content === prefix + 'all_roles') {


		var embed = new Discord.RichEmbed()
		.setColor("#226666")
		.addField("Tous les roles disponibles", "-Développeur ->  !krole -dev\n-Youtubeur ->      !krole -youtubeur\n-Débile ->           !krole -debile\n-Graphiste ->      !krole -gfx\n-Gentil ->      !krole -gentil\n-Roux ->      !krole -roux\n-Français ->      !krole -francais\n-Gamer->           !krole -gamer")
		message.channel.send(embed).catch(console.error)

  }
})

const Discord = require('discord.js')
const Command = require('./command')
const prefix = '!k'

module.exports = class fungif extends Command {

	static match(message) {
		return message.content.startsWith(prefix + 'fungif')
	}

	static action(message) {

			let args = message.content.split(" ").slice(1)

			if (message.content === prefix + 'fungif') {

				var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.addField("Toutes les commandes fungif",  "-> !kfungif:dab\n-> !kmagicarpe\n-> !kdracaufeu\n-> !kfungif:pense\n-> !kfungif:issou\n-> !kfungif:kameamea\n-> !kfungif:champ\n-> !kfungif:ours\n-> !kfungif:issou2\n-> !kfungif:pied\n-> !kfungif:main\n-> !kfungif:triggered")
					message.channel.send(embed)
                        
			
		        } else if (message.content.startsWith(prefix + 'fungif:dab')) {

				if(args == "") {
					message.reply('Veuillez mentionner quelqu\'un')
				} else {
					var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.setDescription("**" + message.author.username + "**" + " fait un dab à " + args.join(" "))
					.setImage('https://cdn.discordapp.com/attachments/436266527013208075/440876615900069898/tenor.gif')
					message.channel.send(embed)
				}


			} else if(message.content.startsWith(prefix + 'fungif:pense')) {

				if(args == "") {
					message.reply('Veuillez mentionner quelqu\'un')
				} else {
					var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.setDescription("**" + message.author.username + "**" + " est en train de réfléchir envers " + args.join(" "))
					.setImage('https://media.tenor.co/images/4b7399689d7c8d618b7ea21bcec6be6d/tenor.gif')
					message.channel.send(embed)
				}
			
			} else if(message.content.startsWith(prefix + 'magicarpe')) {

				if(args == "") {
					message.reply('Veuillez mentionner quelqu\'un')
				} else {
					var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.setDescription("**" + message.author.username + "**" + " Attaque " + args.join(" "))
					.setImage('https://cdn.discordapp.com/attachments/449279752100904960/449280045480149002/image.gif')
					message.channel.send(embed)
				}
				
			} else if(message.content.startsWith(prefix + 'dracaufeu')) {

				if(args == "") {
					message.reply('Veuillez mentionner quelqu\'un')
				} else {
					var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.setDescription("**" + message.author.username + "**" + " Attaque " + args.join(" "))
					.setImage('https://media.giphy.com/media/OZnzDqIzdduuY/giphy.gif')
					message.channel.send(embed)
				}	



			} else if(message.content.startsWith(prefix + 'fungif:issou')) {

				if(args == "") {
					message.reply('Veuillez mentionner quelqu\'un')
				} else {
					var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.setDescription("**" + message.author.username + "**" + " :joy: " + args.join(" "))
					.setImage('https://media1.tenor.com/images/f86c3a13ddb998631efa393d1c289567/tenor.gif')
					message.channel.send(embed)
				}


			} else if(message.content.startsWith(prefix + 'fungif:kameamea')) {

				if(args == "") {
					message.reply('Veuillez mentionner quelqu\'un')
				} else {
					var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.setDescription("**" + message.author.username + "**" + " fait a kameamea a " + args.join(" ") + " ")
					.setImage('https://tenor.com/view/skid-kamehameha-goku-kefla-ultra-instinct-gif-10454830')
					message.channel.send(embed)
				}
			} else if(message.content.startsWith(prefix + 'fungif:champ')) {

				if(args == "") {
					message.reply('Veuillez mentionner quelqu\'un')
				} else {
					var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.setDescription("**" + message.author.username + "**" + " Oui... " + args.join(" ") + " ")
					.setImage('https://media1.tenor.com/images/0da32a485d780c675647efa8cea94ea3/tenor.gif?itemid=3786014')
					message.channel.send(embed)
				}
			} else if(message.content.startsWith(prefix + 'fungif:ours')) {

				if(args == "") {
					message.reply('Veuillez mentionner quelqu\'un')
				} else {
					var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.setDescription("**" + message.author.username + "**" + " ours " + args.join(" ") + " ")
					.setImage('https://media1.tenor.com/images/7dc1c132df8726daa18080ae4d2cd3b4/tenor.gif?itemid=4233104')
					message.channel.send(embed)
				}
			} else if(message.content.startsWith(prefix + 'fungif:issou2')) {

				if(args == "") {
					message.reply('Veuillez mentionner quelqu\'un')
				} else {
					var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.setDescription("**" + message.author.username + "**" + " issou2 " + args.join(" ") + " ")
					.setImage('https://media1.tenor.com/images/4fa236e034641f1139384a5b97c32ee2/tenor.gif?itemid=9179414')
					message.channel.send(embed)
				}
			} else if(message.content.startsWith(prefix + 'fungif:pied')) {

				if(args == "") {
					message.reply('Veuillez mentionner quelqu\'un')
				} else {
					var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.setDescription("**" + message.author.username + "**" + " montre son pied a " + args.join(" ") + " ")
					.setImage('https://media.giphy.com/media/tBb19f62NciUiu5q0fu/giphy.gif')
					message.channel.send(embed)
				}
			} else if(message.content.startsWith(prefix + 'fungif:main')) {

				if(args == "") {
					message.reply('Veuillez mentionner quelqu\'un')
				} else {
					var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.setDescription("**" + message.author.username + "**" + " montre ses main " + args.join(" ") + " ")
					.setImage('https://media1.tenor.com/images/175118a0c5953e9c39f375ad9c632c85/tenor.gif?itemid=10370843')
					message.channel.send(embed)
				}
			} else if(message.content.startsWith(prefix + 'fungif:triggered')) {

				if(args == "") {
					message.reply('Veuillez mentionner quelqu\'un')
				} else {
					var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.setDescription("**" + message.author.username + "**" + " triggerded " + args.join(" ") + " ")
					.setImage('https://media1.tenor.com/images/9543655e42222c2ba2eea8da45e328bc/tenor.gif?itemid=5943310')
					message.channel.send(embed)
				}
			}
	}
}

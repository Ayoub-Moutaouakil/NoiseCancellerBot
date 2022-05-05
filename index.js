const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const token = 'OTcxODgwOTk0MzY4MDA0MTg5.G_rxL7.p1xxQ93mMx6RAmBWFmvYN51IpQf0SQBixPwP5s'

client.once('ready', () => {
   console.log('Félicitations, votre bot Discord a été correctement initialisé !');
});

client.login(token);

let dico_raciste = ["nigga","arabe","fdp","chintoc","niggatoriou","couillonne","CREVE SALOPE","fils de pute","enculé","pd","zoulette","bite de negro","negro","gay","yasmine est belle","bondour"];

client.on("message", message => {
    if (dico_raciste.includes(message.content)) {
        message.channel.send("Comment ça mon reuf????");
        message.channel.send("Bien joué tu fais maintenant parti des RACISTES");
        console.log(message.editable);
		message.edit("||" + message + "||");
        message.member.roles.add("971898988527755265");
		message.member.roles.remove("971899060158091304");
      }
    if (message.content === "pardon") {
        message.channel.send("Bravo tu redeviens un GENTIL");
        message.member.roles.add("971899060158091304");
		message.member.roles.remove("971898988527755265");
    }
    if (message.content === "bebou") {
        message.channel.send("je te baisse la culotte");
    }
    
  }

)
/*
if (message.member.permissions.missing('ADMINISTRATOR')) return;

const channels = message.guild.channels.filter(c => c.parentID === '497908108803440653' && c.type === 'voice');

for (const [channelID, channel] of channels) {
  for (const [memberID, member] of channel.members) {
    member.setVoiceChannel('497910775512563742')
      .then(() => console.log(`Moved ${member.user.tag}.`))
      .catch(console.error);
  }
}

*/
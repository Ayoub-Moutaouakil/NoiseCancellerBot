const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"] });
const token = "OTcyNDU0Mzg4NzA4ODI3MjM2.Ge12_j.yFPZehayZg16ObLbQTUrzj6yHcoukU2eMbc-gg"

client.once('ready', () => {
   console.log("Félicitations, votre bot Discord a été correctement initialisé !");
});

client.login(token);
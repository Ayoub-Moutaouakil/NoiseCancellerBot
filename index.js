//Imports
const Discord = require('discord.js');
const Voice = require('@discordjs/voice'); // on a dans la classe voice toutes les fonctions liées aux channels audio...

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"] });

// nouveau fichier qui s'occupera de gerer notre bot dans les channels vocaux
const meter = require('./commands/meter');

// connecter notre programme à notre bot !! 
const token = 'OTcxODgwOTk0MzY4MDA0MTg5.G_rxL7.p1xxQ93mMx6RAmBWFmvYN51IpQf0SQBixPwP5s'

/*****************************CONNEXION AU BO*****************************/

client.once('ready', () => {
  console.log('Félicitations, votre bot Discord a été correctement initialisé !');
});

client.login(token); // login du bot au serveur

//client.user.setPresence({ activities: [{ name: "être raciste", type: "PLAYING"}] })

client.on("message", message => {
  if (message.content.startsWith('nc')) {  // on coupe notre message "nc metter", appelle avec la commande nc 
    let args = message.content.split(' ') // dans args[1] il restera la fonction qu'nc doit excecuter ; ex : nc meter, nc disconnect...

    if (args[1] == "meter") { // si apres le nc nous avons "meter" alors ...
      console.log("Connexion du NC Bot...")
      const connection = Voice.joinVoiceChannel({
        channelId: message.member.voice.channelId,
        guildId: message.member.voice.channel.guild.id,
        adapterCreator: message.member.voice.channel.guild.voiceAdapterCreator, // copié collé ils ont tous rien compris mais ca marche (moi j'ai compris [Ayoub])
      });
    }

    if (args[1] == "disconnect") {
      console.log("Déconnexion du NC Bot...")
      const connection = Voice.getVoiceConnection(message.member.voice.channel.guild.id);
      connection.destroy()
    }

    if (args[1] == "play") {
      //jouer le lien youtube args[2]
    }

    if (args[1] == "riot") {
      //args[2] lol
      //args[3] pseudo
    }

    if (args[1] == "mute") {
      if (!args[2]) {
        message.channel.send("Il faut écrire le pseudo de la personne à mute après la commande.")
      }
      else {
        const pseudo = message.mentions.users.first
        pseudo.setMute
        setTimeout(() => {
          pseudo.setMute

        }, 10000)
      }
    }
    
    if(args[1]=='avatar'){
      var AvatarMsg= new Discord.MessageEmbed() // type de message avec plusieurs arguments
                .setColor('#0099ff')  // du bleu clair
                .setTitle(message.author.username)
                .setImage(message.author.displayAvatarURL()) // display avatar url => affiche photo de profil ! 
                .setTimestamp();  // date + heure du message
      message.channel.send({ embeds: [AvatarMsg] }); // notre message embed a prit tous les parametres : go les afficher !
   }
   if(args[1]=="move"){
    // nc move @shhocs caca
    if(!args[2]){
        message.channel.send("Il faut écrire le pseudo de la personne à mute après la commande.")

    }
    else if(!args[3]){
        message.channel.send("Il faut écrire le channel de destination après le pseudo.")

    }
    else{
        const membre = message.mentions.members.first()
        //const channel = client.channel.find(args[3])
        console.log(membre)
        membre.voice.setChannel("972271868662919229")
        //.then(() => console.log('${membre.displayName} a ete move vers ${channel}'))
        //.catch(console.error);
    }

}

  }
})


  /*

  
*/
const Discord = require('discord.js');
const Voice = require('@discordjs/voice');

const prefix= 'rc';
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.once('ready', () => {
    console.log('READY');
});
let dico= ["fdp","fils de pute","f*p","***"];
client.on('message', (message) => {
    var check = dico.some(element => message.content.toLowerCase().includes(element));
    //console.log(check);
    var isbot= message.author.username == 'RACISMO';
    /*if (check && !isbot){
        message.delete();
        message.channel.send(message.author.username+' a écrit: ||"'+ message.content+'"||').then((message) => {
            console.log("hihi");
            message.reply('toi meme fils de flute',{tts:true});
        });
        message.channel.send({embeds:[bigMessage]});
    }*/
    let args = message.content.split(' ');
    let VoiceChannel = message.member.voice;
    if(args[0]==prefix){
        switch(args[1]){
            case 'join':
                const connect= Voice.joinVoiceChannel({
                    channelId: VoiceChannel.channelId,
                    guildId: VoiceChannel.guild.id,
                    adapterCreator: VoiceChannel.guild.voiceAdapterCreator,
                });
                break;
            case 'degage':
                const connection = Voice.getVoiceConnection(VoiceChannel.guild.id);
                connection.destroy();
                break;
            case 'send': 
                message.channel.send('coucou',{tts:true});
                break;
            case 'event':
                var event= new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle(args[2])
                        .setDescription(args[3])
                        .addField(args[4],args[5])
                        .setImage(args[6])
                        .setTimestamp()
                        .setFooter({text:message.author.username, iconURL: message.author.displayAvatarURL});
                message.channel.send({embeds:[event]});
                break;
            default:
                break;
        }
    }
});
const bigMessage = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('NOUVEAU FDP')
                .setDescription('FDP FDP FDP FDP')
                .setThumbnail('http://www.mon-diplome.fr/Diplome/700-900852-Prix-du-FDP-de-l-annee.jpg')
                .addFields(
                    { name: '1er', value: 'Ayuub' },
                    { name: '\u200B', value: '\u200B' },
                )
                .setImage('https://risibank.fr/cache/medias/0/17/1709/170907/full.png')
                .setTimestamp()
                .setFooter({ text: 'SALE CHIEN', iconURL: 'https://risibank.fr/cache/medias/0/17/1709/170907/full.png' });

                
client.login('OTcxOTA5OTIwMjkzMjY5NTE0.YnRXpg.pB8ZEIiZ39HDxw_AgFGob0jJ0mk');
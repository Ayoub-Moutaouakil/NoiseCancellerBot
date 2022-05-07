module.exports = async message => {
// commande pour que le bot join le bon channel 
const connection = await message.member.voice.channel.join;
if(!connection){ // si problème de connection
    return message.reply('VA DANS UN SALON GROS FDP'); // on répond
}


}

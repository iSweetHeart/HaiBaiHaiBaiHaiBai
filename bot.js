const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`NexaL | 😉 `,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('message', msg => {
  if (msg.content === '-invite') {
    msg.reply('https://discordapp.com/oauth2/authorize?client_id=471458890232496130&scope=bot&permissions=2146958591');
  }
});
client.on('message', message =>{
    let args = message.content.split(' ');
    let prefix = '-';
    
    if(args[0] === `${prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
  });

module.exports.run = async (client, message, args) => {


    const Discord = require("discord.js");
    const superagent = require("superagent");
    
    exports.run = async (bot, message, args) => {
    
        let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!hugUser) return message.channel.send("Make sure you mention someone!");
    
        const {body} = await superagent
        .get(`https://nekos.life/api/v2/img/hug`);
    
        let hugEmbed = new Discord.RichEmbed()
        .setTitle("Hug! c:")
        .setDescription(`**${message.author.username}** hugged **${message.mentions.users.first().username}**!`)
        .setImage(body.url)
        .setColor("RANDOM")
        .setFooter("Bot Version: 0.0.4", bot.user.displayAvatarURL);
    
        message.channel.send(hugEmbed)
    
    }







}

module.exports.help = {
  name: "hug"
}
client.on('ready', () => {
     client.user.setActivity("You",{type: 'WATCHING'});

});
client.login(process.env.BOT_TOKEN);

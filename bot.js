const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`NexaL`,"http://twitch.tv/S-F")
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
client.on('message',   eyad =>{
    
  var  args = eyad.content.split(" ").slice(2).join(" ")
  var men = eyad.mentions.users.first()|| client.users.get(eyad.content.split(' ')[1])
  var  mas = eyad.author
                            if(eyad.content.startsWith(prefix + 'sar7')) {
                            if(eyad.channel.type === "dm"){
if(!args) return  eyad.channel.send(":black_medium_square: **enter Your Message**");
if(!men) return  eyad.channel.send(":black_medium_square:**enter The id of the user u want to send the message to him/her** ");
                    var currentTime = new Date(),
          Year = currentTime.getFullYear(),
          Month = currentTime.getMonth() + 1,
          Day = currentTime.getDate();
   var eyadandr3d = new Discord.RichEmbed()
   .setAuthor(eyad.author.username , eyad.author.avatarURL)
   .setThumbnail(men.avatarURL)
   .setDescription(`**:black_medium_square:  Are You Sure About  The Message ?  \nmessage content : ${args}**`)
   .setTimestamp() 
   .setFooter(`- By , message.author.name .`)
   eyad.channel.send(eyadandr3d).then(message => {
message.react('✅').then(r=>{
message.react('❌').then(r=>{            
  var kk = (reaction, user) => reaction.emoji.name === '✅' && user.id === eyad.author.id;    
  var nn = (reaction, user) => reaction.emoji.name === '❌' && user.id === eyad.author.id;
  var kkk = message.createReactionCollector(kk, { time: 60000 });
  var nnn = message.createReactionCollector(nn, { time: 60000 });
kkk.on("collect", r => {
        const embed = new Discord.RichEmbed()
             .setThumbnail("https://cdn.discordapp.com/attachments/462960527866593292/477990258974392320/uZspT2df_400x400.jpg")   
             .setColor("RANDOM")
             .addField('**• Hi , ** ', `<@${men.id}>` , true)
                  .addField('**• Some One Send You A Secret Nessage **' ,       ` __${args}__ ` , true)
                  .addField('**• The Date Of The Secret Message**' , Day + "-" + Month + "-" + Year , true)
        client.users.get(men.id).sendEmbed(embed)
        eyad.reply(`Done, I Sent The Secret Message to Him/Her \n <@${men.id}>`)
message.delete()
        eyad.delete();
})
nnn.on("collect", r => {
message.delete()
eyad.reply("`Cancled`")
eyad.delete();
})
})
}) 
})
}
}
});
client.login(process.env.BOT_TOKEN);

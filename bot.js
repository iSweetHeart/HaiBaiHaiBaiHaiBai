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
client.on('ready', () => {
     client.user.setActivity("YOU",{type: 'WATCHING'});

});
client.on('message' , async (message) => {
 if (message.content.startsWith('-ques')) {

let color = '0xffffff'

      const { body } = await superagent
    .get('https://yesno.wtf/api/');
    if(body.answer === 'yes') color = '0x01DF01';
    if(body.answer === 'no') color = '0xFF0000';
    const embed = new Discord.RichEmbed()
    .setColor(color)
    .setImage(`${body.image}`)
    message.channel.send(`**The magic API says:** **${body.answer}**`, {embed});

}
});
client.on('message', msg => {
  if (msg.content === 'Taffie') {
    msg.reply(':heart:');
  }
});
client.on('message', message => {
    
    if (message.content === "emoji") {
        setInterval(function(){
        message.edit('😂') 
        message.edit('🙉')   
        message.edit('🔥')
        message.edit('😠')
        message.edit('🔥 🌶')
        message.edit('🙃')
        message.edit('☠')
        message.edit('✨')
        message.edit('😐')
        message.edit('😍')
        message.edit('❤')
        message.edit('👌:skin-tone-2:')
        message.edit('🌚')
        message.edit('🌹')
        message.edit('😒')
        message.edit('🐸')
        message.edit('🍉')
        message.edit('🚨')
        message.edit('😱')
        message.edit('😡')        
        message.edit('🤑')
        message.edit('😖')
        message.edit('😚')
        message.edit('🕊')
        message.edit('☄')
           message.edit('🐶')
        message.edit('🚜')    
        message.edit('🍫')
        message.edit('👇:skin-tone-2:')
        message.edit('🕹')
        message.edit('🌌 ')
        message.edit('💋 ')
           message.edit('🤸')
        message.edit('🙍:skin-tone-2:')    
        message.edit('😦')
        message.edit('👈:skin-tone-2:')
        message.edit('💓')
        message.edit('☺')
        message.edit('💗')
        message.edit('🌸')


        
        
        }, 1000)
    }
});
client.on('message', message => {
  if(message.content.startsWith ("-marry")) {
  if(!message.channel.guild) return message.reply('** This command only for servers **')
  var proposed = message.mentions.members.first()
 
  if(!message.mentions.members.first()) return message.reply(' 😏 **u must mention someone !**').catch(console.error);
  if(message.mentions.users.size > 1) return message.reply(' 😳 **Choose One Only**').catch(console.error);
   if(proposed === message.author) return message.reply(`**Woman ? **`);
    if(proposed === client.user) return message.reply(`** Do U want to marry me ? **`);
          message.channel.send(`**${proposed} 
Want To Accept ? ${message.author} 
u Have 15 sec !  
Type Yes Or No**`)

const filter = m => m.content.startsWith("Yes");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
message.channel.send(` **${message.author} and ${proposed} Congrats :heart: , have a nice time togther :heart:** `);
})

const filte = m => m.content.startsWith("No");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
message.channel.send(`  **${message.author} Oh.. Sorry ${proposed} Didnt Accept..** `);
})
    
}
});
client.login(process.env.BOT_TOKEN);

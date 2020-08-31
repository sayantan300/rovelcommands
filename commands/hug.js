let user = message.mentions.users.first();
 
   if (user) {
    fetch("https://nekos.life/api/v2/img/hug").then(r => r.json()).then(d => {
     let embed = new Discord.MessageEmbed()
      .setTitle(`**${message.author.username}** hugged **${user.username}**`)
      .setColor("RANDOM")
      .setImage(d.url);
     message.channel.send(embed);
    })
   }
  if(!user){
   message.reply("whom do you want to hug ?");
 }
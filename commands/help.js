const helpembed = new Discord.MessageEmbed()
   .setColor('#ff0000')
   .setTitle('Rovel Help')
   .setURL('https://sayantan300.github.io/rovelbot')
   .setDescription(`the ones written in brackets are shortform to write the commands for your ease`)
   .setThumbnail('https://cdn.discordapp.com/avatars/603213294265958400/3eb7bbbf8ec05bd62da74a701cd75136.webp')
   .addFields({ name: '😎 Normal commands', value: '`ping,beep,hi,lol`' },
    {
     name: '👍 Useful commands',
     value: '`avatar,math,del,sp,bl,dm,call,en,de,update,badge,8ball,qrcode,enchant,unenchant,weather,colorit,sshot,shorten,tohtml,tomarkd,gif`'
    },
    {
     name: '🤖 Console commands',
     value: '`echo,console,eval(only for sponsored ones...),whoami`'
    },
    {
     name: '🔍 Search commands',
     value: '`google,urban,wiki,yt,ask,js help`'
    }, { name: '☢️ Miscellaneous commands', value: '`swag,fuck,iloveu`' },
    {
     name: '⚙️ Support',
     value: '`help,bug,invite,addbot,tos,test`'
    },
    { name: '||🖕|| Adult/Anime (Allowed only in Nsfw channels)', value: '||waifu,neko,hentai,tits||' }, 
    { name: '👑 Moderation', value: '`kick,ban,del`' },
    { name: '🎶 Music Player', value: '`loop(l),np,pause,play(p),playlist(pl),pruning,queue(p),remove,resume(r),search,shuffle,skip(s),skipto(st),stop,volume(v)`' }, 
    { name: '😆 Fun Commands', value: '`meme,quiz,minesweeper(ms),minesweeperraw(msraw),seefor,chat,seefor,anime,manga`' },
    { name: '🤗 Social commands', value: '`hug,kiss`'},
    { name: '🗣️ Text-to-speech ', value: '`say,close,aeiou,lang,langs,speed`' },

   )
   .setImage('https://cdn.discordapp.com/avatars/603213294265958400/3eb7bbbf8ec05bd62da74a701cd75136.web')
    .setTimestamp() 
    .setFooter(`created by ROVEL TEAM`);

  message.channel.send(helpembed);
let gi = message.content;
  gi = gi.replace(`${prefix}gif `,"");
  if(gi===`${prefix}gif`){
   message.reply('Give me a word/phrase to search a gif on...');
   return;
  }
  message.channel.bulkDelete(1);
  gifs.query(gi).then(body => message.channel.send(body));
let talk = message.content;
  talk = talk.replace(`${prefix}chat `, '');
  if (talk === `${prefix}chat`) {
   message.channel.send('You can\'t chat with a word, right?');
   return;
  }

  ai.getReply(talk).then(reply => message.channel.send(reply));
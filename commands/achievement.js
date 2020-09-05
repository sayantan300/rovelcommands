try {
   let name = message.content;
   name = name.replace(`${prefix}achievement `, '');
   if (name === `${prefix}achivement`) {
    message.channel.send(`Usage: \`${prefix}achievement <heading>,<body>,<any number between 1 & 39>\``);
    return;
   };
   let bru = name.split(',');

   if (bru === '' || bru[0] === '' || bru[1] === '' || bru[2] === '') {
    message.channel.send(`Usage: \`${prefix}achievement <heading>,<body>,<any number between 1 & 39>\``);
    return;
   }
   let head = bru[0].split(' ').join('+');
   let body = bru[1].split(' ').join('+');
   let pic = bru[2];
   let link = 'https://mcgen.herokuapp.com/a.php?i=' + pic + '&h=' + head + '&t=' + body;
   let em = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Achievement')
    .setImage(link);
   message.channel.send(em);
  }
  catch (e) {
   message.channel.send(`Usage: \`${prefix}achievement <heading>,<body>,<any number between 1 & 39>\``);
  }
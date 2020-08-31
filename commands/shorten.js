let link = message.content;
  link = link.replace(`${prefix}shorten `, '');


  if (link === `${prefix}shorten`) {
   message.channel.send('Please give me a url starting with https.');
   return;
  }
  if (!(link.startsWith('https')) || !(link.startsWith('http'))) {
   message.channel.send('Thats not a valid url, it should start with https or https');
   return;
  }
  if ((link.startsWith('https')) || link.startsWith('http')) {

   shortUrl.short(link, function(err, url) {
    message.channel.send("The shortened link is **" + url + "**");
    return;
   });
  }
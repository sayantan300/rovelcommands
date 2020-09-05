let link = message.attachments.first().url
  if (link === '') {
   message.reply('send an attachment please');
   return;
  }
  (async function() {
   var resp = await deepai.callStandardApi("colorizer", {
    image: link,
   });
   message.channel.send(resp.output_url);
  })()
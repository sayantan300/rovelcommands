 let see = message.content;
  see = see.replace(`${prefix}seefor `, '');
  if (see === `${prefix}seefor`) {
   message.channel.send('Usage: `R!seefor <any thing/word>`');
   return
  }
  (async function() {
   var resp = await deepai.callStandardApi("text2img", {
    text: see,
   });
   message.channel.send(resp.output_url);
  })()
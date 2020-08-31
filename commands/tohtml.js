let md = message.content;
  md = md.replace(`${prefix}tohtml `,'');
  if(md===`${prefix}tohtml`){
   message.channel.send('Please give markdown codes here or send me the link of a GitHub public repo\'s raw user content (starting with `https://raw.githubusercontent.com/`)');
   return;
  }
  if(md.startsWith('https://raw.githubusercontent.com/')){
   try{
   fetch(md).then(r=>r.text()).then(tt=>{
   message.channel.send('Processing, Please wait to upload my file...');
var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    text      = tt,
    html      = converter.makeHtml(text);

bin.post(html).then(body => {
   message.channel.send("The HTML file code is in: "+body);
   
});
   });
   return;
  }
   catch(e){
    message.channel.send('Please provide a valid link');
    return;
   }
  }
  if(!md.startsWith('https://raw.githubusercontent.com/')){
   var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    text      = md,
    html      = converter.makeHtml(text);
    message.channel.send('Processing, Please wait to upload my file...');
    bin.post(html).then(body => {
   message.channel.send("The HTML file code is in: "+body);
   return;
});
  }
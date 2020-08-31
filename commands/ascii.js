let asc = message.content;
  asc = asc.replace(`${prefix}ascii `,'');
  if(asc===`${prefix}ascii`){
   message.channel.send(`Usage: \`${prefix}ascii <text>\``);
   return
  }
  var figlet = require('figlet');
 
figlet(asc, function(err, data) {
    if (err) {
        message.channel.send('Something went wrong...');
        console.log(err);
        return;
    }
    if(data.length>=200){
     message.channel.send('Try to give smaller text, the ascii output is too big to display here 😟');
     return;
    }
    message.channel.send('```'+data+'```');
});
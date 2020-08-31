message.channel.send("Test is **starting**!").then(editme => {
  setTimeout(()=>{ editme.edit("Test **STARTED**!");},2000);
  });
  
  setTimeout(()=>{message.channel.send("Testing **console**").then(meed => {
   console.log(`testing by ${message.author.tag}`);
   meed.edit("<a:tick:747365418083024946> **SUCCESSFULLY** tested console.");
  });},5000);
  setTimeout(()=>{message.channel.send("Testing **my permissions**").then(meed => {
   if(message.guild.me.hasPermission("ADMINISTRATOR")){
    meed.edit("<a:tick:747365418083024946> I've got **admin**, which is **okay**");
   }
   if(!message.guild.me.hasPermission("ADMINISTRATOR")){
    meed.edit("Uh oh! I don't have **ADMIN** perms, so all the functions wont be available in this serve${prefix}")
   }
  });},9000);
 setTimeout(()=>{ message.channel.send("Testing **API**").then(meed => {
   fetch("https://raw.githubusercontent.com/sayantan300/guidebot/master/package.json").then(r=>r.json()).then(d=>{
    d = JSON.stringify(d.dependencies)
    meed.edit("<a:tick:747365418083024946> **RESPONSE** GOT!!!\n"+d);
   })
  });},13000);
  setTimeout(()=>{message.channel.send("Testing **security**").then(meed=>{
   meed.edit("checking bad-words");
   meed.edit("checking pingers");
   meed.edit("checking everything else left...");
   meed.edit("Done.");
   meed.edit("<a:tick:747365418083024946> **SECURITY** is updated to **2.0**");
  });},17000);
 setTimeout (()=>{ message.channel.send("EVERYTHING IS WORKING **FINE**").then(meed=>{
   meed.edit("ALL SYSTEMS **OPERATIONAL**");
   meed.edit(`BOT IS ON FROM ${Math.floor(os.uptime()/1000)} seconds`);
     });},23000);
   setTimeout (()=>{  message.channel.send("<a:tick:747365418083024946> TEST **DONE**");
 },27000);
  
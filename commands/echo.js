let con = message.content;
if(con == `${prefix}echo`){
 message.channel.send("Give me some **text** to say!");
 return;
}
let tent = con.replace(prefix,'');
message.bulkDelete(1);
message.channel.send(tent);
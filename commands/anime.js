let name = message.content;
  name = name.replace(`${prefix}anime `,'');
  if(name===`${prefix}anime`){
   message.channel.send('Try to search for an anime, maybe **lbx**?');
   return;
  }
  kitsu.searchAnime(name, 0).then(results => {
    var anime = results[0].attributes;
    if(!anime){
     message.channel.send(`No results found for **${name}** , maybe try smaller words?`);
     return;
    }
    var title = anime.titles.en || anime.canonicalTitle || anime.titles.en_jp;
    var embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(title)
    .setURL(`https://kitsu.io/anime/${anime.slug}`)
    .setImage(anime.posterImage.small)
    .setDescription(anime.synopsis)
    .addFields({name: "Rating: ", value: `${anime.averageRating || 0}% Approval`},
    {name: "Episodes: ", value: `${anime.episode || 0} (${anime.subtype})`},
    { name: "Status:", value: anime.status == "tba" ? "TBA" : `${anime.status.charAt(0).toUpperCase()}${anime.status.substr(1).toLowerCase()}`},
    {name: "Age Rating: ", value: anime.ageRating},)
    .setTimestamp()
    .setFooter(`Requested by ${message.author.username}`);
    message.channel.send(embed);
    
});
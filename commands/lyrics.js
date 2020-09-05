const Genius = new(require("genius-lyrics")).Client("fDNoSsT5VN-J6g8drr4U9vRzZ3c5I-qOjCbrglLbJT_hTeu9G7U-Hq-aw-wMAD7N");
  let ly = message.content;
  ly = ly.replace(`${prefix}lyrics `, '');
  if (ly === `${prefix}lyrics`) {
   message.channel.send('Usage: `'+prefix+'lyrics <song name>`');
   return
  }
  Genius.tracks.search(ly)
   .then(results => {
    const song = results[0];
    song.lyrics()
     .then(lyrics => {
      message.channel.send('\t***' + ly + '***');
      let str = lyrics;
      for (let i = 0; i < str.length; i += 2000) {
       const toSend = str.substring(i, Math.min(str.length, i + 2000));
       message.channel.send(toSend);
      }
     })
   })
   .catch(err => message.channel.send(err));
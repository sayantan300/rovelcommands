message.channel.send("Pinging...").then(sent => {
   sent.edit(
    `<a:heartbeat:712134060566118471> Pong! Took ${sent.createdTimestamp -
          message.createdTimestamp}ms`
   );
  });
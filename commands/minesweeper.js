let oof = message.content;
  let ad = oof.replace(`${prefix}minesweeper `, '');
  ad = ad.replace(`${preix}ms `, '');
  let lm = ad.split(' ')
  const rows = parseInt(lm[0]);
  const columns = parseInt(lm[1]);
  const mines = parseInt(lm[2]);

  if (!rows) {
   return message.channel.send(':warning: Please provide the number of rows.');
  }

  if (!columns) {
   return message.channel.send(':warning: Please provide the number of columns.');
  }

  if (!mines) {
   return message.channel.send(':warning: Please provide the number of mines.');
  }

  const minesweeper = new Minesweeper({ rows, columns, mines });
  const matrix = minesweeper.start();

  return matrix ?
   message.channel.send(matrix) :
   message.channel.send(':warning: You have provided invalid data.');

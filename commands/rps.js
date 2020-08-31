let rps = message.content;
 rps = rps.replace(`${prefix}rps `,'');
 if(rps===`${prefix}rps`){
  message.channel.send(`You didn\'t throw anything, so I **win**, try saying rock/paper/scissors along with \`${prefix}rps\`.`);
  return;
 }
 const choices = [
  "rock",
  "paper",
  "scissors"
  ];
 
 let choice = rps;
 const response = choices[Math.floor(Math.random() * choices.length)];
		if (choice == 'rock') {
			if (response == 'rock') return message.reply('Rock! Aw... A tie...');
			if (response == 'paper') return message.reply('Paper! Yes! I win!');
			if (response == 'scissors') return message.reply('Scissors! Aw... I lose...');
		}
		if (choice == 'paper') {
			if (response == 'rock') return message.reply('Rock! Aw... I lose...');
			if (response == 'paper') return message.reply('Paper! Aw... A tie...');
			if (response == 'scissors') return message.reply('Scissors! Yes! I win!');
		}
		if (choice == 'scissors') {
			if (response == 'rock') return message.reply('Rock! Yes! I win!');
			if (response == 'paper') return message.reply('Paper! Aw... I lose...');
			if (response == 'scissors') return message.reply('Scissors! Aw... A tie...');
		}
let wea = message.content;
  wea = wea.replace(`${prefix}weather `, '');
  if (wea === `${prefix}weather`) {
   message.channel.send('Usage: `'+prefix+'weather <any place on earth>`');
   return
  }
  wea = wea.toLowerCase();
  let place = wea.split(' ').join('+');
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${place}&units=imperial&appid=7e5231e4612011c3f178dfb61c66cbff`;
  fetch(url).then(r => r.json()).then(weather => {
   if (weather.main == 'undefined') {
    message.reply('Looks like that place is existing on your dream and not on Earth. Sorry we can\'t connect to your dreams...');
    return
   }
   wheather = JSON.stringify(weather);
   let weatherembed = new Discord.MessageEmbed()
    .setTitle(`Weather for ${weather.name}`)
    .setColor("RANDOM")
    .addFields({
      name: ':white_sun_rain_cloud:  Conditions',
      value: ` ${wheather}`,
     },

     // The current temperature
     {
      name: ':thermometer: Temperature',
      value: `${weather.main.temp} °F `,
     },

     // The current humidity
     {
      name: ':droplet: Humidity',
      value: `${weather.main.humidity} % `,
     },

     // The current number of clouds
     {
      name: ':cloud: Clouds',
      value: `${weather.clouds.all} %`,
     },

     // The current wind speed
     {
      name: ':dash: Wind Speed',
      value: ` ${weather.wind.speed} mph`,
     },
    )
    .setFooter('Current Forecast');
   message.channel.send(weatherembed)
  });

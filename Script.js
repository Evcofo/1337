const VkBot = require('node-vk-bot-api') // npm install node-vk-bot-api --save						
const bot = new VkBot({
  token: '2131212132121213', // ТОКЕН ГРУППЫ
  group_id: 123132131,	// ID ГРУППЫ ВК
  execute_timeout: 50, // in ms   (50 by default)
  polling_timeout: 25, // in secs (25 by default)
})



bot.command('Привет', function(ctx) {
	ctx.reply('Здорова, работяга')
})




bot.startPolling()
console.log('Бот запущен. Пулл начался.')

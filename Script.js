const VkBot = require('node-vk-bot-api')					// npm install node-vk-bot-api --save						
const bot = new VkBot({
  token: 'e6fbd4d8d69212a3b5a4a3a9c50fcc8bcb6c1fcaae0f556ff6425780c5ef1e6a5b52e583035bae6677615', 			// ТОКЕН ГРУППЫ
  group_id: 182147046,									// ID ГРУППЫ ВК
  execute_timeout: 50, // in ms   (50 by default)
  polling_timeout: 25, // in secs (25 by default)
})



bot.command('Привет', function(ctx) {
	ctx.reply('Здорова, работяга')
})




bot.startPolling()
console.log('Бот запущен. Пулл начался.')
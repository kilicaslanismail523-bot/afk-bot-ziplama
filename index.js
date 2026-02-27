const mineflayer = require('mineflayer')
function createBot() {
    const bot = mineflayer.createBot({
        host: 'RamazanSMP123.aternos.me', // BURAYA KENDI ATERNOS IP'NI YAZ
        username: 'ZipliyanBot'
    })
    bot.on('spawn', () => {
        setInterval(() => {
            bot.setControlState('jump', true)
            setTimeout(() => bot.setControlState('jump', false), 500)
        }, 10000) // 10 saniyede bir zıplar
    })
    bot.on('end', () => setTimeout(createBot, 5000))
}
createBot()

const mineflayer = require('mineflayer')
const http = require('http')

// RENDER'IN İSTEDİĞİ PORT BAĞLANTISI (PORT BINDING) BURASI:
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Bot Aktif ve Zipliyor!\n');
});

// Render'ın otomatik atadığı portu kullan, yoksa 3000'i kullan
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Render port baglantisi ${PORT} uzerinden saglandi.`);
});

// MINECRAFT BOT KISMI:
function createBot() {
    const bot = mineflayer.createBot({
        host: 'RamazanSMP.aternos.me', // BURAYA KENDI SUNUCU ADINI YAZ
        username: 'AFK_Ziplar_724'
    })

    bot.on('spawn', () => {
        console.log('Bot sunucuya girdi!');
        setInterval(() => {
            bot.setControlState('jump', true)
            setTimeout(() => bot.setControlState('jump', false), 500)
        }, 10000)
    })

    bot.on('end', () => {
        console.log('Baglanti kesildi, 5 saniye sonra tekrar denenecek...');
        setTimeout(createBot, 5000);
    })

    bot.on('error', (err) => console.log('Hata:', err))
}

createBot()

require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TELEGRAM_BOT, { polling: false });

const routes = [
    { url: '/', priority: 1.0 },
    { url: '/politika', priority: 0.8 },
    { url: '/soglashenie', priority: 0.8 }
];

// bot.on('message', (msg) => {
//     const chatId = msg.chat.id; // Extract the chat ID from the message object

//     // Respond to the user
//     bot.sendMessage(chatId, 'Hello! You wrote to the bot. The chat ID: ' + chatId);
// });

function sendMessageToUser(chatId, message) {
    bot.sendMessage(chatId, message)
        .then(sentMessage => {
            console.log('Message sent:', sentMessage.text);
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
}

  
function generateSitemap() {
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
    routes.forEach(route => {
      sitemap += `<url>\n`;
      sitemap += `  <loc>https://dekorativniekamni.ru/${route.url}</loc>\n`;
      sitemap += `  <priority>${route.priority}</priority>\n`;
      sitemap += `</url>\n`;
    });
  
    sitemap += '</urlset>';
  
    return sitemap;
}

// Export the utility functions
module.exports = {
    sendMessageToUser,
    generateSitemap
};
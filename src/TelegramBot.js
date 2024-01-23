const TelegramBot = require('node-telegram-bot-api');

const token = '6449286041:AAHA1VJlhGPS3QKrpeGowx9wGPjhgJ6W53Q';

const bot = new TelegramBot(token);

// Malumotlarni yuborish funktsiyasi
const sendToTelegram = (message) => {
  const chatId = '5659934636'; 
  bot.sendMessage(chatId, message);
};

export default sendToTelegram;
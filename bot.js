const fetch = require('node-fetch');
const TelegramBot = require('node-telegram-bot-api');

// replace 'TOKEN' with your Bot's API token
const bot = new TelegramBot('6778420907:AAHnByc5pAji4fbWEe4alvqsAK7QYzFoEkM', {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const serialNumber = msg.text;

    // replace 'url' with the URL of your raw text file in your GitHub repository
    fetch('https://github.com/randallerasmus/kfmcompetition/blob/main/serial_numbers.txt')
        .then(response => response.text())
        .then(data => {
            const serialNumbers = data.split('\n');
            if (serialNumbers.includes(serialNumber)) {
                bot.sendMessage(chatId, "A match was found.");
            } else {
                bot.sendMessage(chatId, "No match was found.");
            }
        });
});

const { Client, Intents } = require('discord.js');
const { token, prefix } = require('./config.json');

const bot = new Client({ intents: [Intents.FLAGS.GUILDS] });
bot.once('ready', () => console.log("Record Bot is up!"));
bot.login(token);
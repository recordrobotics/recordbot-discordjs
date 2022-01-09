const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create client instance
const bot = new Client({ intents: [Intents.FLAGS.GUILDS] });
bot.once('ready', () => console.log("Record Bot is up!"));
bot.login(token);

// Register commands
bot.commands = new Collection();
const cmdFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (let file of cmdFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.data.name, command);
}

// Interaction handler
bot.on("interactionCreate", async event => {
    if (!event.isCommand()) return;
    let command = bot.commands.get(event.commandName);
    if (!command) return;

    try {
        await command.run(event);
    } catch (err) {
        return event.reply("An error occured while executing the command");
    }
})
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports.data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pings the bot")
    .setDefaultPermission(true);

module.exports.run = async (event) => {
    await event.reply({ content: "Pong!", ephemeral: false });
}
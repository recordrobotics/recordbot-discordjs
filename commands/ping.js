const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports.data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pings the bot")
    .setDefaultPermission(true);

module.exports.run = async (event) => {
    let latency = Date.now() - event.createdTimestamp;
    await event.reply({ content: `Pong. Latency: ${latency} ms.`, ephemeral: false });
}
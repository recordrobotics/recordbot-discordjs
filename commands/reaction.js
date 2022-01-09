const { SlashCommandBuilder } = require("@discordjs/builders");

// Dev command, not to be used for real stuff

module.exports.data = new SlashCommandBuilder()
    .setName("reaction")
    .setDescription("Testing command for reactions.");

module.exports.run = async (event) => {
    let message = await event.reply({ content: `Choose`, ephemeral: false, fetchReply: true });
    message.react("✅");
    message.react("❌");
}
const {
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'invite',
    category: 'Info',
    description: 'Returns the bot\'s invite.',
    aliases: ['invite'],
    usage: 'invite',
    userperms: [],
    botperms: [],
    run: async (client, message, args) => {

        message.channel.send('Here is my invite <https://bit.ly/ticketbot_max> or <https://discord.com/oauth2/authorize?client_id=777611563170922497&permissions=67365937&scope=bot>')
    },
};
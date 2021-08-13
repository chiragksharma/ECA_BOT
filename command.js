// module.exports = {
//     name: 'command',
//     cooldown: 5,
//     description: 'Embeds!',
//     execute(message, args, Discord) {
//         const newembed = new Discord.MessageEmbed()
//             .setColor('#99E6FF')
//             .setTitle('୨୧ Welcome to ECA SERVER ୨୧')
//             .setImage('https://www.icegif.com/wp-content/uploads/icegif-87.gif')
//             // .setAuthor('<@${guildMember.user.id}>', [iconurl], [url])
//             .setTimestamp(timestamp = Date.now())
//             .setDescription(`- - - - - - - - - - - - - - - - - - - - - - - -
//                 × make sure you read the #📝-rules
//                 × grab some #🔖-self-roles
//                 × chat in #💬-general
//                 × enjoy you stay 
//                 - - - - - - - - - - - - - - - - - - - - - - - -`);
// .addFields({
//     name: 'Field 1',
//     value: 'Hello world',
//     inline: true,
// }, {
//     name: 'Field 2',
//     value: 'Hello world',
//     inline: true,
// }, {
//     name: 'Field 3',
//     value: 'Hello world',
//     inline: true,
// }, {
//     name: 'Field 4',
//     value: 'Hello world',
// })
//         message.channel.send(newembed);


//     },
// };
const { prefix } = require('./config.json')

module.exports = (client, aliases, callback) => {
    if (typeof aliases === 'string') {
        aliases = [aliases]
    }

    client.on('message', (message) => {
        const { content } = message

        aliases.forEach((alias) => {
            const command = `${prefix}${alias}`

            if (content.startsWith(`${command} `) || content === command) {
                console.log(`Running the command ${command}`)
                callback(message)
            }
        })
    })
}
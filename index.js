const Discord = require('discord.js');
const client = new Discord.Client();
const Enmap = require("enmap");
const canvacord = require("canvacord");
const ranking = require("./ranking");
ranking(client);

client.points = new Enmap({ name: "points" });
const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
    console.log('The client is ready!')
        // Set the client user's presence

    client.user.setStatus('idle');
    client.user.setActivity('ECA server ⎟ !help', { type: 'WATCHING' });


    command(client, 'embed', (message) => {


        const embed = new Discord.MessageEmbed()
            .setTitle('୨୧ Welcome to ECA SERVER ୨୧')

        .setAuthor(message.author.username)
            .setImage('https://www.icegif.com/wp-content/uploads/icegif-87.gif')
            .setTimestamp(timestamp = Date.now())
            .setColor('#00AAFF')
            .setDescription(' --------------------------------------------- \n * MAKE SURE TO READ RULES \n * SELECT YOUR ROLES \n *ENJOY YOUR STAY ')



        message.channel.send(embed)
    })


})

// client.on('guildMemberAdd', member => {
//     const channel = member.guild.channels.cache.find(channel => channel.name === "👋🏻│welcome")
//     if (!channel) return;

//     const joinembed = new Discord.MessageEmbed()



//     .setTitle(`୨୧ Welcome to ${member.guild.name} ୨୧`)

//     .setAuthor(`${member.guild.name}`)
//         .setImage('https://www.icegif.com/wp-content/uploads/icegif-87.gif')
//         .setTimestamp(timestamp = Date.now())
//         .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
//         .setColor('#00AAFF')
//         .setDescription(` Hello <@${member.user.id}>, Welcome to **${member.guild.name}**. \n--------------------------------------------- \n 📝 MAKE SURE TO READ RULES IN <#871127928883282010> \n \n 💁🏻‍♂️  SELECT YOUR ROLES IN <#871343773244862535> \n \n  🏖 ENJOY YOUR STAY `)



//     channel.send(joinembed)
// });
client.on('guildMemberAdd', async member => {
    if (member.guild.id !== "865981625783156776") return;
    const channel = member.guild.channels.cache.find(channel => channel.name === "👋🏻│welcome")
    const joinembed = new Discord.MessageEmbed()



    .setTitle(`୨୧ Welcome to ${member.guild.name} ୨୧`)

    .setAuthor(`${member.guild.name}`)

    .setTimestamp(timestamp = Date.now())
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
        .setColor('#00AAFF')
        .setDescription(` Hello <@${member.user.id}>, Welcome to **${member.guild.name}**. \n--------------------------------------------- \n 📝 MAKE SURE TO READ RULES IN <#871127928883282010> \n \n 💁🏻‍♂️  SELECT YOUR ROLES IN <#871343773244862535> \n \n  🏖 ENJOY YOUR STAY `)
    channel.send(joinembed)

    const welcomeCard = new canvacord.Welcomer()
        .setUsername(member.user.username)
        .setDiscriminator(member.user.discriminator)
        .setAvatar(member.user.displayAvatarURL({ format: "png" }))
        .setColor("title", "#FFFFFF")
        .setColor("username-box", "#00AAFF")
        .setColor("discriminator-box", "#00AAFF")
        .setColor("message-box", "#f25767")
        .setColor("border", "#f52c5b")
        .setColor("avatar", "#550dd1")
        .setBackground("WELCOME (1).png")
        .setMemberCount(member.guild.memberCount)
    let attachment = new Discord.MessageAttachment(await welcomeCard.build(), "DC_1.png")
    member.guild.channels.cache.get("865981625783156778").send(member.user.toString(), attachment)
});
client.login(config.token)
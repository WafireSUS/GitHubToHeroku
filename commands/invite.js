const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");
const { MessageEmbed } = require("discord.js");

i18n.setLocale(LOCALE);

module.exports = {
  name: "invite",
  description: i18n.__('invite.description'),
  execute(message, args) {
    var permissions = 70282305;

    let invite1 = new MessageEmbed()
      .setTitle(`**Here is the Invite Link **`)
      .setDescription(
        `**Rồi sao, bạn đang chờ đợi điều gì? Mời tôi ngay hôm nay!** \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id={client_id}&permissions=${permissions}&scope=bot)`
      )
      .setURL(
        `https://discord.com/oauth2/authorize?client_id={client_id}&permissions=${permissions}&scope=bot`
      )
      .setColor("RANDOM");
    return message.channel.send(invite1);
  }
};

let Command = {};

// Properties
Command.Name = "ping";

// Methods
Command.Execute = (bot, message) => {
    message.channel.send("Pong!" + bot.user.tag);
};

module.exports = Command;
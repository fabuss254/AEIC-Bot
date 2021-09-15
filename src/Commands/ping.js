let Command = {};

// Properties
Command.Name = "ping";
Command.Aliases = ["p"];
Command.Description = "Pong!";

// Methods
Command.Execute = (bot, message) => {
    message.channel.send("Pong!" + bot.user.tag);
};

module.exports = Command;
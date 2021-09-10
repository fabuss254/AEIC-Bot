// ⚠️⚠️⚠️ N'OUBLIEZ PAS D'INSTALLER LES PACKAGES EN UTILISANT LA COMMANDE 'npm install <module_name> --save' ⚠️⚠️⚠️

require('dotenv').config(); // Permet d'utiliser les variables d'environnement

// CONSTANT
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const TOKEN = process.env.TOKEN;

const fs = require('fs');

const discord = require('discord.js');
const bot = new discord.Client({intents: [discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES]});

// SETUP BOT CUSTOM VARIABLES
bot.Commands = {};
bot.Prefix = '!';
bot.Prefixes = ['!', '$', '&'];

// FUNCTION DE BASE
async function getCommands() {
    var Files = fs.readdirSync('./src/Commands').filter(file => file.endsWith('.js'));
    for (let F in Files){
        var Command = require('./src/Commands/' + Files[F]);
        bot.Commands[Command.name] = Command;
    }
}

// SETUP BOT EVENTS
bot.on("messageCreate", function(msg){
    if (msg.author.bot) return;
    if (msg.content.startsWith(bot.Prefix)){
        var Command = msg.content.split(' ')[1];
        if (bot.Commands[Command]){
            bot.Commands[Command].Execute(bot, msg);
        }
    }
})

bot.on("ready", async function(){
    console.log("Bot is ready");
    bot.user.setActivity("!help");
})

// INITIALISATION

getCommands();
bot.login(TOKEN);
// ⚠️⚠️⚠️ N'OUBLIEZ PAS D'INSTALLER LES PACKAGES EN UTILISANT LA COMMANDE 'npm install <module_name> --save' ⚠️⚠️⚠️

require('dotenv').config(); // Permet d'utiliser les variables d'environnement

// CONSTANT
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const TOKEN = process.env.TOKEN || error('NO TOKEN PROVIDED.');

const express = require('express');
const discord = require('discord.js');

const app = express();
const bot = new discord.Client();

// FUNCTION DE BASE


// INITIALISATION
bot.login(TOKEN);
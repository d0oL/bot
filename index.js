// Importer dotenv pour charger les variables d'environnement depuis le fichier .env
require('dotenv').config();  // Charger le fichier .env

// Importer les classes nécessaires depuis discord.js
const { Client, GatewayIntentBits } = require('discord.js');

// Créer le client avec les bonnes intentions
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,          // Pour l'accès aux informations sur les serveurs
        GatewayIntentBits.GuildMessages   // Pour l'accès aux messages dans les serveurs
    ]
});

// Quand le bot est prêt, afficher un message dans la console (utilisation de clientReady)
client.once('clientReady', () => {
    console.log('Le bot est prêt!');
});

// Écouter les nouveaux messages
client.on('messageCreate', message => {
    if (message.content === '!hello') {
        message.channel.send('Bonjour!');
    }
});

// Connexion du bot avec son token à partir du fichier .env
client.login(process.env.DISCORD_TOKEN);  // Utiliser le token depuis .env
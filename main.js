const { Client, GatewayIntentBits } = require('discord.js');

// Set your bot token from the Discord Developer Portal
const TOKEN = 'YOUR_BOT_TOKEN';

// Set your prefix
const PREFIX = '?';

// Create a new Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
  ],
});

// Event: Bot is ready
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Event: Message received
client.on('messageCreate', (message) => {
  if (message.content.startsWith(PREFIX) && !message.author.bot) {
    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // Command: Display server stats
    if (command === 'serverstats') {
      const server = message.guild;
      const members = server.memberCount;
      const onlineMembers = server.members.cache.filter((member) => member.presence.status === 'online').size;
      message.channel.send(`Server Name: ${server.name}\nMembers: ${members}\nOnline Members: ${onlineMembers}`);
    }
  }
});

// Log in to Discord with your app's token
client.login(TOKEN);
￼Enter

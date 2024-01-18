const fs = require("fs");
const commands = [];
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

console.log("Loading commands...");

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
  
  console.log(`✅ Loaded command: ${command.data.name}`);
}


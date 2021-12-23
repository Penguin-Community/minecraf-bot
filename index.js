const mineflayer = require("mineflayer");
let options = {
  host: "penguinsmp.cf",
  username: "ServerOnlineBot",
  port: "26048",
  version: "1.17.1"
}
var bot = mineflayer.createBot(options);
start(bot)
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function start(bot){
  bot.once("spawn", async () => {
    console.log(`Spawned as ${bot.username}`)
    let x = 1
    while(x === 1){
    await bot.setControlState("forward", true)
    await wait(1000)
    await bot.setControlState("forward", false)
    await bot.setControlState("back", true)
    await wait(1000)
    await bot.setControlState("back", false)
    }
  });
  bot.on("kicked", console.log);
  bot.on("error", console.log);
  bot.on("end", () => {
    console.log("Bot Disconnected.")
    bot = mineflayer.createBot(options);
    start(bot);
  });
}

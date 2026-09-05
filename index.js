const { Bot } = require("grammy");
const http = require("http");

const token = process.env.BOT_TOKEN;
if (!token) {
  console.error("❌ BOT_TOKEN مفقود");
  process.exit(1);
}

const bot = new Bot(token);

bot.command("start", async (ctx) => {
  await ctx.reply("✨ أهلاً بك في بوت المحترف للتصميم! البوت يعمل الآن بنجاح تام.");
});

bot.on("message:text", async (ctx) => {
  await ctx.reply("💬 وصلتني رسالتك وسيتواصل معك المصمم قريباً.");
});

bot.start();
console.log("🤖 البوت يعمل الآن...");

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Bot is running successfully.");
}).listen(process.env.PORT || 3000);

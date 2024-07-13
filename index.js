require('dotenv').config();
const {Bot, GrammyError, HttpError} = require('grammy');

const bot = new Bot(process.env.BOT_API_KEY);

bot.api.setMyCommands([
    {
        command: 'start',
        description: 'start',
    },
]);

bot.command('start', async (ctx) => {
    await ctx.reply("Hi! My name is DJ Ton!🤩 My app is created for you to be able to listen to your favourite music in Telegram!🎧 So why don't you jump right into the app to check out what I've set up for you? 👀");
});

bot.on('message', async (ctx) => {
    await ctx.reply('ну хз');
});

bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`);
    const e = err.error;

    if (e instanceof GrammyError) {
        console.error("Error in request:", e.description);
    }
    else if (e instanceof HttpError) {
        console.error("Could not contact telegram:", e);
    }
    else {
        console.error("Unknown error:", e);
    }
});

bot.start();
const {
    Telegraf,
    Markup

} = require('telegraf')
require('dotenv').config()
const text = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(`welcome ${ctx.message.from.first_name ? ctx.message.from.first_name : "окупант"}`))
bot.help((ctx) => ctx.reply(text.command))

bot.command(`course`, async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>курсив</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('text', 'text'), Markup.button.callback('video', 'video')],
                [Markup.button.callback('start game', 'tasks'), Markup.button.callback('information', 'info')]
            ]
        ))

    } catch (e) {
        console.error(e)
    }
})

function addActionBot(name, src, text) {
    bot.action(name, async (ctx) => {
        try {
            await ctx.answerCbQuery()
            if (src !== false) {
                await ctx.replyWithPhoto({
                    source: src
                })
            }
            await ctx.replyWithHTML(text, {
                disable_web_page_preview: true
            })

        } catch (e) {
            console.error(e)
        }

    })
}

addActionBot('text', './img/1.png', text.text1)
addActionBot('video', './img/2.png', text.text2)
addActionBot('tasks', false, text.text3)
addActionBot('info', './img/1.png', text.text2)
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))


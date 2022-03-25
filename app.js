const {
    Telegraf,
    Markup

} = require('telegraf')

require('dotenv').config()

const text = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply(`welcome ${ctx.message.from.first_name ? ctx.message.from.first_name : "окупант"}`))
bot.help((ctx) => ctx.reply(text.command))

bot.command(`/game`, async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>Вгадай цифру</b>', Markup.inlineKeyboard(
            [
                [{text: '1', callback_data: "1"},{text: '2', callback_data: "2"},{text: '3', callback_data: "3"}],
                [{text: '4', callback_data: "4"},{text: '5', callback_data: "5"},{text: '6', callback_data: "6"}],
                [{text: '7', callback_data: "7"},{text: '8', callback_data: "8"},{text: '9', callback_data: "9"}],
                [{text: '0', callback_data: '0'}]
            ]

        ))
        await ctx.replyWithHTML('загадую циферку, вгадай її')


    } catch (e) {
        console.error(e)
    }
})
const randomNumber = Math.floor(Math.random() * 10);


function addActionBot(name, randomNumber) {
    bot.action(name, async (msg) => {
        try {
            console.log(msg.update.callback_query.data)
            // await  msg.answerCbQuery()
                if (name == randomNumber){
                    msg.reply(`молодець`)
                }else {
                    msg.reply(`спробуй ще раз (${randomNumber})`)
                }




        }
        catch (e) {
            console.error(e)
        }

    })
}

addActionBot('1', randomNumber)
addActionBot('2', randomNumber)
addActionBot('3', randomNumber)
addActionBot('4', randomNumber)
addActionBot('5', randomNumber)
addActionBot('6', randomNumber)
addActionBot('7', randomNumber)
addActionBot('8', randomNumber)
addActionBot('9', randomNumber)
addActionBot('0', randomNumber)
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))


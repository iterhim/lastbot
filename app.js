const TelegramBot = require('node-telegram-bot-api');

const token = '5291233984:AAEh-EBDPIjSJ19Urdc65-hAmE7o9FfAfCI';

const bot = new TelegramBot(token, {polling: true});

const cron = require('node-cron');

bot.setMyCommands([
    {command: '/start', description: 'запуск проги'},
    // {command: '/sayHi', description: 'привітатись'},
])

let right = 0, wrong = 0;

let task = {};
bot.on('message', async (msg) => {
        try {
            task.organization = cron.schedule('10 8 * 1-6,9-12 Monday-friday', () => {
                bot.sendMessage(chatId, 'прокидаємось на парии)))');
            }, {
                scheduled: true,
                timezone: "Europe/Kiev"
            });
            task.mon1 = cron.schedule('15 8 * 1-6,9-12 monday',  () => {
                bot.sendMessage(chatId, 'ПРОГРАМУВАННЯ ЛЕКЦІЯ:https://meet.google.com/apz-vckx-nqz');
            }, {
                scheduled: true,
                timezone: "Europe/Kiev"
            })
            task.mon2 = cron.schedule('0 45 9 * 1-6,9-12 monday',  () => {
                bot.sendMessage(chatId, 'ВИЩА МАТЕМ ЛЕКЦІЯ https://meet.google.com/tod-voqx-trq aбо КОМП\'ЮТЕРНА АРИФМЕТИКА ЛЕКЦІЯ:  https://meet.google.com/xjd-cjpg-ukg');
            }, {
                scheduled: true,
                timezone: "Europe/Kiev"
            })
            task.tue1 = cron.schedule('0 15 8 * 1-6,9-12 tuesday',  () => {
                bot.sendMessage(chatId, 'ФІЗИКА: https://meet.google.com/lookup/g2zadkf4lw?authuser=0&hs=179');
            }, {
                scheduled: true,
                timezone: "Europe/Kiev"
            })
            task.tue2 = cron.schedule('0 45 9 * 1-6,9-12 tuesday',  () => {
                bot.sendMessage(chatId, 'ФІЗИКА: https://meet.google.com/lookup/g2zadkf4lw?authuser=0&hs=179');
            }, {
                scheduled: true,
                timezone: "Europe/Kiev"
            })
            task.tue3 = cron.schedule('0 25 11 * 1-6,9-12 tuesday',  () => {
                bot.sendMessage(chatId, 'ФІЗИКА (ЛР): https://meet.google.com/vyo-jzjg-roo');
            }, {
                scheduled: true,
                timezone: "Europe/Kiev"
            })
            task.wed1 = cron.schedule('0 15 8 * 1-6,9-12 Wednesday', () => {
                bot.sendMessage(chatId, 'КОМП\'ЮТЕРНА АРИФМЕТИКА ПР: https://meet.google.com/awa-xzmo-ssh ');
            }, {
                scheduled: true,
                timezone: "Europe/Kiev"
            });
            task.wed2 = cron.schedule('0 45 9 * 1-6,9-12 Wednesday', () => {
                bot.sendMessage(chatId, 'ВИЩА МАТЕМ ПР: https://meet.google.com/ark-ezfh-bvf');
            }, {
                scheduled: true,
                timezone: "Europe/Kiev"
            });
            task.wed3 = cron.schedule('0 25 11 * 1-6,9-12 Wednesday', () => {
                bot.sendMessage(chatId, 'АНГЛІЙСЬКА: https://meet.google.com/oiq-qwpz-ukj');
            }, {
                scheduled: true,
                timezone: "Europe/Kiev"
            });
            task.wed4 = cron.schedule('0 55 12 * 1-6,9-12 Wednesday', () => {
                bot.sendMessage(chatId, 'ПРОГРАМУВАННЯ ЛР (1): https://meet.google.com/zcd-asyr-nvq  (2): https://meet.google.com/ayw-vuwh-wnf  ');
            }, {
                scheduled: true,
                timezone: "Europe/Kiev"
            });
            task.thu1 = cron.schedule('0 15 8 * 1-6,9-12 Thursday', () => {
                bot.sendMessage(chatId, 'Зараз ще можна відпочити 90 хвилинок)))');
            }, {
                scheduled: true,
                timezone: "Europe/Kiev"
            });
            task.thu2 = cron.schedule('0 45 9 * 1-6,9-12 Thursday', () => {
                bot.sendMessage(chatId, 'ПРОГРАМУВАННЯ ЛР (1): https://meet.google.com/zcd-asyr-nvq  (2): https://meet.google.com/ayw-vuwh-wnf');
            }, {
                scheduled: true,
                timezone: "Europe/Kiev"
            });
            task.thu3 = cron.schedule('0 25 11 * 1-6,9-12 Thursday', () => {
                bot.sendMessage(chatId, 'ВИЩА МАТЕМ ПР: https://meet.google.com/ark-ezfh-bvf');
            }, {
                scheduled: true,
                timezone: "Europe/Kiev"
            });
            task.thu4 = cron.schedule('0 55 12 * 1-6,9-12 Thursday', () => {
                bot.sendMessage(chatId, 'ДИСКРЕТНА МАТЕМ ПР: https://meet.google.com/wer-fgep-bvc');
            }, {
                scheduled: true,
                timezone: "Europe/Kiev"
            });
            task.fri1 = cron.schedule('0 15 8 * 1-6,9-12 friday', () => {
                bot.sendMessage(chatId, 'ДИСКРЕТНА МАТЕМ ЛЕКЦІЇ: https://meet.google.com/ngi-yrpo-dpt');
            }, {
                scheduled: true,
                timezone: "Europe/Kiev"
            });
            task.fri2 = cron.schedule('0 45 9 * 1-6,9-12 friday', () => {
                bot.sendMessage(chatId, 'ВИЩА МАТЕМ ЛЕКЦІЯ: https://meet.google.com/tod-voqx-trq');
            }, {
                scheduled: true,
                timezone: "Europe/Kiev"
            });
            task.fri3 = cron.schedule('0 25 11 * 1-6,9-12 friday', () => {
                bot.sendMessage(chatId, 'ПРОГРАМУВАННЯ ЛЕКЦІЯ: https://meet.google.com/apz-vckx-nqz');
            }, {
                scheduled: true,
                timezone: "Europe/Kiev"
            });

            const chatId = msg.chat.id;
            // console.log(msg)

            if (msg.text === '/start') {
                await bot.sendMessage(chatId, `привіт ${msg.chat.first_name} `);

                task.organization.start()

                task.mon1.start()
                task.mon2.start()

                task.thu1.start()
                task.thu2.start()
                task.thu3.start()

                task.wed1.start()
                task.wed2.start()
                task.wed3.start()
                task.wed4.start()

                task.thu1.start()
                task.thu2.start()
                task.thu3.start()
                task.thu4.start()

                task.fri1.start()
                task.fri2.start()
                task.fri3.start()


            } else {
                await bot.sendMessage(chatId, 'Не те вводиш');
            }
        } catch
            (e) {
            console.log(e)
        }
    }
)
bot.on('callback_query', async msg => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    // console.log(chatId)

    // const user = await UserModel.findOne({chatId})
    if (data === 1) {
        right += 1;
        await bot.sendMessage(chatId, ` '1' нажато - ${right} разів`);
    } else {
        wrong += 1;
        await bot.sendMessage(chatId, ` '2' нажато - ${wrong} разів`);
    }
})


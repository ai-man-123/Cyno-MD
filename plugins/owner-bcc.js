let moment = require('moment-timezone')

let handler  = async (m, { conn, text }) => {
//━━━━━━━━[ TIMER ]━━━━━━━━//
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
  let chats = Object.keys(await conn.chats)
    let pesan = m.quoted && m.quoted.text ? m.quoted.text : text
  conn.reply(m.chat, `Mengirim Broadcast Ke ${chats.length} Chat ${chats.length} `, m)

  for (let id of chats) {
let bcbg = `${pickRandom(['https://telegra.ph/file/e89e5b5a0dc24ab54f5d5.jpg', 'https://telegra.ph/file/a9217206b3b56657ae95e.jpg','https://telegra.ph/file/32b5a85f0446cb7e6eb40.jpg','https://telegra.ph/file/84778b02fd008b75e328c.jpg','https://telegra.ph/file/6fea96925d575fc0d8dec.jpg','https://telegra.ph/file/5bd7c93f5a5c5da9e75d2.jpg','https://telegra.ph/file/fbc53dff22e4351dc9855.jpg','https://telegra.ph/file/4d5c1f4199aee355b0e5d.jpg','https://telegra.ph/file/34f94da1d090bbfb0113e.jpg','https://telegra.ph/file/de80ba29916c02e9477ab.jpg'])}`

       await conn.delay(1500)

       conn.send3ButtonImg(id, bcbg, `${global.namebot} 𝙱𝚛𝚘𝚊𝚍𝚌𝚊𝚜𝚝\n`,`
┏━ ❮❮ 𝙼𝙴𝚂𝚂𝙴𝙶𝙴 ❯❯
┣❲ ${pesan} ❳
┖─┅┈⸔⸔⬫
┏┬┬┬┬┬┬┬┬┬┬┬┬┬⁛⸙⸙
┃⫹⫺ 𝚁𝚞𝚗𝚝𝚒𝚖𝚎 : ${uptime} ${muptime}
┃⫹⫺ 𝙳𝚊𝚝𝚎 : ${date}
┃⫹⫺ 𝚝𝚒𝚖𝚎 : ${time}
┖──┈┈┈〠⸙࿉༐
`,
   'Menu','.menu',
     'Owner','.owner',
       'Donasi','.donasi'
       )

     }

  m.reply(`Suksess Broadcastke ${chats.length} `)

}

handler.help = ['broadcast','bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

module.exports = handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
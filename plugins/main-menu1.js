let moment = require('moment-timezone')
let fs = require('fs')
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let name = conn.getName(m.sender)
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
let bcbg = `${pickRandom(['https://telegra.ph/file/e89e5b5a0dc24ab54f5d5.jpg', 'https://telegra.ph/file/a9217206b3b56657ae95e.jpg','https://telegra.ph/file/32b5a85f0446cb7e6eb40.jpg','https://telegra.ph/file/84778b02fd008b75e328c.jpg','https://telegra.ph/file/6fea96925d575fc0d8dec.jpg','https://telegra.ph/file/5bd7c93f5a5c5da9e75d2.jpg','https://telegra.ph/file/fbc53dff22e4351dc9855.jpg','https://telegra.ph/file/4d5c1f4199aee355b0e5d.jpg','https://telegra.ph/file/34f94da1d090bbfb0113e.jpg','https://telegra.ph/file/de80ba29916c02e9477ab.jpg'])}`

       await conn.delay(1500)
const anu = `${ucapan()} ${name}`
const footer = `
𝙷𝚊𝚕𝚘 ${name} 𝚂𝚊𝚢𝚊 Cyno Botz Multi Device,𝚂𝚊𝚢𝚊 𝙳𝚒 𝙱𝚞𝚊𝚝 𝙾𝚕𝚎𝚑 Uzui Michelle Celestia,𝙿𝚎𝚖𝚋𝚞𝚊𝚝𝚊𝚗 𝙿𝚛𝚘𝚓𝚎𝚌𝚝 𝙱𝚘𝚝 𝙸𝚗𝚒 𝙼𝚞𝚕𝚊𝚒 𝙳𝚊𝚛𝚒 𝚃𝚊𝚗𝚐𝚐𝚊𝚕 15 Oktober 2022,𝚃𝚎𝚛𝚒𝚖𝚊𝚑 𝙺𝚊𝚜𝚒𝚑 𝚈𝚊𝚗𝚐 𝚃𝚎𝚕𝚊𝚑 𝙼𝚎𝚖𝚋𝚊𝚗𝚝𝚞 𝚂𝚊𝚢𝚊 𝚂𝚎𝚙𝚎𝚗𝚞𝚑 𝙷𝚊𝚝𝚒 𝙳𝚊𝚕𝚊𝚖 𝙼𝚎𝚖𝚋𝚞𝚊𝚝 𝙿𝚛𝚘𝚓𝚎𝚌𝚝 𝚂𝚌𝚛𝚒𝚙𝚝 𝙸𝚗𝚒\n
⫰⫯⫰ 𝐃𝐚𝐭𝐞 𝐈𝐬𝐥𝐚𝐦 : ${dateIslamic}
⫰⫯⫰ 𝐃𝐚𝐭𝐞 : ${date}
⫰⫯⫰ 𝐔𝐩𝐭𝐢𝐦𝐞 : ${uptime}
⫰⫯⫰ 𝐓𝐢𝐦𝐞 : ${time}`
const buttons1 = 'All Menu'
const buttons2 = 'List Menu'
const idbuttons1 = '.? all'
const idbuttons2 = '.co'

conn.send2ButtonLoc(m.chat, bcbg, anu, footer, buttons1, idbuttons1, buttons2, idbuttons2, m)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i
handler.register = true

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat DiniHari"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time > 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}

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
let bcbg = `${pickRandom(['https://telegra.ph/file/64001b19cfe96f99b5f83.jpg', 'https://telegra.ph/file/45688ffde072ee3ff1b09.jpg','https://telegra.ph/file/fdcc48cf3abce04a2aa19.jpg','https://telegra.ph/file/ec3d5fc0883a57a906479.jpg','https://telegra.ph/file/369509a70cc6ce5e34bbc.jpg','https://telegra.ph/file/618ba1f4a62dfb7cad26c.jpg','https://telegra.ph/file/fde62b9fded8e83f18320.jpg','https://telegra.ph/file/a5122d8e20f173cb96b8f.jpg','https://telegra.ph/file/34173df3b68f7bc61548f.jpg'])}`
       await conn.delay(1500)
       
const anu = `𓊈𒆜DONASI NEZHA UZUI  𒆜𓊉 

Hai ${name} Kak jangan main bot doang harus donasi dulu.. 

Lu mau sewabot ( premium) & Jadibot bisa disini run 24jam *Sesuai jadwal nya* Max Off Malam Jam 9:00 . Mau tau list Jadibot? Atau dll. 

𓊈 🤩 LIST JADIBOT 🤩𓊉 

• ADD GRUP BOT + OWNER: 30.000 *IMG*
• RUN TERMUX: 50.000 *IMG/SMARTFREN*
• RUN CLOUD SHELL: 100.000 *IMG/SMARTFEN*
• HARGA SCPRIT MD: 200.000 *SMARTFEN*
• HARGA SCPRIT BIASA: 150.000 *IMG* 

𓊈🤔 FITUR 🤔 𓊉
• ANTILINK
• MENFESS
• BUG
DLL

𓊈🌱 SEWABOT (PREMIUM) 🌱𓊉
1MINGGU : 20K
5BULAN : 40K
PERMANEN PREMIUM : 60K 

𓊈 💰 PEMBAYARAN 💰𓊉 

Pembayaran nya gak usah pakai dana,ovo,Gopay atau dll. Hanya pakai pulsa doang. Cara bayar nya di shoppey 

~ Terimakasih Sudah Donasi Cyno Bot, jika mau chat owner .. 

wa.me/62887433094409 `
const footer = `
❦❧ ━━──┈┈ ❲ ${global.namebot} ❳
┃𝚁𝚞𝚗𝚝𝚒𝚖𝚎 : ${uptime}
┃𝚍𝚊𝚝𝚎 : ${date}
┃𝚝𝚒𝚖𝚎 : ${waktuwib}
⎅ ┈┈ ❲ ${global.ownername} ❳`
const buttons1 = 'Menu'
const buttons2 = 'Owner'
const idbuttons1 = '.menu'
const idbuttons2 = '.owner'

conn.send2ButtonImg(m.chat, bcbg, anu, footer, buttons1, idbuttons1, buttons2, idbuttons2, m)
}
handler.help = ['donasi','sewabot']
handler.tags = ['main']
handler.command = /^(donasi|sewa|donate|sewabot)$/i

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

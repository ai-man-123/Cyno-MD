//━━━━━━━━[ DEFAULT SETTINGS ]━━━━━━━━//
let { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
let fs = require('fs')
const util = require('util')
const os = require('os')
let path = require('path')
let { createHash} = require('crypto')
let fetch = require('node-fetch')
let { perfomance } = require('perf_hooks')
let moment = require('moment-timezone')
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
let emot = `${pickRandom(['⎔', '𖣘', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪'])}`
let rndom = `${pickRandom(['defaultMenu', 'defmenu1'])}`
//━━━━━━━━[ DEFAULT MENU ]━━━━━━━━//
const defaultMenu = {
  before:``.trimStart(), 
  header: `☰ ━ ❨ *%category* ❩ ━┈ •⟅\n┃╭─❏ `,
  body: `┃${emot} %cmd %islimit %isPremium`,
  footer: '┃╰───────────────❏\n┗┈ ⳻⳻\n',
  after: ``,
}
//━━━━━━━━[ CATEGORY ]━━━━━━━━//
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'absen', 'rpg', 'anime', 'downloader', 'game', 'fun', 'xp', 'github', 'group', 'image', 'quotes', 'admin', 'info', 'internet', 'islam', 'kerang', 'maker', 'owner', 'suara', 'premium', 'quotes', 'info', 'stalk', 'shortlink', 'sticker', 'sound', 'tools', 'text', 'nsfw', 'asupan', 'random', 'textpro', 'photooxy']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': '𝙼𝙴𝙽𝚄 𝚄𝚃𝙰𝙼𝙰',
  'advanced': '𝙰𝙳𝚅𝙰𝙽𝙲𝙴𝙳',
  'absen': '𝙼𝙴𝙽𝚄 𝙰𝙱𝚂𝙴𝙽',
  'anime': '𝙼𝙴𝙽𝚄 𝙰𝙽𝙸𝙼𝙴',
  'sticker': '𝙼𝙴𝙽𝚄 𝙲𝙾𝙽𝚅𝙴𝚁𝚃',
  'downloader': '𝙼𝙴𝙽𝚄 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁',
  'xp': '𝙼𝙴𝙽𝚄 𝙴𝚇𝙿',
  'fun': '𝙼𝙴𝙽𝚄 𝙵𝚄𝙽',
  'geme': '𝙼𝙴𝙽𝚄 𝙶𝙰𝙼𝙴',
  'github': '𝙼𝙴𝙽𝚄 𝙶𝙸𝚃𝙷𝚄𝙱',
  'group': '𝙼𝙴𝙽𝚄 𝙶𝚁𝙾𝚄𝙿',
  'image': '𝙼𝙴𝙽𝚄 𝙸𝙼𝙰𝙶𝙴',
  'info': '𝙼𝙴𝙽𝚄 𝙸𝙽𝙵𝙾',
  'internet': '𝙸𝙽𝚃𝙴𝚁𝙽𝙴𝚃',
  'islam' : '𝙼𝙴𝙽𝚄 𝙸𝚂𝙻𝙰𝙼𝙸',
  'kerang': '𝙼𝙴𝙽𝚄 𝙺𝙴𝚁𝙰𝙽𝙶',
  'maker': '𝙼𝙴𝙽𝚄 𝙼𝙰𝙺𝙴𝚁',
  'owner': '𝙼𝙴𝙽𝚄 𝙾𝚆𝙽𝙴𝚁',
  'pengubah suara': '𝙿𝙴𝙽𝙶𝚄𝙱𝙰𝙷 𝚂𝚄𝙰𝚁𝙰',
  'premium': '𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙼𝙴𝙽𝚄',
  'quotes' : '𝙼𝙴𝙽𝚄 𝚀𝚄𝙾𝚃𝙴𝚂',
  'rpg': '𝙼𝙴𝙽𝚄 𝚁𝙿𝙶',
  'stalk': '𝙼𝙴𝙽𝚄 𝚂𝚃𝙰𝙻𝙺',
  'shortlink': '𝚂𝙷𝙾𝚁𝚃 𝙻𝙸𝙽𝙺',
  'tools': '𝙼𝙴𝙽𝚄 𝚃𝙾𝙾𝙻𝚂',
  'vote': '𝙼𝙴𝙽𝚄 𝚅𝙾𝚃𝙸𝙽𝙶',
  'nsfw': '𝙽𝚂𝙵𝚆 𝙼𝙴𝙽𝚄',
  'sound': '𝙼𝙰𝙽𝙶𝙺𝙰𝙽𝙴 𝙼𝙴𝙽𝚄', 
  'sound-random': '𝚁𝙰𝙽𝙳𝙾𝙼 𝚂𝙾𝚄𝙽𝙳',
  'asupan': '𝙰𝚂𝚄𝙿𝙰𝙽 𝙼𝙴𝙽𝚄', 
  'random': '𝚁𝙰𝙽𝙳𝙾𝙼 𝙼𝙴𝙽𝚄', 
  'textpro': '𝚃𝙴𝚇𝚃 𝙿𝚁𝙾 𝙼𝙴𝙽𝚄', 
  'photooxy': '𝙿𝙷𝙾𝚃𝙾 𝙾𝚇𝚈 𝙼𝙴𝙽𝚄', 
  }
  if (teks == 'absen') tags = {
    'absen': '𝙼𝙴𝙽𝚄 𝙰𝙱𝚂𝙴𝙽',
    'vote': '𝙼𝙴𝙽𝚄 𝚅𝙾𝚃𝙸𝙽𝙶',
  }
  if (teks == 'anime') tags = {
  'anime': '𝙼𝙴𝙽𝚄 𝙰𝙽𝙸𝙼𝙴',
  }
  if (teks == 'sticker') tags = {
  'sticker': '𝙼𝙴𝙽𝚄 𝙲𝙾𝙽𝚅𝙴𝚁𝚃',
  }
  if (teks == 'downloader') tags = {
  'downloader': '𝙼𝙴𝙽𝚄 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁',
  }
  if (teks == 'xp') tags = {
  'xp': '𝙼𝙴𝙽𝚄 𝚇𝙿',
  }
  if (teks == 'fun') tags = {
  'fun': '𝙼𝙴𝙽𝚄 𝙵𝚄𝙽',
  }
  if (teks == 'game') tags = {
  'game': '𝙼𝙴𝙽𝚄 𝙶𝙰𝙼𝙴',
  }
  if (teks == 'github') tags = {
  'github': '𝙼𝙴𝙽𝚄 𝙶𝙸𝚃𝙷𝚄𝙱',
  }
  if (teks == 'group') tags = {
  'group': '𝙼𝙴𝙽𝚄 𝙶𝚁𝙾𝚄𝙿',
  }
  if (teks == 'image') tags = {
  'image': '𝙼𝙴𝙽𝚄 𝙸𝙼𝙰𝙶𝙴',
  }
  if (teks == 'info') tags = {
  'info': '𝙼𝙴𝙽𝚄 𝙸𝙽𝙵𝙾',
  }
  if (teks == 'internet') tags = {
  'internet': '𝙸𝙽𝚃𝙴𝚁𝙽𝙴𝚃',
  }
  if (teks == 'islam') tags = {
  'islam' : '𝙼𝙴𝙽𝚄 𝙸𝚂𝙻𝙰𝙼𝙸𝙲',
  }
  if (teks == 'kerang') tags = {
  'kerang': '𝙼𝙴𝙽𝚄 𝙺𝙴𝚁𝙰𝙽𝙶',
  }
  if (teks == 'maker') tags = {
  'maker': '𝙼𝙴𝙽𝚄 𝙼𝙰𝙺𝙴𝚁',
  }
  if (teks == 'owner') tags = {
    'owner': '𝙾𝚆𝙽𝙴𝚁',
    'host': '𝙷𝙾𝚂𝚃',
    'advanced': '𝙰𝙳𝚅𝙰𝙽𝙲𝙴𝙳'
  }
  if (teks == 'suara') tags = {
  'Pengubah Suara': '𝙿𝙴𝙽𝙶𝚄𝙱𝙰𝙷 𝚂𝚄𝙰𝚁𝙰',
  }
  if (teks == 'text') tags = {
  'text': '𝙼𝙰𝙺𝙴𝚁 𝚃𝙴𝚇𝚃',
  }
  if (teks == 'premium') tags = {
  'premium': '𝙿𝚁𝙴𝙼𝙸𝚄𝙼',
  }
  if (teks == 'quotes') tags = {
  'quotes' : '𝙼𝙴𝙽𝚄 𝚀𝚄𝙾𝚃𝙴𝚂',
  }
  if (teks == 'rpg') tags = {
  'rpg': '𝙼𝙴𝙽𝚄 𝚁𝙿𝙶',
  }
  if (teks == 'stalk') tags = {
  'stalk': '𝙼𝙴𝙽𝚄 𝚂𝚃𝙰𝙻𝙺',
  }
  if (teks == 'shortlink') tags = {
  'shortlink': '𝚂𝙷𝙾𝚁𝚃 𝙻𝙸𝙽𝙺',
  }
  if (teks == 'tools') tags = {
  'tools': '𝙼𝙴𝙽𝚄 𝚃𝙾𝙾𝙻𝚂',
  }
  if (teks == 'nsfw') tags = {
  'nsfw': '𝙽𝚂𝙵𝚆 𝙼𝙴𝙽𝚄',
  }
  if (teks == 'asupan') tags = {
  'asupan': '𝙰𝚂𝚄𝙿𝙰𝙽 𝙼𝙴𝙽𝚄',
  }
  if (teks == 'random') tags = {
  'random': '𝚁𝙰𝙽𝙳𝙾𝙼 𝙼𝙴𝙽𝚄',
  }
  if (teks == 'textpro') tags = {
  'textpro': '𝚃𝙴𝚇𝚃𝙿𝚁𝙾 𝙼𝙴𝙽𝚄',
  }
  if (teks == 'photooxy') tags = {
  'photooxy': '𝙿𝙷𝙾𝚃𝙾 𝙾𝚇𝚈 𝙼𝙴𝙽𝚄',
  }
  if (teks == 'sound') tags = {
  'sound': '𝙼𝙰𝙽𝙶𝙺𝙰𝙽𝙴',
  'sound-random': '𝚂𝙾𝚄𝙽𝙳 𝚁𝙰𝙽𝙳𝙾𝙼',
  }
//━━━━━━━━[ SETTING HELP ]━━━━━━━━//
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
  })

//━━━━━━━━[ DATABASE USER ]━━━━━━━━//
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(m.sender)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let premium = global.db.data.users[m.sender].premium
    let user = global.db.data.users[who]
    let { exp, limit, level, money, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let tag = `wa.me/${m.sender.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

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

//━━━━━━━━[ SETTING HELP ]━━━━━━━━//
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
  })

//━━━━━━━━[ FAKE REPLY ]━━━━━━━━//
		global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync('./media/menuh1.jpg') //Gambarnye
					},
					"title": "⫰⫯ ＣＹＮＯ ＢＯＴ ⫯⫰ ",
					"description": "ᴄᴇᴋ ʟɪsᴛ ᴄʏɴᴏ ʙᴏᴛ ᴅɪ ʙᴀᴡᴀʜ", 
					"retailerId": "Ghost",
					"productImageCount": 1
				},
				    "businessOwnerJid": `62887433094409@s.whatsapp.net`
		}
	}
}
	const fcona = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactsArrayMessage": { "title":"antibot","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./src/menuh.jpg')}}
	}
	const bugcon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "contactMessage": { "vcard": ""}}}
	
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `Hai Kak ${name}!`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
const fdoc = {
   key : {
   remoteJid: 'status@broadcast',
   participant : '0@s.whatsapp.net'
   },
   message: {
   documentMessage: {
   title: wm, 
   }
   }
   }
                     global.fdocs = {
           key : {
                  participant : '0@s.whatsapp.net'
                               },
              message: {
                           documentMessage: {
                           title: wm, 
                           jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
                                 }
                               }
                             }
//━━━━━━━━[ BAGIAN MENU ]━━━━━━━━//
if (teks == '404') {
let menuu = `${ucapan()} ${name}`
const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
listMessage: {
title: ``,
description: menuu,
buttonText: 'LIST SIMPLE MENU',
listType: 1,
footerText: `⎙ Tekan List Di Bawah!!`,
mtype: 'listMessage',
sections: [{
  "rows": [{
  "title": `𖣘 OWNER BOT`,
  "description": "┃☰ Mau Tau Owner Cyno? Tapi Jangan Spam",
  "rowId": `.owner`
}, {
  "title": "𖣘 INFO BOT",
  "description": "┃☰ Cyno Menampilkan Menu Info",
  "rowId": `${_p}? info`
}],
  "title": "INFORMASI BOT"
}, {
  "rows": 
[{
  "title": "𖣘 ABSEN & VOTING",
  "description": "┃☰ Cyno Menampilkan Menu Absen",
  "rowId": `${_p}? absen`
}, {
  "title": "𖣘 ANIME",
  "description": "┃☰ Cyno Menampilkan Menu Anime",
  "rowId": `${_p}? anime`
}, {
  "title": "𖣘 STICKER & CONVERTER",
  "description": "┃☰ Cyno Menampilkan Menu Sticker",
  "rowId": `${_p}? sticker`
}, {
  "title": "𖣘 DOWNLOADER",
  "description": "┃☰ Cyno Menampilkan Menu Downloader",
  "rowId": `${_p}? downloader`
}, {
  "title": "𖣘 EXP & LIMIT",
  "description": "┃☰ Cyno Menampilkan Menu Exp",
  "rowId": `${_p}? xp`
}, {
  "title": "𖣘 FUN",
  "description": "┃☰ Cyno Menampilkan Menu Fun",
  "rowId": `${_p}? fun`
}, {
  "title": "𖣘 GAME",
  "description": "┃☰ Cyno Menampilkan Menu Game",
  "rowId": `${_p}? game`
}, {
  "title": "𖣘 GITHUB",
  "description": "┃☰ Cyno Menampilkan Menu Github",
  "rowId": `${_p}? github`
}, {
  "title": "𖣘 GROUP",
  "description": "┃☰ Cyno Menampilkan Menu Group",
  "rowId": `${_p}? group`
}, {
  "title": "𖣘 IMAGE",
  "description": "┃☰ Cyno Menampilkan Menu Image",
  "rowId": `${_p}? image`
}, {
  "title": "𖣘 INTERNET",
  "description": "┃☰ Cyno Menampilkan Menu Internet",
  "rowId": `${_p}? internet`
}, {
  "title": "𖣘 ISLAMIC",
  "description": "┃☰ Cyno Menampilkan Menu Islam",
  "rowId": `${_p}? islam`
}, {
  "title": "𖣘 KERANG",
  "description": "┃☰ Cyno Menampilkan Menu Kerang",
  "rowId": `${_p}? kerang`
}, {
  "title": "𖣘 MAKER",
  "description": "┃☰ Cyno Menampilkan Menu Maker",
  "rowId": `${_p}? maker`
}, {
  "title": "𖣘 SOUND",
  "description": "┃☰ Cyno Menampilkan Menu Sound",
  "rowId": `${_p}? sound`
}, {
  "title": "𖣘 OWNER",
  "description": "┃☰ Cyno Menampilkan Menu Owner",
  "rowId": `${_p}? owner`
}, {
  "title": "𖣘 PENGUBAH SUARA",
  "description": "┃☰ Cyno Menampilkan Menu Voice Changer",
  "rowId": `${_p}? suara`
}, {
  "title": "𖣘 PREMIUM",
  "description": "┃☰ Cyno Menampilkan Menu Premium",
  "rowId": `${_p}? premium`
}, {
  "title": "𖣘 QUOTES",
  "description": "┃☰ Cyno Menampilkan Menu Quotes",
  "rowId": `${_p}? quotes`
}, {
  "title": "𖣘 RPG",
  "description": "┃☰ Cyno Menampilkan Menu Rpg",
  "rowId": `${_p}? rpg`
}, {
  "title": "𖣘 STALKER",
  "description": "┃☰ Cyno Menampilkan Menu Stalker",
  "rowId": `${_p}? stalk`
}, {
  "title": "𖣘 SHORT LINK",
  "description": "┃☰ Cyno Menampilkan Menu Short Link",
  "rowId": `${_p}? shortlink`
}, {
  "title": "𖣘 TOOLS MENU",
  "description": "┃☰ Cyno Menampilkan Menu Tools",
  "rowId": `${_p}? tools`
}, {
  "title": "𖣘 TEXT MAKER",
  "description": "┃☰ Cyno Menampilkan Maker Text",
  "rowId": `${_p}? text`
}, {
  "title": "𖣘 HENTAI",
  "description": "┃☰ Cyno Menampilkan Menu Hentai",
  "rowId": `${_p}? nsfw`
}, {
  "title": "𖣘 RANDOM",
  "description": "┃☰ Cyno Menampilkan Menu Random/Gabut",
  "rowId": `${_p}? random`
}, {
  "title": "𖣘 TEXT PRO",
  "description": "┃☰ Cyno Menampilkan Text Pro Menu",
  "rowId": `${_p}? textpro`
}, {
  "title": "𖣘 PHOTO OXY",
  "description": "┃☰ Cyno Menampilkan Photo Oxy Menu",
  "rowId": `${_p}? textpro`
}],
"title": "LIST MENU"
              }
            ], "contextInfo": {
              "stanzaId": m.key.id,
              "participant": m.sender,
              "quotedMessage": m.message
            }
    }}), { userJid: m.participant || m.key.remoteJid, quoted: ftoko });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
    }
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
        before,
        ...Object.keys(tags).map(tag => {
          return header.replace(/%category/g, tags[tag]) + '\n' + [
            ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
              return menu.help.map(help => {
return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
  .replace(/%islimit/g, menu.limit ? '(🅛)' : '')
  .replace(/%isPremium/g, menu.premium ? '(🅟)' : '')
  .trim()
              }).join('\n')
            }),
            footer
          ].join('\n')
        }),
        after
      ].join('\n')
      text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name,
      ucapan: ucapan(),
      level, limit, money, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    let bcbg = `${pickRandom(['https://telegra.ph/file/e89e5b5a0dc24ab54f5d5.jpg', 'https://telegra.ph/file/a9217206b3b56657ae95e.jpg','https://telegra.ph/file/32b5a85f0446cb7e6eb40.jpg','https://telegra.ph/file/84778b02fd008b75e328c.jpg','https://telegra.ph/file/6fea96925d575fc0d8dec.jpg','https://telegra.ph/file/5bd7c93f5a5c5da9e75d2.jpg','https://telegra.ph/file/fbc53dff22e4351dc9855.jpg','https://telegra.ph/file/4d5c1f4199aee355b0e5d.jpg','https://telegra.ph/file/34f94da1d090bbfb0113e.jpg','https://telegra.ph/file/de80ba29916c02e9477ab.jpg'])}`
//━━━━━━━━[ SETTINGS MENU ]━━━━━━━━//
const anu = `
❦❧ ━━──┈┈ ❲ ${global.namebot} ❳
┃${emot} 𝚁𝚞𝚗𝚝𝚒𝚖𝚎 : ${uptime}
┃${emot} 𝚍𝚊𝚝𝚎 : ${date}
┃${emot} 𝚝𝚒𝚖𝚎 : ${waktuwib}
⎅ ┈┈ ❲ ${global.ownername} ❳`
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
   /*conn.send3ButtonImg(m.chat, bcbg, anu, text,
   'Menu','.menu',
     'Owner','.owner',
       'Donasi','.donasi'
       )*/
  conn.send2ButtonLoc(m.chat, bcbg, anu, text, 'Thanks To', '.tqto', 'Owner', '.owner', m)
} catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.command = /^(co|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

//━━━━━━━━[  JANGAN DI UBAH  ]━━━━━━━━//
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

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

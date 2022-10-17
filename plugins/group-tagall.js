let fs = require('fs')
let handler = async(m, { conn, text, participants }) => {

  let teks = `⸎ ╍─┈ ❲ *Tag All* ❳ ┈─╍ ⸎\n\n┎─┉┄┄⛶\n┃⟅➩ *Message : ${text ? text : 'Nothing'}*\n┗━━━━┉┉┉┈┈┈⳹•⟅\n┏━┉┉┈┈╳╼\n`
		      	for (let mem of participants) {
		            teks += `┃⟅➣ @${mem.id.split('@')[0]}\n┣━━━━┉┉┉┈┈┈ \n`
				}
                teks += `\n⋙ *${global.namebot}* ⋘`
    
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true
handler.admin = true

module.exports = handler

let handler = async (m, { conn }) => {
bear = "Source Code"
let esce = `Cyno Bot Adalah Project Script Bot Md.. Ownerku @62887433094409 , Cyno & Ownerku Gak Suka Spam, Telpon , Org Negri , Invite bot tanpa izin block + ban 🚫`
conn.sendButtonImg(m.chat, fla + 'Rules', esce, wm2, 'Menu', '.menu', m) 
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i

module.exports = handler
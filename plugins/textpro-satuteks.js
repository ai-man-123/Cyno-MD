let handler = async (m, { conn, command, text }) => {
if (!text) throw 'Text Nya Mana Kocax...'
let nyenye = `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${text}`
    conn.sendButtonImg(m.chat, nyenye, 'Jangan Lupa Subs Chennel Hyuura ofc', wm2, 'Next', `.${command}`, m) 
}
handler.help = ['blackpink', 'neon', 'greenneon', 'futureneon', 'sandwriting', 'sandsummer', 'sandengraved', 'metaldark', 'neonlight', 'holographic', 'text1917', 'minion', 'deluxesilver', 'newyearcard', 'bloodfrosted', 'hallowen', 'fireworksparkle', 'natureleaves', 'bokeh', 'toxic', 'strawberry', 'box3d', 'roadwarning', 'breakwall', 'icecold', 'luxury', 'cloud', 'summersand', 'horrorblood', 'thunder', 'magma', 'impressiveglitch', 'harrypotter', 'foggywindow', 'watercolor', 'wonderfulgrafitti'] 
handler.tags = ['textpro']
handler.command = /^(blackpink|neon|greenneon|futureneon|sandwriting|sandsummer|sandengraved|metaldark|neonlight|holographic|text1917|minion|deluxesilver|newyearcard|bloodfrosted|hallowen|fireworksparkle|natureleaves|bokeh|toxic|strawberry|box3d|roadwarning|breakwall|icecold|luxury|cloud|summersand|horrorblood|thunder|magma|impressiveglitch|harrypotter|foggywindow|watercolor|wonderfulgrafitti)$/i
module.exports = handler
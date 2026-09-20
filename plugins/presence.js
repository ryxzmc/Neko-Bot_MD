// NEKO-BOT MD - PRESENCE VERSION 
// > © Neko-Bot | By RyxzXcode 
const emojiMap = {
  'menu': '🤖', 'allmenu': '🤖', 'help': '🤖',
  'infobot': '📊', 'info': '📊', 'botinfo': '📊',
  'cek': '🔍', 'cekstatus': '🔍', 'cekbot': '🔍',
  'me': '🙋', 'myinfo': '🙋',
  'owner': '👑', 'creator': '👑', 'dev': '👑',
  'rules': '📜', 'peraturan': '📜',
  'rvo': '👀', 'readviewonce': '👀',
  'on': '✅', 'off': '❌',
  'nekoai': '🧠', 'ai': '🧠', 'neko': '🧠',
  'antilink': '🔗', 'antivirtex': '💣', 'antitoxic': '🤬',
  'default': ['🐾','✨','😸','🛡️','⚡','🔥'],
  'defaultAI': ['🧠','🛡️','🤖','⚡','👁️']
}
export async function before(m, { conn }) {
  if (!m.text) return
  if (m.isBaileys) return
  if (m.chat.endsWith('@broadcast')) return
  try {
    let chatDb = global.db.data.chats?.[m.chat]
    let isAIMode = chatDb?.nekoai || false
    let listFitur = ['antidelete','antikudeta','anticall','antilink','antivirtex','antitoxic','welcome','antibot']
    let semuaOff = chatDb? listFitur.every(v => chatDb[v] == false) : false
    let isAutonomous = isAIMode && semuaOff
    await conn.sendPresenceUpdate('available', m.chat)
    let cmd = m.text.toLowerCase().split(' ')[0].replace(/^[./!#]/, '')
    let emoji = emojiMap[cmd]
    if (!emoji) {
      if (isAutonomous) {
        let defAI = emojiMap['defaultAI']
        emoji = defAI[Math.floor(Math.random() * defAI.length)]
      } else {
        let def = emojiMap['default']
        emoji = def[Math.floor(Math.random() * def.length)]
      }
    }
    if (isAutonomous && /(https?:\/\/|wa\.me\/)/i.test(m.text)) emoji = '🧠'
    if (isAutonomous && m.text.length > 3000) emoji = '💣'
    await conn.sendMessage(m.chat, { react: { text: emoji, key: m.key } }).catch(()=>{})
    await conn.sendPresenceUpdate('composing', m.chat)
    let typingTime = 1200 + Math.floor(Math.random() * 1500)
    if (m.text.length > 80) typingTime = 2500
    if (isAIMode) typingTime += 500
    if (isAutonomous) typingTime += 800
    if (m.isGroup) typingTime += 300
    await new Promise(res => setTimeout(res, typingTime))
  } catch {}
}
export async function all(m) {
  if (!global._presenceInterval) {
    global._presenceInterval = setInterval(async () => {
      try { if (global.conn) await global.conn.sendPresenceUpdate('available') } catch {}
    }, 45000)
  }
}
export const disabled = false

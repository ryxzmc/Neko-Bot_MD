import makeWASocket, { useMultiFileAuthState, DisconnectReason } from '@whiskeysockets/baileys'
import { Boom } from '@hapi/boom'
import pino from 'pino'
import fs from 'fs'

if (!fs.existsSync('./config.js')) {
  console.log('❌ config.js belum ada! copy dari config.example.js dulu ya sensei')
  process.exit(1)
}
await import('./config.js')

async function startNeko() {
  const { state, saveCreds } = await useMultiFileAuthState('./sessions')
  const conn = makeWASocket({
    auth: state,
    logger: pino({ level: 'silent' }),
    printQRInTerminal: true,
    browser: ['Neko-Bot MD', 'Chrome', '1.0'],
  })
  conn.ev.on('creds.update', saveCreds)

  conn.ev.on('connection.update', (u) => {
    const { connection, lastDisconnect } = u
    if (connection === 'close') {
      if (new Boom(lastDisconnect?.error)?.output?.statusCode!== DisconnectReason.loggedOut) startNeko()
    } else if (connection === 'open') {
      console.log('🐾 Neko-Bot ONLINE - 17 Block Active✅!')
    }
  })

  conn.ev.on('messages.upsert', async ({ messages }) => {
    let m = messages[0]
    if (!m.message || m.key.fromMe) return
    m.text = m.message.conversation || m.message.extendedTextMessage?.text || ''
    
    try {
      let plugin = await import(`./plugins/neko-system.js?update=${Date.now()}`)
      if (plugin.default) await plugin.default(m, { conn, text: m.text })
    } catch (e) { console.log(e) }
  })
}
startNeko()

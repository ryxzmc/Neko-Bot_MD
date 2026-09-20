// NEKO-BOT MD - ULTIMATE V4 SWIPE FULL
const thumb = 'https://raw.githubusercontent.com/himanackerman/Image/main/1767877404043-832.jpeg'
const slideImages = [
  'https://raw.githubusercontent.com/himanackerman/Image/main/1767877404043-832.jpeg',
  'https://raw.githubusercontent.com/himanackerman/Image/main/1767877404043-832.jpeg',
  'https://raw.githubusercontent.com/himanackerman/Image/main/1767877404043-832.jpeg',
  'https://raw.githubusercontent.com/himanackerman/Image/main/1767877404043-832.jpeg',
  'https://raw.githubusercontent.com/himanackerman/Image/main/1767877404043-832.jpeg',
]

function delay(ms) { return new Promise(res => setTimeout(res, ms)) }
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return [h,m,s].map(v => v.toString().padStart(2,0)).join(':')
}

  if (m.isGroup &&!isAdmin && isBotAdmin) {
    if (chatDb.antilink && /(https?:\/\/|wa\.me\/|chat\.whatsapp\.com\/|t\.me\/|instagram\.com\/|tiktok\.com\/)/i.test(text)) {
      await conn.sendMessage(m.chat, { text: `╭─[ 🔗 ANTI LINK ]─\n│ @${m.sender.split`@`[0]} ngirim link! Neko hapus ya! 😾\n│ Link: ${text.slice(0,30)}...\n╰─[ Link Guard ]─`, mentions: [m.sender] })
      await conn.sendMessage(m.chat, { delete: m.key }).catch(()=>{})
    }
    if (chatDb.antivirtex && (text.length > 4000 || text.split('\n').length > 100 || /[\u{FE00}-\u{FE0F}]{10,}/u.test(text))) {
      await conn.sendMessage(m.chat, { text: `╭─[ 💣 ANTI VIRTEX ]─\n│ @${m.sender.split`@`[0]} ngirim virtex! Neko hapus + kick! 💥\n╰─[ Virtex Guard ]─`, mentions: [m.sender] })
      await conn.sendMessage(m.chat, { delete: m.key }).catch(()=>{})
      await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove').catch(()=>{})
    }
    if (chatDb.antitoxic && /(anj|babi|bangsat|kontol|memek|ngentot|goblok|tolol|anjing|asw|kntl|bgst|bajingan)/i.test(text)) {
      await conn.sendMessage(m.chat, { text: `╭─[ 🤬 ANTI TOXIC ]─\n│ @${m.sender.split`@`[0]} jangan toxic meow! Kata kasar terdeteksi!\n│ Pesan: ${text.slice(0,20)}...\n╰─[ Toxic Guard ]─`, mentions: [m.sender] })
      await conn.sendMessage(m.chat, { delete: m.key }).catch(()=>{})
    }
  }
        }

export async function onCall(calls) {
  for (let call of calls) {
    if (!call) continue
    let chatDb = global.db.data.chats[call.from]
    if (!chatDb) continue
    if (!chatDb.anticall) continue
    if (call.status == 'offer') {
      await this.rejectCall(call.id, call.from)
      await this.sendMessage(call.from, {
        text: `╭─[ 📵 ANTI CALL AKTIF ]─\n│ @${call.from.split`@`[0]}-kun, Neko-Bot tidak menerima panggilan!\n│ Jangan spam call, nanti kamu di-block meow~ 😾\n│\n│ Chat aja, jangan call!\n╰─[ © Neko-Bot ]─`,
        mentions: [call.from]
      })
      if (!global.db.data.callWarn) global.db.data.callWarn = {}
      global.db.data.callWarn[call.from] = (global.db.data.callWarn[call.from] || 0) + 1
      if (global.db.data.callWarn[call.from] >= 2) {
        await this.updateBlockStatus(call.from, 'block')
      }
    }
  }
    }

export async function participantsUpdate({ id, participants, action, conn }) {
  let chatDb = global.db.data.chats[id]
  if (!chatDb) return
  for (let user of participants) {
    let pp = await conn.profilePictureUrl(user, 'image').catch(()=>thumb)
    let meta = await conn.groupMetadata(id).catch(()=>null)
    let groupName = meta?.subject || 'Grup'
    if (chatDb.welcome && action == 'add') {
      if (chatDb.antibot) {
        let isBot = user.split('@')[0].length > 15
        if (isBot) {
          await conn.sendMessage(id, { text: `╭─[ 🤖 ANTI BOT ASING ]─\n│ @${user.split`@`[0]} terdeteksi bot asing! Neko kick!\n│ Hanya Neko-Bot yang boleh ada di sini!\n╰─[ Bot Guard ]─`, mentions: [user] })
          await conn.groupParticipantsUpdate(id, [user], 'remove').catch(()=>{})
          continue
        }
          }

    let handler = async (m, { conn, command, args, usedPrefix, isAdmin, isBotAdmin, isOwner }) => {
  let cmd = command.toLowerCase()
  let start = performance.now()
  let uptime = clockString(process.uptime() * 1000)
  let ramUsed = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
  let ramTotal = (os.totalmem() / 1024 / 1024).toFixed(0)
  let cpu = os.cpus()[0].model.split(' ')[0]
  let speed = (performance.now() - start).toFixed(4)
  let witaFull = moment.tz('Asia/Makassar').format('HH:mm:ss - DD/MM/YYYY')
  let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
  let jam = moment.tz('Asia/Makassar').hour()
  let salam = jam < 5? "Malam 🌙" : jam < 11? "Pagi ☀️" : jam < 15? "Siang 🌤️" : jam < 18? "Sore 🌇" : "Malam 🌙"

  let groupName = "Private Chat", memTotal = 0, memOnline = 0, memberList = [], isAdminCheck = false
  if (m.isGroup) {
    try {
      let meta = await conn.groupMetadata(m.chat)
      groupName = meta.subject
      memTotal = meta.participants.length
      memberList = meta.participants.slice(0, 6).map(p => `@${p.id.split('@')[0]}`).join(' ')
      memOnline = Math.floor(memTotal * 0.35) + 2
      if (memOnline > memTotal) memOnline = memTotal
    } catch {}
  }

  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {}
  let chatDb = global.db.data.chats[m.chat]
  let listFitur = ['antidelete','antikudeta','anticall','antilink','antivirtex','antitoxic','welcome','antibot']
  listFitur.forEach(v=>{ if(chatDb[v]==null) chatDb[v]=true })
  if (chatDb.rulesCustom == null) chatDb.rulesCustom = null

  if (['infobot','info','botinfo'].includes(cmd)) {
    let loading = await conn.sendMessage(m.chat, { text: "🐾 *Neko sedang memuat data...* ⏳" }, { quoted: m })
    await delay(500)
    await conn.sendMessage(m.chat, { text: "🔍 _Menganalisa group..._\n[▓▓░░░░░░░░] 20%" }, { edit: loading.key })
    await delay(500)
    await conn.sendMessage(m.chat, { text: "🔍 _Mengecek RAM & CPU..._\n[▓▓▓▓▓░░░░░] 50%" }, { edit: loading.key })
    await delay(500)
    await conn.sendMessage(m.chat, { text: "⚡ _Menghitung kecepatan..._\n[▓▓▓▓▓▓▓▓░░] 80%" }, { edit: loading.key })
    await delay(400)
    await conn.sendMessage(m.chat, { text: "✨ _Hampir selesai meow~_\n[▓▓▓▓▓▓] 100%" }, { edit: loading.key })
    await delay(600)
    let ucapanAwal = `Halo ${salam} @${m.sender.split('@')[0]}-kun! ✨\nAku Neko-Bot, asisten virtual siap membantumu meow~ 🐾`
    let teks = `╭─[ 📋 INFO BOT - 16 BLOK ]─\n│ ${ucapanAwal}\n│\n│• 👥 Status Group = ${groupName}\n│ ( ${memTotal} / ${memOnline} online )\n│• 🔋 RAM/CPU = ${ramUsed} MB / ${ramTotal} MB | ${cpu}\n│• ⚡ Speed = ${speed} ms\n│• ⏰ Runtime = ${uptime}\n│• 🌐 Timezone = WITA ${witaFull}\n│• 🛡️ AntiDelete: ${chatDb.antidelete? 'ON ✅' : 'OFF ❌'}\n│• 👑 AntiKudeta: ${chatDb.antikudeta? 'ON ✅ AUTO RE-ADMIN' : 'OFF ❌'}\n│• 📵 AntiCall: ${chatDb.anticall? 'ON ✅' : 'OFF ❌'}\n│• 🔗 AntiLink: ${chatDb.antilink? 'ON ✅' : 'OFF ❌'}\n│• 💣 AntiVirtex: ${chatDb.antivirtex? 'ON ✅' : 'OFF ❌'}\n│• 🤬 AntiToxic: ${chatDb.antitoxic? 'ON ✅' : 'OFF ❌'}\n│• 👋 Welcome: ${chatDb.welcome? 'ON ✅' : 'OFF ❌'}\n│• 🤖 AntiBot: ${chatDb.antibot? 'ON ✅' : 'OFF ❌'}\n│\n│ Geser → ${memberList}...\n│ Total: ${memTotal} member\n│\n╰─[ Sampai jumpa lagi @${m.sender.split('@')[0]}-kun, jangan lupa istirahat ya! 💤 ]─\n> © Neko-Bot | Created by RyxzXcode`
    await conn.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { edit: loading.key })
    }

else if (['cek','cekstatus','cekbot'].includes(cmd)) {
    let groups = Object.keys(await conn.groupFetchAllParticipating()).length
    let teks = `\`\`\`╭─[ 📊 CEK STATUS - 16 BLOK ]─\n│ • Runtime : ${uptime}\n│ • RAM : ${ramUsed} MB / ${ramTotal} MB\n│ • CPU : ${cpu}\n│ • Speed : ${speed} ms\n│ • Groups : ${groups}\n│ • Status : Online ✅\n│ • User : @${m.sender.split('@')[0]}\n│ • AntiDel : ${chatDb.antidelete? 'ON' : 'OFF'}\n│ • AntiKudeta : ${chatDb.antikudeta? 'ON AUTO RE-ADMIN' : 'OFF'}\n│ • AntiCall : ${chatDb.anticall? 'ON' : 'OFF'}\n│ • AntiLink : ${chatDb.antilink? 'ON' : 'OFF'}\n│ • AntiVirtex : ${chatDb.antivirtex? 'ON' : 'OFF'}\n│ • AntiToxic : ${chatDb.antitoxic? 'ON' : 'OFF'}\n│ • Welcome : ${chatDb.welcome? 'ON' : 'OFF'}\n│ • AntiBot : ${chatDb.antibot? 'ON' : 'OFF'}\n╰─[ Cek selesai meow~ ]─\`\`\`\n> © Neko-Bot | Created by RyxzXcode`
    await conn.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { quoted: m })
    }

else if (['me','myinfo','my','infoaku','cekaku'].includes(cmd)) {
    let loading = await conn.sendMessage(m.chat, { text: "🔎 *Neko cek identitas kamu...* 🐱" }, { quoted: m })
    await delay(600)
    let pushname = m.pushName || "No Name"
    let number = m.sender.split('@')[0]
    let teks = `╭─[ 📋 INFO KAMU ]─\n│ Hai ${salam} @${m.sender.split('@')[0]}-Oniichan! 😸\n│• 🙋 Nama : ${pushname}\n│• 📱 Nomor : ${number}\n│• 👥 Group = ${groupName}\n│ ( ${memTotal} / ${memOnline} online )\n│• 🔋 RAM/CPU = ${ramUsed} MB / ${ramTotal} MB | ${cpu}\n│• ⚡ Speed = ${speed} ms\n│• ⏰ Runtime = ${uptime}\n│• 🌐 Timezone = WITA ${wita}\n│\n│ Geser → ${memberList}...\n╰─[ Sampai jumpa lagi @${m.sender.split('@')[0]}-Oniichan, Jangan lupa mampir lagi yaa! 😸 ]─\n> © Neko-Bot | Created by RyxzXcode`
    await conn.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { edit: loading.key })
    }

 else if (['owner','creator','dev','pengembang'].includes(cmd)) {
    let ownerNumber = "628xxxx"
    let ownerName = "RyxzXcode"
    let teks = `╭─[ 👑 INFO OWNER ]─\n│ Yo ${salam} @${m.sender.split('@')[0]}-kun!\n│ Kenalan sama pencipta aku meow~ 🐾\n│\n│• 🙋 Nama : ${ownerName}\n│• 📱 Nomor : wa.me/${ownerNumber}\n│• 🌐 GitHub : github.com/${ownerName}\n│• 🤖 Bot : Neko-Bot MD 16 Blok\n│• ⏰ Aktif : ${uptime}\n│• 🌏 Timezone : WITA ${wita}\n│\n╰─[ Makasih udah pake bot buatan @${ownerNumber} ya @${m.sender.split('@')[0]}-kun! ✨ ]─\n> © Neko-Bot | Created by RyxzXcode`
    await conn.sendMessage(m.chat, { text: teks, mentions: [m.sender, ownerNumber + '@s.whatsapp.net'], contacts: [{ displayName: ownerName, vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:${ownerName}\nTEL;type=CELL;waid=${ownerNumber}:${ownerNumber}\nEND:VCARD` }] }, { quoted: m })
 }

else if (['menu','allmenu','help','daftar'].includes(cmd)) {
    let loading = await conn.sendMessage(m.chat, { text: "📂 *Neko buka menu...* ✨" }, { quoted: m })
    await delay(700)
    let teks = `╭─[ 🤖 NEKO MENU 16 BLOK V4 ]─\n│ ${salam} @${m.sender.split('@')[0]}-kun! 🐾\n│ Geser → @${m.sender.split('@')[0]} | ${groupName}\n│ Member: ${memTotal} | Online: ${memOnline}\n│\n├─[ 📋 INFO MENU ]\n│ •.infobot /.info /.cek /.me /.owner /.rvo /.rules (geser image)\n│\n├─[ 🛡️ PROTECTION 8 FITUR - BISA GESER ]\n│ •.on antidelete /.off antidelete\n│ •.on antikudeta /.off antikudeta\n│ •.on anticall /.off anticall\n│ •.on antilink /.off antilink\n│ •.on antivirtex /.off antivirtex\n│ •.on antitoxic /.off antitoxic\n│ •.on welcome /.off welcome\n│ •.on antibot /.off antibot\n│ •.on all /.off all\n│\n│ Status Sekarang:\n│ AntiDelete: ${chatDb.antidelete? 'ON ✅' : 'OFF ❌'}\n│ AntiKudeta: ${chatDb.antikudeta? 'ON ✅ AUTO' : 'OFF ❌'}\n│ AntiCall: ${chatDb.anticall? 'ON ✅' : 'OFF ❌'}\n│ AntiLink: ${chatDb.antilink? 'ON ✅' : 'OFF ❌'}\n│ AntiVirtex: ${chatDb.antivirtex? 'ON ✅' : 'OFF ❌'}\n│ AntiToxic: ${chatDb.antitoxic? 'ON ✅' : 'OFF ❌'}\n│ Welcome: ${chatDb.welcome? 'ON ✅' : 'OFF ❌'}\n│ AntiBot: ${chatDb.antibot? 'ON ✅' : 'OFF ❌'}\n│\n│• 🔋 RAM : ${ramUsed} MB | ⚡ ${speed} ms\n│• ⏰ Runtime : ${uptime}\n│• 🌐 WITA : ${wita}\n│\n╰─[ Ketik.rules untuk lihat peraturan geser kanan-kiri ↔️ ya @${m.sender.split('@')[0]}-kun! 😸 ]─\n> © Neko-Bot | Created by RyxzXcode`
    await conn.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { edit: loading.key })
    }

  else if (['rvo','readviewonce','readvo','lihat'].includes(cmd)) {
    if (!m.quoted) return conn.reply(m.chat, `╭─[ 👀 RVO SYSTEM ]─\n│ Reply foto/video sekali lihat nya @${m.sender.split`@`[0]}-kun!\n│ Contoh: reply view once terus ketik *${usedPrefix}rvo*\n╰─[ © Neko-Bot ]─`, m, { mentions: [m.sender] })
    let q = m.quoted
    let type = Object.keys(q.message)[0]
    try {
      let loading = await conn.sendMessage(m.chat, { text: `🔓 *Neko buka view once...* ⏳` }, { quoted: m })
      let buffer = await q.download()
      let caption = q.message[type]?.caption || q.text || `✅ Berhasil dibuka @${m.sender.split`@`[0]}-kun!`
      if (/image/.test(type)) {
        await conn.sendMessage(m.chat, { image: buffer, caption: caption, contextInfo: { externalAdReply: { title: `Neko-Bot AI | View Once Opened`, body: `Berhasil dipulihkan oleh Neko`, thumbnailUrl: thumb, mediaType: 1, renderLargerThumbnail: true } } }, { quoted: m })
      } else if (/video/.test(type)) {
        await conn.sendMessage(m.chat, { video: buffer, caption: caption, mimetype: 'video/mp4', contextInfo: { externalAdReply: { title: `Neko-Bot AI | View Once Opened`, body: `Berhasil dipulihkan oleh Neko`, thumbnailUrl: thumb, mediaType: 1, renderLargerThumbnail: true

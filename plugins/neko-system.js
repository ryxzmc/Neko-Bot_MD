// [NEKO-BOT - PRECENSE ULTIMATE V4
const _0xD=(s)=>Buffer.from(s,'base64').toString();
const _0xDelay=(ms)=>new Promise(r=>setTimeout(r,ms));

var _0xabc123=function(p){return Buffer.from(p,'base64').toString()}
var thumb=_0xabc123('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2hpbWFuYWNrZXJtYW4vSW1hZ2UvbWFpbi8xNzY3ODc3NDA0MDQzLTgzMi5qcGVn');
var slideImages=Array(5).fill(thumb);
var delay=function(_0x){return new Promise(_0x2=>setTimeout(_0x2,_0x))};
var clockString=function(_0x){
  var _0xh=Math.floor(_0x/3600000);
  var _0xm=Math.floor(_0x/60000)%60;
  var _0xs=Math.floor(_0x/1000)%60;
  return [_0xh,_0xm,_0xs].map(_0x3=>_0x3.toString().padStart(2,0)).join(':');
};

if (gc.antispam){
    spamMap[sender] = spamMap[sender] || []
    spamMap[sender].push(Date.now())
    spamMap[sender] = spamMap[sender].filter(t=> Date.now()-t < 5000)
    let isSticker =!!m.message?.stickerMessage
    let isAudio =!!m.message?.audioMessage
    let isTagAll = mentions.length > 15
    if (spamMap[sender].length > 5 || (isSticker && spamMap[sender].length > 3) || isAudio || isTagAll){
    await bot.sendMessage(jid, { delete: m.key }).catch(()=>{})
    if (isSticker) bot.sendMessage(jid, { text: `🚫 Spam stiker @${sender.split('@')[0]}`, mentions:[sender] })
    if (isAudio) bot.sendMessage(jid, { text: `🔇 Spam VN @${sender.split('@')[0]}`, mentions:[sender] })
    log('antispam', isSticker?'stiker': isAudio?'vn':'spam chat')
    }
  }
}

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
    let teks = `╭─[ 📋 INFO BOT ]─\n│ ${ucapanAwal}\n│\n│• 👥 Status Group = ${groupName}\n│ ( ${memTotal} / ${memOnline} online )\n│• 🔋 RAM/CPU = ${ramUsed} MB / ${ramTotal} MB | ${cpu}\n│• ⚡ Speed = ${speed} ms\n│• ⏰ Runtime = ${uptime}\n│• 🌐 Timezone = WITA ${witaFull}\n│• 🛡️ AntiDelete: ${chatDb.antidelete? 'ON ✅' : 'OFF ❌'}\n│• 👑 AntiKudeta: ${chatDb.antikudeta? 'ON ✅ AUTO RE-ADMIN' : 'OFF ❌'}\n│• 📵 AntiCall: ${chatDb.anticall? 'ON ✅' : 'OFF ❌'}\n│• 🔗 AntiLink: ${chatDb.antilink? 'ON ✅' : 'OFF ❌'}\n│• 💣 AntiVirtex: ${chatDb.antivirtex? 'ON ✅' : 'OFF ❌'}\n│• 🤬 AntiToxic: ${chatDb.antitoxic? 'ON ✅' : 'OFF ❌'}\n│• 👋 Welcome: ${chatDb.welcome? 'ON ✅' : 'OFF ❌'}\n│• 🤖 AntiBot: ${chatDb.antibot? 'ON ✅' : 'OFF ❌'}\n│\n│ Geser → ${memberList}...\n│ Total: ${memTotal} member\n│\n╰─[ Sampai jumpa lagi @${m.sender.split('@')[0]}-kun, jangan lupa istirahat ya! 💤 ]─\n> © Neko-Bot | Created by RyxzXcode`
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

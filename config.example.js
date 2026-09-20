// RENAME FILE INI JADI config.js SETELAH CLONE
// Jangan upload config.js asli ke GitHub!
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['628xxxx', 'RyxzXcode', true]
]
global.mods = []
global.prems = []
global.APIs = {}
global.APIKeys = {}
global.packname = 'Neko-Bot MD'
global.author = 'RyxzXcode'
global.botname = 'Neko-Bot'
global.thumb = 'https://raw.githubusercontent.com/himanackerman/Image/main/1767877404043-832.jpeg'

// === NEKO AI GUARD SETUP ===
// MODE MURNI TANPA API (DEFAULT) = kosongin aja
// MODE PAKAI OPENAI = isi key di bawah
global.openai_key = '' // isi: sk-xxxxxxx
global.openai_org = '' // isi: org-xxxx

// DATABASE
global.dbfile = 'database.json'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.example.js'"))
  import(`${file}?update=${Date.now()}`)
})

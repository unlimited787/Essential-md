import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
┌──⭓ 𝐄𝐒𝐒𝐄𝐍𝐓𝐈𝐀𝐋 𝐌𝐄𝐍𝐔 
│🚷 ⭔ ${usedPrefix}k / kick
│👋 ⭔ ${usedPrefix}1/0 benvenuto
│🛡️ ⭔ ${usedPrefix}1/0 antilink
│📢 ⭔ ${usedPrefix}h / hidetag
│👑 ⭔ ${usedPrefix}p / promuovi @
│✋ ⭔ ${usedPrefix}r / retrocedi @
│🤐 ⭔ ${usedPrefix}c / chiuso
│🗣️ ⭔ ${usedPrefix}a / aperto
└───────⭓
`.trim() 
conn.reply(m.chat, info, m)
}
handler.help = ['menu']
handler.tags = ['menu']
handler.command = /^(menu)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}

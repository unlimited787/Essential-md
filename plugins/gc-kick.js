let handler = async (m, { conn, participants, usedPrefix, command }) => {
let kicktext = `chi? tagga qualcuno`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
conn.groupParticipantsUpdate(m.chat, [user], 'remove')}
handler.command = /^(kick|ban|addio|k)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler

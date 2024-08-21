let handler = async (m, { conn }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    await conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/overlay/gay', {
        avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), 'error.png', '*\`『 انت الوان هقهقهق😹 』\`*', m)
}
handler.help = ['مزحة *@user*']
handler.tags = ['fun']
handler.command = /^(الوان)$/i

export default handler

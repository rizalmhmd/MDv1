const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	danzz: 'https://danzzapi.xyz',
}

global.APIKeys = {
	'https://danzzapi.xyz': '921h5a4282',
}

// Other
global.apikey = ['danzz'] // Get in: https://danzzapi.xyz
global.apikeyprem = ['danzzprem'] // Get in: https://danzzapi.xyz
global.apikeyvip = ['921h5a4282'] // Get in: https://danzzapi.xyz
global.namabot = ['𝙕𝘼𝙇𝙇𝙭𝘽𝙊𝙏𝙕']
global.namaowner = ['𝚉𝚊𝚕𝚕']
global.owner = ['6281333154367']
global.premium = ['6281333154367']
global.packname = '© Powered By'
global.author = '𝚉𝚊𝚕𝚕'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.prefix = ['#']
global.symbol1 = '•'
global.symbol2 = '>'
global.wm = '© 𝚉𝚊𝚕𝚕'
global.mess = {
    success: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Khusus Group Chat',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus Nomor Bot',
    wait: 'Waittt...',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
global.limitawal = {
	free: "100",
        premium: "unlimited"
}
global.thumb = fs.readFileSync('./media/img/1.jpg')
global.qris = { url: 'https://telegra.ph/file/cd0372ebf13b265f3feb5.jpg' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

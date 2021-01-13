/ *
* "Ó vocês que acreditam, por que dizem algo que não fazem?
* Há tanto ódio contra Allah que você diz coisas que não faz. "
* (Surah ash-Shaff: 2-3).
* /
const (decryptMedia} = require ('@ open-wa / wa-decrypt')
const fs = require ('fs-extra')
const axios = require ('axios')
momento const = requer ('fuso horário do momento')
const get = require ('got')
const fetch = require ('node-fetch')
const color = require ('./ lib / color')
const (spawn, exec} = require ('child_process')
const nhentai = require ('nhentai-js')
const {API} = requer ('nhentai-api')
const {lyrics, quotemaker, randomNimek, fb, sleep, scheduleTv, ss} = require ('./ lib / functions')
const (help, snk, info, donate, readme, listChannel} = require ('./ lib / help')
const (stdout} = requer ('processo')
const nsfw_ = JSON.parse (fs.readFileSync ('./ lib / NSFW.json'))
const welkom = JSON.parse (fs.readFileSync ('./ lib / welcome.json'))
const {RemoveBgResult, removeBackgroundFromImageBase64, removeBackgroundFromImageFile} = require ('remove.bg')

moment.tz.setDefault ('Asia / Jakarta'). locale ('id')

module.exports = msgHandler = async (cliente, mensagem) => {
    experimentar {
        const {type, id, from, t, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, postedJidList} = mensagem
        deixe {body} = mensagem
        const {name, formattedTitle} = chat
        deixe {pushname, verifyName} = remetente
        pushname = pushname || Verificado
        comandos const = legenda || corpo || ''
        comando const = commands.toLowerCase (). split ('') [0] || ''
        const args = commands.split ('')

        const msgs = (mensagem) => {
            if (command.startsWith ('!')) {
                if (message.length> = 10) {
                    return `$ {message.substr (0, 15)}`
                } outro {
                    return `$ {message}`
                }
            }
        }

        const mess = {
            aguarde: '[WAIT] Em andamento⏳ aguarde um momento',
            erro: {
                St: '[❗] Envie imagens com a legenda *! Adesivo * ou imagens marcadas que foram enviadas',
                Qm: '[❗] Ocorreu um erro, talvez o tema não esteja disponível!',
                Yt3: '[❗] Ocorreu um erro, não foi possível converter para mp3!',
                Yt4: '[❗] Ocorreu um erro, talvez o erro tenha sido causado pelo sistema.',
                Ig: '[❗] Ocorreu um erro, talvez porque a conta é privada',
                Ki: '[❗] O bot não pode eliminar o administrador do grupo!',
                Anúncio: '[❗] Não é possível adicionar destino, talvez porque seja privado',
                Iv: '[❗] O link que você enviou é inválido!'
            }
        }
        const apiKey = 'API-KEY' // apikey, você pode obtê-lo em https://mhankbarbars.herokuapp.com/api
        const time = moment (t * 1000) .format ('DD / MM HH: mm: ss')
        const botNumber = await client.getHostNumber ()
        const blockNumber = await client.getBlockedIds ()
        const groupId = isGroupMsg? chat.groupMetadata.id: ''
        const groupAdmins = isGroupMsg? esperar client.getGroupAdmins (groupId): ''
        const isGroupAdmins = isGroupMsg? groupAdmins.includes (sender.id): false
        const isBotGroupAdmins = isGroupMsg? groupAdmins.includes (botNumber + '@ c.us'): false
        const ownerNumber = ["628xxx@c.us", "558584051146"] // substitua pelo seu número do Whatsapp
        const isOwner = ownerNumber.includes (sender.id)
        const isBlocked = blockNumber.includes (sender.id)
        const isNsfw = isGroupMsg? nsfw_.includes (chat.id): false
        const uaOverride = 'WhatsApp / 2.2029.4 Mozilla / 5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit / 537.36 (KHTML, como Gecko) Chrome / 83.0.4103.116 Safari / 537.36'
        const isUrl = new RegExp (/ https ?: \ / \ / (www \.)? [- a-zA-Z0-9 @:% ._ + ~ # =] {1,256} \. [a-zA-Z0 -9 ()] {1,6} \ b ([- a-zA-Z0-9 () @:% _ +. ~ #? & / =] *) / Gi)
        if (! isGroupMsg && command.startsWith ('!')) console.log ('\ x1b [1; 31m ~ \ x1b [1; 37m>', '[\ x1b [1; 32mEXEC \ x1b [1; 37m] ', hora, cor (msgs (comando)),' de ', cor (nome do usuário))
        if (isGroupMsg && command.startsWith ('!')) console.log ('\ x1b [1; 31m ~ \ x1b [1; 37m>', '[\ x1b [1; 32mEXEC \ x1b [1; 37m]' , hora, cor (msgs (comando)), 'de', cor (pushname), 'em', cor (titulo formatado))
        // if (! isGroupMsg &&! command.startsWith ('!')) console.log ('\ x1b [1; 33m ~ \ x1b [1; 37m>', '[\ x1b [1; 31mMSG \ x1b [1 ; 37m) ', tempo, cor (corpo),' de ', cor (nome do usuário))
        // if (isGroupMsg &&! command.startsWith ('!')) console.log ('\ x1b [1; 33m ~ \ x1b [1; 37m>', '[\ x1b [1; 31mMSG \ x1b [1; 37m) ', tempo, cor (corpo),' de ', cor (nome do usuário),' em ', cor (titulo formatado))
        if (isBlocked) return
        // if (! isOwner) return
        switch (comando) {
        caso '! adesivo':
        caso '! adesivo':
            if (isMedia && type === 'imagem') {
                const mediaData = await decryptMedia (mensagem, uaOverride)
                const imageBase64 = `data: $ {mimetype}; base64, $ {mediaData.toString ('base64')}`
                aguarde clie
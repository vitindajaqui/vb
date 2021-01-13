const {criar, Cliente} = requer ('@ open-wa / wa-automate')
const welcome = require ('./ lib / welcome')
const msgHandler = require ('./ msgHndlr')
opções const = requer ('./ opções')

const start = async (client = new Client ()) => {
        console.log ('[SERVIDOR] Servidor iniciado!')
        // Força-o a manter a sessão atual
        client.onStateChanged ((state) => {
            console.log ('[Estado do cliente]', estado)
            if (state === 'CONFLICT' || state === 'UNLAUNCHED') client.forceRefocus ()
        })
        // ouvindo a mensagem
        client.onMessage ((assíncrono (mensagem) => {
            client.getAmountOfLoadedMessages ()
            .então ((msg) => {
                if (msg> = 3000) {
                    client.cutMsgCache ()
                }
            })
            msgHandler (cliente, mensagem)
        }))

        client.onGlobalParicipantsChanged ((async (heuh) => {
            aguardo bem-vindo (cliente, heuh)
            // esquerda (cliente, heuh)
            }))
        
        client.onAddedToGroup (((chat) => {
            let totalMem = chat.groupMetadata.participants.length
            if (totalMem <30) {
            client.sendText (chat.id, `Cih membro nya cuma $ {totalMem}, Kalo mau invite bot, minimal jumlah mem ada 30`) .then (() => client.leaveGroup (chat.id)). then (( ) => client.deleteChat (chat.id))
            } outro {
                client.sendText (chat.groupMetadata.id, `Halo warga grup * $ {chat.contact.name} * terimakasih sudah menginvite bot ini, untuk melihat menu silahkan kirim *! help *`)
            }
        }))

        /*client.onAck((x => {
            const {de, para, ack} = x
            if (x! == 3) client.sendSeen (to)
        })) * /

        // ouvindo na chamada recebida
        client.onIncomingCall ((async (call) => {
            aguarde client.sendText (call.peerJid, 'Maaf, saya tidak bisa menerima panggilan. nelfon = bloquear!')
            .então (() => client.contactBlock (call.peerJid))
        }))
    }

criar (opções (verdadeiro, iniciar))
    .então (cliente => iniciar (cliente))
    .catch ((erro) => console.log (erro))
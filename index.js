var rpc = require("discord-rpc")

const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', () => {

client.request('SET_ACTIVITY', {

pid: process.pid,

activity : {

details : "Making Discord Bot For Nitro dm me",

assets : {

large_image : "chill",

large_text : "ChillBeta (Discord Bot)" // THIS WILL SHOW AS "Playing <Status>" from the outisde

},

buttons : [{label : "Join My Server" , url : "https://discord.gg/jp8et9xU56"},{label : "My Youtube",url : "https://www.youtube.com/channel/UC9xBpEHyRxZlOKmRK7nDWvw"}]

}

})

})

client.login({ clientId : "800047211152277524" }).catch(console.error);

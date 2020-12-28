const Discord = require("discord.js");
const fs = require("fs");
const superagent = require("superagent");
const bot = new Discord.Client();
const config = require("./config.json");
const colours = require("./Colours.json");
const { CLIENT_RENEG_LIMIT } = require("tls");


bot.login(config.token);


 
bot.on("ready", async () => {
    console.log("(TutoDev) : En ligne");
    bot.user.setActivity("Dieux Craype")
});
 
 
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
 
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
 
    if( cmd === `hello`) {
        message.channel.send("Bonjour à vous")
        
    }
    let blacklisted = ['fdp', 'ntm', 'connard', 'pute', 'putain', 'ta gueule', 'nique', 'salope', 'PD', 'batard', 'putin', 'enfoiré', 'connare', 'fils de pute', 'bâtard', 'bicot', 'conasse', 'couille molle', 'débile', 'ducon', 'dugland', 'enculé', 'fachiste', 'imbécile', 'lavette','geule' , 'mere' , 'nik ' , 'pute', 'couilles' , 'couille' ,'pute' , 'merde' , 'foutre', 'idiot' , 'pisse','foutre', 'salop', 'mongole', 'fck','mort' , 'cul','cull','tchoin','foutre','michto','porc','beurette', 'mongole', 'pd','Fils de pute','fils de pute','salo', 'fuck','nique','nik','n i q u e','niq ue','morveux', 'f uck','f uck', 'f i l s d e pu te','enculer','en culer','n t m', 'enculée', 'encu ler','conar','connar','conard','con nare','c on','ta guele','ferme la ','putin','put','pu te','tepu','put ain','pu tin','batare', 'bat ard','batare','salle arabe','arabe','negro','bamboula','chien de la casse','bite','Ta race','Stuf','Fils de wouaf wouaf','Face de pine','P.d','Sodomie','Sodomite','Mais fermé la','Ferme la','Je ten file violent','couilllllllle','L4che couiille','L3che couiille','Pizza 4 fromage sans fromage','Puute','Pûte','puute','chienne','gros chien','Cogno','Crotte de bique','chibre','Phalus','Tapette','tapette','Unidentifiable','Féministe','chacal','Chaaaaacaaaaal','Fils de loutre','Fk','Stfu','Fiotte','Laideron','Sale mairde','Trou duc','F,d p','F-d-p','Garage à biite','Je te chie dans le cou','soupiral fecale','F. D. P','Teube','Chibron','kekette','chibrax',''];

    let foundInText = false;

    for(var i in blacklisted) {
        if(message.content.toLocaleLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    if(foundInText) {
        message.delete()
        message.channel.send("Le joueur:" +"**" + " " + message.author.username +"**" + " " + "a essayer de poster une insulte " + ":face_with_symbols_over_mouth:" )
    }
    
})
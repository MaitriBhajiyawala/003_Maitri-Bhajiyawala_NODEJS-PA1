var readline=require('readline');
var chatbot=require('./chatbot');

var r1=readline.createInterface(process.stdin,process.stdout);

r1.setPrompt("YOU=>");
r1.prompt();

r1.on('line',(msg)=>{
    console.log("BOT=>"+chatbot.chatbotReply(msg));
    // console.log("BOT=>"+msg);
    r1.prompt();
})
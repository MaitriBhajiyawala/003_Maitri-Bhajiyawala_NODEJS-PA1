module.exports.chatbotReply=function(msg)
{
    msg=msg.toLowerCase();
    if(msg.indexOf("hii")>-1 || msg.indexOf("hello")>-1 )
    {
        return "Hello Welcome...";
    }
    else if (msg.indexOf("what")>-1 || msg.indexOf("name")>-1)
    {
        return "I am Domain Specific Chatbot";
    }
    else if (msg.indexOf("what")>-1 || msg.indexOf("nodejs")>-1)
    {
        return "Node.js is JavaScript Framework and it is open sourse";
    }
    else
    {
        return "Sorry I have no Answer.";
    }
}
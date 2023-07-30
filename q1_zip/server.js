const http=require('http');
const  url  = require('url');
const static=require('node-static');
const fileserver=new static.Server('./files');
 
var server=http.createServer((req,res)=>{
    const url1=url.parse(req.url,true);
    if(req.url=="form")
    {
        
        fs.readFile("./files/form_img.html",(err,data)=>{
            if(err)
            {
                res.writeHead("404",{"Content-Type": "text/html"});
                res.write("404:File not found");
            }
            else
            {
                res.writeHead(200,{"Content-Type": "text/html"});
                res.write(data)
                res.end();
            }
        });
    }
    else if(url1.pathname=="/form_get" && req.method=="GET")
    {
        res.write("Your First Name:"+url1.query.fname+" And your Last Name:"+url1.query.lname);
        res.end();
    }
    else if(url1.pathname=="/form_post" && req.method=="POST")
    {
        var body='';
        req.on('data',postdata=>{
            body+=postdata.toString();
        });
        req.on('end',function(){
            res.write(body)
            res.end();
        })
    }
    req.addListener('end', function(){
        fileserver.serve(req,res);
    }).resume();
}).listen(8080);
console.log("Listening on port 8080");
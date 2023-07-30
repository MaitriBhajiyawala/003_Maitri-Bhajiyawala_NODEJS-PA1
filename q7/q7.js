const { error } = require('console');
var fs=require('fs');

 function unlink(filepath)
 {
    return new Promise((success,fail)=>
    {
        fs.unlink(filepath,(data,err)=>{
            if(err)
            {
                fail(err)
            }
            else
            {
                success();
            }
        })
    })
 }
 unlink('./q7.txt')
 .then(()=>
 {
    console.log("File Unlinked.")
 })
 .catch((err)=>
 {
    console.log(err)
 })

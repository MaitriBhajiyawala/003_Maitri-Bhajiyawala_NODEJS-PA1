const mysql=require('nodejs-mysql').default;

const config=
{
    host:"localhost",
    user:"maitri",
    password:"maitri2704",
    database:"nodejs_pr"
}
const db=mysql.getInstance(config);

db.connect()
.then(function(){
    console.log("Connected!")
     var sql="INSERT INTO table1(id,fname,lname) VALUES (2,'maitri','bhajiyawala')";
     return db.exec(sql)
     .then((res)=>{
        console.log(res);
        return db.exec("SELECT * FROM table1");
    })
    .then((result)=>{
        for(var i in result)
        {
            console.log('Data:',result[i].fname +" "+result[i].lname);
        }
        process.exit(0);
    })
    .catch((err)=>
    {
        console.log("Error");
        process.exit(0);
    })
})
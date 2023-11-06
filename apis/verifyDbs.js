const sqlite3=require('sqlite3').verbose()
const db=new sqlite3.Database('./mydatabase.db')
db.all('SELECT * FROM users',[],(err,rows)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(rows)
    }
})
db.close()
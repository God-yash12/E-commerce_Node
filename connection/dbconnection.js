const mysql = require('mysql')
const config = require("./config")

const connection = mysql.createConnection(config)


connection.connect((error)=>{
    if(error){
        console.log(error)
        return;
    }
    console.log("database connected successfully");
});

module.exports =  connection 
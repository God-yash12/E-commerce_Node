
const connection = require("../connection/dbconnection")

class user {
    static insertNewUser(data) {
        const { username, email, phone, password } = data;
        return new Promise((resolve, reject) => {
            const sql = "INSERT INTO user_table (username, email, phone, password) VALUES(?, ?, ?, ?)";
            connection.query(sql, [username, email, phone, password], (error, results)=>{
                if(error){
                    return reject(error)
                }
                return resolve(results)
            })
        })
    }

    static userLogin(email, password){
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM user_table WHERE email = ? AND password = ?";
            connection.query(sql, [email, password], (error, results)=>{
                if(error){
                    reject(error)
                }
                resolve(results)
            })
        })
    }

}



module.exports = user;

const mysql = require('mysql');
let pool;
module.exports = {
  establishConnection: () => {
    if (conn) 
        return conn;
    conn = mysql.createPool({
        user: 'root'
        ,password: ''
        ,host: 'localhost'
        ,connectionLimit: 50
        ,database:'mydb'
    });
    return conn;
  }
};
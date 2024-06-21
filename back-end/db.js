const mysql = require('mysql');

require('dotenv').config();

const database = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'mysql',
    database: 'emails_db', 
    port: 3307
});

module.exports = database;
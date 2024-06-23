const mysql = require('mysql');

require('dotenv').config();

const database = mysql.createConnection({
    host: "localhost",
    user: 'hirano',
    password: 'hirano',
    database: 'emails_db'
});

module.exports = database;
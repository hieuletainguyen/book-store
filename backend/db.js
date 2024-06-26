const mysql = require('mysql2');

require('dotenv').config();

const database = mysql.createConnection({
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'mysql',
    database: process.env.DB_NAME || 'emails_db',
    host: process.env.DB_HOST || 'mysql-container',
});

module.exports = database;
const fs = require('fs');
const bcrypt  = require("bcrypt");
const { admin_password, generate_salt} = require("./secret-data");

let hash_admin_password;
const AdminPassword = async () => {
    const salt = await generate_salt();
    const hashAdminPassword = await bcrypt.hash(admin_password, salt);
    return hashAdminPassword
}

AdminPassword().
    then((hashedPassword) => {
        hash_admin_password = hashedPassword;
    })

const data = require("./data/products");

const sqlStatement = [];

sqlStatement.push(`
CREATE DATABASE IF NOT EXISTS bookstores;

USE bookstores;

CREATE TABLE IF NOT EXISTS bookstore(
    id int AUTO_INCREMENT, 
    title VARCHAR(50), 
    author VARCHAR(50), 
    image VARCHAR(50), 
    pages VARCHAR(50), 
    country VARCHAR(50), 
    price VARCHAR(50), 
    url VARCHAR(100), 
    PRIMARY KEY(id)
);
    `);

const insertStatement = data.map(book => `("${book.title}","${book.author}",
    "${book.image}", "${book.pages}", "${book.country}", "${book.price}",
    "${book.url}")`);

sqlStatement.push(`INSERT INTO bookstore (title, author, image, pages, country, price, url) VALUES 
    ${insertStatement.join(',\n')};`)

sqlStatement.push(`
CREATE TABLE IF NOT EXISTS accounts (id INT AUTO_INCREMENT, 
    username VARCHAR(50), 
    password VARCHAR(500), 
    PRIMARY KEY(id)
);

    
CREATE TABLE IF NOT EXISTS tokens (id INT AUTO_INCREMENT, 
    username VARCHAR(50),
    token VARCHAR(500),
    PRIMARY KEY(id)
);

`)

fs.writeFileSync('../mysql-init/init.sql', sqlStatement.join('\n'), 'utf8');

console.log('SQL Script generated done!')



// INSERT INTO accounts (username, password) VALUES 
//     ("admin", ${hash_admin_password});
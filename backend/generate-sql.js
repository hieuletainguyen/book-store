const fs = require('fs');

const data = require("./data/products");

const sqlStatement = [];

sqlStatement.push(`
    USE emails_db

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

fs.writeFileSync('../mysql-init/init.sql', sqlStatement.join('\n'), 'utf8');

console.log('SQL Script generated done!')
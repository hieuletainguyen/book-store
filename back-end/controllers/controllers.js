const { validationResult } = require('express-validator');
const database = require('../db');
const data = require("../data/products");

const initTable = (req, res) => {
    const sqlQuery =  'CREATE TABLE IF NOT EXISTS bookstore(id int AUTO_INCREMENT, title VARCHAR(50), author VARCHAR(50), image VARCHAR(50), pages VARCHAR(50), country VARCHAR(50), price VARCHAR(50), url VARCHAR(100), PRIMARY KEY(id))';

    database.query(sqlQuery, (err) => {
        if (err) throw err;

        res.send('Table created!')
    });
};

const initDatabase = (req, res) => {
    
    const values = data.map(book => [book.title, book.author, book.image, book.pages, book.country, book.price, book.url]);
    
    const sqlQuery = `INSERT INTO bookstore (title, author, image, pages, country, price, url) VALUES ?`;

    database.query(sqlQuery, [values],(err, result) => {
        if (err) throw err;

        res.send("Done initialize database!")
    });

        
    

}

const getAllBooks = (req, res) => {
    const sqlQuery = 'SELECT * FROM bookstore';

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.json({ 'bookstore': result });
    });
};


const addBook = (req, res) => {
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const subscriber = {
            title: req.body.title, 
            author: req.body.author, 
            image: req.body.image, 
            pages: req.body.pages, 
            country: req.body.country, 
            price: req.body.price, 
            url: req.body.url,  

        };

        const sqlQuery = 'INSERT INTO bookstore SET ?';

        database.query(sqlQuery, subscriber, (err, row) => {
            if (err) throw err;

            res.send('Add book successfully!');
        });
    }
};

module.exports = {
    initDatabase,
    initTable,
    getAllBooks,
    addBook
}
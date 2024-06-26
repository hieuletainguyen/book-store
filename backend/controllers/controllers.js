const { validationResult } = require('express-validator');
const database = require('../db');
const data = require("../data/products");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


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

            res.json({message: "success"});
        });
    }
};

const initAccountSystem = (req, res) => {
    const sqlQuery = 'CREATE TABLE IF NOT EXISTS accounts (id INT AUTO_INCREMENT, username VARCHAR(50), password VARCHAR(100), PRIMARY KEY(id))';

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.json({message: "success"})
    })
}

const addAccount = (req, res) => {
    const errors = validationResult(req);

    if (errors.array().length > 0){
        res.send(errors.array());
    } else {
        const {username, password} = req.body;

        const account = {
            username: username,
            password: password
        }

        const sqlQuery = 'INSERT INTO accounts SET ?';

        database.query(sqlQuery, account, (err, row) => {
            if (err) throw err;

            res.send({message: "success"});
        });


    }
}

const authorization = (req, res) => {
    const {username, password} = req.body;

    const sqlQuery = "SELECT * FROM accounts WHERE username = ?";

    database.query(sqlQuery, username, (err, result) => {
        if (err) throw err;

        if (result.length === 1 && result[0].password === password){
            let loginData = {
                username, 
                signInTime: Date.now(),
            }

            const token = jwt.sign(loginData, jwtSecretKet);
            res.status(200).json({message: "success", token})
        } else {
            res.status(400).json({message: "fail"})
        }
    })
}

const checkAccount = (req, res) => {
    const {username} = req.body;

    const sqlQuery = "SELECT * FROM accounts WHERE username = ?";

    database.query(sqlQuery, username, (err, result) => {
        if (err) throw err;

        if (result.length === 0){
            res.json({isExisted: false})
        } else {
            res.json({isExisted: true})
        }

    })
}

const checkBook = (req, res) => {
    const {author, title} = req.body;

    const sqlQuery = "SELECT author FROM bookstore WHERE title = ? AND author = ?";


    database.query(sqlQuery, title, author, (err, result) => {
        if (err) throw err;

        if (result.length === 0){
            res.json({isExisted: false})
        } else {
            res.json({isExisted: true})
        }

    })
}

module.exports = {
    initDatabase,
    initTable,
    getAllBooks,
    addBook, 
    initAccountSystem, 
    addAccount, 
    checkAccount, 
    authorization, 
    checkBook
}
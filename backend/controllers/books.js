const { validationResult } = require('express-validator');
const database = require('../db');


const getAllBooks = (req, res) => {
    const sqlQuery = 'SELECT * FROM bookstore';

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.json({ 'bookstore': result });
    });
};



const checkBook = (req, res) => {
    const {author, title} = req.body;

    const sqlQuery = "SELECT author FROM bookstore WHERE title = ? AND author = ?";


    database.query(sqlQuery, [title, author], (err, result) => {
        if (err) throw err;

        if (result.length === 0){
            res.json({isExisted: false})
        } else {
            res.json({isExisted: true})
        }

    })
};



const addBook = (req, res) => {
    const errors = validationResult(req);
    const {username, status, title, author, image, pages, country, price, url} = req.body;

    if (username !== "admin" || status !== true) {
        return res.send({message: "You need to be an admin to add book"});
    } 

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {

        const check = "SELECT * FROM bookstore WHERE title = ? and  author = ?"; 

        database.query(check, [title, author], (err, result) => {
            if (err) throw err;

            if (result.length > 0) {
                return res.send({message: "Book is already existed"})
            } else {

                const subscriber = {
                    title: title, 
                    author: author, 
                    image: image, 
                    pages: pages, 
                    country: country, 
                    price: price, 
                    url: url, 
        
                };
        
                const sqlQuery = 'INSERT INTO bookstore SET ?';
        
                database.query(sqlQuery, subscriber, (err, row) => {
                    if (err) throw err;
        
                    res.json({message: "success"});
                });
            }
        })
    }
};

module.exports = {
    addBook,
    checkBook,
    getAllBooks
}
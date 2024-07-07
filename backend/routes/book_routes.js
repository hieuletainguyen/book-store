const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const controller = require("../controllers/books");

router.get('/get-books', controller.getAllBooks);

router.post('/check-book', 
    body("author").not().isEmpty().escape(),
    body("title").not().isEmpty().escape(),
    controller.checkBook);

router.post('/add-book', 
    body('title').not().isEmpty().escape(),
    body('author').not().isEmpty().escape(),
    body('image').escape(),
    body('pages').not().isEmpty().escape(),
    body('country').not().isEmpty().escape(),
    body('price').not().isEmpty().escape(),
    body('url').not().isEmpty().escape(), 
    controller.addBook   
);

module.exports = router;
const express = require('express');
const controller = require('../controllers/controllers');
const book_controller = require("../controllers/books");
const account_controller = require("../controllers/accounts")
const { body } = require('express-validator');
const router = new express.Router();


router.get('/init_table', controller.initTable);
router.get('/init_database', controller.initDatabase);

router.get("/init-account-system", controller.initAccountSystem)
router.post("/check-account",  controller.checkAccount)


router.get('/get-books', controller.getAllBooks);

//==================For account =======================================

router.post("/add-account", 
    body("username").not().isEmpty().escape(), 
    body("password").not().isEmpty().escape(),
    account_controller.addAccount
);
router.post("/auth", 
    body("username").not().isEmpty().escape(), 
    body("password").not().isEmpty().escape(),
    account_controller.authorization
)

router.post("/check-account",  account_controller.checkAccount)

//==================For Book=========================================

router.get('/get-books', book_controller.getAllBooks);

router.post('/check-book', 
    body("author").not().isEmpty().escape(),
    body("title").not().isEmpty().escape(),
    book_controller.checkBook);

router.post('/add-book', 
    body('title').not().isEmpty().escape(),
    body('author').not().isEmpty().escape(),
    body('image').escape(),
    body('pages').not().isEmpty().escape(),
    body('country').not().isEmpty().escape(),
    body('price').not().isEmpty().escape(),
    body('url').not().isEmpty().escape(), 
    book_controller.addBook   
);

module.exports = router;
const express = require('express');
const controller = require('../controllers/controllers');
const { body } = require('express-validator');
const router = new express.Router();

router.get('/init_table', controller.initTable);
router.get('/init_database', controller.initDatabase);

router.get("/init-account-system", controller.initAccountSystem)
router.post("/check-account",  controller.checkAccount)

router.post("/add-account", 
    body("username").not().isEmpty().escape(), 
    body("password").not().isEmpty().escape(),
    controller.addAccount
);
router.get("/auth", 
    body("username").not().isEmpty().escape(), 
    body("password").not().isEmpty().escape(),
    controller.authorization
)


router.get('/get-books', controller.getAllBooks);

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
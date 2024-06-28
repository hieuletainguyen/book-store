const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const controller = require("../controllers/accounts");

router.post("/check-account",  controller.checkAccount);

router.post("/add-account", 
    body("username").not().isEmpty().escape(), 
    body("password").not().isEmpty().escape(),
    controller.addAccount
);
router.post("/auth", 
    body("username").not().isEmpty().escape(), 
    body("password").not().isEmpty().escape(),
    controller.authorization
)



module.exports = router;

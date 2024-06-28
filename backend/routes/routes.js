const express = require('express');
const controller = require('../controllers/controllers');
const { body } = require('express-validator');
const router = new express.Router();


router.get('/init-table', controller.initTable);
router.get('/init-database', controller.initDatabase);
router.get("/init-account-system", controller.initAccountSystem);


module.exports = router;
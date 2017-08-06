const express = require('express');

const ctrlMain = require('../controllers/main');

const router = express.Router();


/* GET home page. */
router.get('/', ctrlMain.index);

/* Login Page */
router.get('/login', ctrlMain.login);
router.get('/signup', ctrlMain.createAnAccount);

module.exports = router;

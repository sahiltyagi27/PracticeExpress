const express = require('express');
const router = express.Router();

/**
 *  GET ROUTES
 */
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/hello', (req, res) => {
    res.render('hello',{name: req.cookies.username});
});

router.get('/superman', (req, res) => {
    res.render('superman');
});

router.get('/batman', (req, res) => {
    res.render('batman');
});

/******************************************************************* */
/**
 *  POST ROUTES
 */

router.post('/hello', (req, res) => {
    res.cookie('username',req.body.username);
    res.render('hello',{name:req.body.username});
});

module.exports = router;
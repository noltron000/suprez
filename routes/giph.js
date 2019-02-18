const express = require('express');
const router = express.Router();
const User = require('../models/user');
const auth = require('./helpers/auth');

// GET Giphs
router.get('/hello-gif', function (req, res) {
    res.render('gif-home', {});
})

// GET Giphs
// router.get('/hello-gif', function (req, res) {
//     var gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif';
//     res.render('hello-gif', {gifUrl: gifUrl});
// })

// GET Greeting Page
// router.get('/greetings/:name', function (req, res) {
//     var name = req.params.name;
//     res.render('greetings',  {name: name} );
// })

// GET Home Page for Giphs
// router.get('/home', function (req, res) {
//     res.render('gif-home', {});
// })

module.exports = router;
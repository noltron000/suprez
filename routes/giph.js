const express = require('express');
const router = express.Router();
const User = require('../models/user');
const auth = require('./helpers/auth');

// GET Giphs
router.get('/hello-gif', function (req, res) {
    var gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif'
    res.render('hello-gif', {gifUrl: gifUrl})
})

router.get('/greetings/:name', function (req, res) {
    var name = req.params.name;
    res.render('greetings',  {name:name} );
})

module.exports = router;
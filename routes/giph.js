const express = require('express');
const router  = express.Router();
const User    = require('../models/user');
const auth    = require('./helpers/auth');

var http      = require('http');
var giphy     = require('giphy-api')();

// GIPHY API
router.get('/', function (req, res) {
    var queryString = req.query.term;
    console.log(queryString);
    // removes white spaces and restricted characters
    var term = encodeURIComponent(queryString);
    // putting the search term into GIPHY API
    var url  = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=M6qnJc0px1XEaQH1IXI0eQaa6dQWi886'

    http.get(url, function(response) {

        // sets response to utf8
        response.setEncoding('utf8');

        var body = '';

        response.on('data', function(d) {
            // continuously updates stream with data from giphy
            body += d;
        });

        response.on('end', function() {
            // retrieves finished data and parses it (JSON)
            var parsed = JSON.parse(body);
            // renders the home template and pass gif data to template
            res.render('gif-home', {gifs: parsed.data})
        });

    });
})

// GET Giphs Search
router.get('/', function (req, res) {
    console.log(req.query);
    res.render('gif-home', {});
})

router.get('/', function(req, res) {
    giphy.search(req.query.term, function (err, response) {
        res.render('gif-home', {gifs: response.data})
    });
});



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
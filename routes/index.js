var express = require('express');
var router = express.Router();
const User = require('../models/user')

// LAYOUT
router.use(function(req, res, next) {
  res.locals.title = "Suprez";
  res.locals.currentUserId = req.session.userId;

  next();
});

// HOME
router.get('/', (req, res, next) => {
     const currentUserId = req.session.userId;
     
     res.render('index', { title: 'Suprez', currentUserId: currentUserId});
});

// LOGIN
router.get('/login', (req, res, next) => {
    res.render('login');
});

// POST LOGIN
router.post('/login', (req, res, next) => {
    // console.log('logging in!');
    // console.log(req.body);
    User.authenticate(req.body.username, req.body.password, (err, user) => {
        // if faulty login
        if (err || !user) {
            const next_error = new Error("Username or password incorrect");
            next_error.status = 401;

            return next(next_error);
        } else {
            // user session
            req.session.userId = user._id;

            return res.redirect('/') ;
        }
    });
});

// LOGOUT
router.get('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) return next(err);
    });
  }

  return res.redirect('/login');
});

module.exports = router;

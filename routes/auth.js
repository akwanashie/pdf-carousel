var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
  req.session.destroy((error) => {
    if (error) { console.log(`Unable to reset session: ${error}`); }
  });
  res.render('login');
});

router.get('/logout', function(req, res, next) {
  res.redirect('/login');
});

router.post('/login', function(req, res, next) {
  // hard-code username and password for intial pass.
  if (req.body.username === 'admin' && req.body.password === 'password') {
    req.session.username = req.body.username;
    req.session.role = 'User';
    req.session.fullName = 'Administrator';
    res.redirect('/');  
  } else {
    res.render('login', { error: 'Invalid username and/or password.' });
  }
});

module.exports = router;

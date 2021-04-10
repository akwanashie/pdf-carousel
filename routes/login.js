const express = require('express');
const auth = require('../lib/auth');
const router = express.Router();

router.get('/login', function(req, res, next) {
  req.session.destroy((error) => {
    if (error) { console.log(`Unable to reset session: ${error}`); }
  });
  res.render('login');
});

router.get('/logout', function(req, res, next) {
  res.redirect('/login');
});

router.post('/login', async function(req, res, next) {
  if (await auth.areCredentialsValid(req.body.username, req.body.password)) {
    req.session.username = req.body.username;
    req.session.role = 'User';
    req.session.fullName = 'Administrator';
    res.redirect('/');  
  } else {
    res.render('login', { error: 'Invalid username and/or password.' });
  }
});

module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/logout', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  console.log(req.body);
  req.session.username = req.body.username;
  req.session.role = 'user';
  res.redirect('/');
});

module.exports = router;

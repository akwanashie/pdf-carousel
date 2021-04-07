var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const templateData = {
    title: 'Manage Files',
    subTitle: 'Create, manage and display PDF carousels',
    fullName: req.session.fullName,
    role: req.session.role
  };
  res.render('index', templateData);
});

module.exports = router;

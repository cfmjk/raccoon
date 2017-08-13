var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RAMP Dashboard', magic: true });
});

/* GET home page. */
router.get('/login/', function(req, res, next) {
  res.render('login', { title: 'RAMP Login', magic: false });
});

module.exports = router;

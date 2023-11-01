var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/WAT', function(req, res, next) {
  res.render('WAT', { title: 'WAT' });
});

router.get('/TAT', function(req, res, next) {
  res.render('TAT', { title: 'TAT' });
});

module.exports = router;

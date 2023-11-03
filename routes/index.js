var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HomePage' });
});
router.get('/WAT', function(req, res, next) {
  res.render('WAT', { title: 'WAT' });
});

router.get('/TAT', function(req, res, next) {
  res.render('TAT', { title: 'TAT' });
});
router.get('/narration', function(req, res, next) {
  res.render('Narration', { title: 'Narration' });
});

router.get("/GD", function (req, res, next) {
  res.render("gd", { title: "Group Discussion" });
});

router.get("/Lecturette", function (req, res, next) {
  res.render("lecturette", { title: "Lecturette" });
});
module.exports = router;

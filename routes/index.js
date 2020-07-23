const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Ad Transparency - Home' });

});

router.get('/blog', function (req, res) {
  res.render('blog', { title: 'Ad Transparency - Blog' });

});

router.get('/documentation', function (req, res) {
  res.render('documentation', { title: 'Ad Transparency - Documentation' });

});

router.get('/about', function (req, res) {
  res.render('about', { title: 'Ad Transparency - About' });

});

router.get('/contact', function (req, res) {
  res.render('contact', { title: 'Ad Transparency - Contact' });

});

router.get('/privacy', function (req, res) {
  res.render('privacy', { title: 'Ad Transparency - Privacy' });

});

router.get('/legal', function (req, res) {
  res.render('legal', { title: 'Ad Transparency - Legal' });

});

router.get('/cookies', function (req, res) {
  res.render('cookies', { title: 'Ad Transparency - Cookies' });

});

router.get('/robots.txt', function (req, res) {
  res.type('text/plain')
  res.send("User-agent: *\nDisallow: ");

});




module.exports = router;

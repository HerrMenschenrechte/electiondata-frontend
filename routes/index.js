const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', async function (req, res, next) {
  res.render('index', { title: 'Ad Transparency - Home' });

});

router.get('/blog', async function (req, res, next) {
  res.render('blog', { title: 'Ad Transparency - Blog' });

});

router.get('/documentation', async function (req, res, next) {
  res.render('documentation', { title: 'Ad Transparency - Documentation' });

});

router.get('/about', async function (req, res, next) {
  res.render('about', { title: 'Ad Transparency - About' });

});

router.get('/contact', async function (req, res, next) {
  res.render('contact', { title: 'Ad Transparency - Contact' });

});

router.get('/privacy', async function (req, res, next) {
  res.render('privacy', { title: 'Ad Transparency - Privacy' });

});

router.get('/legal', async function (req, res, next) {
  res.render('legal', { title: 'Ad Transparency - Legal' });

});

router.get('/cookies', async function (req, res, next) {
  res.render('cookies', { title: 'Ad Transparency - Cookies' });

});

router.get('/robots.txt', async function (req, res, next) {
  res.sendFile('/robots.txt');

});




module.exports = router;

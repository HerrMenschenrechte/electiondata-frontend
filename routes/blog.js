const express = require('express');
const router = express.Router();

router.get('/article1', function (req, res) {
    res.render('article_1', { title: 'Ad Transparency - Hello World' });

});

router.get('/article2', function (req, res) {
    res.render('article_2', { title: 'Ad Transparency - How this page was built' });

});



module.exports = router;

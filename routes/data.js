const express = require('express');
const router = express.Router();
const tiles = require('../public/javascripts/tiles')

router.get('/', async function (req, res, next) {
  data = await tiles.loadTiles()
  res.send({ data })

});

module.exports = router;


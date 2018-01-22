const path = require('path');

const router = require('express').Router();
const controller = require('./controllers');

router.get('/movie', controller.movies.get);
router.get('/image/config', controller.configImage.get);

module.exports = router;

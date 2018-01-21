const path = require('path');

const router = require('express').Router();
const controller = require('./controllers');

router.get('/movie/popular', controller.popularMovies.get);
router.get('/image/config', controller.configImage.get);

module.exports = router;

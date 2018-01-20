const path = require('path');

const router = require('express').Router();
const controller = require('./controllers');

router.get('/movies', controller.movies.get);

module.exports = router;

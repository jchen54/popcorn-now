const path = require('path');
// const request = require('request-promise');
const dotenv = require('dotenv').config();
module.exports = {
  movies: {
    async get(req, res) {
      const movies = [{title: 'Intersteller', rating: 10}];
      res.json({
        movies,
      });
    },
  }
};

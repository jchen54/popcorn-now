const path = require('path');
const dotenv = require('dotenv').config();
const fetch = require('node-fetch');
const queryString = require('query-string');

module.exports = {
  popularMovies: {
    async get(req, res) {
      let movies = [];
      const reqParams = {
        api_key: process.env.MOVIE_DATABASE_API_KEY,
      };
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?${queryString.stringify(reqParams)}`);
        const responseData = await response.json();
        console.log('responseData: ', responseData);
        movies = responseData.results;
      } catch (err) {
        console.log(err);
      }
      res.json({
        movies,
      });
    },
  },
};

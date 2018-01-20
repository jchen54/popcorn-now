const path = require('path');
const dotenv = require('dotenv').config();
const fetch = require('node-fetch');
const queryString = require('query-string');

let tmdbConfig;

const initialize = () => {
  const loadTmdbConfig = async () => {
    const reqParams = {
      api_key: process.env.MOVIE_DATABASE_API_KEY,
    };
    try {
      const response = await fetch(`https://api.themoviedb.org/3/configuration?${queryString.stringify(reqParams)}`);
      tmdbConfig = await response.json();
      // console.log('tmdbConfig: ', tmdbConfig);
    } catch (err) {
      console.log(err);
    }
  };
  loadTmdbConfig();
};

initialize();

module.exports = {
  popularMovies: {
    async get(req, res) {
      const reqParams = {
        api_key: process.env.MOVIE_DATABASE_API_KEY,
      };
      let movies = [];
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?${queryString.stringify(reqParams)}`);
        const responseData = await response.json();
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

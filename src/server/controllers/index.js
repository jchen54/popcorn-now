const dotenv = require('dotenv').config();
const fetch = require('node-fetch');
const queryString = require('query-string');

let tmdbConfig;
const reqAuthParams = {
  api_key: process.env.MOVIE_DATABASE_API_KEY,
};

const initialize = () => {
  const loadTmdbConfig = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/configuration?${queryString.stringify(reqAuthParams)}`);
      tmdbConfig = await response.json();
    } catch (err) {
      console.log(err);
    }
  };
  loadTmdbConfig();
};

initialize();

module.exports = {
  configImage: {
    async get(req, res) {
      res.json({
        posterSizes: tmdbConfig.images.poster_sizes,
        backdropSizes: tmdbConfig.images.backdrop_sizes,
        secureBaseUrl: tmdbConfig.images.secure_base_url,
      });
    },
  },
  movies: {
    async get(req, res) {
      let movies = [];
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?${queryString.stringify(reqAuthParams)}`);
        const responseData = await response.json();
        movies = responseData.results;
        movies = movies.map((movie) => {
          const movieCopy = Object.assign({}, movie);
          movieCopy.release_year = Number(movie.release_date.slice(0, 4));
          return movieCopy;
        })
      } catch (err) {
        console.log(err);
      }
      res.json({
        movies,
      });
    },
  },
};

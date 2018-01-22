import React from 'react';
import Radium from 'radium';

const MovieList = (props) => {
  let renderedMovies = props.homeReducers.movies;
  if (props.homeReducers.movieSearchMatches.length) {
    renderedMovies = props.homeReducers.movieSearchMatches;
  }
  return (
    <div>
      {renderedMovies.map((movie, i) => {
        return (
          <div className="row" key={`movie ${i}`}>
            <a href="javascript:void(0);" className="four columns">
              <img src={`${props.homeReducers.tmdbSecureBaseUrl}/${props.homeReducers.tmdbPosterSizes[2]}/${movie.poster_path}`} />
            </a>
            <a href="javascript:void(0);" className="four columns">{movie.title} ({movie.release_year})</a>
            <div className="two columns">{movie.vote_average}</div>
          </div>
        )
      })}
    </div>
  );
};

export default MovieList;

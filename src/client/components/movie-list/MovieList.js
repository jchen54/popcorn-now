import React from 'react';

const MovieList = (props) => {
  return (
    <div>
      {props.homeReducers.popularMovies.map((movie, i) => {
        return (
          <div className="row" key={`movie ${i}`}>
            <div className="five columns">
              <img src={`${props.homeReducers.tmdbSecureBaseUrl}/${props.homeReducers.tmdbPosterSizes[2]}/${movie.poster_path}`} />
            </div>
            <div className="four columns">{movie.title}</div>
            <div className="one column">{movie.release_date.slice(0, 4)}</div>
            <div className="two columns">{movie.vote_average}</div>
          </div>
        )
      })}
    </div>
  );
};

export default MovieList;

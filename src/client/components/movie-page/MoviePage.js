import React from 'react';

const MoviePage = (props) => {
  const { tmdbSecureBaseUrl, tmdbPosterSizes } = props.homeReducers;
  const { movieSelected } = props.movieListReducers;
  const styles = {
    poster: {
      float: 'right',
      margin: 15,
    },
    movieDetails: {
      margin: 15,
    },
  };
  return (
    <div>
      <img alt="movie poster" src={`${tmdbSecureBaseUrl}/${tmdbPosterSizes[3]}/${movieSelected.poster_path}`} style={styles.poster} />
      <div style={styles.movieDetails}>
        <h3>{movieSelected.title} ({movieSelected.release_year})</h3>
        <h5>Rating: {movieSelected.vote_average * 10}%</h5>
        <p>{movieSelected.overview}</p>
      </div>
    </div>
  );
};

export default MoviePage;

import actionTypes from './homeActionTypes';

export function loadTmdbConfig() {
  return async (dispatch) => {
      let tmdbPosterSizes = [];
      let tmdbBackdropSizes = [];
      let tmdbSecureBaseUrl = '';
      try {
        const response = await fetch('/image/config');
        const responseData = await response.json();
        tmdbPosterSizes = responseData.posterSizes;
        tmdbBackdropSizes = responseData.backdropSizes;
        tmdbSecureBaseUrl = responseData.secureBaseUrl;
        console.log('tmdbPosterSizes: ', tmdbPosterSizes);
        console.log('tmdbSecureBaseUrl: ', tmdbSecureBaseUrl);
      } catch (err) {
        console.log(err);
      }
      return dispatch({
        type: actionTypes.LOAD_TMDB_CONFIG,
        tmdbPosterSizes,
        tmdbBackdropSizes,
        tmdbSecureBaseUrl,
      });
    };
}

export function selectFilter(filterSelected, movies) {
  const filters = {
    popularity: 'vote_count',
    rating: 'vote_average',
    releaseDate: 'release_date',
  };
  movies.sort((a, b) => {
    let movieA = a[filters[filterSelected]];
    let movieB = b[filters[filterSelected]];
    if (filterSelected === 'releaseDate') {
      movieA = new Date(movieA);
      movieB = new Date(movieB);
    }
    return movieB - movieA;
  });
  console.log('filterSelected: ', filterSelected);
  return {
    type: actionTypes.SELECT_FILTER,
    filterSelected,
    movies,
  };
}

export function loadMovies() {
  return async (dispatch) => {
    let movies = [];
    try {
      const response = await fetch('/movie');
      const responseData = await response.json();
      movies = responseData.movies.sort((a, b) => b.vote_count - a.vote_count);
      console.log('movies: ', movies);
    } catch (err) {
      console.log(err);
    }
    return dispatch({
      type: actionTypes.LOAD_MOVIES,
      movies,
    });
  };
}

export function listMovies(movieSearchMatches) {
  return {
    type: actionTypes.LIST_MOVIES,
    movieSearchMatches,
  };
}

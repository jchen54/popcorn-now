import actionTypes from './homeActionTypes';

export function loadTmdbConfig() {
  return async (dispatch) => {
      let tmdbPosterSizes = [];
      let tmdbSecureBaseUrl = '';
      try {
        const response = await fetch('/image/config');
        const responseData = await response.json();
        tmdbPosterSizes = responseData.posterSizes;
        tmdbSecureBaseUrl = responseData.secureBaseUrl;
        console.log('tmdbPosterSizes: ', tmdbPosterSizes);
        console.log('tmdbSecureBaseUrl: ', tmdbSecureBaseUrl);
      } catch (err) {
        console.log(err);
      }
      return dispatch({
        type: actionTypes.LOAD_TMDB_CONFIG,
        tmdbPosterSizes,
        tmdbSecureBaseUrl,
      });
    };
}

export function selectFilter(filterSelected, popularMovies) {
  const filters = {
    popularity: 'vote_count',
    rating: 'vote_average',
    releaseDate: 'release_date',
  };
  popularMovies.sort((a, b) => {
    if (filterSelected === 'releaseDate') {
      return b[filters[filterSelected]].slice(0, 4) - a[filters[filterSelected]].slice(0, 4);
    } else {
      return b[filters[filterSelected]] - a[filters[filterSelected]];
    }
  });
  console.log('filterSelected: ', filterSelected);
  return {
    type: actionTypes.SELECT_FILTER,
    filterSelected,
    popularMovies,
  };
}

export function loadPopularMovies() {
  return async (dispatch) => {
      let popularMovies = [];
      try {
        const response = await fetch('/movie/popular');
        const responseData = await response.json();
        popularMovies = responseData.movies.sort((a, b) => b.vote_count - a.vote_count);
        console.log('popularMovies: ', popularMovies);
      } catch (err) {
        console.log(err);
      }
      return dispatch({
        type: actionTypes.LOAD_POPULAR_MOVIES,
        popularMovies,
      });
    };
}

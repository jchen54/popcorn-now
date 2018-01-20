import actionTypes from './homeActionTypes';

export function loadPopularMovies() {
  return async (dispatch) => {
      let popularMovies = [];
      try {
        const response = await fetch('/movie/popular');
        const responseData = await response.json();
        popularMovies = responseData.movies;
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

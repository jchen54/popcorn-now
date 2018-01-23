import actionTypes from './movieListActionTypes';

export function loadMoviePage(movieSelected) {
  return {
    type: actionTypes.LOAD_MOVIE_PAGE,
    movieSelected,
  };
}

import actionTypes from '../action-creators/home/homeActionTypes.js';

const initialState = {
  tmdbPosterSizes: [],
  tmdbSecureBaseUrl: '',
  filterSelected: '',
  movies: [],
  movieSearchMatches: [],
};

const movieListReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_TMDB_CONFIG:
      return {
        ...state,
        tmdbPosterSizes: action.tmdbPosterSizes,
        tmdbSecureBaseUrl: action.tmdbSecureBaseUrl,
      };
    case actionTypes.SELECT_FILTER:
      return {
        ...state,
        filterSelected: action.filterSelected,
      };
    case actionTypes.LOAD_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case actionTypes.LIST_MOVIES:
      return {
        ...state,
        movieSearchMatches: action.movieSearchMatches,
      };
    default:
      return state;
  }
};

export default movieListReducers;

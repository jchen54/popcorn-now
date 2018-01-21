import actionTypes from '../action-creators/home/homeActionTypes.js';

const initialState = {
  tmdbPosterSizes: [],
  tmdbSecureBaseUrl: '',
  filterSelected: '',
  popularMovies: [],
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
    case actionTypes.LOAD_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.popularMovies,
      };
    default:
      return state;
  }
};

export default movieListReducers;

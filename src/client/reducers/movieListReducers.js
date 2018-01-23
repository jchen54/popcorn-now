import actionTypes from '../action-creators/movie-list/movieListActionTypes.js';

const initialState = {
  movieSelected: {},
};

const movieListReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_MOVIE_PAGE:
      return {
        ...state,
        movieSelected: action.movieSelected,
      };
    default:
      return state;
  }
};

export default movieListReducers;

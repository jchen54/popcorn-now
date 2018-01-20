import actionTypes from '../action-creators/home/homeActionTypes.js';

const initialState = {
  popularMovies: [],
};

const movieListReducers = (state = initialState, action) => {
  switch (action.type) {
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

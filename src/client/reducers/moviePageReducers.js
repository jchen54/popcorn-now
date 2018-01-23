import actionTypes from '../action-creators/movie-page/moviePageActionTypes.js';

const initialState = {
  videos: [],
};

const movieListReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_VIDEOS:
      return {
        ...state,
        videos: action.videos,
      };
    default:
      return state;
  }
};

export default movieListReducers;

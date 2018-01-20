import actionTypes from '../action-creators/movie-list/movieListActionTypes.js';

const initialState = {
  deliveryEligibilityObj: {},
};

const movieListReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DELIVERY_ELIGIBILITY_OBJ:
      return {
        ...state,
        deliveryEligibilityObj: action.obj,
      };
    default:
      return state;
  }
};

export default movieListReducers;

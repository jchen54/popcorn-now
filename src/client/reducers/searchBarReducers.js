import actionTypes from '../action-creators/search-bar/searchBarActionTypes.js';

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

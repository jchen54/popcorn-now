import actionTypes from './movieListActionTypes';

export function setAdminFoodItems(dataArr) {
  return {
    type: actionTypes.SET_ADMIN_FOOD_ITEMS,
    dataArr,
  };
}

export function setDownloadFile(dropoffID, dataType) {
  return async (dispatch) => {
    try {
      console.log('hi');
    } catch (err) {
      console.log(err);
    }
  };
}

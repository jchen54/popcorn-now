import queryString from 'query-string';
import actionTypes from './moviePageActionTypes';

export function loadVideos(movieID) {
  return async (dispatch) => {
    let videos = [];
    const reqParams = {
      movieID,
    };
    try {
      const response = await fetch(`/movie/videos?${queryString.stringify(reqParams)}`);
      const responseData = await response.json();
      videos = responseData.videos;
      console.log('videos: ', videos);
    } catch (err) {
      console.log(err);
    }
    return dispatch({
      type: actionTypes.LOAD_VIDEOS,
      videos,
    });
  };
}

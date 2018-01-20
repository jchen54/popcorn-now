import actionTypes from './movieListActionTypes';

export function loadPopularMovies() {
  return async (dispatch) => {
      let popularMovies = [];
      try {
        const response = await fetch('/movie/popular');
        const responseData = await response.json();
        popularMovies = responseData.movies;
        console.log('popularMovies: ', popularMovies);
      } catch (err) {
        console.log(err);
      }
      return dispatch({
        type: actionTypes.LOAD_POPULAR_MOVIES,
        popularMovies,
      });
    };
}

// export function loadPopularMovies() {
//   return async (dispatch) => {
//       let routes = [];
//       try {
//         const routeParams = {
//           command: 'routeConfig',
//           a: 'sf-muni',
//         };
//         const response = await fetch(`http://webservices.nextbus.com/service/publicJSONFeed?${queryString.stringify(routeParams)}`);
//         const responseData = await response.json();
//         routes = responseData.route;
//         console.log('routes: ', routes);
//       } catch (err) {
//         console.log(err);
//       }
//       return dispatch({
//         type: actionTypes.SET_ROUTES,
//         routes,
//       });
//     };
// }

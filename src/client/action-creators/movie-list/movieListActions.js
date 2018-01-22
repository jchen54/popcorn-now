import actionTypes from './movieListActionTypes';

// export function loadMovies() {
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

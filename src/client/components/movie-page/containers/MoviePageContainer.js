// Redux imports
import { connect } from 'react-redux';
// Redux actions imports
import MoviePage from '../MoviePage.js';

const mapStateToProps = (state) => {
  return {
    homeReducers: state.homeReducers,
    movieListReducers: state.movieListReducers,
  };
};

export default connect(mapStateToProps)(MoviePage);

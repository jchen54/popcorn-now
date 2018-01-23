// Redux imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Redux actions imports
import * as moviePageActionCreators from '../../../action-creators/movie-page/moviePageActions';
import MoviePage from '../MoviePage.js';

const mapStateToProps = (state) => {
  return {
    moviePageReducers: state.movieListReducers,
    homeReducers: state.homeReducers,
    movieListReducers: state.movieListReducers,
  };
};

const bundledActionCreators = Object.assign({},
  moviePageActionCreators,
);

const mapDispatchToProps = dispatch => bindActionCreators(bundledActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);

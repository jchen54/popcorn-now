// Redux imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Redux actions imports
import * as movieListActionCreators from '../../../action-creators/movie-list/movieListActions';
import MovieList from '../MovieList.js';

const mapStateToProps = (state) => {
  return {
    movieListReducers: state.movieListReducers,
    homeReducers: state.homeReducers,
  };
};

const bundledActionCreators = Object.assign({},
  movieListActionCreators,
);

const mapDispatchToProps = dispatch => bindActionCreators(bundledActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

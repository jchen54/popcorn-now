// Redux imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Redux actions imports
import * as homeActionCreators from '../../../action-creators/home/homeActions';
import * as movieListActionCreators from '../../../action-creators/movie-list/movieListActions';
import SearchBar from '../SearchBar.js';

const mapStateToProps = (state) => {
  return {
    homeReducers: state.homeReducers,
    movieListReducers: state.movieListReducers,
  };
};

const bundledActionCreators = Object.assign({},
  homeActionCreators,
  movieListActionCreators,
);

const mapDispatchToProps = dispatch => bindActionCreators(bundledActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

// Redux imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Redux actions imports
import * as homeActionCreators from '../../../action-creators/home/homeActions';
import * as searchBarActionCreators from '../../../action-creators/search-bar/searchBarActions';
import SearchBar from '../SearchBar.js';

const mapStateToProps = (state) => {
  return {
    homeReducers: state.homeReducers,
    searchBarReducers: state.searchBarReducers,
  };
};

const bundledActionCreators = Object.assign({},
  homeActionCreators,
  searchBarActionCreators,
);

const mapDispatchToProps = dispatch => bindActionCreators(bundledActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

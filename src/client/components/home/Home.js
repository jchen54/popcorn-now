import React, { Component } from 'react';
import SearchBarContainer from '../search-bar/containers/SearchBarContainer.js';
import MovieListContainer from '../movie-list/containers/MovieListContainer.js';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadPopularMovies();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="four columns">i</div>
          <div className="four columns">
            <SearchBarContainer />
          </div>
          <div className="four columns">i</div>
        </div>
        <div className="container">
          <MovieListContainer />
        </div>
      </div>
    );
  }
}

export default Home;

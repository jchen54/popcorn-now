import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'
import SearchBarContainer from '../search-bar/containers/SearchBarContainer.js';
import MovieListContainer from '../movie-list/containers/MovieListContainer.js';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadTmdbConfig();
    this.props.loadPopularMovies();
  }

  render() {
    const options = [
      { key: 'popularity', text: 'Sort By Popularity', value: 'popularity' },
      { key: 'rating', text: 'Sort By Rating', value: 'rating' },
      { key: 'release_date', text: 'Sort By Release Date', value: 'releaseDate' },
    ];
    return (
      <div>
        <div className="row">
          <div className="four columns">i</div>
          <div className="four columns">
            <SearchBarContainer />
          </div>
          <div className="four columns">i</div>
        </div>
        <Dropdown placeholder='Sort by Popularity' fluid selection options={options} value={this.props.homeReducers.filterSelected} onChange={(event, { value }) => { this.props.selectFilter(value, this.props.homeReducers.popularMovies) }}/>
        <div className="container">
          <MovieListContainer />
        </div>
      </div>
    );
  }
}

export default Home;

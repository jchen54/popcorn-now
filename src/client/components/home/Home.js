import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import MovieListContainer from '../movie-list/containers/MovieListContainer.js';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadTmdbConfig();
    this.props.loadMovies();
  }

  render() {
    const options = [
      { key: 'popularity', text: 'Sort by Popularity', value: 'popularity' },
      { key: 'rating', text: 'Sort by Rating', value: 'rating' },
      { key: 'release_date', text: 'Sort by Release Date', value: 'releaseDate' },
    ];
    const styles = {
      sortContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: 10,
      },
      sortIndicator: {
        display: 'inline-block',
        marginRight: '10px',
      },
      sortDropdown: {
        display: 'inline-block',
      },
    };
    return (
      <div>
        <div style={styles.sortContainer}>
          {/* <div style={styles.sortIndicator}>Sort by</div> */}
          <Dropdown
            placeholder="Sort by Popularity"
            selection
            options={options}
            style={styles.sortDropdown}
            value={this.props.homeReducers.filterSelected}
            onChange={(event, { value }) => { this.props.selectFilter(value, this.props.homeReducers.movies) }}
          />
        </div>
        <div>
          <MovieListContainer />
        </div>
      </div>
    );
  }
}

export default Home;

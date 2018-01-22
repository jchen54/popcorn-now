import React, { Component } from 'react';
import { Dropdown, Header } from 'semantic-ui-react';
import SearchBarContainer from '../search-bar/containers/SearchBarContainer.js';
import MovieListContainer from '../movie-list/containers/MovieListContainer.js';
import popcornLogo from './popcorn.svg';

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
      { key: 'popularity', text: 'Popularity', value: 'popularity' },
      { key: 'rating', text: 'Rating', value: 'rating' },
      { key: 'release_date', text: 'Release Date', value: 'releaseDate' },
    ];
    const styles = {
      topBar: {
        backgroundColor: 'rgb(43, 41, 37)',
      },
      logo: {
        margin: '20px 10px 10px 20px',
      },
      logoName: {
        display: 'inline-block',
        color: 'rgb(255, 255, 255)',
        verticalAlign: 'middle',
      },
      searchBarColumn: {
        marginTop: '25px',
      },
      sortContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
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
        <div className="row" style={styles.topBar}>
          <div className="four columns">
            <img src={popcornLogo} alt="Popcorn Now Logo" height="50" width="50" style={styles.logo}/>
            <h5 style={styles.logoName}>Popcorn Now</h5>
          </div>
          <div className="four columns" style={styles.searchBarColumn}>
            <SearchBarContainer />
          </div>
          <div className="four columns"></div>
        </div>
        {/* <div style={styles.topBar}>
          <img src={popcornLogo} alt="Popcorn Now Logo" height="50" width="50" style={styles.logo}/>
          <h5 style={styles.logoName}>Popcorn Now</h5>
          <SearchBarContainer />
        </div> */}
        <div style={styles.sortContainer}>
          <div style={styles.sortIndicator}>Sort by</div>
          <Dropdown
            placeholder="Popularity"
            selection
            options={options}
            style={styles.sortDropdown}
            value={this.props.homeReducers.filterSelected}
            onChange={(event, { value }) => { this.props.selectFilter(value, this.props.homeReducers.movies) }}
          />
        </div>
        <div className="row">
          <div className="four columns">i</div>
          <div className="four columns">Title</div>
          <div className="four columns">Rating</div>
        </div>
        <div className="container">
          <MovieListContainer />
        </div>
      </div>
    );
  }
}

export default Home;

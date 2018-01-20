import React from 'react';
import SearchBarContainer from '../search-bar/containers/SearchBarContainer.js';
import MovieListContainer from '../movie-list/containers/MovieListContainer.js';

const Home = (props) => {
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
};

export default Home;

import React, { Component } from 'react';

class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.loadPopularMovies();
  // }

  render() {
    return (
      <div>
        <div className="row">
          <div className="four columns">Four</div>
          <div className="four columns">Four</div>
          <div className="four columns">Four</div>
        </div>
      </div>
    );
  }
}

export default MovieList;

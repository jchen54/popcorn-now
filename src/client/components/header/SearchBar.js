import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';
import { Search, Grid } from 'semantic-ui-react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      results: [],
      value: '',
      resultSelected: false,
    };
    this.resetComponent = this.resetComponent.bind(this);
    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent() {
    this.setState({ isLoading: false, results: [], value: '' });
    this.props.listMovies(this.state.results);
  }

  handleResultSelect(e, { result }) {
    this.setState({ value: '', resultSelected: true });
    this.props.loadMoviePage(result);
  }

  handleSearchChange(e, { value }) {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) {
        return this.resetComponent();
      }

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(this.props.homeReducers.movies, isMatch),
      });
      if (this.state.results.length) {
        this.props.listMovies(this.state.results);
      }
    }, 500);
  }

  render() {
    const { isLoading, value, results } = this.state;
    return (
      <div>
        <Grid>
          <Grid.Column width={8}>
            <Search
              loading={isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={this.handleSearchChange}
              results={results}
              value={value}
              aligned="left"
              placeholder="Search Movies"
              icon="search"
              {...this.props}
            />
          </Grid.Column>
        </Grid>
        {this.state.resultSelected ?
          <Redirect to="/movie-page" />
          :
          <div></div>
        }
      </div>
    );
  }
}

export default SearchBar;

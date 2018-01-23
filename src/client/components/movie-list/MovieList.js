import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  subheader: {
    fontSize: 30,
  },
  gridList: {
    width: 700,
    height: 900,
  },
  title: {
    fontSize: 20,
  },
});

const MovieList = (props) => {
  const { classes } = props;
  const { movies, movieSearchMatches, tmdbSecureBaseUrl, tmdbPosterSizes, tmdbBackdropSizes } = props.homeReducers;
  let renderedMovies = movies;
  if (movieSearchMatches.length) {
    renderedMovies = movieSearchMatches;
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <Subheader component="div" className={classes.subheader}>Popular Movies</Subheader>
        </GridListTile>
        {renderedMovies.map((movie, i) => (
          <Link to="/movie-page" onClick={() => { props.loadMoviePage(movie) }}>
            <GridListTile key={movie.img}>
              <img alt={movie.title} src={`${tmdbSecureBaseUrl}/${tmdbPosterSizes[3]}/${movie.backdrop_path}`} />
              <GridListTileBar
                title={<div className={classes.title}>{movie.title} ({movie.release_year})</div>}
                actionIcon={<div>{movie.vote_average * 10}%</div>}
              />
            </GridListTile>
          </Link>
        ))}
      </GridList>
    </div>
  );
}

export default withStyles(styles)(MovieList);

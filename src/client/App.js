import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
// import './normalize.css';
// import './raleway.css';
import './skeleton.css';
import HomeContainer from './components/home/containers/HomeContainer.js';
import MoviePageContainer from './components/movie-page/containers/MoviePageContainer.js';
import HeaderContainer from './components/header/containers/HeaderContainer.js';

const App = (props) => {
  const styles = {
    container: {
      backgroundColor: 'rgb(239, 237, 237)',
    },
    main: {
      flex: 1,
      minHeight: '100vh',
    },
  };
  return (
    <div className="container" style={styles.container}>
      <HeaderContainer />
      <div style={styles.main}>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/movie-page" component={MoviePageContainer} />
        </Switch>
      </div>
    </div>
  );
};

export default App;

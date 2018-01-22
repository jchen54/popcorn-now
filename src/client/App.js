import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import './normalize.css';
import './raleway.css';
import './skeleton.css';
import HomeContainer from './components/home/containers/HomeContainer.js';

const App = (props) => {
  const styles = {
    container: {
      backgroundColor: 'rgb(239, 237, 237)',
    }
  };
  return (
    <div className="container" style={styles.container}>
      <Switch>
        <Route exact path="/" component={HomeContainer}/>
      </Switch>
    </div>
  );
};

export default App;

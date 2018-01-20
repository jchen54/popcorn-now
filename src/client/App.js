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
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={HomeContainer}/>
      </Switch>
    </div>
  );
};

export default App;

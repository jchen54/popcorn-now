import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from './containers/SearchBarContainer.js';
import popcornLogo from './popcorn.svg';

const Header = (props) => {
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
  };
  return (
    <div className="row" style={styles.topBar}>
      <div className="four columns">
        <Link to="/" onClick={() => { props.resetMatches() }}>
          <img src={popcornLogo} alt="Popcorn Now Logo" height="50" width="50" style={styles.logo}/>
          <h5 style={styles.logoName}>Popcorn Now</h5>
        </Link>
      </div>
      <div className="four columns" style={styles.searchBarColumn}>
        <SearchBarContainer />
      </div>
      <div className="four columns"></div>
    </div>
  );
};

export default Header;

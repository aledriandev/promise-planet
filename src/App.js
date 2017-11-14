import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'redux-zero/react';
import {getPlanets} from './actions.js'

const App = ({planets}) => {
    return (
      <div className="App">
        <button onClick={getPlanets}>
          get planets
        </button>
      </div>
    );
}


const mapToProps = ({ planets }) => ({ planets });
export default connect(mapToProps)(App);

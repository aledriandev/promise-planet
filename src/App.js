import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'redux-zero/react';
import {getPlanets} from './actions.js'

const App = ({planets}) => {
  getPlanets();

  const planets1= planets.map((planet,index)=>{
        return (
          <div key={index}>{planet.pl_name}</div>
        );
      });
    return (
      <div className="App">
        <div>
          <div className='header'>
            <h1>Exoplanet Explorer</h1>
            <p>Learn more about planets around other stars</p>
          </div>
          <div>
            PLANETS
            <div> 
               {planets1}
            </div>
            
          </div>
        </div>
      </div>
    );
}


const mapToProps = ({ planets }) => ({ planets });
export default connect(mapToProps)(App);

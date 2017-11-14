import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'redux-zero/react';
import {getPlanets} from './actions.js'

const App = ({planets}) => {
  // getPlanets();
  console.log(planets[0])
      const planets1= planets.map((planet,index)=>{
        return (
          <li key={index}>{planet.pl_name}</li>
        );
      });
    return (
      <div className="App">
        <button onClick={getPlanets}>
          Get Planets
        </button>
        <div>
          <div className='header'>
            <h1>Exoplanet Explorer</h1>
            <p>Learn more about planets around other stars</p>
          </div>
          <div>
            PLANETS
            <ul>{
              planets.length != 0?
              {planets1}:
              <p>'No hay nada'</p>
            }</ul>
            <div>{
              // planets[0].pl_name
            }</div>
          </div>
        </div>
      </div>
    );
}


const mapToProps = ({ planets }) => ({ planets });
export default connect(mapToProps)(App);

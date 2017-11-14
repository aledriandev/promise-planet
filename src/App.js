import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'redux-zero/react';
import {getPlanets} from './actions.js'

const App = ({planets}) => {
  // getPlanets();
  console.log('hola', planets)
  console.log('hola sz', planets.length)
  
  for (let i of  planets)
    console.log('hola', i)

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
            <ul> 
               {planets1}
            </ul>
            
          </div>
        </div>
      </div>
    );
}


const mapToProps = ({ planets }) => ({ planets });
export default connect(mapToProps)(App);

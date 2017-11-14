import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'redux-zero/react';
import {getPlanets} from './actions.js'

const App = ({planets}) => {
  getPlanets();

  const planetsInfo= planets.map((planet,index)=>{
        return (
          <div key={index}>
            <img src={planet.img} width='100%'/>
            <h3>{planet.pl_name}</h3>
            <h4>Año de descubrimiento: </h4>{planet.pl_disc}
            <h4>Masa: </h4>{planet.pl_masse}
            <h4>Año de descubrimiento: </h4>{planet.pl_disc}
            {<h4><a href={planet.pl_pelink}>MAS INFORMACION</a></h4>}
          </div>
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
            <h3>PLANETS</h3>
            <div> 
               {planetsInfo}
            </div>
            
          </div>
        </div>
      </div>
    );
}


const mapToProps = ({ planets }) => ({ planets });
export default connect(mapToProps)(App);

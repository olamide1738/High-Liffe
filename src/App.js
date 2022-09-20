
import React, { Component } from 'react';
import Grid from './components/grid1'

import Store from './components/store';

import Highlife from './components/highlife';
import Niara from './components/niara';


function App() {
  let component;
  component = <App />
  switch (window.location.pathname) {
    case "/store":
      component = <Store />
      break;
    case "/highlife":
      component = <Highlife />
      break;

    case "/":
      component = <Grid />
      break;
    case "/niara":
      component = <Niara />
      break;

 
    default:
      break;
  }
  return (
    <div className="App">
    
  
      {component} 

   
     
   
    </div>
  );
}

export default App;
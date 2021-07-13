import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';

class App extends Component {

  render(){
    return(
      <nav className="navbar">
        <h1>안뇽</h1>
        <Habits/>
      </nav>
    );
  }
}

export default App;

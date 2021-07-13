import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';

class App extends Component {

  render(){
    return(
      <>
      <nav className="navbar">
        <h1>Habit Tracker</h1>
      </nav>
      <Habits/>
      </>
    );
  }
}

export default App;

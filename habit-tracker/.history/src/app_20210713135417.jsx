import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';

class App extends Component {

  render(){
    return(
      <>
      <div className="navbar">
        <i className="fab fa-leanpub"></i><h1>Habit Tracker</h1>
      </div>
      <Habits/>
      </>
    );
  }
}

export default App;

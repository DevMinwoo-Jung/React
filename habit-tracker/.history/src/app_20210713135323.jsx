import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';

class App extends Component {

  render(){
    return(
      <>
      <div className="navbar">
        <h1><i class="fab fa-leanpub"></i>Habit Tracker</h1>
      </div>
      <Habits/>
      </>
    );
  }
}

export default App;

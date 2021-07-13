import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';

class App extends Component {

  render(){
    return(
      <>
      <div className="navbar">
        <i className="fab fa-leanpub">
        </i><h1>Habit Tracker</h1>
        <p className="total__Count">0</p>
      </div>
      <div className="habit__box">
        <input type="text" className="input__habit" />
      </div>
      <Habits/>
      </>
    );
  }
}

export default App;

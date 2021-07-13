import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';

class App extends Component {
  state = {
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Coding', count: 0},
      {id: 3, name: 'Gym', count: 0},
    ],
  };

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
        <button className="add__habit">Add Habit</button>
      </div>
      {
         <Habits key={habit.id} habit={habit}/>
      }
      </>
    );
  }
}

export default App;

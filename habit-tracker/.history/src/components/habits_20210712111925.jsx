import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      {name: 'Reading', count: 0},
      {name: 'Coding', count: 0},
      {name: 'Gym', count: 0},
    ],
  };
  render() {
    return (
      <ul>
        {
          this.stathabits.map(habit => {
            return  <Habit/>;
          })
        }
      </ul>
    );
  }
}

export default Habits;
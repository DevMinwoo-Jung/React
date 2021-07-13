import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Coding', count: 0},
      {id: 3, name: 'Gym', count: 0},
    ],
  };

  handleIncrement = (habit) => {
    alert(`핸들 ${habit}`);
  }

  handleDecrement = (habit) => {
    alert(`핸들2 ${habit}`);
  }

  handleDlete = (habit) => {
    alert(`핸들3 ${habit}`);
  }
  render() {
    return (
      <ul>
        {
          this.state.habits.map(habit => (
            <Habit key={habit.id} habit={habit}/>
            // 이렇게 함으로 habit.jsx에서 habits에 관련된 것들을 쓸 수 있다!
          ))
        }
      </ul>
    );
  }
}

export default Habits;
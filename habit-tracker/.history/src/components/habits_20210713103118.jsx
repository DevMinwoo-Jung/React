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
    //  const asd = habit.count+1;
    const count = this.state.habits[0].count;
    this.setState({count: this.state.habits[0].count + habit.count + 1});
    this.setState({count: habit.count + 1});
    console.log(this.setState({count}));
    console.log(this.state.habits[0].count);
    

  };

  handleDecrement = (habit) => {
    alert(`핸들2 ${habit.count}`);
  };
  
  handleDlete = (habit) => {
    alert(`핸들3 ${habit}`);
  };

  render() {
    return (
      <ul>
        {
          this.state.habits.map(habit => (
            <Habit key={habit.id} habit={habit} 
            onIncrement={this.handleIncrement} 
            onDecrement={this.handleDecrement} 
            onDelete={this.handleDlete}/>
            // 이렇게 함으로 habit.jsx에서 habits에 관련된 것들을 쓸 수 있다!
          ))
        }
      </ul>
    );
  }
}

export default Habits;
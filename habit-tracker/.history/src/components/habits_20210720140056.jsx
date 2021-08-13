import React, { Component } from 'react';
import AddForm from './addForm';
import Habit from './habit';

class Habits extends Component {

  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
    
  }

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  }

  handleDlete = (habit) => {
    this.props.onDelete(habit);

  }

  addHabitsByClick = name => {
    this.props.onAdd(name)
  }
  


  render() {
    return (
      <div>
        <AddForm onAdd={this.addHabitsByClick}/>
        <ul>
          {
              this.props.habits.map(habit =>
              (
              <Habit 
              key={habit.id} habit={habit} 
              onIncrement={this.props.handleIncrement} 
              onDecrement={this.props.handleDecrement} 
              onDelete={this.props.handleDlete}
              />
              // 이렇게 함으로 habit.jsx에서 habits에 관련된 것들을 쓸 수 있다!
              ))          
          }
        </ul>
      </div>
    );
  }
}

export default Habits;
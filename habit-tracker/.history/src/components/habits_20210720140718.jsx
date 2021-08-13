import React, { Component } from 'react';
import AddForm from './addForm';
import Habit from './habit';

class Habits extends Component {

  handleIncrement = () => {
    this.props.onIncrement(habit);
    
  }

  handleDecrement = () => {
    this.props.onDecrement(habit);
  }

  handleDlete = () => {
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
              onIncrement={this.props.onIncrement} 
              onDecrement={this.props.onDecrement} 
              onDelete={this.props.onDelete}
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
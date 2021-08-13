import React, { Component } from 'react';
import AddForm from './addForm';
import Habit from './habit';


import React from 'react';

const Habits = () => {
  const handleIncrement = (habit) => {
    props.onIncrement(habit);
    
  }

  const handleDecrement = (habit) => {
    props.onDecrement(habit);
  }

  const handleDlete = (habit) => {
    props.onDelete(habit);

  }

  const addHabitsByClick = name => {
    props.onAdd(name)
  }
  return (
    <div>
      
    </div>
  );
};

export default Habits;

class Habits extends Component {


  


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
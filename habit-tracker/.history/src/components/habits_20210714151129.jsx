import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {

  handleIncrement = (habit) => {
    this.props.onIncrement(this.props.habit);
    
   }
 
   handleDecrement = (habit) => {
     this.props.onDecrement(this.props.habit);
   }
 
   handleDlete = (habit) => {
     this.props.onDelete(this.props.habit);
 
   }

  render() {
    return (
      <ul>
        {
            <Habit key={this.props.habit.id} habit={this.props.habit} 
            onIncrement={this.handleIncrement} 
            onDecrement={this.handleDecrement} 
            onDelete={this.handleDlete}
            onTotalPlus={this.totalCountPlus}/>
            // 이렇게 함으로 habit.jsx에서 habits에 관련된 것들을 쓸 수 있다!
        }
      </ul>
    );
  }
}

export default Habits;
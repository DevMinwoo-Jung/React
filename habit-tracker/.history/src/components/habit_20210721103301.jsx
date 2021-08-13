import React, { memo, PureComponent } from 'react';

import React from 'react';

const Habit = memo((props) => {

  handleIncrement = () => {
    props.onIncrement(props.habit);
  }

  handleDecrement = () => {
    props.onDecrement(props.habit);
  }
  handleDlete = () => {
    props.onDelete(props.habit);

  }

  resetHabits = (habit) => {
    props.onDelete(props.habit);
  }

  // console.log(this.props); habits로부터 받아온 props를 conole로 찍을 수 있다
  // const habitName = this.props.habit.name 이렇게 하지 말고
  const {name, count} = this.props.habit; // 단 habits에서 사용한 변수명과 같아야한다!
  
  return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i> 
      </button>
      <button className="habit-button habit-decrease" onClick={handleDecrement}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="habit-button habit-delete" onClick={handleDlete}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
});

export default Habit;

class Habit extends PureComponent {



  render() {

  
  }
}

export default Habit;
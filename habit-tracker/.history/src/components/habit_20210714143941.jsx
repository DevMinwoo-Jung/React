import React, { Component } from 'react';

class Habit extends Component {


  handleIncrement = (habit) => {
   this.props.onIncrement(this.props.habit);
  }

  handleDecrement = (habit) => {
    this.props.onDecrement(this.props.habit);
  }

  handleDlete = (habit) => {
    this.props.onDelete(this.props.habit);

  }

  totalCountPlus = (habit) => {
    this.props.onPlus(this.props.habit);
  }
  render() {
    // console.log(this.props); habits로부터 받아온 props를 conole로 찍을 수 있다
    // const habitName = this.props.habit.name 이렇게 하지 말고
    const {name, count} = this.props.habit; // 단 habits에서 사용한 변수명과 같아야한다!
    return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={this.handleIncrement} onSubmit={this.totalCountPlus}>
        <i className="fas fa-plus-square"></i> 
      </button>
      <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="habit-button habit-delete" onClick={this.handleDlete}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
    );
  }
}

export default Habit;
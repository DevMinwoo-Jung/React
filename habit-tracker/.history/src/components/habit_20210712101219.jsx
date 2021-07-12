import React, { Component } from 'react';

class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    // state obj 안에 있는 count 증가 후 state 업데이트
    // state를 업데이트 할때는 꼭 setState를 호출해야함!
    // this.state.count += 1 <- 요거 안됨;
    this.setState({count: this.setState.count + 1});
  }

  handleDecrement = () => {
    this.setState({count: this.setState.count - 1});
  }
  render() {
    return (
    <li className="habit">
      <span className="habit-name">Reading </span>
      <span className="habit-count">{this.state.count}</span>
      <button className="habit-button habit-increase" onClick={this.handleIncrement}>
        <i className="fas fa-plus-square"></i> 
      </button>
      <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="habit-button habit-delete">
        <i className="fas fa-trash"></i>
      </button>
    </li>
    );
  }
}

export default Habit;
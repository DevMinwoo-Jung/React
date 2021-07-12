import React, { Component } from 'react';

class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    // state obj 안에 있는 count 증가 후 state 업데이트
    // state를 업데이트 할때는 꼭 setState를 호출해야함!
    // this.state.count += 1 <- 요거 안됨;
    this.setState({count: this.state.count + 1});
  }

  handleDecrement = () => {
    // if(this.state.count > 0){
    // this.setState({count: this.state.count - 1});
    // } 
    // 위는 내코드 밑은 강의 코드
    const count = this.state.count - 1;
    this.setState({count: count < 0 ? 0 : count})
    // 여기서 count를 const로 선언할 수 있는거는 handleDerement가 호출되면 count 변수 초기화 후
    // state를 바꿔준다음에 사라지기 때문이다!
  }
  render() {
    // console.log(this.props); habits로부터 받아온 props를 conole로 찍을 수 있다
    // const habitName = this.props.habit.name 이렇게 하지 말고
    const {name, count} = this.props.habit; // 단 habits에서 사용한 변수명과 같아야한다!
    return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{this.count}</span>
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
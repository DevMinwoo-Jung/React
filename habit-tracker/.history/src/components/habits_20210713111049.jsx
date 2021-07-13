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
    const habits = [...this.state.habits];
    // ...은 spared문법 habits 를 복사한다
    const index = habits.indexOf(habit);
    habits[index].count ++;
    this.setState(this.state);
    // 근데 이것도 state를 직접적으로 변경하는것과 같다..
    // 그러면 새로운 state object를 만들어줘야한다
    this.setState({habits : habits});
    // 근데 key 와 value가 동일하면 하나로 생략 가능
    // this.setState({habits});

  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count; // 이것도 구리다고...?
    this.setState({habits});
    // if(habits[index].count > 0){
    // habits[index].count--;
    // this.setState({habits : habits});
    // } else {
    //   return;
    // }

  };
  
  handleDlete = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    console.log(index);
    habits.splice(index, 1);
    this.setState({habits});
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
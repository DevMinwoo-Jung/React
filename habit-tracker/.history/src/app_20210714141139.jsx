import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';

class App extends Component {
  state = {
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Coding', count: 0},
      {id: 3, name: 'Gym', count: 0},
    ],
    totalCount: 0,
  };

  totalCountPlus = (habit) => {
    const habits = [...this.state.habits];
    let totalCount = this.state.totalCount;
    totalCount = totalCount + 1;
    this.setState(this.state);
    this.setState({habits : habits});
    this.setState({totalCount : totalCount});
  }

  totalCountMinus = (habit) => {
    const habits = [...this.state.habits];
    let totalCount = this.state.totalCount - 1;
    totalCount = totalCount < 0 ? 0 : totalCount;
    this.setState(this.state);
    this.setState({habits : habits});
    this.setState({totalCount : totalCount});
    console.log(habit);
  }
  totalCountMinusAll = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    let totalCount = this.state.totalCount;
    totalCount = totalCount - habit.count;
    this.setState(this.state);
    this.setState({habits : habits});
    this.setState({totalCount : totalCount});
  }

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
    this.totalCountPlus();
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

    this.totalCountMinus();
  };    
  
  handleDlete = (habit) => {
    // 이건 내답..
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits.splice(index, 1);
    // this.setState({habits});
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
    this.totalCountMinusAll();
  };

  render(){
    const totalCount = this.state.totalCount;
    return(
      <>
      <div className="navbar">
        <i className="fab fa-leanpub">
        </i><h1>Habit Tracker</h1>
        <p className="total__Count">{totalCount}</p>
      </div>
      <div className="habit__box">
        <input type="text" className="input__habit" />
        <button className="add__habit">Add Habit</button>
      </div>
      {
        this.state.habits.map(habit => (
          <Habits key={habit.id} habit={habit}
          onIncrement={this.handleIncrement} 
          onDecrement={this.handleDecrement} 
          onDelete={this.handleDlete}/>
        ))
      }
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';


class App extends Component {
  state = {
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Coding', count: 0},
      {id: 3, name: 'Gym', count: 0},
    ],
  };


  handleIncrement = (habit) => {

    const habits = [...this.state.habits];
    let totalCount = this.state.totalCount;
    // ...은 spared문법 habits 를 복사한다
    const index = habits.indexOf(habit);
    habits[index].count ++;
    totalCount++;
    this.setState(this.state);
    // 근데 이것도 state를 직접적으로 변경하는것과 같다..
    // 그러면 새로운 state object를 만들어줘야한다
    this.setState({habits : habits});
    this.setState({totalCount : totalCount});
    // 근데 key 와 value가 동일하면 하나로 생략 가능
    // this.setState({habits});

  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    let totalCount = this.state.totalCount;
    if(habits[index].count > 0){
      totalCount--;
    } else {
      return;
    }

    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count; // 이것도 구리다고...?
    this.setState({habits});
    this.setState({totalCount});
    
  };    
  
  handleDlete = (habit) => {
    // 이건 내답..
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    let totalCount = this.state.totalCount;
    totalCount = totalCount - habits[index].count;
    habits.splice(index, 1);

    // const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
    this.setState({totalCount});
  };

  resetHabits = () => {
    let habits = [...this.state.habits];
    habits=[]
    this.setState({habits})
  }

  addHabitsByClick = name => {
    const habits = [...this.state.habits, {id: Date.now(), name: name, count: 0}];
    this.setState({habits});
  }

  addHabitsByDown = (event) => {
    if((event.key === "Enter")){
      this.addHabitsByClick();
      document.querySelector('.input__habit').value = '';
    } else {
      return;
    }
  }

  render(){
    return(
      <>
      <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
        <Habits
        onIncrement={this.handleIncrement} 
        onDecrement={this.handleDecrement} 
        onDelete={this.handleDlete}
        onAdd={this.addHabitsByClick}/>
      <button className="reset__habit" onClick={this.resetHabits}>Reset All</button>
      </>
    );
  }
}

export default App;

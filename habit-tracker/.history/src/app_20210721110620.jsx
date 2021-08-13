import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';


import React, { memo } from 'react';

const App = memo(() => {
  return (
    <div>
      
    </div>
  );
});

export default App;

class App extends Component {
  state = {
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Coding', count: 0},
      {id: 3, name: 'Gym', count: 0},
    ],
  };


  handleIncrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        return {...habit, count: habit.count + 1};
      } 

      return item;
    })
    this.setState({habits});

  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        return {...habit, count: habit.count > 0 ? habit.count - 1 : 0};
      } 
      return item;
    })
    this.setState({habits});
  };    
  
  handleDlete = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits.splice(index, 1);
    this.setState({habits});
  };

  resetHabits = () => {
    const habits = this.state.habits.map(habit => {
      if(habit.count !== 0){
        return {...habit, count: 0}
      }

      return habit;
    });
    this.setState({habits});
  }

  addHabitsByClick = name => {
    const habits = [...this.state.habits, {id: Date.now(), name: name, count: 0}];
    this.setState({habits});
  }

  render(){
    return(
      <div>
      <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
        <Habits
        habits={this.state.habits}
        onIncrement={this.handleIncrement} 
        onDecrement={this.handleDecrement} 
        onDelete={this.handleDlete}
        onAdd={this.addHabitsByClick}/>
      <button className="reset__habit" onClick={this.resetHabits}>Reset All</button>
      </div>
    );
  }
}

export default App;

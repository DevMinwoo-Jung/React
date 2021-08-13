import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';


import React, { memo, useState } from 'react';

const habits = [
    {id: 1, name: 'Reading', [[count] [setCount]]: useState(0)},
    {id: 2, name: 'Coding', [[count] [setCount]]: useState(0)},
    {id: 3, name: 'Gym', [[count] [setCount]]: useState(0)},
  ]

const handleIncrement = (habit) => {
  const habits = habits.map(item => {
    if(item.id === habit.id){
      return {...habit, count: setCount(count + 1)};
    } 

    return item;
  })
  this.useState({habits});

};

const handleDecrement = (habit) => {
  const habits = habits.map(item => {
    if(item.id === habit.id){
      return {...habit, count: habit.count > 0 ? setCount(count - 1) : 0};
    } 
    return item;
  })
  this.useState({habits});
};    

const handleDlete = (habit) => {
  const habits = [...habits];
  const index = habits.indexOf(habit);
  habits.splice(index, 1);
  this.useState({habits});
};

const resetHabits = () => {
  const habits = habits.map(habit => {
    if(habit.count !== 0){
      return {...habit, count: setCount(0)}
    }

    return habit;
  });
  this.useState({habits});
}

const addHabitsByClick = name => {
  const habits = [...habits, {id: Date.now(), name: name, count: setCount(0)}];
  this.useState({habits});
}
const App = memo(() => {
  return (
    <div>
    <Navbar totalCount={habits.filter(item => item.count > 0).length}/>
      <Habits
      habits={habits}
      onIncrement={handleIncrement} 
      onDecrement={handleDecrement} 
      onDelete={handleDlete}
      onAdd={addHabitsByClick}/>
    <button className="reset__habit" onClick={resetHabits}>Reset All</button>
    </div>
  );
});

export default App;


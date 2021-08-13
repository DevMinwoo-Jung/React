import React, { memo } from 'react';
import AddForm from './addForm';
import Habit from './habit';

const Habits = memo((props) => {


  const addHabitsByClick = name => {
    props.onAdd(name)
  }
  return (
    <div>
    <AddForm onAdd={addHabitsByClick}/>
    <ul>
      {
          props.habits.map(habit =>
          (
          <Habit 
          key={habit.id} habit={habit} 
          onIncrement={props.onIncrement} 
          onDecrement={props.onDecrement} 
          onDelete={props.onDelete}
          />
          // 이렇게 함으로 habit.jsx에서 habits에 관련된 것들을 쓸 수 있다!
          ))          
      }
    </ul>
  </div>
  );
});

export default Habits;


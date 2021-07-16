import React, { Component } from 'react';

class HabitAddForm extends Component {
  onSubmit = event => {
    event.preventDefault();
  };
  
  render() {
    return (
      <form className="add-form" onSubmit={this.onSubit}>
        <input type="text" className="add-input" placeholder="Please Enter Your Habit"/>
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
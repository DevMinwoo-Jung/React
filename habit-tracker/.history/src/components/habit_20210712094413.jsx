import React, { Component } from 'react';

class Habit extends Component {
  render() {
    return (
    <>
      <span className="habit-name">Reading </span>
      <span className="habit-count">7 </span>
      <button>
        <i className="fas fa-plus-square"></i>
      </button>
      <button>
        <i className="fas fa-mins-square"></i>
      </button>      
    </>
    );
  }
}

export default Habit;
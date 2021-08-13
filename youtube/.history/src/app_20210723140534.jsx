import React, { Component } from 'react';
import Navbar from './components/navbar';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="main-Frame">
        <Navbar/>
      </div>
    );
  }
}

export default App;
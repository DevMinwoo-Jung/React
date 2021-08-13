import React, { Component } from 'react';
import Navbar from './components/navbar';
import './app.css';
import Videos from './components/videos';

class App extends Component {
  render() {
    return (
      <div className="main-Frame">
        <Navbar/>
        <Videos/>
      </div>
    );
  }
}

export default App;
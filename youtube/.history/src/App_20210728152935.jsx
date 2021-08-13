import React, { Component } from 'react';
import Navbar from './components/navbar';
import './app.css';
import Video from './components/video';



class App extends Component {
  const express = require('express');
  const cors = require('cors');
  const app = express();
  
  app.use(cors());

  render() {
    return (
      <div className="main-Frame">
        <Navbar/>
        <Video/>
      </div>
    );
  }
}

export default App;
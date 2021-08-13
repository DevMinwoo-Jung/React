import React, { Component } from 'react';
import Navbar from './components/navbar';
import './app.css';
import Video from './components/video';

const cors = require('cors');
App.use(cors);

class App extends Component {
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
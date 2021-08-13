import React, { Component } from 'react';
import Navbar from './components/navbar';
import './app.css';
import Video from './components/video';

var whitelist = ['http://localhost:3000/', 'http://localhost:3000/']

var corsOptions = {
  origin: function(origin, callback){
  var isWhitelisted = whitelist.indexOf(origin) !== -1;
  callback(null, isWhitelisted); 
  // callback expects two parameters: error and options 
  },
  credentials:true
}

app.use( cors(corsOptions) );

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
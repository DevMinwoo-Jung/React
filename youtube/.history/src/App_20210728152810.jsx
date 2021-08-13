import React, { Component } from 'react';
import Navbar from './components/navbar';
import './app.css';
import Video from './components/video';

var express = require('express');
var cors = require('cors');
var app = express();

// CORS 설정
app.use(cors());

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
});

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
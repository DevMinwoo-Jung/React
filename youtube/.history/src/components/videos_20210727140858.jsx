import React from 'react';
import { stockData } from "../data.js";
import VideoImg from './videoImg.jsx';
import VideoPara from './videoPara.jsx';

import React, { Component } from 'react';

const chim = stockData[0]["items"];

class Videos extends Component {
  render() {
    return (
      <div>
        {chim.map((data) => {
          return(
            <div className="video" key={Math.random()}>
              <VideoImg/>
              <VideoPara/>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Videos;


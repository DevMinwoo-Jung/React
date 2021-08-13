import React, { Component } from 'react';
import { stockData } from "../data.js";
import VideoImg from './videoImg.jsx';
import VideoPara from './videoPara.jsx';



const chim = stockData[0]["items"];

class Videos extends Component {
  state = {
    chimtube : stockData[0]["items"]
  }

  render() {
    return (
      <div>
        {chim.map((data) => {
          return(
            <div className="video" key={Math.random()}>
              <VideoImg chimtube={this.state.chimtube}/>
              <VideoPara chimtube={this.state.chimtube}/>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Videos;


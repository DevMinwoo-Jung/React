import React from 'react';
import { stockData } from "../data.js";
import VideoImg from './videoImg.jsx';
import VideoPara from './videoPara.jsx';

const Videos = () => {
  const chim = stockData[0]["items"];
  return (
  <>
    {chim.map(() => {
      return(
        <div className="video" key={Math.random()}>
          <VideoImg/>
          <VideoPara/>
        </div>
      )
    })}
  </>
  );
};

export default Videos; 
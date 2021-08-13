import React from 'react';
import { stockData } from "../data.js";

const VideoImg = () => {
  const chim = stockData[0]["items"];
  return (
  <>
    {chim.map((data) => {
      return(
          <div className ="imgs">
            <img className ="thumbnails" src={data.snippet.thumbnails.high.url} alt="" />
          </div>
      )
    })}
  </>
  );
};

export default VideoImg;
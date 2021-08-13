import React from 'react';
import { stockData } from "../data.js";

const Videos = () => {
  const chim = stockData[0]["items"];
  const Date = Date.now() + Math.random();
  return (
  <>
    {chim.map((data, key) => {
      return(
        <div className="video" key={Date}>
          <div className ="imgs">
            <img className ="thumbnails" src={data.snippet.thumbnails.high.url} alt="" />
          </div>
          <div className="contens">
            <span>{data.snippet.title}</span>
          </div>
        </div>
      )
    })}
  </>
  );
};

export default Videos;
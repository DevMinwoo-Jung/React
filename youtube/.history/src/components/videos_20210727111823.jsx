import React from 'react';
import { stockData } from "../data.js";

const Videos = () => {
  const chim = stockData[0]["items"];
  return (
  <>
    {chim.map((data, key) => {
      return(
        <div className="video" key={Math.random()}>
          <div className ="imgs">
            <img className ="thumbnails" src={data.snippet.thumbnails.high.url} alt="" />
          </div>
          <div className="contens">
            <span maxLength="10">{data.snippet.title}</span>
          </div>
        </div>
      )
    })}
  </>
  );
};

export default Videos;
import React from 'react';
import { stockData } from "../data.js";

const Videos = () => {
  const chim = stockData[0]["items"];
  return (
  <>
    {chim.map((data) => {
      return(
        <div className="video" key={Math.random()}>
          <div className ="imgs">
            <img className ="thumbnails" src={data.snippet.thumbnails.high.url} alt="" />
          </div>
          <div className="contens">
            <span className="content-para">{data.snippet.title.length > 10 ? data.snippet.title.slice(0, 15) : data.snippet.title}</span>
          </div>
        </div>
      )
    })}
  </>
  );
};

export default Videos; 
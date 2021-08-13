import React from 'react';
import { stockData } from "../data.js";

const Videos = () => {
  const chim = stockData[0]["items"];
  return (
    <>
    {chim.map((data, key) => {
      return(
        <div className="video">
          <div className ="imgs">
            <img src={data.snippet.thumbnails.high.url} alt="" />
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
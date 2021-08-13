import React from 'react';
import { stockData } from "../data.js";

const Videos = () => {
  const chim = stockData[0]["items"];
  // console.log(chim);
  // for(let i = 0; i<chim.length; i++){
  //   console.log(chim[i].snippet.thumbnails.default.url);
  //   console.log(chim[i].snippet.title);
  // }
  return (
    <div className="video">
    {chim.map((data, key) => {
      return(
        <>
          <div className ="imgs">
            <img src={data.snippet.thumbnails.high.url} alt="" />
          </div>
          <div className="contens">
            <span>{data.snippet.title}</span>
          </div>
        </>
      )
    })}
    </div>
  );
};

export default Videos;
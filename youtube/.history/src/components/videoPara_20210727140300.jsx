import React from 'react';
import { stockData } from "../data.js";

const VideoPara = () => {
  const chim = stockData[0]["items"];
  return (
    <>
    {chim.map((data) => {
      return(
          <div className="contens">
            <span className="content-para">{data.snippet.title.length > 15 ? data.snippet.title.slice(0, 15)+"..." : data.snippet.title}</span>
          </div>
      )
    })}
  </>
  );
};

export default VideoPara;
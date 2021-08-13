import React from 'react';
import { stockData } from "../data.js";

const Videos = () => {
  const chim = stockData[0]["items"];
  console.log(chim);
  for(let i = 0; i<chim.length; i++){
    console.log(chim[i].snippet.thumbnails.default.url);
    console.log(chim[i].snippet.description);
  }
  return (
    <div className="video">
      <div className="imgs">asdasd</div>
      <div className="contents">asdasdasd</div>
      <img src="https://yt3.ggpht.com/ytc/AKedOLSYskiGDIyLCoFETAvHx4tHvHzlBKkpj3pJ36lpwQ=s88-c-k-c0xffffffff-no-rj-mo" alt="" />
    {}
    </div>
  );
};

export default Videos;
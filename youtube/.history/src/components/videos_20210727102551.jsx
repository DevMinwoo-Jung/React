import React from 'react';
import { stockData } from "../data.js";

const Videos = () => {
  return (
    <div className="video">
      <div className="imgs">asdasd</div>
      <div className="contents">asdasdasd</div>
      <img src="https://yt3.ggpht.com/ytc/AKedOLSYskiGDIyLCoFETAvHx4tHvHzlBKkpj3pJ36lpwQ=s88-c-k-c0xffffffff-no-rj-mo" alt="" />
      {stockData.map((data, key) => {
        return (
        <div>
          {console.log(stockData)}
        </div>
        )
      })}
    </div>
  );
};

export default Videos;
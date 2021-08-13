import React from 'react';
import { stockData } from "../data.js";

export const Videos = () => {
  return (
    <div className="video">
      <div className="imgs">asdasd</div>
      <div className="contents">asdasdasd</div>
      {stockData.map((data, key) => {
        return (
          <div key={key}>
        {data}
          </div>
        )
      })}
    </div>
  );
};

export default Videos;
import React from 'react';
import { stockData } from "../data.js";

const Videos = () => {
  return (
    <div className="video">
      <div className="imgs">asdasd</div>
      <div className="contents">asdasdasd</div>
      {stockData.map((data, key) => {
        return (
          <div key={key}>
        {data.items["snippet"].thumbnails.default.url}
          </div>
        )
      })}
    </div>
  );
};

export default Videos;
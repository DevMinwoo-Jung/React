import React from 'react';
import { stockData } from "../data.js";

const Videos = () => {
  return (
    <div className="video">
      <div className="imgs">asdasd</div>
      <div className="contents">asdasdasd</div>
      {stockData.map((data, key) => {
        return (
        JSON.stringify(data["items"][0].snippet.thumbnails.default.url)
        )
      })}
    </div>
  );
};

export default Videos;
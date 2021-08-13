import React from 'react';
import { stockData } from "../data.js";

const Videos = () => {
  return (
    <div className="video">
     
      {stockData.map((data, key) => {
        return (
        <div>
          {data["items"][key].snippet.thumbnails.default.url}
          {data["items"][key].snippet.description}
        </div>
        )
      })}
    </div>
  );
};

export default Videos;
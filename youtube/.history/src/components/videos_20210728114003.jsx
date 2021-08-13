import React from 'react';
import { stockData } from "../data.js";

const Videos = () => {
  const chim = stockData[0]["items"];
  const cors = require('cors');
  Videos.use(cors());
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://youtube.googleapis.com/youtube/v3search?part=snippet&maxResults=25&q=침착맨&key=AIzaSyC2l2s1zKotJDKRSHgA1IIvCF-m3afSJfY", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  return (
  <>
    {chim.map((data) => {
      return(
        <div className="video" key={Math.random()}>
          <div className ="imgs">
            <img className ="thumbnails" src={data.snippet.thumbnails.high.url} alt="" />
          </div>
          <div className="contens">
            <span className="content-para">{data.snippet.title.length > 15 ? data.snippet.title.slice(0, 15)+"..." : data.snippet.title}</span>
          </div>
        </div>
      )
    })}
  </>
  );
};

export default Videos; 
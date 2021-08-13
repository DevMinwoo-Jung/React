import React from 'react';
import { stockData } from "../data.js";

const Videos = () => {
  const chim = stockData[0]["items"];
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("GET", "https://youtube.googleapis.com/youtube/v3search?part=snippet&maxResults=25&q=%EC%B9%A8%EC%B0%A9%EB%A7%A8&key=AIzaSyC2l2s1zKotJDKRSHgA1IIvCF-m3afSJfY");
  
  xhr.send();
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
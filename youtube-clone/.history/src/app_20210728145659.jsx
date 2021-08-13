import './app.css';
import React, { useEffect, useState } from 'react'

function App() {
  var app = require('express')();
  var cors = require('cors');
  
  // Access-Control-Allow-Origin 적용방법1: 직접 헤더에 적용
  app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
  });
const [videos, setVideos] = useState([]);

useEffect(()=>{
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://youtube.googleapis.com/youtube/v3search?part=snippet&maxResults=25&q=침착맨&key=AIzaSyC2l2s1zKotJDKRSHgA1IIvCF-m3afSJfY", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}, []);
// 텅텅 빈 배열은 마운트 될때만 업데이트 된다 여기다가 , vidoes를 쓰면 계속해서 업데이트 된다
  return (
    <h1>Hello</h1>
  );
}

export default App;

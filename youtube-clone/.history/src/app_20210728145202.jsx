import './app.css';
import React, { useEffect, useState } from 'react'

function App() {
const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.header("Access-Control-Allow-Origin" , "http://localhost:3000/");
  res.send(data);
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

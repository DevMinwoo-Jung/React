import './app.css';
import React, { useEffect, useState } from 'react'

function App() {
const [videos, setVideos] = useState([]);

useEffect(()=>{
  console.log('useEffect');
}, []);
// 텅텅 빈 배열은 마운트 될때만 업데이트 된다 여기다가 , vidoes를 쓰면 계속해서 업데이트 된다
  return (
    <h1>Hello</h1>
  );
}

export default App;

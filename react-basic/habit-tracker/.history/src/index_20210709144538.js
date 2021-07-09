import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // root에 app componet를 연결!
  // stricMode는 javascript의 use strict와 비슷한거이당
  document.getElementById('root')
);


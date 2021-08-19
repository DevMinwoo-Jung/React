import React, { memo } from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';
import styles from './header.module.css'

const Header = memo(() => {
  const history = useHistory();

  return (
    <BrowserRouter>   
    <div className={styles.topAndBottom}>
      <button onClick={() => {history.push("/")}}>logout</button>
      <img className={styles.logo} src="/images/logo.png" alt="" />
      <h1 className={styles.header}>Business Card Maker</h1>
    </div>
    </BrowserRouter>

  );
}); 
export default Header;
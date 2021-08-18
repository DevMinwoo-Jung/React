import React, { memo } from 'react';
import styles from './header.module.css'

const Header = memo(() => {
  return (
    <div className={styles.topAndBottom}>
      <img className={styles.logo} src="/images/logo.png" alt="" />
      <h1 className={styles.header}>Business Card Maker</h1>
    </div>
  );
}); 
export default Header;
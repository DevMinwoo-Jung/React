import React from 'react';
import styles from './logo.module.css'

const Logo = () => {
    return(
      <div className={styles.logo}>
        <img className={styles.ytLogo} src="img/youtubeLogo.png" alt="" />
      </div>
    )
  }

export default Logo;
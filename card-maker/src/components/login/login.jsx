import React from 'react';
import LoginInput from '../login_input/login_input';
import styles from './login.module.css'

const Login = ({onProvider}) => {

const handleProvider = () => {
  onProvider();
}


  
  return (
    <div className={styles.logindiv}>
      <div className={styles.topAndBottom}>
      <img className={styles.logo} src="/images/logo.png" alt="" />
        <h2> Business Card Maker </h2>
          <LoginInput onProvider={handleProvider}/>
        <h3>Create by Minwoo</h3>
      </div>
    </div>
  );
};
export default Login; 
import React from 'react';
import styles from './login_input.module.css'

const LoginInput = ({onProvider}) => {

const handleProvider = () => {
  onProvider();
}

  return (
    <div className={styles.inputDiv}>
      <h2>Login Input</h2>
      <button onClick={handleProvider}>Login By Goggle</button>
    </div>
  );
};

export default LoginInput;
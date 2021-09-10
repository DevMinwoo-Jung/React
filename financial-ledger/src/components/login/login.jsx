import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css'

const Login = ({authService}) => {
  const history = useHistory();
  const goTomaker = userId => {
    history.push({
      pathname: '/maker',
      state: { id: userId },
    });
  };
  const onLogin = event => {
    authService
      .login(event.currentTarget.textContent)
      .then(data => goTomaker(data.user.uid));
  };

  useEffect(() => {
    authService
      .onAuthChange(user => {
        user && goTomaker(user.uid);
      });

  })

  return(
    <section className={styles.login}>
      <div className={styles.loginLeft}>
        <span className={styles.loginLeftFont}>My</span>
        <span className={styles.loginLeftFont}>World Cup</span>
        <span className={styles.loginLeftFont}>Maker</span>
      </div>
      <div className={styles.loginRight}>  
        <ul className={styles.list}>
        <li className={styles.item}>
            <span className={styles.loginRightFont}>로그인하기</span>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>Google</button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>Github</button>
          </li>
        </ul>
      </div>
    </section>
  )
};

export default Login;
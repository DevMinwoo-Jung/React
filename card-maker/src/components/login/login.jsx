import React from 'react';
import CardAndProfile from '../card_and_profile/card_and_profile';
import LoginInput from '../login_input/login_input';
import styles from './login.module.css'
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";

const Login = ({onProvider}) => {

const handleProvider = () => {
  onProvider();
}


  
  return (
    <>
    <BrowserRouter>
    <Switch>  
      <Route path={['/login', '/']} exact>
        <div className={styles.logindiv}>
          <div className={styles.topAndBottom}>
          <img className={styles.logo} src="/images/logo.png" alt="" />
            <h2> Business Card Maker </h2>
              <LoginInput onProvider={handleProvider}/>
            <h3>Create by Minwoo</h3>
          </div>
        </div>
      </Route>    
      <Route path="/cards">
          <CardAndProfile/>
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
};
export default Login; 
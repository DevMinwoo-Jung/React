import React from 'react';
import styles from './login_input.module.css'
import { BrowserRouter, useHistory} from "react-router-dom";

const LoginInput = ({onProvider}) => {
  const history = useHistory();

const handleProvider = () => {
  onProvider();
}

  return (
    <BrowserRouter>
      <div className={styles.inputDiv}>
        <h2>Login Input</h2>
        <button onClick={handleProvider}>Login By Goggle</button>
          <button onClick={() => {history.push("/cards")}}>go to cards</button>
      </div>
    </BrowserRouter>
  );
};

export default LoginInput;
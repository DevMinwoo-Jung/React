
import Login from './components/login/login';
import styles from './app.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Maker from './components/maker/maker';

function App({FileInput, authService }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className={styles.app}>
            <Login authService={authService} />
          </div>
        </Route>
        <Route path="/maker">
          <Maker FileInput={FileInput} authService={authService} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path={['/',"/home"]}>
            <Home/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = (props) => {
    let history = useHistory();

  
    return(
      <>
        <h1>Home</h1>
        <button type="button" onClick={() => {
              history.push("/profile");
        }}>Go to Profile</button>
      </>
    )
}

export default Home;

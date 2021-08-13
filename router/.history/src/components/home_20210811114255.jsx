import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = (props) => {
  
  function HomeButton(){
    let history = useHistory();
  }

  function handleClick(){
    history.push("/profile");
  }
    return(
      <>
        <h1>Home</h1>
        <button onClick={handleClick}>Go to Profile</button>
      </>
    )
}

export default Home;

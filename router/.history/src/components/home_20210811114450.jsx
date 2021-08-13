import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = (props) => {


    return(
      <>
        <h1>Home</h1>
        <button type="button" onClick={handleClick}>Go to Profile</button>
      </>
    )
}

export default Home;

import React from 'react';
import { useHistory } from 'react-router-dom';
function HomeButton(){
  let history = useHistory();

function handleClick(){
  history.push("/profile");
}
}
const Home = (props) => {


    return(
      <>
        <h1>Home</h1>
        <button type="button" onClick={handleClick}>Go to Profile</button>
      </>
    )
}

export default Home;

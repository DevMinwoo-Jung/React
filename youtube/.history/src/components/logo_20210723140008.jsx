import React from 'react';
import Logo from './img/youtubeLogo.png';

const Logo = (props) => {

    return(
      <div className="logo">
        <img src={require('./img/youtubeLogo.png')} alt="" />
      </div>
    )
  }

export default Logo;
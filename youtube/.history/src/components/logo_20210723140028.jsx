import React from 'react';
import LogoImg from './img/youtubeLogo.png';

const Logo = (props) => {

    return(
      <div className="logo">
        <img src={LogoImg} alt="" />
      </div>
    )
  }

export default Logo;
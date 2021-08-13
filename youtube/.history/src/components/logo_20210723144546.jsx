import React from 'react';
import ytlogo from '../img/youtubeLogo.png'

const Logo = (props) => {

    return(
      <div className="logo">
        <img className="yt-logo" src={ytlogo} alt="" />
      </div>
    )
  }

export default Logo;
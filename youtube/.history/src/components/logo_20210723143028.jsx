import React from 'react';

const Logo = (props) => {

    return(
      <div className="logo">
        <img src={require(window.location.origin + '/img/yt_logo.png')} alt="" />
      </div>
    )
  }

export default Logo;
import React from 'react';

const Logo = (props) => {

    return(
      <div className="logo">
        <img src={require('../img/youtubeLogo.png').default} alt="" />
      </div>
    )
  }

export default Logo;
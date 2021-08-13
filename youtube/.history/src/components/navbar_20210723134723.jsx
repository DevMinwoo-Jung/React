import React, { Component } from 'react';
import Logo from './logo';
import SearchBtn from './searchBtn';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Logo/>
      
        <SearchBtn/>
      </nav>
    );
  }
}

export default Navbar; 
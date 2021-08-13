import React, { Component } from 'react';
import Logo from './logo';
import SearchBtn from './searchBtn';
import SearchBox from './searchBox';

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
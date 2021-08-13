import React, { Component } from 'react';
import Logo from './logo';
import SearchBtn from './searchBtn';
import SearchBox from './searchBox';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Logo/>
        <SearchBox/>
        <SearchBtn/>
      </nav>
    );
  }
}

export default Navbar
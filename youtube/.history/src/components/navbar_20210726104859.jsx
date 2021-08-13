import React, { Component } from 'react';
import Logo from './logo';
import SearchBox from './searchBox';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Logo/>
        <SearchBox/>
      </nav>
    );
  }
}

export default Navbar
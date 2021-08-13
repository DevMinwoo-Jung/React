import React from 'react';
import Logo from '../logo/logo';
import SearchBox from '../search_box/search_box';
import styles from './navbar.module.css'

const navbar = (props) => {

  
  const handleSearch = query => {
    props.onSearch(query);
  }

  return (
      <nav className={styles.navbar}>
        <Logo/>
        <SearchBox onSearch={handleSearch}/>
      </nav>
    );
};

export default navbar;
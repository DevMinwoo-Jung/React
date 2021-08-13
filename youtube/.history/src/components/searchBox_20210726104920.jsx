import React from 'react';
import SearchBtn from './searchBtn';

const SearchBox = (props) => {

  return(
    <div className="searchBox">
      <input className="search" placeholder="Search"></input>
      <SearchBtn/>
    </div>  
  )
      
}
export default SearchBox
import React, {useRef} from 'react';
import styles from './search_box.module.css'

const SearchBox = ({onSearch}) => {
  const inputRef = useRef();
  
  const handleSearch = () => {
    const query = inputRef.current.value;
    onSearch(query);
  }
  
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if(event.key === 'Enter'){
      handleSearch();
    }
  };

  return(
    <div className={styles.searchBox}>
      <input ref={inputRef} type="search" className={styles.search} placeholder="Search" onKeyPress={onKeyPress}></input>
      <div className={styles.searchBtn} type="submit" onClick={onClick}>
      <i className="fas fa-search"></i>
      </div>
    </div>  
  )
      
}
export default SearchBox
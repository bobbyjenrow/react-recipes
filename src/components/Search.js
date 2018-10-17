import React from 'react';
import './Search.css';

const Search = ({handleSearch}) => {
  return(
  <form className="search">
    <input type="text" className="search-input" onKeyUp={handleSearch}/>
    <button type="submit" className="search-button">Search</button>
  </form>
)};

export default Search;

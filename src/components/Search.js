import React from 'react';
// import './Search.css';

const Search = ({handleSearch}) => {
  return(
  <form className="search">
    <input type="text" className="search-input" onChange={handleSearch}/>
  </form>
)};

export default Search;

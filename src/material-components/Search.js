import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'


const Search = ({handleSearch}) => {
  return(
  // <form className="search">
  //   <input type="text" className="search-input" onKeyUp={handleSearch}/>
  //   <button type="submit" className="search-button">Search</button>
  // </form>
  <div>
    <TextField style={{backgroundColor: 'white'}} placeholder='search recipes' margin='dense'/>
    <Button variant="contained" color='secondary'>Submit</Button>
  </div>
)};

export default Search;

import React from 'react';
import {baseInputs} from './styled/elements'
import styled from 'react-emotion'

const StyledInput = styled('input')`
  ${baseInputs}
  width: 70%;
  font-size: 1.5rem;
  padding: .4rem;
`
const Search = ({handleSearch}) => {
  return(

    <StyledInput
    type="text"
    className="search-input"
    placeholder="Search recipes..."
    onChange={handleSearch}/>
)};

export default Search;

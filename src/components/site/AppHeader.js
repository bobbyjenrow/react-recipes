import React from 'react'
import styled from 'react-emotion'
import Search from '../Search'
import Logo from './Logo'

const Container = styled('header')`
  width: 100%;
  min-height: 5rem;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: var(--primary);
  margin-bottom: 1rem;
  box-shadow: var(--shadow-base);
  padding: 1rem;
  color: var(--background);

`


const AppHeader = ({handleSearch}) => {
  return(
    <Container>
      <Logo/>
      <Search handleSearch={(event)=>handleSearch(event.target.value)} />
    </Container>
)}

export default AppHeader

import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
// import './App.css';
import RecipeList from './components/pres/RecipeList'
import Search from './components/Search'
import AppHOC from './components/hoc/AppHOC'
import RecipePage from './components/pres/RecipePage'
import styled from 'react-emotion'
//Components
import NewRecipe from './components/pres/NewRecipe'
import NewRecipeButton from './components/pres/NewRecipeButton'
import AppHeader from './components/site/AppHeader'

import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom'


const StyledHeader = styled('header')`
  background-color: var(--primary);
  color: var(--background);
  text-align: center;
  padding: 1rem 0 .5rem 0;
  margin-bottom: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  & h1{
    margin: 0;
  }
`
const AppContainer = styled('div')`
  min-height: 100%;
  display: flex;
  flex-flow: column;
`

const App = ({addRecipe,recipes,isNewRecipeActive,handleDelete,handleUpdate,toggleNewRecipe,updateSearchFilter}) => {
    return (
      <Router className="App">
        <AppContainer>
          <AppHeader handleSearch={updateSearchFilter}/>
          {isNewRecipeActive && <NewRecipe onSumbit={addRecipe} />}
          <Switch>
            <Route exact to="/" render={()=><RecipeList recipes={recipes}/>} />
          </Switch>
          <NewRecipeButton isActive={isNewRecipeActive} toggleNewRecipe={toggleNewRecipe} />
        </AppContainer>
      </Router>
    );
}

export default App;

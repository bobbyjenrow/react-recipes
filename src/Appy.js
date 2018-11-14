import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
// import './App.css';
import RecipeList from './recomponents/pres/RecipeList'
import Search from './recomponents/Search'
import AppHOC from './recomponents/hoc/AppHOC'
import RecipePage from './recomponents/pres/RecipePage'
import styled from 'react-emotion'
//Components
import NewRecipe from './recomponents/pres/NewRecipe'
import AppHeader from './recomponents/site/AppHeader'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


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
const NewRecipeButton = styled('button')`
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 0 2rem 2rem 0;

  background-color: var(--primary);
  color: var(--background);
  font-size: 2rem;
  border-radius: 1000px;
  padding: 1rem;
  border: 0;
  box-shadow: var(--shadow-base);
  outline: none;
  transition: 1s ease-out;
  &:hover{
    cursor: pointer;
    color: var(--primary);
    background-color: var(--background);
    box-shadow: var(--shadow-hover);
  }
`

const AppContainer = styled('div')`
  min-height: 100%;
  display: flex;
  flex-flow: column;
`
//Test Data


const App = ({recipes,handleDelete,handleUpdate,toggleNewRecipe,updateSearchFilter}) => {
    return (
      <Router className="App">
        <AppContainer>
          <AppHeader handleSearch={updateSearchFilter}/>
          <Switch>
            <Route exact to="/" render={()=><RecipeList recipes={recipes}/>} />
          </Switch>
        </AppContainer>
      </Router>
    );
}
        // <RecipeList recipes={this.props.recipes} />
// const mapDispatchToProps = dispatch => ({
//   updateFilter: () => dispatch(updateFilter())
// })
const mapStateToProps = state => ({
  recipes: state.recipe.items,
  isNewRecipeVisible: state.recipe.isNewRecipeVisible,
  loading: state.recipe.isFetching,
  error: state.recipe.error
  // filter: state.filter.search
})

export default App;

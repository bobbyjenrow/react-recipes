import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
// import './App.css';
import RecipeList from './components/RecipeList'
import Search from './components/Search'
import { connect } from 'react-redux';
import {reset} from 'redux-form'
import styled from 'react-emotion'
//Components
import NewRecipe from './components/NewRecipe'
import data from "./mocks/store.js";
// Redux
import { fetchRecipes } from './redux/actions/Recipe/FetchAll'
import { updateSearchFilter } from './redux/actions/Filter/Update'
import { createRecipe } from './redux/actions/Recipe/Create'
import { updateRecipe } from './redux/actions/Recipe/Update'
import { deleteRecipe } from './redux/actions/Recipe/Delete'
import { toggleNewRecipe } from './redux/actions/Recipe/ToggleNew'


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
//Test Data


class App extends Component {
  componentDidMount(){
    this.props.dispatch(fetchRecipes())
  }
  handleNewRecipe = async (values) => {
    await this.props.dispatch(createRecipe(values))
    this.props.dispatch(reset('newRecipe'))
    await this.props.dispatch(fetchRecipes())
    this.props.dispatch(toggleNewRecipe())
  };
  handleRecipeDelete = async (id) => {
    await this.props.dispatch(deleteRecipe(id))
    await this.props.dispatch(fetchRecipes())
    await this.props.dispatch(fetchRecipes())
  }
  handleRecipeUpdate = async (body) => {
    await this.props.dispatch(updateRecipe(body))
    await this.props.dispatch(fetchRecipes())
  }
  toggleNewRecipe = () => {
    this.props.dispatch(toggleNewRecipe())
    window.scrollTo(0,0)
  }
  handleSearchChange = (e) => {
    this.props.dispatch(updateSearchFilter(e.target.value))
    console.log(JSON.stringify(this.props.filter))
  }
  render() {
    const {dispatch,isNewRecipeVisible} = this.props;
    return (
      <div className="App">
        <StyledHeader className="app-header">
            <h1 className="App-logo">Recipe App</h1>
          <Search className="search" handleSearch={this.handleSearchChange}/>
        </StyledHeader>
        <main className="main-content">
        { isNewRecipeVisible ?
          <NewRecipe onSubmit={this.handleNewRecipe} />
          : null
        }
        <RecipeList
          handleDelete={this.handleRecipeDelete}
          handleUpdate={this.handleRecipeUpdate}
          recipes={this.props.recipes} />
        <NewRecipeButton onClick={this.toggleNewRecipe} type="button" title="Add new recipe!" className="new-recipe-button">
          {
            isNewRecipeVisible ? '-' : '+'
          }
        </NewRecipeButton>
        </main>
      </div>
    );
  }
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

export default connect(mapStateToProps)(App);

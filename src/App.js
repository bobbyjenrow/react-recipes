import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeList from './material-components/RecipeList'
import Search from './material-components/Search'
import { connect } from 'react-redux';

import {AppBar} from '@material-ui/core'

//Components
import NewRecipe from './components/NewRecipe'

// Redux
import { fetchRecipes } from './redux/actions/Recipe/Fetch'

//Test Data
import data from "./mocks/store.js";

class App extends Component {
  componentDidMount(){
    this.props.dispatch(fetchRecipes())
    console.log(this.props.recipes)
  }
  // Defining handleChange as an arrow function
  // binds scope lexically, removing need for
  // this.handleChange.bind(this) in constructor.
  // handleChange = (searchValue)=>{
  //   this.setState({search: searchValue.target.value })
  //   this.filterRecipes();
  // }
  // filterRecipes = ()=>{
  //   // Filters by name property on objects in state.recipes
  //   let filteredRecipes = this.recipes.filter(
  //     recipe => recipe.name.toLowerCase().includes(this.state.search))
  //   // Set State
  //   this.setState({recipes: filteredRecipes})
  // }
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <link rel="stylesheet" href="https://unpkg.com/@material-ui/core/umd/material-ui.development.js"/>
        <header className="App-header">
          <AppBar color="primary" className="inner">
            <h1 className="App-logo">Recipe App</h1>
          <Search className="search" handleSearch={this.handleChange}/>
        </AppBar>
        </header>
        <NewRecipe />
        <RecipeList recipes={this.props.recipes} />
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   updateFilter: () => dispatch(updateFilter())
// })
const mapStateToProps = state => ({
  recipes: state.recipes.items,
  loading: state.recipes.loading,
  error: state.recipes.error
})

export default connect(mapStateToProps)(App);

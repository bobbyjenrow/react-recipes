import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeList from './components/RecipeList'
import Search from './components/Search'


// TODO: Add debounce on search & filter
import debounce from 'lodash/debounce'

//Test Data
import data from "./mocks/recipes.json";

class App extends Component {
  constructor(){
    super();
    this.state = {
      search: '',
      recipes: [...data.recipes]
    };
    this.recipes = data.recipes;
  }
  // Defining handleChange as an arrow function
  // binds scope lexically, removing need for
  // this.handleChange.bind(this) in constructor.
  handleChange = (searchValue)=>{
    this.setState({search: searchValue.target.value })
    this.filterRecipes();
  }
  filterRecipes = ()=>{
    // Filters by name property on objects in state.recipes
    let filteredRecipes = this.recipes.filter(
      recipe => recipe.name.toLowerCase().includes(this.state.search))
    // Set State
    this.setState({recipes: filteredRecipes})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="inner">
            <h1 className="App-logo">Recipe App</h1>

          <Search className="search" handleSearch={this.handleChange}/>
          </div>
        </header>
        {this.state.search}
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;

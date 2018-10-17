import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeList from './components/RecipeList'
import Search from './components/Search'

//Test Data
import data from "./mocks/recipes.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="inner">
            <h1 className="App-logo">Recipe App</h1>

          <Search className="search" />
          </div>
        </header>
        <RecipeList recipes={data.recipes} />
      </div>
    );
  }
}

export default App;

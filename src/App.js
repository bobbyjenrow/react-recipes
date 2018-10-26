import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeList from './material-components/RecipeList'
import Search from './material-components/Search'
import { connect } from 'react-redux';

import {AppBar,Button} from '@material-ui/core'
import {createMuiTheme} from '@material-ui/core/styles'
// const theme = createMuiTheme({
//   palette: {
//     primary: blue,
//
//   }
// })

//Components
import NewRecipe from './material-components/NewRecipe'

// Redux
import { fetchRecipes } from './redux/actions/Recipe/Fetch'

//Test Data
import data from "./mocks/store.js";

class App extends Component {
  constructor(){
    super()
    this.state = {
    newRecipeIsVisible: false
    }
    this.newRecipe = this.newRecipe.bind(this)
  }
  componentDidMount(){
    this.props.dispatch(fetchRecipes())
    console.log(this.props.recipes)
  }
  newRecipe(){
    this.setState({newRecipeIsVisible: true});
  }
  submitNewRecipe(){

  }
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <link rel="stylesheet" href="https://unpkg.com/@material-ui/core/umd/material-ui.development.js"/>
        <header className="App-header">
          <AppBar color="primary" className="inner" position="relative">
            <h1 className="App-logo">Recipe App</h1>
          <Search className="search" handleSearch={this.handleChange}/>
        </AppBar>
        </header>
        <NewRecipe isVisible={this.state.newRecipeIsVisible} submit={this.submitNewRecipe} />
        <RecipeList recipes={this.props.recipes} />
        <Button onClick={this.newRecipe} style={{position: 'fixed', bottom: '0', right: '0', margin: '0 3rem 3rem 0'}} color='primary' variant='fab'>+</Button>
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

import React from 'react';
import Recipe from '../pres/Recipe';
import App from '../../App'
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import {connect} from 'react-redux'
import styled from 'react-emotion'
// Operations
import { updateFilter } from '../../redux/search/operations'
import {
  addRecipe,
  deleteRecipe,
  updateRecipe,
  getRecipes,
  toggleNewRecipe
} from '../../redux/recipes/operations'

const mapStateToProps = state => ({
   recipes: state.recipes.get.recipes.filter((r,i)=>{
     const searchFields = [r.name,r.subtitle,r.body]
     const searchText = searchFields.join(" ").toLowerCase();
     console.log(searchText)
     return searchText.includes(state.search.text.toLowerCase())
   }),
   isNewRecipeActive: state.recipes.toggleNew.isVisible
});
const lifecycles = lifecycle({
  componentDidMount(){
    this.props.getRecipes()
  }
})

const handlers = withHandlers({
    addRecipe: ({dispatch}) => (recipe) => {addRecipe(recipe)(dispatch)},
    deleteRecipe: ({dispatch}) => (id) => {deleteRecipe(id)(dispatch)},
    updateRecipe: ({dispatch}) => (recipe) => {updateRecipe(recipe)(dispatch)},
    getRecipes: ({dispatch}) => () => {getRecipes()(dispatch)},
    toggleNewRecipe: ({dispatch}) => () => {toggleNewRecipe()(dispatch)},
    updateSearchFilter: ({dispatch}) => (filter) => {updateFilter(filter)(dispatch)},
})

export default compose(
  connect(mapStateToProps),
  handlers,
  lifecycles
)(App)

import {combineReducers} from 'redux';
import fetchRecipes from './fetchRecipes';
import updateRecipeFilter from './updateRecipeFilter';

export default combineReducers({
  fetchRecipes,
  updateRecipeFilter
})

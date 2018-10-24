import {combineReducers} from 'redux';
import recipes from './Recipes';
import filters from './Filters';

export default combineReducers({
  recipes,
  filters
})

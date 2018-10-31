import {combineReducers} from 'redux';
import recipe from './Recipes';
import filter from './Filters';
import { reducer as formReducer } from 'redux-form'
import formReducers from './Forms';

export default combineReducers({
  form: formReducer.plugin(formReducers),
  recipe
})

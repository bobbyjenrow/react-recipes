import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import {

} from './actions';


// Reducers

const addReducer = createReducer({
  [addRecipeStart]: (state) => ({...state, running: true}),
  [addRecipeSuccess]: (state) => ({...state, running:false, success:true}),
  [addRecipeFailure]: (state) => ({...state, running:false, success:false})
}, {
  running: false,
  success: false
});

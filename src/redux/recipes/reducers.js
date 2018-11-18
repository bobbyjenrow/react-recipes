import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import {
  addRecipeStart,
  addRecipeSuccess,
  addRecipeFailure,
  updateRecipeStart,
  updateRecipeSuccess,
  updateRecipeFailure,
  deleteRecipeStart,
  deleteRecipeSuccess,
  deleteRecipeFailure,
  getRecipesStart,
  getRecipesSuccess,
  getRecipesFailure,
  toggleNewRecipe
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

const updateReducer = createReducer({
  [updateRecipeStart]: (state) => ({...state, running: true}),
  [updateRecipeSuccess]: (state) => ({...state, running:false, success:true}),
  [updateRecipeFailure]: (state) => ({...state, running:false, success:false})
}, {
  running: false,
  success: false
});

const deleteReducer = createReducer({
  [deleteRecipeStart]: (state) => ({...state, running: true}),
  [deleteRecipeSuccess]: (state) => ({...state, running:false, success:true}),
  [deleteRecipeFailure]: (state) => ({...state, running:false, success:false})
}, {
  running: false,
  success: false
});

const getReducer = createReducer({
  [getRecipesStart]: (state) => ({...state, running: true}),
  [getRecipesSuccess]: (state,payload) => ({...state, recipes: payload, running:false, success:true}),
  [getRecipesFailure]: (state) => ({...state, running:false, success:false})
}, {
  recipes: [],
  running: false,
  success: false
});
const toggleNew = createReducer({
  [toggleNewRecipe]: (state) => ({...state, isVisible: !state.isVisible})
},{
  isVisible: false
})

export default combineReducers({
  add: addReducer,
  update: updateReducer,
  delete: deleteReducer,
  get: getReducer,
  toggleNew
})

import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import {
  updateSearchText,
  updateSearchFilters,
  clearSearchFilters
} from './actions';

const initialState = {
  text: '',
  filters: {}
}

// Reducers
const searchMap = createReducer({
  [updateSearchText]: (state,payload) => ({...state, text: payload}),
  [updateSearchFilters]: (state,payload) => ({...state, filters: payload}),
  [clearSearchFilters]: (state) => ({...initialState})
}, initialState );


export default searchMap

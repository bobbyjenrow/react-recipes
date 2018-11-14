import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import {recipesReducer} from './recipes';
import {searchReducer} from './search'

const rootReducer = combineReducers({
  recipes: recipesReducer,
  search: searchReducer
})

export default function configureStore(initialState = {}){
  return createStore(
    rootReducer,
    applyMiddleware(thunk,logger)
  )
}

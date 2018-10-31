import {
  FETCH_RECIPES_BEGIN,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
  CREATE_RECIPE_BEGIN,
  CREATE_RECIPE_SUCCESS,
  CREATE_RECIPE_FAILURE,
  DELETE_RECIPE_BEGIN,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAILURE,
  UPDATE_RECIPE_BEGIN,
  UPDATE_RECIPE_SUCCESS,
  UPDATE_RECIPE_FAILURE,
  TOGGLE_NEW_RECIPE
} from '../types'
import { recipes } from '../../mocks/store';
import { combineReducers }from 'redux'

const initialState = {
  items: [],
  isNewRecipeVisible: false,
  isFetching: false,
  didFetchFail: false,
  isDeleting: false,
  didDeleteFail: false,
  isUpdating: false,
  didUpdateFail: false,
  isCreating: false,
  didCreateFail: false,
}

export default (state = initialState, action)=>{
  switch(action.type){
    case TOGGLE_NEW_RECIPE:
      return {
        ...state,
        isNewRecipeVisible: !state.isNewRecipeVisible
      }
    case FETCH_RECIPES_BEGIN:
      return {
        ...state,
        isFetching: true,
        didFetchFail: false
      }
    case FETCH_RECIPES_SUCCESS:
    // console.log(`Recipes (Recipe Reducer): ${JSON.stringify(state)}`)
      return {
        ...state,
        isFetching: false,
        items: action.payload
    }
    case FETCH_RECIPES_FAILURE:
      return {
        ...state,
        isFetching: false,
        didFetchFail: true
    }
    case CREATE_RECIPE_BEGIN  :
      return {
        ...state,
        isCreating: true,
        didCreateFail: false,
      }
    case CREATE_RECIPE_SUCCESS:
      return {
        ...state,
        isCreating: false,
        didCreateFail: false,
      }
    case CREATE_RECIPE_FAILURE:
      return {
        ...state,
        isCreating: false,
        didCreateFail: true,
      }
    case UPDATE_RECIPE_BEGIN  :
      return {
        ...state,
        isUpdating: true,
        didUpdateFail: false,
      }
    case UPDATE_RECIPE_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        didUpdateFail: false,
      }
    case UPDATE_RECIPE_FAILURE:
      return {
        ...state,
        isUpdating: false,
        didUpdateFail: true,
      }
    case DELETE_RECIPE_BEGIN  :
      return {
        ...state,
        isDeleting: true,
        didDeleteFail: false,
      }
    case DELETE_RECIPE_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        didDeleteFail: false,
      }
    case DELETE_RECIPE_FAILURE:
      return {
        ...state,
        isDeleting: false,
        didDeleteFail: true,
      }
    default:
      return state
  }
}

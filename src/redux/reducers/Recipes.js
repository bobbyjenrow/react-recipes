import {CREATE_RECIPE,DELETE_RECIPE,UPDATE_RECIPE,FETCH_RECIPES_SUCCESS,FETCH_RECIPES_BEGIN,FETCH_RECIPES_FAILURE} from '../types'
import { recipes } from '../../mocks/store';

const initialState = {
  items: recipes,
  loading: false,
  error: null
}

export default (state = initialState, action)=>{
  switch(action.type){
    case FETCH_RECIPES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.recipes
    }
    case FETCH_RECIPES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
    }
    default:
      return state
  }
}

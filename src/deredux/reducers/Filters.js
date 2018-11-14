import { SET_SEARCH_FILTER } from '../types'

const initialState = {
  searchFilter: ''
}

export default (state = initialState, action)=>{
  switch(action.type){
    case SET_SEARCH_FILTER:
    console.log(action);
      return {
        ...state,
        searchFilter: action.payload
      };
    default:
      return state
  }
}

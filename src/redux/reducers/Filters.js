import { UPDATE_SEARCH_FILTER } from '../types'

const initialState = {
  search: ''
}

export default (state = initialState, action)=>{
  switch(action.type){
    case UPDATE_SEARCH_FILTER:
    console.log(action);
      return {
        ...state,
        search: action.payload
      };
    default:
      return state
  }
}

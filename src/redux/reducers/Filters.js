import { UPDATE_FILTER } from '../types'

export default (state = {}, action)=>{
  switch(action.type){
    case UPDATE_FILTER:
      return Object.assign({}, state, action.payload);
    default:
      return state
  }
}

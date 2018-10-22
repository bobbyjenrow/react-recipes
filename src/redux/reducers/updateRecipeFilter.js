
export default (state = {}, action)=>{
  switch(action.type){
    case 'UPDATE_RECIPE_SEARCH_FILTER':
      return Object.assign({}, state, {search: action.payload});
    case 'UPDATE_RECIPE_TAG_FILTER':
      return Object.assign({}, state, {tags: action.payload})
    default:
      return state
  }
}

let data = require('../../mocks/recipes.json').recipes;


export default (state = {}, action)=>{
  switch(action.type){
    case 'FETCH_RECIPES':
      return Object.assign({}, state, {recipes: data});
    default:
      return state
  }
}

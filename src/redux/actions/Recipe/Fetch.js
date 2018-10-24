import {FETCH_RECIPES_BEGIN,FETCH_RECIPES_SUCCESS,FETCH_RECIPES_FAILURE} from '../../types'
import endpoints from '../../../endpoints'

export const fetchRecipes = ()=> dispatch =>{
  dispatch(fetchRecipesBegin());
  // return fetch(endpoints.recipes.getAll())
  //         .then(handleErrors)
  //         .then(res => res.json())
  //         .then(json => {
  //           dispatch(fetchRecipesSuccess(json.recipes));
  //           return json.recipes;
  //         })
  //         .catch(error => dispatch(fetchRecipesFailure(error)))
          return endpoints.recipes.getAllMock()
}
export const fetchRecipesBegin = () =>({
  type: FETCH_RECIPES_BEGIN
})
export const fetchRecipesSuccess = (recipes) =>({
  type: FETCH_RECIPES_SUCCESS,
  payload: { recipes }
})
export const fetchRecipesFailure = (error) =>({
  type: FETCH_RECIPES_FAILURE,
  payload: { error }
})

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

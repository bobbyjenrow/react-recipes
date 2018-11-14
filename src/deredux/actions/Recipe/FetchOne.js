import {
  FETCH_RECIPE_BEGIN,
  FETCH_RECIPE_SUCCESS,
  FETCH_RECIPE_FAILURE} from '../../types'
import endpoints from '../../../endpoints'

export default const fetchRecipe = ()=> dispatch =>{
  dispatch(fetchRecipeBegin());
  // return fetch(endpoints.recipe.getAll())
  //         .then(handleErrors)
  //         .then(res => res.json())
  //         .then(json => {
  //           dispatch(fetchRecipeSuccess(json.recipe));
  //           return json.recipe;
  //         })
  //         .catch(error => dispatch(fetchRecipeFailure(error)))
          return endpoints.recipe.getAllMock()
}
export const fetchRecipeBegin = (id) =>({
  type: FETCH_RECIPE_BEGIN,
  payload: id
})
export const fetchRecipeSuccess = (recipe) =>({
  type: FETCH_RECIPE_SUCCESS,
  payload: { recipe }
})
export const fetchRecipeFailure = (error) =>({
  type: FETCH_RECIPE_FAILURE,
  payload: { error }
})

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

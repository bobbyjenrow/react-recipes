import {
  FETCH_RECIPES_BEGIN,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE} from '../../types'
import { recipes } from '../../../api-controllers'

export default const fetchRecipes = ()=> dispatch =>{
    dispatch(fetchRecipesBegin())
    return recipes.fetchAll()
      .then(response => response.json())
      .then(json =>
        {  console.log(json)
          return dispatch(fetchRecipesSuccess(json))})
      .catch(error => fetchRecipesFailure(error))
}
export const fetchRecipesBegin = () =>({
  type: FETCH_RECIPES_BEGIN
})
export const fetchRecipesSuccess = (recipes) =>({
  type: FETCH_RECIPES_SUCCESS,
  payload: recipes
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

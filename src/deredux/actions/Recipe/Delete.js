import {
  DELETE_RECIPE_BEGIN,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAILURE} from '../../types'
import {recipes} from '../../../api-controllers'

export default const deleteRecipe = (id)=> dispatch =>{
  dispatch(deleteRecipeBegin(id));
  return delete(recipes.delete(id))
          .then(handleErrors)
          .then(res => res.json())
          .then(json => {
            dispatch(deleteRecipeSuccess(json.recipe));
            return json.recipe;
          })
          .catch(error => dispatch(deleteRecipeFailure(error)))
}
export const deleteRecipeBegin = (id) =>({
  type: DELETE_RECIPE_BEGIN,
  payload: id
})
export const deleteRecipeSuccess = (recipe) =>({
  type: DELETE_RECIPE_SUCCESS,
  payload: `${recipe.name} successfully deleted`
})
export const deleteRecipeFailure = (error) =>({
  type: DELETE_RECIPE_FAILURE,
  payload: `There was a problem deleting the recipe`
})

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

import {DELETE_RECIPE_BEGIN,DELETE_RECIPE_SUCCESS,DELETE_RECIPE_FAILURE} from '../../types'

export const deleteRecipe = ()=> dispatch =>{
  dispatch(deleteRecipeBegin());
  // return delete(endpoints.recipe.getAll())
  //         .then(handleErrors)
  //         .then(res => res.json())
  //         .then(json => {
  //           dispatch(deleteRecipeSuccess(json.recipe));
  //           return json.recipe;
  //         })
  //         .catch(error => dispatch(deleteRecipeFailure(error)))
}
export const deleteRecipeBegin = () =>({
  type: DELETE_RECIPE_BEGIN
})
export const deleteRecipeSuccess = (recipe) =>({
  type: DELETE_RECIPE_SUCCESS,
  payload: { recipe }
})
export const deleteRecipeFailure = (error) =>({
  type: DELETE_RECIPE_FAILURE,
  payload: { error }
})

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

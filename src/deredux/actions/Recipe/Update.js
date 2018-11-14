import {
  UPDATE_RECIPE_BEGIN,
  UPDATE_RECIPE_SUCCESS,
  UPDATE_RECIPE_FAILURE} from '../../types'

export default const updateRecipe = ()=> dispatch =>{
  dispatch(updateRecipeBegin());
  // return update(endpoints.recipes.getAll())
  //         .then(handleErrors)
  //         .then(res => res.json())
  //         .then(json => {
  //           dispatch(updateRecipeSuccess(json.recipes));
  //           return json.recipes;
  //         })
  //         .catch(error => dispatch(updateRecipeFailure(error)))
}
export const updateRecipeBegin = (id) =>({
  type: UPDATE_RECIPE_BEGIN,
  payload: id
})
export const updateRecipeSuccess = (recipe) =>({
  type: UPDATE_RECIPE_SUCCESS,
  payload: { recipe }
})
export const updateRecipeFailure = (error) =>({
  type: UPDATE_RECIPE_FAILURE,
  payload: { error }
})

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

import {CREATE_RECIPE_BEGIN,CREATE_RECIPE_SUCCESS,CREATE_RECIPE_FAILURE} from '../../types'


export const createRecipe = ()=> dispatch =>{
  dispatch(createRecipeBegin());
  // return create(endpoints.recipe.getAll())
  //         .then(handleErrors)
  //         .then(res => res.json())
  //         .then(json => {
  //           dispatch(createRecipeSuccess(json.recipe));
  //           return json.recipe;
  //         })
  //         .catch(error => dispatch(createRecipeFailure(error)))

}
export const createRecipeBegin = () =>({
  type: CREATE_RECIPE_BEGIN
})
export const createRecipeSuccess = (recipe) =>({
  type: CREATE_RECIPE_SUCCESS,
  payload: { recipe }
})
export const createRecipeFailure = (error) =>({
  type: CREATE_RECIPE_FAILURE,
  payload: { error }
})

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

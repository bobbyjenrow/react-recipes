import {recipes} from '../../api-controllers'
import {
  addRecipeStart,
  addRecipeSuccess,
  addRecipeFailure,
  updateRecipeStart,
  updateRecipeSuccess,
  updateRecipeFailure,
  deleteRecipeStart,
  deleteRecipeSuccess,
  deleteRecipeFailure,
  getRecipesStart,
  getRecipesSuccess,
  getRecipesFailure,
  toggleNewRecipe as toggle
} from './actions';

// ADD
export const addRecipe = (recipe)=> dispatch =>{
  dispatch(addRecipeStart(recipe));
  console.log(recipe)
  return recipes.create(recipe)
          .then(res => res.json())
          .then(json => {
            console.log(json)
            dispatch(addRecipeSuccess(json));
            return json;
          })
          .catch(error => dispatch(addRecipeFailure(error)))
}
// DELETE
export const deleteRecipe = (id)=> (dispatch) =>{
  dispatch(deleteRecipeStart(id))
  return recipes.delete(id)
          .then(res => res.json())
          .then(json => {
            dispatch(deleteRecipeSuccess(json.recipe));
            return json.recipe;
          })
          .catch(error => dispatch(deleteRecipeFailure(error)))
}
// GET ALL
export const getRecipes = ()=> (dispatch) =>{
    dispatch(getRecipesStart())
    console.log('started')
    return recipes.getAll()
      .then(response => response.json())
      .then(json =>
        { console.log(json)
          return dispatch(getRecipesSuccess(json))})
      .catch(error => getRecipesFailure(error))
}

// TOGGLE NEW
export const toggleNewRecipe = () => (dispatch) => {
        dispatch(toggle())
}

// UPDATE
export  const updateRecipe = ()=> dispatch =>{
  dispatch(updateRecipeStart())
  // return update(endpoints.recipes.getAll())
  //         .then(handleErrors)
  //         .then(res => res.json())
  //         .then(json => {
  //           dispatch(updateRecipeSuccess(json.recipes));
  //           return json.recipes;
  //         })
  //         .catch(error => dispatch(updateRecipeFailure(error)))
}

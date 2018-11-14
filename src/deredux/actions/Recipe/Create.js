import {
  CREATE_RECIPE_BEGIN,
  CREATE_RECIPE_SUCCESS,
  CREATE_RECIPE_FAILURE} from '../../types'
  import {recipes} from '../../../api-controllers'
  import { fetchRecipes } from './FetchAll';

export default const createRecipe = (recipe)=> dispatch =>{
  dispatch(createRecipeBegin(recipe));
  return recipes.create(recipe)
          .then(res => res.json())
          .then(json => {
            dispatch(createRecipeSuccess(json));
            return json;
          })
          .catch(error => dispatch(createRecipeFailure(error)))

}
export const createRecipeBegin = (recipe) =>({
  type: CREATE_RECIPE_BEGIN,
  payload: recipe
})
export const createRecipeSuccess = (recipe) =>({
  type: CREATE_RECIPE_SUCCESS,
  payload: recipe,
  message: `${recipe.name} created successfully!`
})
export const createRecipeFailure = () =>({
  type: CREATE_RECIPE_FAILURE,
  payload: 'Something went wrong creating the recipe'
})

function handleErrors(response) {
  if (!response.ok) {
    return (dispatch) => dispatch(createRecipeFailure())
  }
  return response;
}


export const updateRecipeSearchFilter = (tags) => dispatch => {
 dispatch({
  type: 'UPDATE_RECIPE_TAG_FILTER',
  payload: [...tags]
 })
}

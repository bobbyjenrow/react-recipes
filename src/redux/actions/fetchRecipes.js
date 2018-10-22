
export const fetchRecipes = (recipes) => dispatch => {
 dispatch({
  type: 'FETCH_RECIPES',
  payload: [...recipes]
 })
}

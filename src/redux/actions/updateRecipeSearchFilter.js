
export default (input) => dispatch => {
 dispatch({
  type: 'UPDATE_RECIPE_SEARCH_FILTER',
  payload: input
})}

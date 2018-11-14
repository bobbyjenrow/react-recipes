import {SET_SEARCH_FILTER} from '../../types'

export default const setSearchFilter = (searchFilter) => dispatch => {
  dispatch(setSearchAction(searchFilter))
}

const setSearchAction = (filter) => ({
  type: SET_SEARCH_FILTER,
  payload: filter
})

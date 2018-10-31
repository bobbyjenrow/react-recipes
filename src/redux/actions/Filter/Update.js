import {UPDATE_SEARCH_FILTER} from '../../types'

export const updateSearchFilter = (searchFilter) => dispatch => {
  dispatch(updateSearchAction(searchFilter))
}

export const updateSearchAction = (filter) => ({
  type: UPDATE_SEARCH_FILTER,
  payload: filter
})

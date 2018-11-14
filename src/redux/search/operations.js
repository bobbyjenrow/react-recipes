import {
  updateSearchText,
  updateSearchFilters,
  clearSearchFilters,
} from './actions';

export const updateFilter = (text) => (dispatch) =>(
            dispatch(updateSearchText(text))
)

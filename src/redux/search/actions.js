import { createAction } from 'redux-act';

// Action Creators
export const updateSearchText = createAction('UPDATE_SEARCH_TEXT');
export const updateSearchFilters = createAction('UPDATE_SEARCH_FILTERS');
export const clearSearchFilters = createAction('CLEAR_SEARCH_FILTERS')

import { createAction } from 'redux-act';

// Action Creators
export const addRecipeStart = createAction('ADD_RECIPE_START');
export const addRecipeSuccess = createAction('ADD_RECIPE_SUCCESS');
export const addRecipeFailure = createAction('ADD_RECIPE_FAILURE');

export const updateRecipeStart = createAction('UPDATE_RECIPE_START');
export const updateRecipeSuccess = createAction('UPDATE_RECIPE_SUCCESS');
export const updateRecipeFailure = createAction('UPDATE_RECIPE_FAILURE');

export const deleteRecipeStart = createAction('DELETE_RECIPE_START');
export const deleteRecipeSuccess = createAction('DELETE_RECIPE_SUCCESS');
export const deleteRecipeFailure = createAction('DELETE_RECIPE_FAILURE');

export const getRecipesStart = createAction('GET_RECIPES_START');
export const getRecipesSuccess = createAction('GET_RECIPES_SUCCESS');
export const getRecipesFailure = createAction('GET_RECIPES_FAILURE');

export const toggleNewRecipe = createAction('TOGGLE_NEW_RECIPE');

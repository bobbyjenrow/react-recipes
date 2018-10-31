import {TOGGLE_NEW_RECIPE} from '../../types'

export const toggleNewRecipe = () => dispatch => {
        dispatch(toggle())
}

const toggle = () => ({type: TOGGLE_NEW_RECIPE})

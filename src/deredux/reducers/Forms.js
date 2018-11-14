import { CREATE_RECIPE_SUCCESS } from '../types.js'

export default {
  account: (state, action) => { // <------ 'account' is name of form given to reduxForm()
      switch(action.type) {
        case CREATE_RECIPE_SUCCESS:
          return undefined;       // <--- blow away form data
        default:
          return state;
      }
    }
}

import {DELETE_TAG_BEGIN,DELETE_TAG_SUCCESS,DELETE_TAG_FAILURE} from '../../types'

export const deleteTag = ()=> dispatch =>{
  dispatch(deleteTagBegin());
  // return delete(endpoints.tag.getAll())
  //         .then(handleErrors)
  //         .then(res => res.json())
  //         .then(json => {
  //           dispatch(deleteTagSuccess(json.tag));
  //           return json.tag;
  //         })
  //         .catch(error => dispatch(deleteTagFailure(error)))
}
export const deleteTagBegin = () =>({
  type: DELETE_TAG_BEGIN
})
export const deleteTagSuccess = (tag) =>({
  type: DELETE_TAG_SUCCESS,
  payload: { tag }
})
export const deleteTagFailure = (error) =>({
  type: DELETE_TAG_FAILURE,
  payload: { error }
})

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

import {UPDATE_TAG_BEGIN,UPDATE_TAG_SUCCESS,UPDATE_TAG_FAILURE} from '../../types'

export const updateTag = ()=> dispatch =>{
  dispatch(updateTagBegin());
  // return update(endpoints.tag.getAll())
  //         .then(handleErrors)
  //         .then(res => res.json())
  //         .then(json => {
  //           dispatch(updateTagSuccess(json.tag));
  //           return json.tag;
  //         })
  //         .catch(error => dispatch(updateTagFailure(error)))
}
export const updateTagBegin = () =>({
  type: UPDATE_TAG_BEGIN
})
export const updateTagSuccess = (tag) =>({
  type: UPDATE_TAG_SUCCESS,
  payload: { tag }
})
export const updateTagFailure = (error) =>({
  type: UPDATE_TAG_FAILURE,
  payload: { error }
})

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

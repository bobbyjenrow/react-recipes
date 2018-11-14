import {CREATE_TAG_BEGIN,CREATE_TAG_SUCCESS,CREATE_TAG_FAILURE} from '../../types'

export const createTag = ()=> dispatch =>{
  dispatch(createTagBegin());
  // return create(endpoints.tag.getAll())
  //         .then(handleErrors)
  //         .then(res => res.json())
  //         .then(json => {
  //           dispatch(createTagSuccess(json.tag));
  //           return json.tag;
  //         })
  //         .catch(error => dispatch(createTagFailure(error)))
}
export const createTagBegin = () =>({
  type: CREATE_TAG_BEGIN
})
export const createTagSuccess = (tag) =>({
  type: CREATE_TAG_SUCCESS,
  payload: { tag }
})
export const createTagFailure = (error) =>({
  type: CREATE_TAG_FAILURE,
  payload: { error }
})

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

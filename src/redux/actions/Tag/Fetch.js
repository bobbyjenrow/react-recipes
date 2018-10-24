import {FETCH_TAGS_BEGIN,FETCH_TAGS_SUCCESS,FETCH_TAGS_FAILURE} from '../../types'
import endpoints from '../../../endpoints'

export const fetchTags = ()=> dispatch =>{
  dispatch(fetchTagsBegin());
  // return fetch(endpoints.tags.getAll())
  //         .then(handleErrors)
  //         .then(res => res.json())
  //         .then(json => {
  //           dispatch(fetchTagsSuccess(json.tags));
  //           return json.tags;
  //         })
  //         .catch(error => dispatch(fetchTagsFailure(error)))
}
export const fetchTagsBegin = () =>({
  type: FETCH_TAGS_BEGIN
})
export const fetchTagsSuccess = (tags) =>({
  type: FETCH_TAGS_SUCCESS,
  payload: { tags }
})
export const fetchTagsFailure = (error) =>({
  type: FETCH_TAGS_FAILURE,
  payload: { error }
})

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

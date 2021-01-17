import axios from '../../axios.config';
import * as actionTypes from './actionTypes';

export const setFeed = (data) => ({
  type: actionTypes.SET_FEED,
  payload: data,
});

export const fetchFeed = (tagId) => (dispatch) => {
  console.log(tagId);
  return axios
    .get(`/posts/${tagId}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.warn(err));
};

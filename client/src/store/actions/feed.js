import axios from '../../axios.config';
import * as actionTypes from './actionTypes';

export const setFeed = (data) => ({
  type: actionTypes.SET_FEED,
  payload: data,
});

export const setLoading = (toggle) => ({
  type: actionTypes.SET_LOADING,
  payload: toggle,
});

export const fetchFeed = (tagId) => (dispatch) => {
  dispatch(setLoading(true));
  return axios
    .get(`/posts/${tagId}/`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
    .then((res) => {
      setTimeout(() => {
        dispatch(setLoading(false));
        dispatch(setFeed(res.data));
      }, 1000);
    })
    .catch((err) => {
      dispatch(setLoading(false));
      console.warn(err);
    });
};

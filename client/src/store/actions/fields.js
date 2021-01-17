import axios from '../../axios.config';
import * as actionTypes from './actionTypes';

export const setFields = (data) => ({
  type: actionTypes.SET_FIELDS,
  payload: data,
});

export const fetchFields = () => (dispatch) => {
  return axios
    .get(`/fields`)
    .then((res) => {
      dispatch(setFields(res.data.fields));
    })
    .catch((err) => {
      console.warn(err);
    });
};

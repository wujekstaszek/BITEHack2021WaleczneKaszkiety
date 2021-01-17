import * as actionTypes from './actionTypes';

export const SET_USER = (data) => ({
  type: actionTypes.SET_USER,
  payload: data,
});

export const loginUser = (username) => (dispatch) => {
  dispatch(SET_USER(username));
  return Promise.resolve();
};

export const logoutUser = () => (dispatch) => {
  dispatch(SET_USER(''));
};

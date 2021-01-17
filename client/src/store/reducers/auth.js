import * as actionTypes from '../actions/actionTypes';

const initialState = {
  username: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { username: action.payload };
    default:
      return state;
  }
};

export default reducer;

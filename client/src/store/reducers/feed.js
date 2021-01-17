import * as actionTypes from '../actions/actionTypes';

const initialState = {
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FEED:
      return { posts: action.payload };
    default:
      return state;
  }
};

export default reducer;

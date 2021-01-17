import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FEED:
      return { posts: action.payload };
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default reducer;

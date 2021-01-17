import * as actionTypes from '../actions/actionTypes';
import { translateParams } from '../../utils/object';

const initialState = {
  fields: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FIELDS:
      const translatedResponse = action.payload
        ? action.payload.reduce(
            (acc, curr) => [...acc, { ...translateParams(curr) }],
            []
          )
        : [];
      return { fields: translatedResponse };
    default:
      return state;
  }
};

export default reducer;

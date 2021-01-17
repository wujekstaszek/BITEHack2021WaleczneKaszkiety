import { combineReducers } from 'redux';
import feedReducer from './feed';
import fieldsReducer from './fields';

export default combineReducers({
  feed: feedReducer,
  fields: fieldsReducer,
});

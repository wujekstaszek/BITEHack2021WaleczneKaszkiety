import { combineReducers } from 'redux';
import feedReducer from './feed';
import fieldsReducer from './fields';
import authReducer from './auth';

export default combineReducers({
  feed: feedReducer,
  fields: fieldsReducer,
  auth: authReducer,
});

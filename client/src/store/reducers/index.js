import { combineReducers } from 'redux';
import feedReducer from './feed';

export default combineReducers({
    feed: feedReducer
})
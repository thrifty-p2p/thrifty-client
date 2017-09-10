import { combineReducers } from 'redux';

import AuthReducer from './Reducer_Auth';

export default combineReducers({
  auth: AuthReducer
});

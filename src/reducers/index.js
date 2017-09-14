import { combineReducers } from 'redux';

import AuthReducer from './auth.reducer';
import ProductReducer from './product.reducer';

export default combineReducers({
  auth: AuthReducer,
  products: ProductReducer
});

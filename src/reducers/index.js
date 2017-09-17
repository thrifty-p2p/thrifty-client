import { combineReducers } from 'redux';

import AuthReducer from './auth.reducer';
import ProductReducer from './product.reducer';
import ProductByIdReducer from './productById.reducer';
import ProductsByCategoryReducer from './productsByCategory.reducer';
import NewProductReducer from './productNew.reducer';

export default combineReducers({
  auth: AuthReducer,
  products: ProductReducer,
  productById: ProductByIdReducer,
  productsByCategory: ProductsByCategoryReducer,
  newProduct: NewProductReducer
});

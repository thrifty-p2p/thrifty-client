import * as product from '../actions/action.types';

const INITIAL_STATE = {
  isLoading: false,
  error: '',
  products: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case product.FETCH_ALL_PRODUCTS_REQUEST:
      return {...state, isLoading: true}
    case product.FETCH_ALL_PRODUCTS_SUCCESS:
      console.log(action.payload);
      return {...state, products: action.payload, isLoading: false}
    case product.FETCH_ALL_PRODUCTS_SUCCESS:
      return {...state, isLoading: false, error: action.payload}
    default:
      return state;
  }
}

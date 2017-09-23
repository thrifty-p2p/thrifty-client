import * as product from '../actions/action.types';

const INITIAL_STATE = {
  isLoading: false,
  isReceived: false,
  error: '',
  products: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case product.FETCH_ALL_PRODUCTS_REQUEST:
      return {...state, isLoading: true, isReceived: false};

    case product.FETCH_ALL_PRODUCTS_SUCCESS:
      return {...state, isLoading: false, products: action.payload};

    case product.FETCH_ALL_PRODUCTS_FAILURE:
      return {...state, isLoading: false, isReceived: false, error: action.payload};

    case product.ACCOUNT_LOGOUT:
      return INITIAL_STATE;

    default:
      return state;
  }
}

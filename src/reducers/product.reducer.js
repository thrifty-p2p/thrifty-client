import * as product from '../actions/action.types';

const INITIAL_STATE = {
  isLoading: false,
  isReceived: false,
  error: '',
  products: [],
  productById: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case product.FETCH_ALL_PRODUCTS_REQUEST:
      return {...state, isLoading: true, isReceived: false};

    case product.FETCH_ALL_PRODUCTS_SUCCESS:
      return {...state, products: action.payload, isLoading: false};

    case product.FETCH_ALL_PRODUCTS_SUCCESS:
      return {...state, isLoading: false, error: action.payload, isReceived: false};

    case product.FETCH_PRODUCT_BY_ID_REQUEST:
      return {...state, isLoading: true, isReceived: false};

    case product.FETCH_PRODUCT_BY_ID_SUCCESS:
      return {...state, isLoading: false, isReceived: true, productById: action.payload};

    case product.FETCH_PRODUCT_BY_ID_FAILURE:
      return {...state, isLoading: false, error: action.payload, isReceived: false};

    default:
      return state;
  }
}

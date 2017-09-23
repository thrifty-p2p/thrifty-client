import * as product from '../actions/action.types';

const INITIAL_STATE = {
  isLoading: false,
  isReceived: false,
  error: '',
  productsByCategory: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case product.FETCH_PRODUCT_BY_CATEGORY_REQUEST:
      return {...state, isLoading: true, isReceived: false};

    case product.FETCH_PRODUCT_BY_CATEGORY_SUCCESS:
      return {...state, isLoading: false, isReceived: true, productsByCategory: action.payload};

    case product.FETCH_PRODUCT_BY_CATEGORY_FAILURE:
      return {...state, isLoading: false, isReceived: false, error: action.payload};

    case product.ACCOUNT_LOGOUT:
      return INITIAL_STATE;

    default:
      return state;
  }
}

import * as product from '../actions/action.types';

const INITIAL_STATE = {
  isLoading: false,
  isReceived: false,
  productsByAccount: [],
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case product.FETCH_PRODUCTS_BY_ACCOUNT_REQUEST:
      return {
        ...state,
          isLoading: true,
          productsByAccount: []
        };

    case product.FETCH_PRODUCTS_BY_ACCOUNT_SUCCESS:
      return {
        ...state,
          isLoading: false, isReceived: true,
          productsByAccount: action.payload,
          error: ''
        };

    case product.FETCH_PRODUCTS_BY_ACCOUNT_FAILURE:
      return {
        ...state,
          isLoading: false, isReceived: false,
          error: action.payload
        };

    default:
      return state;
  }
};

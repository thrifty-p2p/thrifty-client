import * as product from '../actions/action.types';

const INITIAL_STATE = {
  isLoading: false,
  isOrderSuccessful: false,
  error: '',
  orderStatusCode: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case product.CREATE_PAYMENT_REQUEST:
      return {...state, isLoading: true, isOrderSuccessful: false};

    case product.CREATE_PAYMENT_SUCCESS:
      return {...state, isLoading: false, isOrderSuccessful: true, orderStatusCode: action.payload.status};

    case product.CREATE_PAYMENT_FAILURE:
      return {...state, isLoading: false, isOrderSuccessful: false, error: action.payload};

    default:
      return state;
  }
}

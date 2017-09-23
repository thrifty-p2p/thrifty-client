import * as checkout from '../actions/action.types';

const INITIAL_STATE = {
  isLoading: false,
  isOrderSuccessful: false,
  error: '',
  orderStatusCode: 0,
  transactionID: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case checkout.CREATE_PAYMENT_REQUEST:
      return {...state, isLoading: true, isOrderSuccessful: false};

    case checkout.CREATE_PAYMENT_SUCCESS:
      return {
        ...state,
          isLoading: false,
          isOrderSuccessful: true,
          orderStatusCode: action.payload.status,
          transactionID: action.transactionID
        };

    case checkout.CREATE_PAYMENT_FAILURE:
      return {...state, isLoading: false, isOrderSuccessful: false, error: action.payload};

    case checkout.ACCOUNT_LOGOUT:
      return INITIAL_STATE;

    default:
      return state;
  }
}

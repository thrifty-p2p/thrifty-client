import * as auth from '../actions/action.types';

const INITIAL_STATE = {
  isLoading: false,
  isLoggedIn: false,
  isReceived: false,
  error: '',
  first_name: '',
  last_name: '',
  username: '',
  email: '',
  password: '',
  address: '',
  city: '',
  st: '',
  zip: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case auth.ACCOUNT_FORM_UPDATE:
      return {
        ...state,
          [action.payload.property]: action.payload.value
        };

    case auth.ACCOUNT_LOGIN_REQUEST:
      return {
        ...state,
          isLoading: true
        };

    case auth.ACCOUNT_LOGIN_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
          isLoggedIn: action.isLoggedIn
        };

    case auth.ACCOUNT_LOGIN_FAILUE:
      return {
        ...state,
          error: action.payload,
          ...INITIAL_STATE
        };

    case auth.ACCOUNT_SIGNUP_REQUEST:
      return {
        ...state,
          isLoading: true
        };

    case auth.ACCOUNT_SIGNUP_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
          isLoggedIn: action.isLoggedIn
        };

    case auth.ACCOUNT_SIGNUP_FAILUE:
      return {
        ...state,
          error: action.payload,
          ...INITIAL_STATE
        };

    case auth.ACCOUNT_LOGOUT:
      return {
        ...state,
          isLoggedIn: action.isLoggedIn,
          ...INITIAL_STATE
        };

    default:
      return state;
  };
};

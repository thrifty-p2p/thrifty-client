import * as profile from '../actions/action.types';

const INITIAL_STATE = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    address: '',
    city: '',
    st: '',
    zip: '',
    isReceived: true,
    isLoading: false
  }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case profile.FETCH_ACCOUNT_BY_ID_REQUEST:
      return {
        ...state,
          isReceived: false,
          isLoading: true
        }

    case profile.FETCH_ACCOUNT_BY_ID_SUCCESS:
      return {
        ...state,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          username: action.payload.username,
          email: action.payload.email,
          address: action.payload.address,
          city: action.payload.city,
          st: action.payload.state,
          zip: action.payload.zip_code,
          isReceived: true,
          isLoading: false
        }

    case profile.FETCH_ACCOUNT_BY_ID_FAILUE:
      return {
        ...state,
          isReceived: false,
          isLoading: false,
          error: action.payload,
          ...INITIAL_STATE
        }
    default:
      return state;
  }
};

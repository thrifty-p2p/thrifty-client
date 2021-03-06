import Axios from 'axios';
import { AsyncStorage, AlertIOS } from 'react-native';
import * as auth from './action.types';

const AUTH_URL = 'https://thrifty-p2p.herokuapp.com/api/auth';
// const AUTH_URL = (__DEV__) ? 'http://localhost:5000/api/auth' : 'https://thrifty-p2p.herokuapp.com/api/auth';

export const updateAccountForm = ({property, value}) => {
  return {
    type: auth.ACCOUNT_FORM_UPDATE,
    payload: {
      property,
      value
    }
  };
};

export const createNewAccount = (user) => {
  return dispatch => {
      dispatch({type: auth.ACCOUNT_SIGNUP_REQUEST});
    Axios.post(`${AUTH_URL}/signup`, user)
    .then(response => {
      dispatch({type: auth.ACCOUNT_SIGNUP_SUCCESS, payload: response.data, isLoggedIn: true});
      setAsyncStorage(response);
    }).catch(error => {
      AlertIOS.alert(error.response.data.message);
      dispatch({type: auth.ACCOUNT_SIGNUP_FAILUE, payload: error.response});
    });
  };
};

export const loginAccount = (credentials) => {
  return dispatch => {
      dispatch({type: auth.ACCOUNT_LOGIN_REQUEST});
    Axios.post(`${AUTH_URL}/login`, credentials)
    .then(response => {
      dispatch({type: auth.ACCOUNT_LOGIN_SUCCESS, payload: response.data, isLoggedIn: true});
      setAsyncStorage(response);
    }).catch(error => {
      AlertIOS.alert(error.response.data.message);
      dispatch({type: auth.ACCOUNT_LOGIN_FAILUE, payload: error.response});
    });
  };
};

export const logoutAccount = () => {
  return dispatch => {
    return accountLogout()
    .then(response => {
      dispatch({type: auth.ACCOUNT_LOGOUT, isLoggedIn: false})
    }). catch(error => {
      throw new Error();
    });
  }
};

const accountLogout = async () => {
  try {
    await AsyncStorage.multiRemove(['token', 'userID']);
    AlertIOS.alert('Logout Success!')
  } catch (error) {
    throw new Error();
  }
};


const setAsyncStorage = response => {
  const {token, id} = response.data;
  console.log(token, id);
  AsyncStorage.multiSet([
    ['token', token.toString()],
    ['userID', id.toString()]
  ]);
  setAuthorizationToken(token);
};

const setAuthorizationToken = token => {
  if (token) {
    Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete Axios.defaults.headers.common['Authorization'];
  };
};

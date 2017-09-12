import Axios from 'axios';
import { AsyncStorage } from 'react-native';
import * as auth from './action.types';

const AUTH_URL = 'http://localhost:5000/api/auth';
// 'https://thrifty-p2p.herokuapp.com/api/auth';

export const updateAccountForm = ({property, value}) => {
  return {
    type: auth.ACCOUNT_FORM_UPDATE,
    payload: {
      property,
      value
    }
  };
};

export const createNewAccount = user => {
  return dispatch => {
      dispatch({type: auth.ACCOUNT_SIGNUP_REQUEST});
    Axios.post(`${AUTH_URL}/signup`, user)
    .then(response => {
      dispatch({type: auth.ACCOUNT_SIGNUP_SUCCESS, payload: response.data});
      setAsyncStorage(response);
    }).catch(error => {
      dispatch({type: auth.ACCOUNT_SIGNUP_FAILUE, payload: error.response.data});
    });
  };
};

export const loginAccount = credentials => {
  return dispatch => {
      dispatch({type: auth.ACCOUNT_LOGIN_REQUEST});
    Axios.post(`${AUTH_URL}/login`, credentials)
    .then(response => {
      dispatch({type: auth.ACCOUNT_LOGIN_SUCCESS, payload: response.data});
      setAsyncStorage(response);
    }).catch(error => {
      dispatch({type: auth.ACCOUNT_LOGIN_FAILUE, payload: error.response.data});
    });
  };
};

const setAsyncStorage = response => {
  const {token, id} = response.data;
  AsyncStorage.multiSet([
    ['token', token],
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

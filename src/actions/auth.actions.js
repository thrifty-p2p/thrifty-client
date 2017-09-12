import axios from 'axios';
import { AsyncStorage } from 'react-native';
import * as auth from './action.types';

const AUTH_URL = __DEV__ ? 'https://localhost:5000/api/auth' : 'https://thrifty-p2p.herokuapp.com/api/auth';

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
    return axios.post(`${AUTH_URL}/signup`, user)
    .then(response => {
      dispatch({type: auth.ACCOUNT_SIGNUP_SUCCESS});
      setAsyncStorage(response);
    }).catch(error => {
      dispatch({type: auth.ACCOUNT_SIGNUP_FAILUE, payload: error});
    });
  };
};

export const loginExistingAccount = credentials => {
  return dispatch => {
      dispatch({type: auth.ACCOUNT_LOGIN_REQUEST});
    return axios.post(`${AUTH_URL}/login`, credentials)
    .then(response => {
      dispatch({type: auth.ACCOUNT_LOGIN_SUCCESS});
      setAsyncStorage(response);
    }).catch(error => {
      dispatch({type: auth.ACCOUNT_LOGIN_FAILUE, payload: error});
    });
  };
};

const setAsyncStorage = response => {
  const token = response.data.token;
  const id = response.data.id;
  AsyncStorage.setItem('Token', token);
  AsyncStorage.setItem('UserID', id);
  setAuthorizationToken(token);
};


const setAuthorizationToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  };
};

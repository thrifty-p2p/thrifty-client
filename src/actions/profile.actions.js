import Axios from 'axios';
import * as profile from './action.types';

// const API_URL = 'https://thrifty-p2p.herokuapp.com/api';
const API_URL = (__DEV__) ? 'http://localhost:5000/api' : 'https://thrifty-p2p.herokuapp.com/api';

export const fetchAccountByID = (UID) => {
  return dispatch => {
    dispatch({type: profile.FETCH_ACCOUNT_BY_ID_REQUEST});
    Axios.get(`${API_URL}/account/profile/${UID}`)
    .then(response => {
      dispatch({type: profile.FETCH_ACCOUNT_BY_ID_SUCCESS, payload: response.data[0]});
    }).catch(error => {
      dispatch({type: profile.FETCH_ACCOUNT_BY_ID_FAILUE, payload: error.response});
    });
  };
};

export const updateProfileForm = ({property, value}) => {
  return {
    type: profile.PROFILE_FORM_UPDATE,
    payload: {
      property,
      value
    }
  };
};

import Axios from 'axios';
import * as checkout from './action.types';

const API_URL = (__DEV__) ? 'http://localhost:5000/api' : 'https://thrifty-p2p.herokuapp.com/api';

export const paymentRequest = (orderDetails) => {
  return dispatch => {
    dispatch({type: checkout.CREATE_PAYMENT_REQUEST});
    Axios.post(`${API_URL}/payment`, orderDetails, {headers: {"Content-Type": "application/json"}})
    .then(response => {
      dispatch({type: checkout.CREATE_PAYMENT_SUCCESS, payload: response});
    }).catch(error => {
      dispatch({type: checkout.CREATE_PAYMENT_FAILURE, payload: error.response});
    });
  };
};

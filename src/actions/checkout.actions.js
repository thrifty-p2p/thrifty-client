import Axios from 'axios';
import {AsyncStorage} from 'react-native';
import * as checkout from './action.types';

const API_URL = (__DEV__) ? 'http://localhost:5000/api' : 'https://thrifty-p2p.herokuapp.com/api';

export const paymentRequest = (orderDetails, product) => {
  return dispatch => {
    dispatch({type: checkout.CREATE_PAYMENT_REQUEST});
    Axios.post(`${API_URL}/payment`, orderDetails, {headers: {"Content-Type": "application/json"}})
    .then(response => {
      dispatch({type: checkout.CREATE_PAYMENT_SUCCESS, payload: response});
        updateProductStatus(product.id);
    }).catch(error => {
      dispatch({type: checkout.CREATE_PAYMENT_FAILURE, payload: error});
    });
  };
};




async function updateProductStatus (productId) {
  const UID = await AsyncStorage.getItem('userID').then(UID => UID).catch(error => console.log(error));
  Axios.patch(`${API_URL}/product/${productId}`)
  .then(response => {
    const productId = response.data[0].id
    createOrder(parseInt(UID, 10), productId);
  }).catch(error => {
    console.log(error);
  });
};

const createOrder = (UID, productId) => {
  console.log('User: ', UID);
  console.log('Product ID: ', productId);
};

import Axios from 'axios';
import {AsyncStorage} from 'react-native';
import * as checkout from './action.types';

const API_URL = 'https://thrifty-p2p.herokuapp.com/api';
// const API_URL = (__DEV__) ? 'http://localhost:5000/api' : 'https://thrifty-p2p.herokuapp.com/api';

export const paymentRequest = (orderDetails, product) => {
  return dispatch => {
    dispatch({type: checkout.CREATE_PAYMENT_REQUEST});
    Axios.post(`${API_URL}/payment`, orderDetails, {headers: {"Content-Type": "application/json"}})
    .then(response => {
      const transaction_id = `THRIFTY${Date.now()}`;
      dispatch({type: checkout.CREATE_PAYMENT_SUCCESS, payload: response, transactionID: transaction_id});
        updateProductStatus(product, transaction_id);
    }).catch(error => {
      dispatch({type: checkout.CREATE_PAYMENT_FAILURE, payload: error});
    });
  };
};

async function updateProductStatus (product, transaction_id) {
  const buyer_id = await AsyncStorage.getItem('userID')
    .then(buyer_id => buyer_id)
    .catch(error => console.log(error));
  Axios.patch(`${API_URL}/product/${product.id}`)
  .then(response => {
    const seller_id = product.seller_id;
    createOrder(buyer_id, product.id, transaction_id, seller_id);
  }).catch(error => {
    console.log(error);
  });
};

const createOrder = (buyer_id, product_id, transaction_id, seller_id) => {
  const order = {
    product_id,
    buyer_id,
    transaction_id,
    seller_id
  }
  Axios.post(`${API_URL}/order`, order)
    .then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
};

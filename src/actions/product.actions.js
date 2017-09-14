import Axios from 'axios';
import * as product from './action.types';

const API_URL = (__DEV__) ? 'http://localhost:5000/api' : 'https://thrifty-p2p.herokuapp.com/api';

export const fetchAllProducts = () => {
  return dispatch => {
    dispatch({type: product.FETCH_ALL_PRODUCTS_REQUEST});
    Axios.get(`${API_URL}/product`)
    .then(response => {
      setTimeout(() => {
        dispatch({type: product.FETCH_ALL_PRODUCTS_SUCCESS, payload: response.data});
      }, 500);
    }).catch(error => {
      dispatch({type: product.FETCH_ALL_PRODUCTS_FAILURE, payload: error});
    });
  }
};

export const fetchProductById = (productID) => {
  return dispatch => {
    dispatch({type: product.FETCH_PRODUCT_BY_ID_REQUEST});
    Axios.get(`${API_URL}/product/${productID}`)
    .then(response => {
      dispatch({type: product.FETCH_PRODUCT_BY_ID_SUCCESS, payload: response.data[0]});
    }).catch(error => {
      dispatch({type: product.FETCH_PRODUCT_BY_ID_FAILURE, payload: error});
    });
  }
};

export const fetchProductsByCategory = (category) => {
  return dispatch => {

  }
};

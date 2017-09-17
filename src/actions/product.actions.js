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
  };
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
  };
};

export const fetchProductsByCategory = (categoryID) => {
  return dispatch => {
    dispatch({type: product.FETCH_PRODUCT_BY_CATEGORY_REQUEST})
    Axios.get(`${API_URL}/product/category/${categoryID}`)
    .then(response => {
      dispatch({type: product.FETCH_PRODUCT_BY_CATEGORY_SUCCESS, payload: response.data[0]});
    }).catch(error => {
      dispatch({type: product.FETCH_PRODUCT_BY_CATEGORY_FAILURE, payload: error});
    });
  };
};

export const s3ImageUpload = (image) => {
  return dispatch => {
    dispatch({type: product.FETCH_S3_SIGNED_REQUEST})
    Axios.get(`${API_URL}/sign-s3?file-name=${image.filename}`)
    .then(response => {
      const file = {
        uri: image.uri
      }
      dispatch({type: product.FETCH_S3_SIGNED_SUCCESS, payload: response.data.url});
      uploadFile(file.uri, response.data.signedRequest, response.data.url);
    }).catch(error => {
      dispatch({type: product.FETCH_S3_SIGNED_FAILUR, payload: error.response});
    });
  };
};

const uploadFile = (file, signedRequestURL, url) => {
  Axios.put(signedRequestURL, file)
    .then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error.response);
    });
}

export const updateNewProductForm = ({property, value}) => {
  return {
    type: product.PRODUCT_FORM_UPDATE,
    payload: {
      property,
      value
    }
  };
};

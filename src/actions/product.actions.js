import Axios from 'axios';
import * as product from './action.types';
import { RNS3 } from 'react-native-aws3';
import {options} from '../AWS_config';

// const API_URL = 'https://thrifty-p2p.herokuapp.com/api';
const API_URL = (__DEV__) ? 'http://localhost:5000/api' : 'https://thrifty-p2p.herokuapp.com/api';

export const fetchAllProducts = () => {
  return dispatch => {
    dispatch({type: product.FETCH_ALL_PRODUCTS_REQUEST});
    Axios.get(`${API_URL}/product`).then(response => {
      setTimeout(() => {
        dispatch({type: product.FETCH_ALL_PRODUCTS_SUCCESS, payload: response.data});
      }, 500);
    }).catch(error => {
      dispatch({type: product.FETCH_ALL_PRODUCTS_FAILURE, payload: error.response});
    });
  };
};

export const fetchProductById = (productID) => {
  return dispatch => {
    dispatch({type: product.FETCH_PRODUCT_BY_ID_REQUEST});
    Axios.get(`${API_URL}/product/${productID}`).then(response => {
      dispatch({type: product.FETCH_PRODUCT_BY_ID_SUCCESS, payload: response.data[0]});
    }).catch(error => {
      dispatch({type: product.FETCH_PRODUCT_BY_ID_FAILURE, payload: error.response});
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
      dispatch({type: product.FETCH_PRODUCT_BY_CATEGORY_FAILURE, payload: error.response});
    });
  };
};

export const fetchProductsByAccount = (profileID) => {
  return dispatch => {
    dispatch({type: product.FETCH_PRODUCTS_BY_ACCOUNT_REQUEST})
    Axios.get(`${API_URL}/account/${profileID}`)
    .then(response => {
      dispatch({type: product.FETCH_PRODUCTS_BY_ACCOUNT_SUCCESS, payload: response.data[0]});
    }).catch(error => {
      dispatch({type: product.FETCH_PRODUCTS_BY_ACCOUNT_FAILURE, payload: error.response});
    });
  };
};

// export const s3ImageUpload = (file) => {
//   return dispatch => {
//     dispatch({type: product.FETCH_S3_SIGNED_REQUEST})
//     Axios.get(`${API_URL}/sign-s3?file-name=${file.filename}`)
//     .then(response => {
//       dispatch({type: product.FETCH_S3_SIGNED_SUCCESS, payload: response.data.url});
//       uploadFile(file, response.data.signedRequest);
//     }).catch(error => {
//       dispatch({type: product.FETCH_S3_SIGNED_FAILURE, payload: error.response});
//     });
//   };
// };

export const uploadFile = (file, signedRequestURL) => {
  const image = {
    uri: file.uri,
    name: file.filename,
    type: "image/jpeg"
  };
  return dispatch => {
    dispatch({type: product.CREATE_S3_PRODUCT_IMAGE_REQUEST})
    RNS3.put(image, options).then(response => {
      if (response.status !== 201) {
        dispatch({type: product.CREATE_S3_PRODUCT_IMAGE_FAILURE})
        throw new Error("Failed to upload image to S3");
      } else {
        console.log(response.body);
        dispatch({type: product.CREATE_S3_PRODUCT_IMAGE_SUCCESS, payload: response.body.postResponse.location})
      }
    });
  }

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

export const createNewProduct = (newProduct) => {
  return dispatch => {
    dispatch({type: product.CREATE_NEW_PRODUCT_REQUEST})
    Axios.post(`${API_URL}/product/new/uid/${newProduct.seller_id}`, newProduct)
    .then(response =>{
      dispatch({type: product.CREATE_NEW_PRODUCT_SUCCESS, payload: response.data})
    }).catch(error => {
      dispatch({type: product.CREATE_NEW_PRODUCT_FAILURE, payload: error.response})
    });
  };
};

import Axios from 'axios';
import * as product from './action.types';
import { RNS3 } from 'react-native-aws3';
import {options} from '../AWS_config';
import ImageResizer from 'react-native-image-resizer';

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

export const uploadFile = (file, newProduct) => {
  return dispatch => {
    dispatch({type: product.CREATE_S3_PRODUCT_IMAGE_REQUEST});
    ImageResizer.createResizedImage(file.uri, 500, 500, 'JPEG', 80)
    .then(file => {
      const image = {
        uri: file.uri,
        name: file.name,
        type: "image/jpeg"
      };
      RNS3.put(image, options).then(response => {
        if (response.status === 201) {
          dispatch({type: product.CREATE_S3_PRODUCT_IMAGE_SUCCESS});
          newProduct.image_url = response.body.postResponse.location;
          console.log(newProduct);
          createNewProduct(newProduct);
        } else {
          dispatch({type: product.CREATE_S3_PRODUCT_IMAGE_FAILURE})
          throw new Error("Failed to upload image to S3");
        }
      });
    })
    .catch(error => {
      console.log(error);
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

const createNewProduct = (newProduct) => {
    Axios.post(`${API_URL}/product/new/uid/${newProduct.seller_id}`, newProduct)
    .then(response =>{
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
};

import * as product from '../actions/action.types';

const INITIAL_STATE = {
  isLoading: false,
  isS3URLReceived: false,
  isReceived: false,
  error: '',
  s3url: '',
  title: '',
  price: '',
  description: '',
  color: '',
  newProduct: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case product.CREATE_S3_PRODUCT_IMAGE_REQUEST:
      return {
        ...state,
          isLoading: true,
          error: ''
        };

    case product.CREATE_S3_PRODUCT_IMAGE_SUCCESS:
      return {
        ...state,
          isLoading: false,
          error: ''
        };

    case product.CREATE_S3_PRODUCT_IMAGE_FAILURE:
      return {
        ...state,
          isLoading: false,
          s3url: ''
        };

    case product.PRODUCT_FORM_UPDATE:
      return {
        ...state,
          [action.payload.property]: action.payload.value
        };

    case product.CREATE_NEW_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isReceived: false,
        error: ''
      };

    case product.CREATE_NEW_PRODUCT_SUCCESS:
      return {
        ...state,
          isLoading: false,
          isReceived: true,
          title: '',
          price: '',
          description: '',
          color: '',
          error: '',
          newProduct: action.payload
        };

    case product.CREATE_NEW_PRODUCT_FAILURE:
      return {
        ...state,
          isLoading: false,
          isReceived: false,
          title: '',
          price: '',
          description: '',
          color: '',
          error: action.payload
        };

    default:
      return state;
  }
}

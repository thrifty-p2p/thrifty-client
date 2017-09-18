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
    case product.FETCH_S3_SIGNED_REQUEST:
      return {
        ...state,
          isLoading: true,
          isS3URLReceived: false,
          s3url: '',
          error: ''
        };

    case product.FETCH_S3_SIGNED_SUCCESS:
      return {
        ...state,
          isLoading: false,
          isS3URLReceived: true,
          s3url: action.payload,
          error: ''
        };

    case product.FETCH_S3_SIGNED_FAILURE:
      return {
        ...state,
          isLoading: false,
          isS3URLReceived: false,
          s3url: '',
          error: action.payload
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
        error: ''};

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

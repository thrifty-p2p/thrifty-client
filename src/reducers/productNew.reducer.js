import * as product from '../actions/action.types';

const INITIAL_STATE = {
  isLoading: false,
  isReceived: false,
  error: '',
  title: '',
  price: '',
  description: '',
  color: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case product.CREATE_S3_PRODUCT_IMAGE_REQUEST:
      return {
        ...state,
          isLoading: true,
          isReceived: false,
          error: ''
        };

    case product.CREATE_S3_PRODUCT_IMAGE_SUCCESS:
      return {
        ...state,
          isLoading: false,
          isReceived: true,
          title: '',
          price: '',
          description: '',
          color: '',
          error: ''
        };

    case product.CREATE_S3_PRODUCT_IMAGE_FAILURE:
      return {
        ...state,
          isLoading: false,
          isReceived: false,
          title: '',
          price: '',
          description: '',
          color: ''
        };

    case product.PRODUCT_FORM_UPDATE:
      return {
        ...state,
          [action.payload.property]: action.payload.value
        };

    default:
      return state;
  }
}

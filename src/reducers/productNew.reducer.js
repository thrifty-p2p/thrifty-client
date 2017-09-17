import * as product from '../actions/action.types';

const INITIAL_STATE = {
  isLoading: false,
  isS3URLReceived: false,
  error: '',
  s3url: '',
  title: '',
  price: '',
  description: '',
  color: '',
  images: [],
  category: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case product.FETCH_S3_SIGNED_REQUEST:
      return {...state, isLoading: true, isS3URLReceived: false, s3url: '', error: ''};

    case product.FETCH_S3_SIGNED_SUCCESS:
      return {...state, isLoading: false, isS3URLReceived: true, s3url: action.payload, error: ''};

    case product.FETCH_S3_SIGNED_FAILURE:
      return {...state, isLoading: false, isS3URLReceived: false, s3url: '', error: 'Something Went Wrong'};

    case product.PRODUCT_FORM_UPDATE:
      return {...state, [action.payload.property]: action.payload.value};

    default:
      return state;
  }
}

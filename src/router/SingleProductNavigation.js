import React from 'react';
import {StackNavigator} from 'react-navigation'

import SingleProduct from '../components/SingleProduct';
import Checkout from '../components/Checkout';
import UserProfile from '../components/UserProfile';

const SingleProductNavigation = StackNavigator({
  Product: {
    screen: SingleProduct,
    navigationOptions: {
      title: 'Product',
      header: null
    }
  },
  Checkout: {
    screen: Checkout,
    navigationOptions: {
      title: 'Product',
      header: null
    }
  },
  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      title: 'Profile',
      header: null
    }
  },
});

export default SingleProductNavigation;

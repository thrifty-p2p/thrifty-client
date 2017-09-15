import React from 'react';
import {StackNavigator} from 'react-navigation'

import Feed from '../components/Feed';
// import SingleProduct from '../components/SingleProduct';
import Checkout from '../components/Checkout';
import UserProfile from '../components/UserProfile';

import SingleProductNavigation from './SingleProductNavigation';

const ProductNavigation = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
      header: null
    }
  },
  Product: {
    screen: SingleProductNavigation,
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
  }
});

export default ProductNavigation;

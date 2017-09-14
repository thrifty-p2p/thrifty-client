import React from 'react';
import {StackNavigator} from 'react-navigation'

import Feed from '../components/Feed';
import ProductSingle from '../components/ProductSingle';
import Checkout from '../components/Checkout';
import UserProfile from '../components/UserProfile';

const ProductNavigation = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
      header: null
    }
  },
  Product: {
    screen: ProductSingle,
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

import React from 'react';
import {StackNavigator} from 'react-navigation'

import SingleProduct from '../components/SingleProduct';
import Checkout from '../components/Checkout';
import CartPage from '../components/CartPage';
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
  Cart: {
    screen: CartPage,
    navigationOptions: {
      title: 'Cart Page',
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

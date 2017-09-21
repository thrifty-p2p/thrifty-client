import React from 'react';
import {StackNavigator} from 'react-navigation'

import Feed from '../components/Feed';
import Categories from '../components/Categories';
import ProductsByCategory from '../components/ProductsByCategory';
import SingleProduct from '../components/SingleProduct';
import Checkout from '../components/Checkout';
import CartPage from '../components/CartPage';
import UserProfile from '../components/UserProfile';

const ProductNavigation = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Product Feed',
      header: null
    }
  },
  Category: {
    screen: ProductsByCategory,
    navigationOptions: {
      title: 'Category',
      header: null
    }
  },
  Product: {
    screen: SingleProduct,
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

import React from 'react';
import {StackNavigator} from 'react-navigation'

import Categories from '../components/Categories';
import ProductsByCategory from '../components/ProductsByCategory';
import SingleProduct from '../components/SingleProduct';
import Checkout from '../components/Checkout';
import UserProfile from '../components/UserProfile';

const CategoryNavigation = StackNavigator({
  Categories: {
    screen: Categories,
    navigationOptions: {
      title: 'Search',
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

export default CategoryNavigation;

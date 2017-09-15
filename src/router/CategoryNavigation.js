import React from 'react';
import {StackNavigator} from 'react-navigation'

import Search from '../components/Search';
import ByCategory from '../components/ByCategory';
import SingleProduct from '../components/SingleProduct';
import Checkout from '../components/Checkout';
import UserProfile from '../components/UserProfile';

const CategoryNavigation = StackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Search',
      header: null
    }
  },
  Category: {
    screen: ByCategory,
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

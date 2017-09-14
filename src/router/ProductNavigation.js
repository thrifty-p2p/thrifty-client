import React from 'react';
import {StackNavigator} from 'react-navigation'

import ProductSingle from '../components/ProductSingle';

const ProductNavigation = StackNavigator({
  Product: {
    screen: ProductSingle,
    navigationOptions: {
      title: 'Home',
      header: null
    }
  },
});

export default ProductNavigation;

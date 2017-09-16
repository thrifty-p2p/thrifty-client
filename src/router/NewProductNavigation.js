import React from 'react';
import {StackNavigator} from 'react-navigation'

import NewProductPhotoPicker from '../components/NewProductPhotoPicker';
import NewProductForm from '../components/NewProductForm';

const NewProductNavigation = StackNavigator({
  NewProductPhotoPicker: {
    screen: NewProductPhotoPicker,
    navigationOptions: {
      title: 'Add New Product',
      header: null
    }
  },
  NewProductForm: {
    screen: NewProductForm,
    navigationOptions: {
      title: 'New Product Form',
      header: null
    }
  }
});

export default NewProductNavigation;

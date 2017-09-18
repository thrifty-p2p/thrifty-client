import React from 'react';
import {TabNavigator} from 'react-navigation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import ProductNavigation from './ProductNavigation';
import CategoryNavigation from './CategoryNavigation';
import NewProductNavigation from './NewProductNavigation';

import Notifications from '../components/Notifications';
import Profile from '../components/Profile';

const AppNavigation = TabNavigator({
  ProductNavigation: {
    screen: ProductNavigation,
    navigationOptions: {
      tabBarLabel: 'FEED',
      tabBarIcon: ({focused}) => (
        <SimpleLineIcons
          name='feed'
          size={23}
          color={focused ? '#1CFEBA' : '#9d8df1'} />
      )
    }
  },
  Search: {
    screen: CategoryNavigation,
    navigationOptions: {
      tabBarLabel: 'BROWSE',
      tabBarIcon: ({focused}) => (
        <SimpleLineIcons
          name='magnifier'
          size={23}
          color={focused ? '#1CFEBA' : '#9d8df1'} />
      )
    }
  },
  'NewProduct': {
    screen: NewProductNavigation,
    navigationOptions: {
      tabBarLabel: 'ADD',
      tabBarIcon: ({focused}) => (
        <SimpleLineIcons
          name='camera'
          size={23}
          color={focused ? '#1CFEBA' : '#9d8df1'} />
      )
    }
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      tabBarLabel: 'NOTIFICATIONS',
      tabBarIcon: ({focused}) => (
        <SimpleLineIcons
          name='bell'
          size={23}
          color={focused ? '#1CFEBA' : '#9d8df1'} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      // Update to show username
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({focused}) => (
        <SimpleLineIcons
          name='user'
          size={23}
          color={focused ? '#1CFEBA' : '#9d8df1'} />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#1CFEBA',
    style: {
      backgroundColor: '#1E201C',
    },
    labelStyle: {
      fontSize: 9,
      fontWeight: '600'
    }
  }
});

export default AppNavigation;

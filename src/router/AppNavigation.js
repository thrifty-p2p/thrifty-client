import React from 'react';
import {TabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from '../components/Feed';
import Search from '../components/Search';
import NewProduct from '../components/NewProduct';
import Notifications from '../components/Notifications';
import Profile from '../components/Profile';

const AppNavigation = TabNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({focused}) => (
        <Ionicons
          name='ios-people'
          size={30}
          color={focused ? '#000' : '#D62246'} />
      )
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({focused}) => (
        <Ionicons
          name='ios-search'
          size={30}
          color={focused ? '#000' : '#D62246'} />
      )
    }
  },
  'NewProduct': {
    screen: NewProduct,
    navigationOptions: {
      tabBarLabel: 'Add',
      tabBarIcon: ({focused}) => (
        <Ionicons
          name='ios-camera'
          size={30}
          color={focused ? '#000' : '#D62246'} />
      )
    }
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      tabBarLabel: 'Notifications',
      tabBarIcon: ({focused}) => (
        <Ionicons
          name='ios-notifications'
          size={30}
          color={focused ? '#000' : '#D62246'} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      // Update to show username
      tabBarLabel: 'Profile',
      tabBarIcon: ({focused}) => (
        <Ionicons
          name='ios-contact'
          size={30}
          color={focused ? '#000' : '#D62246'} />
      )
    }
  }
});

export default AppNavigation;

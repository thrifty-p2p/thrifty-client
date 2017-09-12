import React from 'react';
import {TabNavigator} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from './components/Feed';
import Search from './components/Search';
import NewProduct from './components/NewProduct';
import Notifications from './components/Notifications';
import Profile from './components/Profile';

export const Tabs = TabNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({focused, tintColor}) => (
        <Ionicons name={focused ? 'ios-people-outline' : 'ios-people'} size={30} color="#4F8EF7" />
      )
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({focused, tintColor}) => (
        <Ionicons name={focused ? 'ios-search-outline' : 'ios-search'} size={30} color="#4F8EF7" />
      )
    }
  },
  'NewProduct': {
    screen: NewProduct,
    navigationOptions: {
      tabBarLabel: 'Add',
      tabBarIcon: ({focused, tintColor}) => (
        <Ionicons name={focused ? 'ios-camera-outline' : 'ios-camera'} size={30} color="#4F8EF7" />
      )
    }
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      tabBarLabel: 'Notifications',
      tabBarIcon: ({focused, tintColor}) => (
        <Ionicons name={focused ? 'ios-notifications-outline' : 'ios-notifications'} size={30} color="#4F8EF7" />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      // Update to show username
      tabBarLabel: 'Profile',
      tabBarIcon: ({focused, tintColor}) => (
        <Ionicons name={focused ? 'ios-contact-outline' : 'ios-contact'} size={30} color="#4F8EF7" />
      )
    }
  }
});

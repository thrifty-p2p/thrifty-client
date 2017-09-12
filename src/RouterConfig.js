import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from './components/Feed';
import Search from './components/Search';
import NewProduct from './components/NewProduct';
import Notifications from './components/Notifications';
import Profile from './components/Profile';

import LandingScreen from './components/LandingScreen';
import Login from './components/Login';
import Signup from './components/Signup';

export const AppNavigation = TabNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({focused}) => (
        <Ionicons name={focused ? 'ios-people-outline' : 'ios-people'} size={30} color="#D62246" />
      )
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({focused}) => (
        <Ionicons name={focused ? 'ios-search-outline' : 'ios-search'} size={30} color="#D62246" />
      )
    }
  },
  'NewProduct': {
    screen: NewProduct,
    navigationOptions: {
      tabBarLabel: 'Add',
      tabBarIcon: ({focused}) => (
        <Ionicons name={focused ? 'ios-camera-outline' : 'ios-camera'} size={30} color="#D62246" />
      )
    }
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      tabBarLabel: 'Notifications',
      tabBarIcon: ({focused}) => (
        <Ionicons name={focused ? 'ios-notifications-outline' : 'ios-notifications'} size={30} color="#D62246" />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      // Update to show username
      tabBarLabel: 'Profile',
      tabBarIcon: ({focused}) => (
        <Ionicons name={focused ? 'ios-contact-outline' : 'ios-contact'} size={30} color="#D62246" />
      )
    }
  }
});

export const LandingNavigation = StackNavigator({
  Landing: {
    screen: LandingScreen,
    navigationOptions: {
      title: 'Home'
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: 'Sign Up'
    }
  }
});


export const RootNavigation = (loggedIn = false) => {
  return StackNavigator({

  });
}

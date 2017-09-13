import React from 'react';
import {StackNavigator} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

import LandingScreen from '../components/LandingScreen';
import Login from '../components/Login';
import Signup from '../components/Signup';

const LandingNavigation = StackNavigator({
  Landing: {
    screen: LandingScreen,
    navigationOptions: {
      title: 'Home',
      header: null
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

export default LandingNavigation;

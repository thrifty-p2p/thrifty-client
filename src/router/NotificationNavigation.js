import React from 'react';
import {StackNavigator} from 'react-navigation'

import Notifications from '../components/Notifications';
import NotificationOrder from '../components/NotificationOrder';

const NotificationNavigation = StackNavigator({
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      title: 'Notifications',
      header: null
    }
  },
  NotificationOrder: {
    screen: NotificationOrder,
    navigationOptions: {
      title: 'Order Notifications',
      header: null
    }
  }
});

export default NotificationNavigation;

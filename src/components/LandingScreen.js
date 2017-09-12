import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';

import {Button} from './common';

const LandingScreen = props => {
  return(
    <View>
        <Button
          onPress={() => props.navigation.navigate('Login')}>
          LOGIN
        </Button>
    </View>
  );
}

export default LandingScreen;

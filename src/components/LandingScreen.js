import React from 'react';
import {View, StyleSheet, Image, Platform} from 'react-native';

import {Button} from './common';

const LandingScreen = props => {
  const {container, body, image, buttons} = styles;
  return(
    <View style={container}>
      <View style={body}>
        <Image source={{uri: 'https://s3.us-east-2.amazonaws.com/thrifty-p2p/thrifty_logo_main.png'}} style={image} />
      </View>
      <View style={buttons}>
        <Button
          onPress={() => props.navigation.navigate('Login')}>
          LOGIN
        </Button>

        <Button
          onPress={() => props.navigation.navigate('Signup')}>
          SIGN UP
        </Button>
      </View>
    </View>
  );
}

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 100,
    width: 200
  },
  buttons: {
    flex: 1
  }
})

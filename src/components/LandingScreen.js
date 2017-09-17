import React from 'react';
import {View, StyleSheet, Image, Platform} from 'react-native';

import {Button, CardSection} from './common';

const LandingScreen = props => {
  const {container, body, image, buttons, btnContainer} = styles;
  return(
    <View style={container}>
      <View style={body}>
        <Image source={{uri: 'https://s3.us-east-2.amazonaws.com/thrifty-p2p/thrifty_logo_main.png'}} style={image} />
      </View>
      <View style={buttons}>
        <View style={btnContainer}>
          <Button onPress={() => props.navigation.navigate('Login')} color="#1CFEBA">
            LOGIN
          </Button>
        </View>
        <View style={btnContainer}>
          <Button onPress={() => props.navigation.navigate('Signup')} color="#1CFEBA">
            SIGN UP
          </Button>
        </View>
      </View>
    </View>
  );
}

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },
  body: {

  },
  image: {
    height: 100,
    width: 200,
    justifyContent: 'center'
  },
  buttons: {
    alignSelf: "stretch",
    width: 200,
    alignSelf: 'center'
  },
  btnContainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative",
    paddingBottom: 3
  }
});

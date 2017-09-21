import React from 'react';
import {View, Text, ImageBackground, StyleSheet, Image, Platform} from 'react-native';

import {Button, CardSection} from './common';

const LandingScreen = props => {
  const {container, body, image, buttons, btnContainer, slogan, bgImage} = styles;
  return(
    <Image source={require('../images/background.jpg')} style={bgImage}>
      <View style={container}>
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <Image source={{uri: 'https://s3.us-east-2.amazonaws.com/thrifty-p2p/thrifty_logo.png'}} style={image} />
          <Text style={slogan}>{'Buy and sell, quickly and safely'.toUpperCase()}</Text>
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
    </Image>
  );
}

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  bgImage: {
    flex: 1,
    width: null,
    height: null
  },
  slogan: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: '600',
    fontSize: 14
  },
  image: {
    height: 100,
    width: 250,
    justifyContent: 'center',
    marginBottom: 15
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
    paddingBottom: 5
  }
});

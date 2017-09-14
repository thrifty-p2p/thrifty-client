import React from 'react';
import {View, StyleSheet, Image, Platform} from 'react-native';

import {Button, CardSection} from './common';

const LandingScreen = props => {
  const {container, body, image, buttons} = styles;
  return(
    <View style={container}>
      <View style={body}>
        <Image source={{uri: 'https://s3.us-east-2.amazonaws.com/thrifty-p2p/thrifty_logo_main.png'}} style={image} />
      </View>
      <View style={buttons}>
        <CardSection>
          <Button onPress={() => props.navigation.navigate('Login')} color="#D62246">
            LOGIN
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => props.navigation.navigate('Signup')} color="#D62246">
            SIGN UP
          </Button>
        </CardSection>

      </View>
    </View>
  );
}

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 100,
    width: 200,
    justifyContent: 'center'
  },
  buttons: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

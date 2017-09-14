import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Header = props => {
  const {viewStyle, textStyle, imageStyle} = styles
  return(
    <View style={viewStyle}>
      <View>
        <Image source={{uri: 'https://s3.us-east-2.amazonaws.com/thrifty-p2p/thrifty_logo_main.png'}} style={imageStyle}/>
      </View>
      <View>
        <Text style={textStyle}>{props.title}</Text>
      </View>
    </View>
  );
}

export { Header };


const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#EEE",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 20,
  },
  imageStyle: {
    width: 80,
    height: 30
  }
})

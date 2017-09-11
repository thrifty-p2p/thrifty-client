import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const Button = props => {
  const {button, text} = styles;
  return (
    <View style={{
      flex: 1
    }}>
      <TouchableOpacity onPress={props.onPress} style={button}>
        <Text style={text}>
          {props.children}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export {Button};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: width,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    borderRadius: 5,
    backgroundColor: "#007aff"
  },
  text: {
    alignSelf: "center",
    color: "#FFF",
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  }
})

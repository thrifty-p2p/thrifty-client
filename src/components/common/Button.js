import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = props => {
  const {button, text} = styles;
  return (
    <TouchableOpacity onPress={props.onPress} style={button}>
      <Text style={text}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}

export { Button };

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    borderRadius: 5,
    backgroundColor: "#D62246",
  },
  text: {
    alignSelf: "center",
    color: "#FFF",
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  }
})

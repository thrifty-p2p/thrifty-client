import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = props => {
  const {text} = styles;
  const button = {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: props.color,
  }
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

  text: {
    alignSelf: "center",
    color: "#1e201c",
    fontWeight: "700",
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 14,
    marginBottom: 0
  }
})

import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = props => {
  const {button, text} = styles;
  return (
    <TouchableOpacity onPress={props.onPress} style={{flex: 1, alignSelf: "stretch", backgroundColor: props.color}}>
      <Text style={text}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}

export { Button };

const styles = StyleSheet.create({
  button: {

  },
  text: {
    alignSelf: "center",
    color: "#FFF",
    fontWeight: "700",
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 12
  }
})

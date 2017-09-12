import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = props => {
  const {button, text} = styles;
  return (
    <View style={{flex:1}}>
      <TouchableOpacity onPress={props.onPress} style={button}>
        <Text style={text}>
          {props.children}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export {Button};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    backgroundColor: "#D62246",
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  text: {
    alignSelf: "center",
    color: "#FFF",
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 200,
    paddingRight: 200
  }
})

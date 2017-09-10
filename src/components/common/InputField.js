import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const InputField = props => {
  const { label, value, onChangeText, placeholder, secureTextEntry } = props;
  const { inputCSS, labelCSS, containerCSS } = styles;
  return(
    <View style={containerCSS}>
      <Text style={labelCSS}>{label}</Text>
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        style={inputCSS}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

export { InputField };

const styles = StyleSheet.create({
  inputCSS: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelCSS: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerCSS: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

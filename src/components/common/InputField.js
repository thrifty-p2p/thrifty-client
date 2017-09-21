import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const InputField = props => {
  const { label, value, onChangeText, placeholder, secureTextEntry, multiline, numberOfLines } = props;
  const { inputStyle, labelStyle, containerStyle } = styles;
  return(
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

export { InputField };

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 14,
    lineHeight: 30,
    flex: 2
  },
  labelStyle: {
    fontSize: 14,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

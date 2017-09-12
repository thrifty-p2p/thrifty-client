import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

const NewProduct = props => {
  return(
    <View style={styles.container}>
      <Text>NewProduct</Text>
    </View>
  );
}

export default NewProduct;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  }
});

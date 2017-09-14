import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

import {Header} from './common';

const NewProduct = props => {
  return(
    <View style={styles.container}>
      <Header isBackProp={false}/>
      <Text>New Product</Text>
    </View>
  );
}

export default NewProduct;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  }
});

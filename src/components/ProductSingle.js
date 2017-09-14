// Render the Product Detail Page
import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

import {Header, Button} from './common';

const ProductSingle = props => {
  return(
    <View style={styles.container}>
      <Header
        isBackProp={true}
        navigation={props.navigation}/>
      <Text>ProductSingle</Text>
    </View>
  );
}

export default ProductSingle;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  }
});

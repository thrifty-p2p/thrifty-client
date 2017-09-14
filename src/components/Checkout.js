import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {Grid, Col} from 'react-native-elements';

import {Header} from './common';

const Checkout = props => {
  return(
    <View style={styles.container}>
      <Header
        isBackProp={true}
        navigation={props.navigation}/>
      <Text>Checkout</Text>
    </View>
  );
}

export default Checkout;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  }
});

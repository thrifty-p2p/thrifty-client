import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

import {Header} from './common';

const NewProductFrom = props => {
  return(
    <View style={styles.container}>
      <Header isBackProp={true} navigation={props.navigation}/>
      {console.log(props.navigation.state.params.selected)}
      <Text>New Product From</Text>
    </View>
  );
}

export default NewProductFrom;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  }
});

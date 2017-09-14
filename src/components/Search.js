import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {Grid, Col} from 'react-native-elements';

import {Header} from './common';

const Search = props => {
  return(
    <View style={styles.container}>
      <Header title="SEARCH"/>
      <Text>Search</Text>
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  }
});

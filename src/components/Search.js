import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

const Search = props => {
  return(
    <View style={styles.container}>
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

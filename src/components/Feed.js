import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

const Feed = props => {
  return(
    <View style={styles.container}>
      <Text>Feed</Text>
    </View>
  );
}

export default Feed;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  }
});

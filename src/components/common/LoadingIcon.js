import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingIcon = props => {
  return(
    <View style={styles.loadingContainer}>
      <ActivityIndicator
        size={props.size || 'large'}
      />
    </View>
  );
};

export { LoadingIcon };

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

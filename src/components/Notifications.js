import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

import {Header} from './common';

const Notifications = props => {
  return(
    <View style={styles.container}>
      <Header isBackProp={false}/>
      <Text>Notifications</Text>
    </View>
  );
}

export default Notifications;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  }
});

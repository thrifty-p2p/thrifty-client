import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';

import {Header} from './common';

const NotificationOrder = props => {
  return(
    <View style={styles.container}>
      <Header isBackProp={true} navigation={props.navigation}/>
    </View>
  );
}

export default NotificationOrder;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  }
});

// Render the Product Detail Page
import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {Grid, Col} from 'react-native-elements';

import {Header} from './common';

const UserProfile = props => {
  return(
    <View style={styles.container}>
      <Header
        isBackProp={true}
        navigation={props.navigation}/>
      <Text>UserProfile</Text>
    </View>
  );
}

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  }
});

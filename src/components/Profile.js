import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

const Profile = props => {
  return(
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  }
});

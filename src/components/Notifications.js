import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

import {Header, CardSection, Button} from './common';

const Notifications = props => {
  return(
    <View style={styles.container}>
      <Header isBackProp={false}/>
      <CardSection>
        {/* <Button onPress={props.navigation.navigate('NotificationOrder')} color="#1cfeba">
          ORDERS
        </Button> */}
        <View style={{flex:1}}>
          <Button onPress={() => props.navigation.navigate('NotificationOrder')} color="#9d8df1">
            INFO
          </Button>
        </View>
      </CardSection>
    </View>
  );
}

export default Notifications;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  }
});

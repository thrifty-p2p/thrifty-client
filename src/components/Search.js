import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

import {Header, CardSection} from './common';

const Search = props => {
  const {container, flexRow, flexColumn} = styles;
  return(
    <View style={container}>
      <Header isBackProp={false}/>

      <CardSection>
        <View style={flexRow}>
          <View style={flexColumn}>
            <Text>LEFT 1</Text>
          </View>
          <View style={flexColumn}>
            <Text>RIGHT 1</Text>
          </View>
        </View>
      </CardSection>
      <CardSection>
        <View style={flexRow}>
          <View style={flexColumn}>
            <Text>LEFT 2</Text>
          </View>
          <View style={flexColumn}>
            <Text>RIGHT 2</Text>
          </View>
        </View>
      </CardSection>
      <CardSection>
        <View style={flexRow}>
          <View style={flexColumn}>
            <Text>LEFT 3</Text>
          </View>
          <View style={flexColumn}>
            <Text>RIGHT 3</Text>
          </View>
        </View>
      </CardSection>
      <CardSection>
        <View style={flexRow}>
          <View style={flexColumn}>
            <Text>LEFT 4</Text>
          </View>
          <View style={flexColumn}>
            <Text>RIGHT 4</Text>
          </View>
        </View>
      </CardSection>

    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row'
  },
  flexColumn: {
    flex: 1,
    alignItems: 'center'
  }
});

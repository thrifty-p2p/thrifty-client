import React from 'react';
import {View, Text, StyleSheet, Platform, Image} from 'react-native';

import {Header, CardSection} from './common';

const Search = props => {
  const {container, flexRow, flexColumn} = styles;
  return(
    <View style={container}>
      <Header isBackProp={false}/>
      {console.log(props)}
      <CardSection>
        <View style={flexRow}>
          <View style={flexColumn}>
            <Text onPress={() => props.navigation.navigate('Category', {categoryID: 1})}>Men</Text>
          </View>
          <View style={flexColumn}>
            <Text onPress={() => props.navigation.navigate('Category', {categoryID: 2})}>Woman</Text>
          </View>
        </View>
      </CardSection>
      <CardSection>
        <View style={flexRow}>
          <View style={flexColumn}>
            <Text onPress={() => props.navigation.navigate('Category', {categoryID: 3})}>Books</Text>
          </View>
          <View style={flexColumn}>
            <Text onPress={() => props.navigation.navigate('Category', {categoryID: 4})}>Computers</Text>
          </View>
        </View>
      </CardSection>
      <CardSection>
        <View style={flexRow}>
          <View style={flexColumn}>
            <Text onPress={() => props.navigation.navigate('Category', {categoryID: 5})}>Electronics</Text>
          </View>
          <View style={flexColumn}>
            <Text onPress={() => props.navigation.navigate('Category', {categoryID: 6})}>Clothing</Text>
          </View>
        </View>
      </CardSection>
      <CardSection>
        <View style={flexRow}>
          <View style={flexColumn}>
            <Text onPress={() => props.navigation.navigate('Category', {categoryID: 7})}>CD/DVD</Text>
          </View>
          <View style={flexColumn}>
            <Text onPress={() => props.navigation.navigate('Category', {categoryID: 8})}>Instruments</Text>
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

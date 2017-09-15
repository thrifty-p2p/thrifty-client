import React from 'react';
import {View, Text, StyleSheet, Platform, Image, TouchableOpacity} from 'react-native';

import {Header, CardSection, Card} from './common';

const Categories = props => {
  const {container, flexRow, flexColumn, categoryIcons} = styles;
  return(
    <View style={container}>
      <Header isBackProp={false}/>

        <View style={flexRow}>
          <TouchableOpacity style={flexColumn}
            onPress={() => props.navigation.navigate('Category', {categoryID: 1})}>
            <Image source={require('../icons/icon_man.png')} style={categoryIcons}/>
            <Text>MEN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={flexColumn}
            onPress={() => props.navigation.navigate('Category', {categoryID: 2})}>
            <Image source={require('../icons/icon_woman.png')} style={categoryIcons}/>
            <Text>WOMEN</Text>
          </TouchableOpacity>
        </View>


        <View style={flexRow}>
          <TouchableOpacity style={flexColumn}
            onPress={() => props.navigation.navigate('Category', {categoryID: 3})}>
            <Image source={require('../icons/icon_book.png')} style={categoryIcons}/>
            <Text>BOOKS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={flexColumn}
            onPress={() => props.navigation.navigate('Category', {categoryID: 4})}>
            <Image source={require('../icons/icon_computer.png')} style={categoryIcons}/>
            <Text>COMPUTERS</Text>
          </TouchableOpacity>
        </View>


        <View style={flexRow}>
          <TouchableOpacity style={flexColumn}
            onPress={() => props.navigation.navigate('Category', {categoryID: 5})}>
            <Image source={require('../icons/icon_mobile.png')} style={categoryIcons}/>
            <Text>ELECTRONICS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={flexColumn}
            onPress={() => props.navigation.navigate('Category', {categoryID: 6})}>
            <Image source={require('../icons/icon_clothes.png')} style={categoryIcons}/>
            <Text>CLOTHING</Text>
          </TouchableOpacity>
        </View>


        <View style={flexRow}>
          <TouchableOpacity style={flexColumn}
            onPress={() => props.navigation.navigate('Category', {categoryID: 7})}>
            <Image source={require('../icons/icon_cd.png')} style={categoryIcons}/>
            <Text>CD/DVD</Text>
          </TouchableOpacity>

          <TouchableOpacity style={flexColumn}
            onPress={() => props.navigation.navigate('Category', {categoryID: 8})}>
            <Image source={require('../icons/icon_music.png')} style={categoryIcons}/>
            <Text>INSTRUMENTS</Text>
          </TouchableOpacity>
        </View>

    </View>
  );
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10
  },
  flexColumn: {
    flex: 1,
    alignItems: 'center'
  },
  categoryIcons: {
    width: 100,
    height: 100
  }
});

import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = props => {
  const {viewStyle, textStyle, imageStyle, Grid, Column, ColumnLeft, ColumnRight} = styles
  return(
    <View style={viewStyle}>
      <View style={Grid}>
        <View style={ColumnLeft}>
          {props.isBackProp ?
            (<TouchableOpacity onPress={() => props.navigation.goBack(null)}>
              <Ionicons name='ios-arrow-back' size={30} color='#FFF' />
            </TouchableOpacity>)
          : <Text></Text>}
        </View>
        <View style={Column}>
          <Image source={{uri: 'https://s3.us-east-2.amazonaws.com/thrifty-p2p/thrifty_logo.png'}} style={imageStyle}/>
        </View>
        <View style={ColumnRight}>
          <Text style={textStyle}>{props.title}</Text>
        </View>
      </View>
    </View>
  );
}

export { Header };

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#1e201c',
    alignItems: 'center',
    height: 55,
    paddingTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 3,
    position: 'relative',
  },
  textStyle: {
    fontSize: 16,
    color: '#FFF'
  },
  imageStyle : {
    width: 80,
    height: 30
  },
  Grid : {
    flex: 1,
    flexDirection: 'row',
  },
  Column : {
    flex: 1,
    alignItems: 'center'
  },
  ColumnLeft : {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 10
  },
  ColumnRight : {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10
  }
});

import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Moment from 'react-moment';

import {CardSection, Button} from './common';

const ProductLayout = props => {
  const {
    textContainer,
    thumbnail,
    thumbnailContainer,
    headerText,
    productImage,
    grid,
    linkStyle,
    textPadding,
    iconStyle
  } = styles;

  const {
    seller,
    date_created,
    images,
    title,
    price,
    description,
    likes
  } = props.product;

  return (
    <View>
      <CardSection>
        <TouchableOpacity style={thumbnailContainer} onPress={() => props.navigation.navigate('UserProfile')}>
          <Image style={thumbnail} source={{
            uri: seller.profile_image_url
          }}/>
        </TouchableOpacity>
        <TouchableOpacity style={textContainer} onPress={() => props.navigation.navigate('UserProfile')}>
          <Text style={linkStyle}>{seller.username}</Text>
          <Moment fromNow element={Text}>{date_created}</Moment>
        </TouchableOpacity>
      </CardSection>

      <CardSection>
        <Image style={productImage} source={{
          uri: images["0"].image_url
        }}/>
      </CardSection>

      <CardSection>
        <View style={grid}>
          <View style={iconStyle}>
            {/* <Text>{likes}</Text> */}
            <Ionicons name='ios-heart' size={20} color='#000'/>
          </View>

          <View style={iconStyle}>
            <Ionicons name='ios-text' size={20} color='#000'/>
          </View>

          <View style={iconStyle}>
            <Ionicons name='ios-share-alt' size={20} color='#000'/>
          </View>
        </View>
      </CardSection>

      <CardSection>
        <Text style={textPadding}>{title.substr(0, 30)}</Text>
      </CardSection>

      <CardSection>
        <Text style={textPadding}>
          DESCRIPTION: {description}
        </Text>
      </CardSection>
    </View>
  );
}

export default ProductLayout;

const styles = StyleSheet.create({
  thumbnailContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  thumbnail: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderColor: "#CCC",
    borderWidth: 1
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 7
  },
  headerText: {
    fontSize: 14,
    flexWrap: 'wrap'
  },
  productImage: {
    height: 300,
    flex: 1,
    width: null
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  linkStyle: {
    color: 'blue',
    fontWeight: '500',
    paddingBottom: 0
  },
  textPadding: {
    padding: 5
  },
  iconStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

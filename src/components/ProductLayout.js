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
        <TouchableOpacity style={thumbnailContainer}
          onPress={() => props.navigation.navigate('UserProfile', {sellerID: props.product.seller_id})}>
          <Image style={thumbnail} source={{
            uri: seller.profile_image_url
          }}/>
        </TouchableOpacity>
        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity style={textContainer}
            onPress={() => props.navigation.navigate('UserProfile', {sellerID: props.product.seller_id})}>
            <Text style={linkStyle}>{seller.username}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={textContainer}>
            <Moment fromNow element={Text} style={{fontSize: 10}}>{date_created}</Moment>
          </TouchableOpacity>
        </View>
      </CardSection>

      <CardSection>
        <Image style={productImage} source={{
          uri: images["0"].image_url
        }}/>
      </CardSection>

      <CardSection>
        <View style={grid}>
          <View style={iconStyle}>
            <Ionicons name='ios-heart' size={20} color='#5B5F97'/>
          </View>

          <View style={iconStyle}>
            <Ionicons name='ios-text' size={20} color='#5B5F97'/>
          </View>

          <View style={iconStyle}>
            <Ionicons name='ios-share-alt' size={20} color='#5B5F97'/>
          </View>
        </View>
      </CardSection>

      <CardSection>
        <Text style={textPadding}>{title.substr(0, 30).toUpperCase()}</Text>
      </CardSection>

      <CardSection>
        <Text style={textPadding}>
          {description}
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
    paddingLeft: 7,
    paddingBottom: 0,
    marginBottom: 0
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
    color: '#5B5F97',
    fontWeight: '600'
  },
  textPadding: {
    padding: 5
  },
  iconStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 3,
    paddingTop: 3
  }
});

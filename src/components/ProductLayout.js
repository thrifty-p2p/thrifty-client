import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
    description
  } = props.product;

  return (
    <View>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image style={thumbnail} source={{
            uri: seller.profile_image_url
          }}/>
        </View>
        <View style={textContainer}>
          <Text style={linkStyle} onPress={() => props.navigation.navigate('UserProfile')}>{seller.username}
          </Text>
          <Text style={{fontSize: 8}}>{date_created}</Text>
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
    alignItems: 'center'
  }
});

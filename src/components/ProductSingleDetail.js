import React from 'react';
import {View, Text, Image, StyleSheet, Linking} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Card, CardSection, Button} from './common';

const ProductDetail = props => {

const {textContainer, thumbnail, thumbnailContainer, headerText, productImage, grid, linkStyle} = styles;

const {seller, date_created, images, title, price} = props.product;

  return(
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image style={thumbnail} source={{
            uri: seller.profile_image_url
          }}/>
        </View>
        <View style={textContainer}>
          <Text style={linkStyle}>{seller.username}</Text>
          <Text style={{fontSize: 8}}>{date_created}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={productImage} source={{uri: images["0"].image_url}}/>
      </CardSection>

      <CardSection>
        <View style={grid}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Ionicons name='ios-heart' size={20} color='#000' />
          </View>

          <View style={{flex: 1, alignItems: 'center'}}>
            <Ionicons name='ios-text' size={20} color='#000' />
          </View>

          <View style={{flex: 1, alignItems: 'center'}}>
            <Ionicons name='ios-share-alt' size={20} color='#000' />
          </View>
        </View>
      </CardSection>

      <CardSection>
        <View style={grid}>
          <View style={{flex:4}}>
            <Text style={headerText}>{title.substr(0, 30)}</Text>
            <Text>$ {price}</Text>
          </View>
          <View style={{flex:1}}>
            <Button color="#CCC">
              OFFER
            </Button>
          </View>
          <View style={{flex:1}}>
            <Button color="#D62246">
              BUY
            </Button>
          </View>
        </View>
      </CardSection>
    </Card>
  );
}

export default ProductDetail;

const styles = StyleSheet.create({
  thumbnailContainer: {
    justifyContent: "center",
    alignItems: "center",
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
    paddingLeft: 10
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
    fontWeight: '500'
  }
});

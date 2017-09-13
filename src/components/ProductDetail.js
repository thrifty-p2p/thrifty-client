import React from 'react';
import {View, Text, Image, StyleSheet, Linking} from 'react-native';

import {Card, CardSection, Button} from './common';

const ProductDetail = props => {

const {textContainer, thumbnail, thumbnailContainer, headerText, cardImage} = styles;

  return(
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image style={thumbnail} source={{
            uri: props.product.seller.profile_image_url
          }}/>
        </View>
        <View style={textContainer}>
          <Text style={headerText}>{props.product.title}</Text>
          <Text>{props.product.seller.username}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={cardImage} source={{
          uri: props.product.images["0"].image_url
        }}/>
      </CardSection>

      <CardSection>
        <Button>
          BUY NOW
        </Button>
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
    borderWidth: 3
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
  cardImage: {
    height: 300,
    flex: 1,
    width: null
  }
});

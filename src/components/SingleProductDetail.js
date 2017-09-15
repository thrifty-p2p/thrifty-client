import React from 'react';
import {View, Text, Image, StyleSheet, Linking} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Moment from 'react-moment';

import {Card, CardSection, Button} from './common';
import ProductLayout from './ProductLayout';


const SingleProductDetail = props => {

const {textContainer, thumbnail, thumbnailContainer, headerText, productImage, grid, linkStyle, priceStyle, textPadding} = styles;

const {seller, date_created, images, title, price, description} = props.product;

  return(
    <Card>
      <ProductLayout
        navigation={props.navigation}
        product={props.product} />
      <CardSection>
        <View style={grid}>
          <View style={priceStyle}>
            <Text>PRICE: $ {price}</Text>
          </View>
          <View style={{flex:1}}>
            <Button color="#CCC">
              OFFER
            </Button>
          </View>
          <View style={{flex:1}}>
            <Button onPress={() => props.navigation.navigate('Checkout')} color="#D62246">
              BUY
            </Button>
          </View>
        </View>
      </CardSection>
    </Card>
  );
}

export default SingleProductDetail;

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
  priceStyle: {
    flex: 4,
    alignSelf: 'center',
    paddingLeft: 5
  },
  textPadding: {
    padding: 5,
  }
});

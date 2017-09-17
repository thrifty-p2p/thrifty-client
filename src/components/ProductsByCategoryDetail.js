import React from 'react';
import {View, Text, Image, StyleSheet, Linking} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Card, CardSection, Button} from './common';
import ProductLayout from './ProductLayout';

const SingleProductDetail = props => {

const {grid, priceStyle} = styles;

const {price} = props.product;

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
            <Button onPress={() => props.navigation.navigate('Product', {productID: props.product.id})} color="#CCC">
              INFO
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
  grid: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  priceStyle: {
    flex: 4,
    alignSelf: 'center',
    paddingLeft: 5
  }
});

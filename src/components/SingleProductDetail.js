import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
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
            <Text>${price}</Text>
          </View>
          <View style={{flex:1}}>
            <Button color="#9d8df1">
              OFFER
            </Button>
          </View>
          <View style={{flex:1}}>
            <Button onPress={() => props.navigation.navigate('Cart', {product: props.product})} color="#1cfeba">
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

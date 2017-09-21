import React from 'react';
import {View, Text, StyleSheet, Platform, Image} from 'react-native';

import { Header, Card, CardSection, Button } from './common';

const CartPage = props => {
  const {product} = props.navigation.state.params;
  return(
    <View style={styles.container}>
      <Header
        isBackProp={true}
        navigation={props.navigation}/>

      <Card>
        <View style={styles.productCard}>

          <View style={styles.left}>
            <Image source={{uri: product.images[0].image_url}} style={styles.thumbnail}/>
          </View>

          <View style={styles.center}>
            <View style={styles.cardText}>
              <Text style={styles.text}>{product.title.toUpperCase().substr(0, 30)}</Text>
              <Text style={styles.text}>{product.seller.first_name} {product.seller.last_name}</Text>
              <Text style={styles.text}>{product.seller.username}</Text>
            </View>
          </View>

          <View style={styles.right}>
            <Text style={styles.price}>${product.price}</Text>
          </View>

        </View>

        <View>
          <CardSection>
            <Button onPress={() => props.navigation.navigate('Checkout', {product: product})} color="#1CFEBA">
              BUY NOW
            </Button>
          </CardSection>
        </View>
      </Card>
    </View>
  );
}

export default CartPage;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },
  thumbnail: {
    height: 75,
    width: 75
  },
  productCard: {
    padding: 10,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  left: {
    paddingRight: 10
  },
  text: {
    fontSize: 12,
    paddingRight: 10,
    alignSelf: 'flex-start',
    paddingBottom: 0
  },
  cardText: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  buttons: {
    marginTop: 10,
    width: 200,
    alignSelf: 'center'
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 3,
    paddingTop: 3
  },
  price: {
    fontSize: 16
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingBottom: 3,
    paddingTop: 3
  }
});

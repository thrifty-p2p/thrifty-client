import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Card, CardSection, Button} from './common';

const UserProfileDetail = (props) => {

  const {grid, row, priceStyle, image} = styles;

  const {images, title, id} = props.product;

  return (
    <View>
      <Card>
        <CardSection>
          <TouchableOpacity onPress={() => props.navigation.navigate('Product', {productID: id})} color="#1cfeba">
            <Image source={{uri: images[0].image_url }} style={styles.thumbnail} />
          </TouchableOpacity>
        </CardSection>
        <CardSection>
          <Text style={{fontSize: 12}}>
            {title.substr(0, 20).toUpperCase()}
          </Text>
        </CardSection>
        <CardSection>
          <Button onPress={() => props.navigation.navigate('Checkout')} color="#1cfeba">
            BUY
          </Button>
        </CardSection>
      </Card>
    </View>
  );
}

export default UserProfileDetail;

const styles = StyleSheet.create({
  thumbnail: {height: 150, width: 175}
});

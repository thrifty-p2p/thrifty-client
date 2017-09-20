import React, {Component} from 'react';
import {ScrollView, View, Image, Text, StyleSheet, Platform, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Picker} from 'native-base';
import { NavigationActions } from 'react-navigation'

import {Header, Button, InputField, CardSection} from './common';
import {fetchAllProducts, uploadFile, updateNewProductForm, createNewProduct} from '../actions/product.actions';

const Item = Picker.Item;

const resetFeed = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Feed'})
  ]
});

class NewProductFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ''
    }
  }

  async onSubmitNewProduct() {
    const image = this.props.navigation.state.params.selected[0];
    this.props.uploadFile(image);
    const UID = await AsyncStorage.getItem('userID').then(UID => UID).catch(error => error);
    const product = {
      title: this.props.title,
      price: parseInt(this.props.price, 10),
      description: this.props.description,
      color: this.props.color,
      category_names: [this.state.category],
      // IMG_0001.JPG
      image_url: `https://thrifty-p2p.s3.amazonaws.com/%2F${image.filename}`,
      seller_id: 1
      // this.state.UID
      // Seller ID hard coded until I can get AWS to work with Bearer Auth
    }
    await this.props.createNewProduct(product);
    await this.setState({category: ''});
    await this.props.fetchAllProducts();
    await this.props.navigation.navigate(resetFeed)
  }

  render() {
    return (
      <View style={styles.container}>
        <Header isBackProp={true} navigation={this.props.navigation}/>
        <ScrollView>
          <Image source={{uri: this.props.navigation.state.params.selected[0].uri}} style={styles.productImage}/>
          <CardSection>
            <InputField
              label="TITLE"
              placeholder="Title"
              onChangeText={value => this.props.updateNewProductForm({property: 'title', value})}
              value={this.props.title}
            />
          </CardSection>

          <CardSection>
            <InputField
              label="PRICE"
              placeholder="$"
              onChangeText={value => this.props.updateNewProductForm({property: 'price', value})}
              value={this.props.price}
            />
          </CardSection>

          <CardSection>
            <InputField
              label="DESCRIPTION"
              placeholder="Description"
              onChangeText={value => this.props.updateNewProductForm({property: 'description', value})}
              value={this.props.description}
            />
          </CardSection>

          <CardSection>
            <InputField
              label="COLOR"
              placeholder="Color"
              onChangeText={value => this.props.updateNewProductForm({property: 'color', value})}
              value={this.props.color}
            />
          </CardSection>

          <CardSection>
            <Picker
              placeholder="Select Category"
              iosHeader="Select One"
              mode="dropdown"
              selectedValue={this.state.category}
              onValueChange={value => this.setState({category: value})}>
              <Item label='Men' value='Accessories (Men)'/>
              <Item label='Women' value='Accessories (Women)'/>
              <Item label='Books' value='Books'/>
              <Item label='Computers' value='Computers'/>
              <Item label='Mobile Electronics' value='Mobile Electronics'/>
              <Item label='CDs/DVDs' value='CDs/DVDs'/>
              <Item label='Music Instruments' value='Music Instruments'/>
              <Item label='Clothes' value='Clothes'/>
              <Item label='Tickets' value='Tickets'/>
              <Item label='Video Games' value='Video Games'/>
            </Picker>
          </CardSection>

          <CardSection>
            <Button onPress={this.onSubmitNewProduct.bind(this)} color="#1CFEBA">
              CREATE PRODUCT
            </Button>
          </CardSection>
        </ScrollView>

      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateNewProductForm,
    uploadFile,
    fetchAllProducts,
    createNewProduct
  }, dispatch);
}

const mapStateToProps = (state) => {
  const {title, price, description, color} = state.newProduct;
  return {title, price, description, color};
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProductFrom);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    justifyContent: 'space-between'
  },
  productImage: {
    height: 300,
    flex: 1,
    width: null
  }
});

import React, {Component} from 'react';
import {ScrollView, View, Image, Text, StyleSheet, Platform, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Picker} from 'native-base';

import {Header, Button, InputField, CardSection} from './common';
import {s3ImageUpload, updateNewProductForm, createNewProduct} from '../actions/product.actions';

const Item = Picker.Item;

class NewProductFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      UID: null
    }
  }

  async onSubmitNewProduct() {
    const imageObject = this.props.navigation.state.params.selected[0];

    this.props.s3ImageUpload(imageObject);

    await AsyncStorage.getItem('userID')
      .then(UID => {
        this.setState({UID})
      })
      .catch(error => error);

    const product = {
      title: this.props.title,
      price: parseInt(this.props.price, 10),
      description: this.props.description,
      color: this.props.color,
      category_names: [this.state.category],
      image_url: `https://thrifty-p2p.s3.amazonaws.com/${imageObject.filename}`,
      seller_id: 1
      // this.state.UID
      // Seller ID hard coded until I can get AWS to work with Bearer Auth
    }

    await this.props.createNewProduct(product);

    this.setState({category: ''})

  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header isBackProp={true} navigation={this.props.navigation}/>
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

        <Button onPress={this.onSubmitNewProduct.bind(this)} color="#1CFEBA">
          CREATE PRODUCT
        </Button>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    s3ImageUpload,
    updateNewProductForm,
    createNewProduct}, dispatch);
}

const mapStateToProps = (state) => {
  const {title, price, description, color} = state.newProduct;
  return {title, price, description, color};
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProductFrom);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },
  productImage: {
    height: 300,
    flex: 1,
    width: null
  }
});

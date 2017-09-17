import React, {Component} from 'react';
import {ScrollView, View, Image, Text, StyleSheet, Platform, Picker} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Header, Button, InputField, CardSection} from './common';
import {s3ImageUpload, updateNewProductForm} from '../actions/product.actions';

class NewProductFrom extends Component {
  onSubmitNewProduct() {
    const image = this.props.navigation.state.params.selected[0];
    this.props.s3ImageUpload(image);
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
            multiline
            numberOfLines={3}
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

        <CardSection style={{flexDirection: 'column'}}>
          <Text style={styles.pickerLabelStyle}>CATEGORY</Text>
          <Picker
            selectedValue={this.props.category}
            onValueChange={value => this.props.updateNewProductForm({property: 'category', value})}>
            <Picker.Item label='Men' value='Accessories (Men)'/>
            <Picker.Item label='Women' value='Accessories (Women)'/>
            <Picker.Item label='Books' value='Books'/>
            <Picker.Item label='Computers' value='Computers'/>
            <Picker.Item label='Mobile Electronics' value='Mobile Electronics'/>
            <Picker.Item label='CDs/DVDs' value='CDs/DVDs'/>
            <Picker.Item label='Music Instruments' value='Music Instruments'/>
            <Picker.Item label='Clothes' value='Clothes'/>
            <Picker.Item label='Tickets' value='Tickets'/>
            <Picker.Item label='Video Games' value='Video Games'/>
          </Picker>
        </CardSection>

        <Button onPress={this.onSubmitNewProduct.bind(this)} color="#D62246">
          CREATE PRODUCT
          {console.log(this.props.newProduct)}
        </Button>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({s3ImageUpload, updateNewProductForm}, dispatch);
}

const mapStateToProps = (state) => {
  const {title, price, description, color, category} = state.newProduct;
  return {title, price, description, color, category};
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
  },
  pickerLabelStyle: {
    fontSize: 14,
    paddingLeft: 20
  }
});

const categories = [
  {label:'Men', value:'Accessories (Men)'},
  {label:'Women', value:'Accessories (Women)'}
]

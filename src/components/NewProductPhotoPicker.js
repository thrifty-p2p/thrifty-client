import React, { Component } from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';

import {addNewProductImages} from '../actions/product.actions';
import {Header, CardSection, Button} from './common';

class NewProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: [],
    };
    this.getSelectedImages = this.getSelectedImages.bind(this);
  }

  getSelectedImages(images, current) {
    this.setState({
      selected: images,
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <Header isBackProp={false}/>

        <CameraRollPicker
          scrollRenderAheadDistance={500}
          initialListSize={1}
          pageSize={3}
          removeClippedSubviews={false}
          groupTypes='SavedPhotos'
          batchSize={5}
          maximum={1}
          selected={this.state.selected}
          assetType='Photos'
          imagesPerRow={3}
          imageMargin={5}
          callback={this.getSelectedImages} />

        <CardSection>
          <Button
            onPress={() => this.props.navigation.navigate('NewProductForm', {selected: this.state.selected})}
            color="#D62246">

            ADD PRODUCT

          </Button>
        </CardSection>
      </View>
    );
  }
}

export default NewProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6AE2D',
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },
  content: {
    marginTop: 15,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 16,
    alignItems: 'center',
    color: '#fff',
  },
  bold: {
    fontWeight: 'bold',
  },
  info: {
    fontSize: 12,
  },
});

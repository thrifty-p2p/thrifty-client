import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Platform, CameraRoll} from 'react-native';

import {Header, CardSection, Button} from './common';


class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      images: []
    }
    this.getPhotos = this.getPhotos.bind(this);
  }

  getPhotos() {
    CameraRoll.getPhotos({
      first: 20,
    })
    .then(response => {
        const assets = response.edges;
        const images = assets.map(asset => {
          return asset.node.image
        });
        this.setState({
          isLoaded: true,
          images
        });
    }).catch(error => {
      console.error(error);
    });
  }

  renderImages() {
    if (this.state.isLoaded) {
      return this.state.images.map(image => {
        console.log(image);
        return <Image key={image.filename} source={{uri: image.uri}} style={styles.images}/>
      });
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header isBackProp={false}/>
        <View>
          {this.renderImages()}
        </View>
        <CardSection>
          <Button onPress={this.getPhotos} color="#D62246">
            ADD
          </Button>
        </CardSection>
      </View>
    );
  }
}

export default NewProduct;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },
  images: {
    width: 50,
    height: 50
  }
});

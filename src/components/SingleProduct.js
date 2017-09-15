// Render the Product Detail Page
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  ScrollView
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProductById} from '../actions/product.actions';
import {Header, Button, LoadingIcon, Card, CardSection} from './common';
import SingleProductDetail from './SingleProductDetail';

class SingleProduct extends Component {
  componentDidMount() {
    const {productID} = this.props.navigation.state.params;
    this.props.fetchProductById(productID);
  }

  renderProductById() {
    console.log(this.props);
    if (this.props.isReceived) {
      return (
        <SingleProductDetail navigation={this.props.navigation} product={this.props.productById} />
      );
    }
  }

  render() {
    const {container} = styles;

    if (this.props.isLoading) {
      return (
        <View style={styles.body}>
          <LoadingIcon/>
        </View>
      );
    }

    return (
      <View style={container}>
        <Header isBackProp={true} navigation={this.props.navigation}/>
        <ScrollView style={{marginBottom: 60}}>

          {this.renderProductById()}

        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchProductById
  }, dispatch);
}

const mapStateToProps = (state) => {
  const {isLoading, productById, isReceived} = state.productById;
  return {isLoading, productById, isReceived};
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },
  body: {
    alignSelf: 'center',
    justifyContent: 'center'
  }
});

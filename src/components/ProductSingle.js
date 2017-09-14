// Render the Product Detail Page
import React from 'react';
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
import ProductSingleDetail from './ProductSingleDetail';

class ProductSingle extends React.Component {
  componentDidMount() {
    const {productID} = this.props.navigation.state.params;
    this.props.fetchProductById(productID);
  }

  renderProductById() {
    if (this.props.isReceived) {
      return (
        <ProductSingleDetail product={this.props.productById} />
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
  const {isLoading, productById, isReceived} = state.products;
  return {isLoading, productById, isReceived};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSingle);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },
  body: {
    alignSelf: 'center',
    justifyContent: 'center'
  }
});

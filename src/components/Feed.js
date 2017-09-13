import React from 'react';
import {View, ScrollView, Text, StyleSheet, Platform, ListView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchAllProducts} from '../actions/product.actions';
import {Card, CardSection, LoadingIcon} from './common';
import ProductDetail from './ProductDetail';

class Feed extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.fetchAllProducts();
  }

  renderProducts() {
    return this.props.products.map(product => {
      if(product.is_available) {
        return <ProductDetail key={product.id} product={product}/>;
      }
    });
  }

  render() {
    if (this.props.isLoading) {
      return (
        <View style={styles.body}>
          <LoadingIcon />
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
        {console.log(this.props.products)}
        {this.renderProducts()}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { products, isLoading } = state.products
  return { products, isLoading };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchAllProducts}, dispatch);
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },
  body: {
    alignSelf: 'center',
    justifyContent: 'center'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);

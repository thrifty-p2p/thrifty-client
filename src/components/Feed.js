import React from 'react';
import {View, ScrollView, Text, StyleSheet, Platform, ListView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchAllProducts} from '../actions/product.actions';
import {Card, CardSection, LoadingIcon, Header} from './common';
import ProductDetail from './ProductDetail';

class Feed extends React.Component {
  componentDidMount(){
    this.props.fetchAllProducts();
  }

  renderProducts() {
    const sortProductsByDate = this.props.products.sort((a,b) => {
      return new Date(b.date_created) - new Date(a.date_created);
    });
    return sortProductsByDate.map(product => {
      if(product.is_available) {
        return <ProductDetail key={product.id} product={product} navigation={this.props.navigation}/>;
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
      <View style={styles.container}>
        <Header isBackProp={false}/>
        <ScrollView style={{marginBottom: 60}}>
          {this.renderProducts()}
        </ScrollView>
      </View>
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

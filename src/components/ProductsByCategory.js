import React, {Component} from 'react';
import {View, ScrollView, Platform, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProductsByCategory} from '../actions/product.actions';
import {Header, LoadingIcon} from './common';
import ProductsByCategoryDetail from './ProductsByCategoryDetail';

class ProductsByCategory extends Component {
  componentDidMount() {
    const { categoryID } = this.props.navigation.state.params
    this.props.fetchProductsByCategory(categoryID);
  }

  renderByCategory() {
    if (this.props.isReceived) {
      const sortProductsByDate = this.props.productsByCategory.products.sort((a,b) => {
        return new Date(b.date_created) - new Date(a.date_created);
      });
      return sortProductsByDate.map(product => {
        if(product.is_available) {
          return (
            <ProductsByCategoryDetail
              key={product.id}
              product={product}
              navigation={this.props.navigation}/>
          );
        }
      });
    };
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
        <Header isBackProp={true} navigation={this.props.navigation}/>
        <ScrollView style={{marginBottom: 56}}>
          {this.renderByCategory()}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {isReceived, isLoading, productsByCategory} = state.productsByCategory;
  return {isReceived, isLoading, productsByCategory};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchProductsByCategory}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsByCategory);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },
  body: {
    alignSelf: 'center',
    justifyContent: 'center'
  }
});

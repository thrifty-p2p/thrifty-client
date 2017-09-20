import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Platform} from 'react-native';
import stripe from 'tipsi-stripe';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {paymentRequest} from '../actions/checkout.actions';
import {Header, LoadingIcon} from './common';
import { NavigationActions } from 'react-navigation'


const resetFeed = NavigationActions.reset({
  index: 0,
  key: null,
  actions: [
    NavigationActions.navigate({ routeName: 'Feed'})
  ]
});

stripe.init({
  publishableKey: 'pk_test_xGwHSSWGMyxF78h4Vjz7mqtA',
});

class Checkout extends Component {
  componentDidMount() {
    const options = {
      smsAutofillDisabled: true,
      requiredBillingAddressFields: 'full',
      theme
    };

    stripe.paymentRequestWithCardForm(options)
      .then(response => {
        const {product} = this.props.navigation.state.params;

        const orderDetails = {
          email: 'djaudius@gmail.com',
          tokenId: response.tokenId,
          amount: product.price,
          description: product.description
        };
        this.props.paymentRequest(orderDetails, product);
      }
    ).catch(error => {
      this.props.navigation.dispatch(resetFeed);
    });
  }

  renderOrderDetails() {
    console.log(this.props);
    if (this.props.isOrderSuccessful) {
      return (
        <View style={styles.body}>
          <Image source={{uri: 'https://s3.us-east-2.amazonaws.com/thrifty-p2p/thrifty_logo.png'}} style={styles.image} />
          <Text style={styles.order}>ORDER ID: {this.props.transactionID}</Text>
          <Text style={styles.order}>{'Thank you for your order!'.toUpperCase()}</Text>
        </View>
      );
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
        <Header navigation={this.props.navigation}/>
        {this.renderOrderDetails()}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.checkout);
  return {isLoading, isOrderSuccessful, transactionID} = state.checkout;
  return {
    isLoading,
    isOrderSuccessful,
    transactionID
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({paymentRequest}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },
  body: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  order: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center'
  },
  image: {
    height: 100,
    width: 250,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20
  }
});

const theme = {
  primaryBackgroundColor: '#1E201C',
  secondaryBackgroundColor: '#5B5F97',
  primaryForegroundColor: '#1CFEBA',
  secondaryForegroundColor: '#9D8DF1',
  accentColor: '#1CFEBA',
  errorColor: '#A20021'
};

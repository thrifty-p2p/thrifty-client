import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import stripe from 'tipsi-stripe';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {paymentRequest} from '../actions/checkout.actions';
import {Header, LoadingIcon} from './common';

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
        this.props.paymentRequest(orderDetails);
      }
    )
  }

  renderOrderDetails() {
    if (this.props.isOrderSuccessful) {
      return (
        <View>
          <Text>Thank you for your order!</Text>
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
        <Header isBackProp={true} navigation={this.props.navigation}/>
        {this.renderOrderDetails()}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.checkout);
  return {isLoading, isOrderSuccessful} = state.checkout;
  return {
    isLoading,
    isOrderSuccessful
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({paymentRequest}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
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

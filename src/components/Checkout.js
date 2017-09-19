import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import stripe from 'tipsi-stripe';

import {Header} from './common';


stripe.init({
  publishableKey: 'pk_test_xGwHSSWGMyxF78h4Vjz7mqtA',
});

const theme = {
  primaryBackgroundColor: '#1E201C',
  secondaryBackgroundColor: '#5B5F97',
  primaryForegroundColor: '#1CFEBA',
  secondaryForegroundColor: '#9D8DF1',
  accentColor: '#1CFEBA',
  errorColor: '#A20021'
};


class Checkout extends Component {
  componentDidMount() {

    const options = {
      smsAutofillDisabled: true,
      requiredBillingAddressFields: 'full',
      theme
    };
    stripe.paymentRequestWithCardForm(options)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Header isBackProp={true} navigation={this.props.navigation}/>
      </View>
    )
  }
}

export default Checkout;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  }
});

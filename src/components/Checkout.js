import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import stripe from 'tipsi-stripe';
import Axios from 'axios';

import {Header} from './common';

const API_URL = (__DEV__) ? 'http://localhost:5000/api' : 'https://thrifty-p2p.herokuapp.com/api';

stripe.init({
  publishableKey: 'pk_test_xGwHSSWGMyxF78h4Vjz7mqtA',
});

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOrderSuccessful: false
    }
  }

  componentDidMount() {
    const options = {
      smsAutofillDisabled: true,
      requiredBillingAddressFields: 'full',
      theme
    };

    stripe.paymentRequestWithCardForm(options)
      .then(response => {
        const {product} = this.props.navigation.state.params;

        const details = {
          email: 'djaudius@gmail.com',
          tokenId: response.tokenId,
          amount: product.price,
          description: product.description
        }

        Axios.post(`${API_URL}/payment`, details, { headers: {"Content-Type": "application/json"}})
          .then(response => {
            console.log(response);
            if (response.status === 200) {
              // this.props.completeProductSale(product.id);
              // this.setState({isOrderSuccessful: true})
            }
          })
          .catch(error => console.log(error));
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

const theme = {
  primaryBackgroundColor: '#1E201C',
  secondaryBackgroundColor: '#5B5F97',
  primaryForegroundColor: '#1CFEBA',
  secondaryForegroundColor: '#9D8DF1',
  accentColor: '#1CFEBA',
  errorColor: '#A20021'
};

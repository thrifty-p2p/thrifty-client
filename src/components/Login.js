import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {CardSection, InputField, Button} from './common';
import {updateAccountForm, loginAccount} from '../actions/auth.actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    const {email, password} = this.props;
    this.props.loginAccount({email: email.toLowerCase(), password});
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>

        <View>
          <Image source={{uri: 'https://s3.us-east-2.amazonaws.com/thrifty-p2p/thrifty_logo.png'}} style={styles.image} />
        </View>

        <View style={styles.inputs}>
          <CardSection>
            <InputField
              label="EMAIL"
              placeholder="Example@mail.com"
              onChangeText={value => this.props.updateAccountForm({property: 'email', value})}
              value={this.props.email}
            />
          </CardSection>
        </View>
        <View style={styles.inputs}>
          <CardSection>
            <InputField
              secureTextEntry
              label="PASSWORD"
              placeholder="Password"
              onChangeText={value => this.props.updateAccountForm({property: 'password', value})}
              value={this.props.password}
            />
          </CardSection>
        </View>
        <View style={styles.inputs}>
          <CardSection>
            <Button onPress={this.onButtonPress} color="#1CFEBA">
              LOGIN
            </Button>
          </CardSection>
        </View>

      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {email, password, isLoading, isLoggedIn} = state.auth;
  return {email, password, isLoading, isLoggedIn}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateAccountForm,
    loginAccount
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 250,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20
  },
  inputs: {
    alignSelf: "stretch",
    width: 300,
    alignSelf: 'center',
    padding: 5,
  },
})

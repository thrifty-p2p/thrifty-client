import React, {Component} from 'react';
import {View, Text} from 'react-native';
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
      <View style={{flex: 1}}>
        <CardSection>

          <InputField
            label="EMAIL"
            placeholder="example@mail.com"
            onChangeText={value => this.props.updateAccountForm({property: 'email', value})}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <InputField
            secureTextEntry
            label="PASSWORD"
            placeholder="password"
            onChangeText={value => this.props.updateAccountForm({property: 'password', value})}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress} color="#1CFEBA">
            LOGIN
          </Button>
        </CardSection>

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

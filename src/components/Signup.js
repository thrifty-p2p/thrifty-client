import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {CardSection, InputField, Button} from './common';
import {updateAccountForm, createNewAccount} from '../actions/auth.actions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    const {first_name, last_name, email, username, password} = this.props;
    this.props.createNewAccount({first_name, last_name, email: email.toLowerCase(), username, password});
  }

  render() {
    return (
      <View style={{flex: 1}}>

        <CardSection>
          <InputField
            label="FIRST NAME"
            placeholder="First Name"
            onChangeText={value => this.props.updateAccountForm({property: 'first_name', value})}
            value={this.props.first_name}/>
        </CardSection>

        <CardSection>
          <InputField
            label="LAST NAME"
            placeholder="Last Name"
            onChangeText={value => this.props.updateAccountForm({property: 'last_name', value})}
            value={this.props.last_name}/>
        </CardSection>

        <CardSection>
          <InputField
            label="EMAIL"
            placeholder="Example@mail.com"
            onChangeText={value => this.props.updateAccountForm({property: 'email', value})}
            value={this.props.email}/>
        </CardSection>

        <CardSection>
          <InputField
            label="USERNAME"
            placeholder="Username"
            onChangeText={value => this.props.updateAccountForm({property: 'username', value})}
            value={this.props.username}/>
        </CardSection>

        <CardSection>
          <InputField
            secureTextEntry
            label="PASSWORD"
            placeholder="Password"
            onChangeText={value => this.props.updateAccountForm({property: 'password', value})}
            value={this.props.password}/>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress} color="#1CFEBA">
            SIGN UP
          </Button>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {first_name, last_name, email, username, password} = state.auth;
  return {
    first_name,
    last_name,
    email,
    username,
    password
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateAccountForm, createNewAccount}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

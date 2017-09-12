import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {CardSection, InputField, Button} from './common';
import {updateAccountForm} from '../actions/auth.actions';

class Signup extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <View style={{flex: 1}}>

        <CardSection>
          <InputField
            secureTextEntry
            label="FIRST NAME"
            placeholder="password"
            onChangeText={value => this.props.updateAccountForm({property: 'first_name', value})}
            value={this.props.first_name}/>
        </CardSection>

        <CardSection>
          <InputField
            secureTextEntry
            label="LAST NAME"
            placeholder="password"
            onChangeText={value => this.props.updateAccountForm({property: 'last_name', value})}
            value={this.props.last_name}/>
        </CardSection>

        <CardSection>
          <InputField
            label="EMAIL"
            placeholder="example@mail.com"
            onChangeText={value => this.props.updateAccountForm({property: 'email', value})}
            value={this.props.email}/>
        </CardSection>

        <CardSection>
          <InputField
            secureTextEntry
            label="USERNAME"
            placeholder="password"
            onChangeText={value => this.props.updateAccountForm({property: 'username', value})}
            value={this.props.username}/>
        </CardSection>

        <CardSection>
          <InputField
            secureTextEntry
            label="PASSWORD"
            placeholder="password"
            onChangeText={value => this.props.updateAccountForm({property: 'password', value})}
            value={this.props.password}/>
        </CardSection>

        <CardSection>
          <Button>
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
  return bindActionCreators({updateAccountForm}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

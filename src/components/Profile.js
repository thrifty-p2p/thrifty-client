import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {CardSection, InputField, Button, Header, LoadingIcon} from './common';
import {logoutAccount} from '../actions/auth.actions';
import {fetchAccountByID, updateProfileForm} from '../actions/profile.actions';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    let UID = ''
    await AsyncStorage.getItem('userID')
      .then( userID => UID = userID)
      .catch(error => console.error(error));
    await this.props.fetchAccountByID(10);
  }

  onLogout() {
    this.props.logoutAccount();
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

        <CardSection>
          <InputField
            label="FIRST NAME"
            placeholder="First Name"
            onChangeText={value => this.props.updateProfileForm({property: 'first_name', value})}
            value={this.props.first_name}/>
        </CardSection>

        <CardSection>
          <InputField
            label="LAST NAME"
            placeholder="Last Name"
            onChangeText={value => this.props.updateProfileForm({property: 'last_name', value})}
            value={this.props.last_name}/>
        </CardSection>

        <CardSection>
          <InputField
            label="EMAIL"
            placeholder="Example@mail.com"
            onChangeText={value => this.props.updateProfileForm({property: 'email', value})}
            value={this.props.email}/>
        </CardSection>

        <CardSection>
          <InputField
            label="USERNAME"
            placeholder="Username"
            onChangeText={value => this.props.updateProfileForm({property: 'username', value})}
            value={this.props.username}/>
        </CardSection>

        <CardSection>
          <InputField
            label="ADDRESS"
            placeholder="Address"
            onChangeText={value => this.props.updateProfileForm({property: 'address', value})}
            value={this.props.address}/>
        </CardSection>

        <CardSection>
          <InputField
            label="CITY"
            placeholder="City"
            onChangeText={value => this.props.updateProfileForm({property: 'city', value})}
            value={this.props.city}/>
        </CardSection>

        <CardSection>
          <InputField
            label="STATE"
            placeholder="State"
            onChangeText={value => this.props.updateProfileForm({property: 'state', value})}
            value={this.props.st}/>
        </CardSection>

        <CardSection>
          <InputField
            label="ZIP"
            placeholder="Zip Code"
            onChangeText={value => this.props.updateProfileForm({property: 'zip', value})}
            value={this.props.zip}/>
        </CardSection>


        <View style={styles.button}>
          <View style={{marginBottom: 1}}>
            <CardSection>
              <Button color="#1cfeba">UPDATE</Button>
            </CardSection>
          </View>
          <View>
            <CardSection>
              <Button onPress={this.onLogout} color="#1cfeba">LOGOUT</Button>
            </CardSection>
          </View>
        </View>

      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.profile);
  const {isLoading, isReceived, first_name, last_name, email, username, address, city, st, zip} = state.profile;
  return {
    isLoading,
    isReceived,
    first_name,
    last_name,
    email,
    username,
    address,
    city,
    st,
    zip
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logoutAccount,
    fetchAccountByID,
    updateProfileForm
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },
  button: {flex: 1, justifyContent: 'flex-end'}
});

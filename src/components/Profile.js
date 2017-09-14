import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {CardSection, Button, Header} from './common';
import {logoutAccount} from '../actions/auth.actions';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    this.props.logoutAccount();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header isBackProp={false}/>
        <CardSection>
          <Button onPress={this.onLogout}>LOGOUT</Button>
        </CardSection>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({logoutAccount}, dispatch);
};

export default connect(null, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  }
});

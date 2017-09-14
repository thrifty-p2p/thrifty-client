import React, {Component} from 'react';
import {connect} from 'react-redux';
import bindActionCreators from 'redux';

import AppNavigation from './AppNavigation';
import LandingNavigation from './LandingNavigation';

class RootNavigation extends Component {

  render() {
    if (this.props.isLoggedIn) {
      return <AppNavigation />
    }
    return (
      <LandingNavigation /> //<AppNavigation /> 
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
};

export default connect(mapStateToProps)(RootNavigation);

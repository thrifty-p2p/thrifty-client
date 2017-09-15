import React, {Component} from 'react';
import {View, ScrollView, Platform, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProductsByCategory} from '../actions/product.actions';
import {Header} from './common';


class ByCategory extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    const { categoryID } = this.props.navigation.state.params
    // this.props.fetchProductsByCategory(this.props.categoryID);
    console.log(categoryID);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header isBackProp={true} navigation={this.props.navigation}/>
        <ScrollView style={{marginBottom: 60}}>

        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({mapStateToProps}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ByCategory);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },
  body: {
    alignSelf: 'center',
    justifyContent: 'center'
  }
});

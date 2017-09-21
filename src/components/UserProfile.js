// Render the Product Detail Page
import React from 'react';
import {View, ScrollView, Text, StyleSheet, Image, ImageBackground, Platform} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchProductsByAccount} from '../actions/product.actions';
import {Header, LoadingIcon} from './common';
import UserProfileDetail from './UserProfileDetail';

class UserProfile extends React.Component {
  componentDidMount() {
    const {sellerID} = this.props.navigation.state.params;
    this.props.fetchProductsByAccount(sellerID);
  }

  renderProductsByAccount() {
    if (this.props.isReceived) {
      const {products} = this.props.productsByAccount;
      const sortProductsByDate = products.sort((a,b) => {
        return new Date(b.date_created) - new Date(a.date_created);
      });
      return sortProductsByDate.map(product => {
        if(product.is_available) {
          return (
            <UserProfileDetail
              key={product.id}
              product={product}
              navigation={this.props.navigation}/>
          );
        }
      });
    };
  }

  renderProfileImage() {
    if (this.props.isReceived) {
      const {profile_image_url, first_name, last_name, username, total_sales} = this.props.productsByAccount;
      return (
        <ImageBackground source={{ uri: profile_image_url }} style={styles.image}>
          <View style={styles.backgroundImage}>
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>
                {`${first_name.toUpperCase()} ${last_name.toUpperCase()}`}
              </Text>
              <Text style={styles.headerText}>
                SALES: {total_sales}
              </Text>
            </View>
          </View>
        </ImageBackground>
      );
    };
  }

  render() {
    const {container, row, column, body} = styles;
    if (this.props.isLoading) {
      return (
        <View style={body}>
          <LoadingIcon />
        </View>
      );
    };

    return (
      <View style={container}>
        <Header
          isBackProp={true}
          navigation={this.props.navigation}/>
        <ScrollView>
          {this.renderProfileImage()}
          <View style={row}>
            {this.renderProductsByAccount()}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {productsByAccount, isLoading, isReceived} = state.productsByAccount;
  return {
    isReceived,
    isLoading,
    productsByAccount
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchProductsByAccount}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },
  body: {
    alignSelf: 'center',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  image: {
    height: 150,
    width: null
  },
  backgroundImage: {
    height: 150,
    width: null,
    backgroundColor: 'rgba(30, 32, 28, 0.5)',
    justifyContent: 'flex-end'
  },
  headerText: {
    color: '#FFF',
    marginRight: 10,
    alignSelf: 'flex-end',
    elevation: 1,
    fontWeight: '600',
    paddingBottom: 0,
    marginBottom: 0
  },
  headerTextContainer: {
    marginBottom: 10
  }
});

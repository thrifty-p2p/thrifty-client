import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
  const { cardContainer } = styles;
  return(
    <View style={cardContainer}>
      {props.children}
    </View>
  );
}

export { Card };

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ADADAC',
    borderBottomWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: '#FFF'
  }
});

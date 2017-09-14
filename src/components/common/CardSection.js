import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = props => {
  const { cardSectionContainer } = styles
  return(
    <View style={cardSectionContainer}>
      {props.children}
    </View>
  );
}

export { CardSection };

const styles = StyleSheet.create({
  cardSectionContainer: {
    borderBottomWidth: 1,
    backgroundColor: "#FFF",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#EEE",
    position: "relative"
  }
})

import React from 'react';
import {StyleSheet, View} from 'react-native';

const WhiteSpace = ({vertical}) => {
  return (
    <View
      style={vertical ? styles.containerVertical : styles.containerHorizontal}
    />
  );
};

export default WhiteSpace;

const styles = StyleSheet.create({
  containerVertical: {
    marginTop: 18,
  },
  containerHorizontal: {
    marginRight: 12,
  },
});

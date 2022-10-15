import React from 'react';
import {View, Text} from 'react-native';

import styles from './DescriptionScreen.style';

const DescriptionScreen = ({pokemon}) => {
  return (
    <View>
      <Text style={styles.descriptionText}>{pokemon.description}</Text>
    </View>
  );
};

export default DescriptionScreen;

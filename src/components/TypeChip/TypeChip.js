import React from 'react';
import {Text, View} from 'react-native';

import styles from './TypeChip.style';

const TypeChip = ({type}) => {
  return (
    <View style={styles.container} needsOffscreenAlphaCompositing>
      <Text style={styles.typeText}>{type}</Text>
    </View>
  );
};

export default TypeChip;

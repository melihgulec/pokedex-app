import React from 'react';
import {View, Text} from 'react-native';

import styles from './InfoCard.style';

const InfoCard = ({title, component}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      {component}
    </View>
  );
};

export default InfoCard;

import React from 'react';
import {View, Text} from 'react-native';

import styles from './InfoCard.style';

const InfoCard = ({title, contentText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contentText}>{contentText}</Text>
    </View>
  );
};

export default InfoCard;

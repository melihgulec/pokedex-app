import React from 'react';
import {Text} from 'react-native';

import styles from './Title.style';

const Title = ({text}) => {
  return <Text style={styles.title}>{text}</Text>;
};
export default Title;

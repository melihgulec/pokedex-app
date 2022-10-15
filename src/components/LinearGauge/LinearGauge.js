import React, {useState} from 'react';
import {View, Text} from 'react-native';

import styles from './LinearGauge.style';

const LinearGauge = ({fillAmount}) => {
  const [containerWidth, setContainerWidth] = useState(0);

  const onLayout = event => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  return (
    <View onLayout={onLayout} style={styles.container}>
      <View
        style={[styles.bar, {width: containerWidth * (fillAmount / 100)}]}
      />
    </View>
  );
};

export default LinearGauge;

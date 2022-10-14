import React from 'react';
import {Text, TextInput, View} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Ionicons';
import styles from './Search.style';

const Search = () => {
  return (
    <View>
      <Icon style={styles.icon} name="search" size={20} />
      <TextInput
        style={styles.input}
        placeholder={'What Pokémon are you looking for?'}
      />
    </View>
  );
};

export default Search;

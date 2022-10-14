import React from 'react';
import {View, Text, Image} from 'react-native';
import capitalize from '../../utils/Capitalize';

import styles from './PokemonCard.style';

const PokemonCard = ({pokemon}) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.hashText}>#{pokemon.id}</Text>
        <Text style={styles.nameText}>{capitalize(pokemon.name)}</Text>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: pokemon.image,
        }}
      />
    </View>
  );
};

export default PokemonCard;

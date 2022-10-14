import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import capitalize from '../../utils/Capitalize';
import TypeChip from '../TypeChip';
import WhiteSpace from '../WhiteSpace/WhiteSpace';

import styles from './PokemonCard.style';
import getColorFromType from '../../utils/ColorFromType';

const PokemonCard = ({pokemon, onPress}) => {
  const renderTypeChips = ({item}) => {
    return <TypeChip type={capitalize(item)} />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: getColorFromType(pokemon.types[0])},
      ]}>
      <View style={styles.infoContainer}>
        <Text style={styles.hashText}>
          #{pokemon.id.toString().padStart(3, '0')}
        </Text>
        <Text style={styles.nameText}>{capitalize(pokemon.name)}</Text>
        <FlatList
          style={styles.typesContainer}
          data={pokemon.types}
          renderItem={renderTypeChips}
          ItemSeparatorComponent={() => <WhiteSpace vertical={false} />}
        />
      </View>
      <Image
        style={styles.image}
        source={{
          uri: pokemon.image,
        }}
      />
    </TouchableOpacity>
  );
};

export default PokemonCard;

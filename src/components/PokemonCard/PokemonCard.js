import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import capitalize from '../../utils/Capitalize';
import TypeChip from '../TypeChip';
import WhiteSpace from '../WhiteSpace/WhiteSpace';

import styles from './PokemonCard.style';

const PokemonCard = ({pokemon}) => {
  const renderTypeChips = ({item}) => {
    return <TypeChip type={capitalize(item)} />;
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default PokemonCard;

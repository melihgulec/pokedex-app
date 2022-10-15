import React, {useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';

import TabBar from '../../components/TabBar/TabBar';
import TypeChip from '../../components/TypeChip';
import WhiteSpace from '../../components/WhiteSpace/WhiteSpace';
import capitalize from '../../utils/Capitalize';
import getColorFromType from '../../utils/ColorFromType';
import AboutScreen from '../AboutScreen/AboutScreen';

import styles from './PokemonDetail.style';

const PokemonDetailScreen = ({route}) => {
  const {pokemon} = route.params;

  const renderTypeChips = ({item}) => {
    return <TypeChip type={capitalize(item)} />;
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: getColorFromType(pokemon.types[0])},
      ]}>
      <View style={styles.infoContainer}>
        <Text style={styles.pokemonIdText}>
          #{pokemon.id.toString().padStart(3, '0')}
        </Text>
        <Text style={styles.pokemonNameText}>{capitalize(pokemon.name)}</Text>
        <WhiteSpace vertical />
        <FlatList
          horizontal
          data={pokemon.types}
          renderItem={renderTypeChips}
          ItemSeparatorComponent={() => <WhiteSpace vertical={false} />}
        />
      </View>
      <View style={styles.detailContainer}>
        <Image style={styles.pokemonImage} source={{uri: pokemon.image}} />
        <TabBar>
          <TabBar.Tab title={'About'}>
            <AboutScreen pokemon={pokemon} />
          </TabBar.Tab>
          <TabBar.Tab title={'Stats'}>
            <Text>2. tab</Text>
          </TabBar.Tab>
          <TabBar.Tab title={'Evolution'}>
            <Text>3. tab</Text>
          </TabBar.Tab>
        </TabBar>
      </View>
    </View>
  );
};

export default PokemonDetailScreen;

import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {fetchPokemons} from '../../config/slices/pokemonSlice';
import styles from './Home.style';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import WhiteSpace from '../../components/WhiteSpace/WhiteSpace';

const Home = () => {
  const pokemonState = useSelector(state => state.pokemons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  const renderPokemonCard = item => {
    return <PokemonCard pokemon={item.item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>
      <Text style={styles.searchInfoText}>Search for Pokémon by name.</Text>
      <WhiteSpace />
      {pokemonState.loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={pokemonState.data}
          renderItem={renderPokemonCard}
          ItemSeparatorComponent={() => <WhiteSpace vertical />}
        />
      )}
    </View>
  );
};

export default Home;

import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import InfoCard from '../../components/InfoCard/InfoCard';
import Title from '../../components/Title/Title';
import WhiteSpace from '../../components/WhiteSpace/WhiteSpace';
import capitalize from '../../utils/Capitalize';

import styles from './AboutScreen.style';

const AboutScreen = ({pokemon}) => {
  console.log(pokemon)
  return (
    <ScrollView>
      <Title text={'Info'} />
      <WhiteSpace vertical />
      <Text>{pokemon.description}</Text>
      <WhiteSpace vertical />
      <InfoCard
        title={'Species'}
        component={<Text style={styles.contentText}>{pokemon.species}</Text>}
      />
      <WhiteSpace vertical />
      <InfoCard
        title={'Height'}
        component={<Text style={styles.contentText}>{pokemon.height}</Text>}
      />
      <WhiteSpace vertical />
      <InfoCard
        title={'Weight'}
        component={<Text style={styles.contentText}>{pokemon.weight}</Text>}
      />
      <WhiteSpace vertical />
      <InfoCard
        title={'Growth Rate'}
        component={
          <Text style={styles.contentText}>{pokemon.training.growthRate}</Text>
        }
      />
      <WhiteSpace vertical />
      <WhiteSpace vertical />
      <Title text={'Breeding'} />
      <WhiteSpace vertical />
      <InfoCard
        title={'Gender'}
        component={
          <Text
            style={
              styles.contentText
            }>{`M: ${pokemon.breedings.gender.male} | F: ${pokemon.breedings.gender.female}`}</Text>
        }
      />
      <WhiteSpace vertical />
      <InfoCard
        title={'Egg Groups'}
        component={
          <Text style={styles.contentText}>
            {pokemon.breedings.eggGroups.map(
              (eggGroup, index) =>
                `${capitalize(eggGroup)}${
                  index === pokemon.breedings.eggGroups.length - 1 ? '' : ', '
                }`,
            )}
          </Text>
        }
      />
      <WhiteSpace vertical />
      <InfoCard
        title={'Egg Cycle'}
        component={
          <Text style={styles.contentText}>
            {pokemon.breedings.eggCycles.value}
          </Text>
        }
      />
      <WhiteSpace vertical />
    </ScrollView>
  );
};

export default AboutScreen;

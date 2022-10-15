import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import InfoCard from '../../components/InfoCard/InfoCard';
import Title from '../../components/Title/Title';
import WhiteSpace from '../../components/WhiteSpace/WhiteSpace';
import capitalize from '../../utils/Capitalize';

const AboutScreen = ({pokemon}) => {
  console.log(pokemon);
  return (
    <ScrollView>
      <InfoCard title={'Species'} contentText={pokemon.species} />
      <WhiteSpace vertical />
      <InfoCard title={'Height'} contentText={pokemon.height} />
      <WhiteSpace vertical />
      <InfoCard title={'Weight'} contentText={pokemon.weight} />
      <WhiteSpace vertical />
      <InfoCard title={'Abilities'} contentText={pokemon.species} />
      <WhiteSpace vertical />
      <WhiteSpace vertical />
      <Title text={'Breeding'} />
      <WhiteSpace vertical />
      <InfoCard
        title={'Gender'}
        contentText={`M: ${pokemon.breedings.gender.male} | F: ${pokemon.breedings.gender.female}`}
      />
      <WhiteSpace vertical />
      <InfoCard
        title={'Egg Groups'}
        contentText={pokemon.breedings.eggGroups.map(
          (eggGroup, index) =>
            `${capitalize(eggGroup)}${
              index === pokemon.breedings.eggGroups.length - 1 ? '' : ', '
            }`,
        )}
      />
      <WhiteSpace vertical />
      <InfoCard title={'Egg Cycle'} contentText={pokemon.breedings.eggCycles.value} />
      <WhiteSpace vertical />
    </ScrollView>
  );
};

export default AboutScreen;

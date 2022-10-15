import React, {useEffect, useState} from 'react';
import {Text, ScrollView} from 'react-native';

import InfoCard from '../../components/InfoCard/InfoCard';
import Title from '../../components/Title/Title';
import WhiteSpace from '../../components/WhiteSpace/WhiteSpace';
import capitalize from '../../utils/Capitalize';

import styles from './StatsScreen.style';

const StatsScreen = ({pokemon}) => {
  const [totalPower, setTotalPower] = useState(0);

  const calculateTotalPower = () => {
    let sum = 0;

    Object.keys(pokemon.baseStats).forEach(function (key, index) {
      sum += Number(pokemon.baseStats[key][0]);
    });

    setTotalPower(sum);
  };

  useEffect(() => {
    calculateTotalPower();
  }, []);

  return (
    <ScrollView>
      <Title text={'Base Stats'} />
      <WhiteSpace vertical />
      <Text>Base stats about {capitalize(pokemon.name)}</Text>
      <WhiteSpace vertical />
      <WhiteSpace vertical />
      <InfoCard
        title={'HP'}
        component={
          <Text style={styles.contentText}>{pokemon.baseStats.hp[0]}</Text>
        }
      />
      <WhiteSpace vertical />
      <InfoCard
        title={'Attack'}
        component={
          <Text style={styles.contentText}>{pokemon.baseStats.attack[0]}</Text>
        }
      />
      <WhiteSpace vertical />
      <InfoCard
        title={'Defense'}
        component={
          <Text style={styles.contentText}>{pokemon.baseStats.defence[0]}</Text>
        }
      />
      <WhiteSpace vertical />
      <InfoCard
        title={'Sp. Attack'}
        component={
          <Text style={styles.contentText}>
            {pokemon.baseStats.specialAttack[0]}
          </Text>
        }
      />
      <WhiteSpace vertical />
      <InfoCard
        title={'Sp. Def'}
        component={
          <Text style={styles.contentText}>
            {pokemon.baseStats.specialDefence[0]}
          </Text>
        }
      />
      <WhiteSpace vertical />
      <InfoCard
        title={'Speed'}
        component={
          <Text style={styles.contentText}>{pokemon.baseStats.speed[0]}</Text>
        }
      />
      <WhiteSpace vertical />
      <InfoCard
        title={'Total'}
        component={<Text style={styles.contentText}>{totalPower}</Text>}
      />
      <WhiteSpace vertical />
    </ScrollView>
  );
};
export default StatsScreen;

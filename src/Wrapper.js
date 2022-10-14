import React from 'react';
import {Provider} from 'react-redux';

import pokemonStore from './config/stores/pokemonStore';
import Router from './Router';

const Wrapper = () => {
  return (
    <Provider store={pokemonStore}>
      <Router />
    </Provider>
  );
};

export default Wrapper;

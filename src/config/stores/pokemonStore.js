import {configureStore} from '@reduxjs/toolkit';

import pokemonSlice from '../slices/pokemonSlice';

export const pokemonStore = configureStore({
  reducer: {
    pokemons: pokemonSlice,
  },
});

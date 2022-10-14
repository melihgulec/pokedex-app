import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPokemons = createAsyncThunk('fetchPokemons', async () => {
  const response = await axios.get('https://pokemon-db-json.herokuapp.com/');
  return response.data;
});

const initialState = {
  data: null,
  loading: false,
  error: '',
};

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase(fetchPokemons.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });

    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchPokemons.rejected, (state, action) => {
      state.loading = false;
      state.error = 'Error while fetching data.';
    });
  },
});

export default pokemonSlice.reducer;

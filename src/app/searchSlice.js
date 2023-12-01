import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
  favorites: [],
  card: null,
  loading: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchMovie: (state, action) => {
      state.movies = [...action.payload];
    },
    addFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((el) => el.imdbID !== action.payload);
    },
    movieCard: (state, action) => {
      state.card = action.payload
    },
    loading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const { searchMovie, addFavorites, removeFavorite, movieCard, loading } = searchSlice.actions;
export default searchSlice.reducer;

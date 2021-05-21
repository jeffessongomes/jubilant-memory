import { createSlice } from '@reduxjs/toolkit';
import api from '../services/api';

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    isLoading: false,
    isError: false,
    search: '',
    page: 0,
    totalPage: [],
    items: [],
    favorites: [],
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setBooksLoading: (state) => {
      state.isError = false;
      state.isLoading = true;
    },
    setBooksSuccess: (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.items = action.payload;
    },
    setBooksError: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
    setTotalPage: (state, action) => {
      state.totalPage = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    setRemoveFavorite: (state, action) => {
      state.favorites = state.favorites.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  setBooksSuccess,
  setBooksError,
  setBooksLoading,
  setTotalPage,
  setSearch,
  setPage,
  setFavorites,
  setRemoveFavorite,
} = booksSlice.actions;

export const retrieveBooks = (page, search) => async (dispatch) => {
  dispatch(setBooksLoading());
  try {
    const { data } = await api.get(`volumes?startIndex=${page * 8}&maxResults=8&q=${search || 'Harry Potter'}`);

    if (data.totalItems === 0) {
      dispatch(setBooksError());
      return;
    }

    dispatch(setPage(page));
    dispatch(setTotalPage(Array.from({ length: (data.totalItems / 8) }, (v, i) => i)));
    dispatch(setBooksSuccess(data));
  } catch (err) {
    dispatch(setBooksError());
  }
};

export default booksSlice.reducer;

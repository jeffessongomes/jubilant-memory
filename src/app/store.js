import { configureStore } from '@reduxjs/toolkit';
import { booksSlice } from '../ducks/booksSlice';

export default configureStore({
  reducer: {
    books: booksSlice.reducer,
  },
});

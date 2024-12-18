import { configureStore } from '@reduxjs/toolkit';
import nameReducer from '../features/names/nameSlice';

const store = configureStore({
  reducer: {
    names: nameReducer,
  },
});

export default store;  

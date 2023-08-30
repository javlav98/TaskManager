// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    // You can add more reducers here if needed
  },
});

export default store;

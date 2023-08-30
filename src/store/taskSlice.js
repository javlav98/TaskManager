import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      return [...state, action.payload];
    },
    // Define other actions here
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;

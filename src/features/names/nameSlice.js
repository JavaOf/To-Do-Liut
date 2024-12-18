import { createSlice } from '@reduxjs/toolkit';

const savedNames = JSON.parse(localStorage.getItem('names')) || [];

const nameSlice = createSlice({
  name: 'names',
  initialState: savedNames,
  reducers: {
    addName: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('names', JSON.stringify(state)); 
    },
    removeName: (state, action) => {
      const index = state.findIndex(name => name.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem('names', JSON.stringify(state)); 
      }
    },
    editName: (state, action) => {
      const { id, newName } = action.payload;
      const index = state.findIndex(name => name.id === id);
      if (index !== -1) {
        state[index].name = newName;
        localStorage.setItem('names', JSON.stringify(state)); 
      }
    },
  },
});

export const { addName, removeName, editName } = nameSlice.actions;
export default nameSlice.reducer;

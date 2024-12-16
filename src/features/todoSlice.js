import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: JSON.parse(localStorage.getItem('todos')) || [],
  reducers: {
    addTodoTask: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state)); 
    },
    removeTodoTask: (state, action) => {
      const newState = state.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addTodoTask, removeTodoTask } = todoSlice.actions;
export default todoSlice.reducer;

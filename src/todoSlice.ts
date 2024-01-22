// todoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoState, TodoItem } from './types';

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: TodoItem = {
        id: state.todos.length + 1,
        text: action.payload,
        isComplete: false,
      };
      state.todos.push(newTodo);
    },
    completeTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.isComplete = !todo.isComplete;
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
  },
});

export const { addTodo, completeTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;

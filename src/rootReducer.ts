// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

const rootReducer = combineReducers({
  todos: todoReducer,
  // Add more reducers if needed
});

export default rootReducer;

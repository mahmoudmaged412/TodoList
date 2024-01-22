// TodoList.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { addTodo } from '../todoSlice';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos.todos);

  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };

  // Add other handlers as needed

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={handleAddTodo} />
      <Todo todos={todos} />
    </div>
  );
}

export default TodoList;

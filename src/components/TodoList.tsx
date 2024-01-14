import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

interface TodoItem {
  id: number;
  text: string;
  isComplete: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (todo: { text: string }) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos: TodoItem[] = [
      { id: Math.floor(Math.random() * 10000), text: todo.text, isComplete: false },
      ...todos,
    ];

    setTodos(newTodos);
  };

  const updateTodo = (todoId: number, newValue: { text: string }) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? { ...item, text: newValue.text } : item))
    );
  };

  const removeTodo = (id: number) => {
    const removedArr: TodoItem[] = todos.filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = (id: number) => {
    let updatedTodos: TodoItem[] = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        // Adjust the updateTodo function to match the expected type
        updateTodo={(id, value) => updateTodo(id, { text: value })}
      />
    </>
  );
}

export default TodoList;
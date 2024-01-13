import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

interface TodoProps {
  todos: { id: number; text: string; isComplete: boolean }[];
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  updateTodo: (id: number, value: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null as number | null,
    value: '',
  });

  const submitUpdate = (value: string) => {
    if (edit.id !== null) {
      updateTodo(edit.id, value);
      setEdit({
        id: null,
        value: '',
      });
    }
  };

  if (edit.id !== null) {
    // Update the following line to pass an object with the correct structure
    return <TodoForm edit={edit} onSubmit={(todo) => submitUpdate(todo.text)} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;
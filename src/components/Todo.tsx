// Todo.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTodo, removeTodo, updateTodo } from '../todoSlice'; // Adjust the import based on your reducer actions

interface TodoProps {
  todos: { id: number; text: string; isComplete: boolean }[];
}

const Todo: React.FC<TodoProps> = ({ todos }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
          <div onClick={() => dispatch(completeTodo(todo.id))}>{todo.text}</div>
          <div className='icons'>
            <button onClick={() => dispatch(removeTodo(todo.id))} className='delete-icon'>
              Remove
            </button>
            {/* Assuming there is an updateTodo action that requires the new text */}
            <button
              onClick={() => {
                const newText = prompt('Enter new text for the todo:', todo.text);
                if (newText !== null) {
                  dispatch(updateTodo({ id: todo.id, text: newText }));
                }
              }}
              className='edit-icon'
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;

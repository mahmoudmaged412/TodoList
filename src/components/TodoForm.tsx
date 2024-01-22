// TodoForm.tsx
import React, { useState } from 'react';

interface TodoFormProps {
  onSubmit: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() !== '') {
      onSubmit(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <input
        type='text'
        placeholder='Add a todo'
        value={input}
        onChange={handleChange}
        className='todo-input'
      />
      <button type='submit' className='todo-button'>
        Add todo
      </button>
    </form>
  );
};

export default TodoForm;

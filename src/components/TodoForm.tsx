import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react';

interface TodoFormProps {
  edit?: { id: number | null; value: string };
  onSubmit: (todo: { id: number; text: string }) => void;
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (props.onSubmit) {
      props.onSubmit({
        id: props.edit ? props.edit.id || Math.floor(Math.random() * 10000) : Math.floor(Math.random() * 10000),
        text: input,
      });
    }
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoTask } from '../features/todoSlice';

export default function TodoForm() {
  const [textName, setTextName] = useState('');
  const dispatch = useDispatch();
  
  useEffect(() => {
    const textName = localStorage.getItem('textName') || ''
    setTextName(textName)
  }, []);
   
  const handleClick = (e) => {
    e.preventDefault()
    if(textName.trim() === '') {
      alert('Вы не ввели имя')
    }else{
      dispatch(addTodoTask({textName}));
      localStorage.setItem('textName', textName)
    }
    setTextName('')
  };

  return (
     <div>
      <input 
        type="text" 
        value={textName} 
        onChange={(e) => setTextName(e.target.value)} 
        placeholder="Введите ваше имя" 
      />
      <button onClick={handleClick}>Добавить</button>
    </div>
  );
};